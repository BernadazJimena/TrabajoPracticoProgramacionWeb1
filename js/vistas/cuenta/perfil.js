/* =====================================================================
   perfil.js  -  PERFIL, FOTO, PREFERENCIAS Y CIERRE DE SESIÓN
   Archivo: js/vistas/cuenta/perfil.js

   Muestra los datos de la cuenta activa y permite modificarlos. Solo confirma
   el guardado si realmente se escribió en localStorage.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. CONSTANTES Y ELEMENTOS DE LA PÁGINA
   --------------------------------------------------------------------- */

// La consigna limita las imágenes a 400 KB por archivo. Además, localStorage
// guarda unos 5 MB: fotos grandes lo llenarían enseguida.
const TAMANIO_MAXIMO_FOTO = 400 * 1024;
const TIPOS_DE_FOTO = Object.freeze(['image/png', 'image/jpeg', 'image/webp']);

const panelLateral = document.querySelector('.sidebar-perfil');
const seccionAjustes = document.querySelector('.ajustes-perfil');
const [tarjetaDatos, tarjetaPassword] = document.querySelectorAll('.tarjeta-ajustes');
const selectorIdioma = document.querySelector('#language');
const formularioPassword = tarjetaPassword.querySelector('form');
const campoPasswordActual = document.querySelector('#current_password');
const campoPasswordNueva = document.querySelector('#new_password');
const campoPasswordConfirmacion = document.querySelector('#confirm_password');
const botonGuardar = seccionAjustes.querySelector('button.btn-primario');
const botonCerrarSesion = seccionAjustes.querySelector('a.btn-contorno');
const zonaMensajePerfil = crearZonaMensaje();

let campoNombre;
let campoUsuario;
let campoEmail;


/* ---------------------------------------------------------------------
   2. PANEL LATERAL: AVATAR Y DATOS
   --------------------------------------------------------------------- */

const crearListaDatos = (usuario) => {
  const lista = crearElemento('ul', { clase: 'perfil-datos' });
  [
    `📧 ${usuario.email}`,
    `⚡ ${usuario.xp} XP`,
    `🔥 Racha de ${conPlural(usuario.racha, 'día', 'días')}`,
    `💎 ${conPlural(usuario.gemas, 'gema', 'gemas')}`
  ].forEach((dato) => lista.appendChild(crearElemento('li', { texto: dato })));
  return lista;
};

// Input de archivo oculto más una etiqueta con forma de botón: es la manera de
// poder darle estilo, ya que el input de archivo no se deja modificar.
const crearAccionesFoto = (usuario) => {
  const acciones = crearElemento('div', { clase: 'acciones-avatar' });
  const entrada = crearElemento('input', {
    clase: 'input-archivo-oculto',
    atributos: { type: 'file', id: 'foto-perfil', accept: TIPOS_DE_FOTO.join(',') }
  });
  entrada.addEventListener('change', manejarSeleccionFoto);

  acciones.append(entrada, crearElemento('label', { clase: 'btn btn-secundario', texto: usuario.avatar ? 'Cambiar foto' : 'Subir foto', atributos: { for: 'foto-perfil' } }));

  if (usuario.avatar) {
    const quitar = crearElemento('button', { clase: 'btn btn-contorno', texto: 'Quitar foto', atributos: { type: 'button' } });
    quitar.addEventListener('click', quitarFoto);
    acciones.appendChild(quitar);
  }
  return acciones;
};

const renderizarPanelLateral = () => {
  const usuario = obtenerUsuarioActivo();
  vaciar(panelLateral).append(
    crearAvatar(usuario, 'avatar'),
    crearElemento('h1', { clase: 'nombre-perfil', texto: usuario.nombre }),
    crearElemento('p', { clase: 'usuario-perfil', texto: `@${usuario.usuario}` }),
    crearElemento('p', { clase: 'miembro-desde', texto: `Miembro desde ${mostrarFecha(usuario.fechaAlta, { month: 'long', year: 'numeric' })}` }),
    crearAccionesFoto(usuario),
    crearListaDatos(usuario)
  );
};


/* ---------------------------------------------------------------------
   3. FOTO DE PERFIL
   --------------------------------------------------------------------- */

// Devuelve el problema del archivo, o null si se puede usar.
const validarFoto = (archivo) => {
  if (!TIPOS_DE_FOTO.includes(archivo.type)) {
    return 'La foto debe ser PNG, JPG o WEBP.';
  }
  if (archivo.size > TAMANIO_MAXIMO_FOTO) {
    return `La foto pesa ${Math.round(archivo.size / 1024)} KB y el máximo es 400 KB.`;
  }
  return null;
};

const guardarFoto = (usuario, foto) => {
  usuario.avatar = foto;
  if (!guardarUsuario(usuario)) {
    mostrarMensaje(zonaMensajePerfil, 'No pudimos guardar la foto: el almacenamiento del navegador está lleno.', 'error');
    return;
  }
  renderizarPanelLateral();
  mostrarMensaje(zonaMensajePerfil, foto ? 'Actualizamos tu foto de perfil.' : 'Quitamos tu foto de perfil.', 'exito');
};

// localStorage solo guarda texto. FileReader convierte la imagen en un texto
// base64 (data URL), que también sirve directamente como src de una <img>.
const manejarSeleccionFoto = (evento) => {
  const [archivo] = evento.target.files;
  if (!archivo) {
    return;
  }
  const problema = validarFoto(archivo);
  if (problema) {
    mostrarMensaje(zonaMensajePerfil, problema, 'error');
    evento.target.value = '';
    return;
  }
  const lector = new FileReader();
  lector.addEventListener('load', () => guardarFoto(obtenerUsuarioActivo(), lector.result));
  lector.addEventListener('error', () => mostrarMensaje(zonaMensajePerfil, 'No pudimos leer ese archivo. Prueba con otra imagen.', 'error'));
  lector.readAsDataURL(archivo);
};

const quitarFoto = () => guardarFoto(obtenerUsuarioActivo(), null);


/* ---------------------------------------------------------------------
   4. FORMULARIO DE DATOS PERSONALES
   --------------------------------------------------------------------- */

const crearCampo = (id, etiqueta, tipo, valor, autocompletar) => {
  const grupo = crearElemento('div', { clase: 'grupo-form' });
  const campo = crearElemento('input', { clase: 'input-form', atributos: { type: tipo, id, autocomplete: autocompletar } });
  campo.value = valor;
  grupo.append(crearElemento('label', { clase: 'etiqueta-form', texto: etiqueta, atributos: { for: id } }), campo);
  return { grupo, campo };
};

// Reemplaza el correo fijo del HTML por campos editables con los datos actuales.
const renderizarDatosPersonales = () => {
  const usuario = obtenerUsuarioActivo();
  const nombre = crearCampo('perfil-nombre', 'Nombre completo:', 'text', usuario.nombre, 'name');
  const nick = crearCampo('perfil-usuario', 'Nombre de usuario:', 'text', usuario.usuario, 'username');
  const correo = crearCampo('perfil-email', 'Correo electrónico:', 'email', usuario.email, 'email');
  const grupoIdioma = selectorIdioma.closest('.grupo-form');

  campoNombre = nombre.campo;
  campoUsuario = nick.campo;
  campoEmail = correo.campo;
  selectorIdioma.value = usuario.idioma ?? 'es';

  vaciar(tarjetaDatos).append(crearElemento('h3', { texto: t('infoPersonal') }), nombre.grupo, nick.grupo, correo.grupo, grupoIdioma);
};


/* ---------------------------------------------------------------------
   5. LOGROS E INSIGNIAS
   --------------------------------------------------------------------- */

const crearTarjetaLogro = ({ icono, titulo, descripcion, obtenido }) => {
  const logro = crearElemento('article', { clase: `logro ${obtenido ? 'logro-obtenido' : 'logro-pendiente'}` });
  logro.append(
    crearElemento('strong', { texto: `${obtenido ? icono : '🔒'} ${titulo}` }),
    crearElemento('p', { texto: `${obtenido ? 'Obtenido' : 'Pendiente'} · ${descripcion}` })
  );
  return logro;
};

const crearTarjetaInsignia = (insignia) => {
  const elemento = crearElemento('article', { clase: 'logro logro-obtenido' });
  elemento.append(crearElemento('strong', { texto: `${insignia.icono} ${insignia.nombre}` }), crearElemento('p', { texto: 'Canjeada en la tienda' }));
  return elemento;
};

const renderizarLogros = () => {
  const usuario = obtenerUsuarioActivo();
  const seccion = crearElemento('section', { clase: 'tarjeta tarjeta-ajustes' });
  const grilla = crearElemento('div', { clase: 'grilla-logros' });
  const insignias = ARTICULOS_TIENDA.filter((articulo) => usuario.insignias.includes(articulo.id));

  grilla.append(...calcularLogros(usuario).map(crearTarjetaLogro), ...insignias.map(crearTarjetaInsignia));
  seccion.append(crearElemento('h3', { texto: t('logros') }), grilla);
  tarjetaPassword.after(seccion);
};


/* ---------------------------------------------------------------------
   6. VALIDACIÓN
   --------------------------------------------------------------------- */

const validarDatosPersonales = (usuario) => {
  const errores = [];
  const { value: nick } = campoUsuario;
  const { value: correo } = campoEmail;

  if (campoNombre.value.trim().length < 3) {
    errores.push({ campo: campoNombre, mensaje: 'Ingresa tu nombre completo (al menos 3 letras).' });
  }
  if (!USUARIO_REGEX.test(nick.trim())) {
    errores.push({ campo: campoUsuario, mensaje: 'Usa de 3 a 20 letras, números, puntos o guiones bajos, sin espacios.' });
  } else if (estaOcupado('usuario', nick, usuario.id)) {
    errores.push({ campo: campoUsuario, mensaje: 'Ese nombre de usuario ya está ocupado.' });
  }
  if (!EMAIL_REGEX.test(correo.trim())) {
    errores.push({ campo: campoEmail, mensaje: 'Ingresa un correo válido, por ejemplo tu@correo.com.' });
  } else if (estaOcupado('email', correo, usuario.id)) {
    errores.push({ campo: campoEmail, mensaje: 'Ya existe otra cuenta con ese correo.' });
  }
  return errores;
};

const quiereCambiarPassword = () =>
  [campoPasswordActual, campoPasswordNueva, campoPasswordConfirmacion].some((campo) => campo.value !== '');

// La contraseña solo se valida si se completó alguno de sus tres campos.
const validarCambioPassword = (usuario) => {
  const errores = [];
  if (!quiereCambiarPassword()) {
    return errores;
  }
  if (campoPasswordActual.value !== usuario.password) {
    errores.push({ campo: campoPasswordActual, mensaje: 'La contraseña actual no es correcta.' });
  }
  if (!PASSWORD_REGEX.test(campoPasswordNueva.value)) {
    errores.push({ campo: campoPasswordNueva, mensaje: MENSAJE_PASSWORD });
  }
  if (campoPasswordConfirmacion.value !== campoPasswordNueva.value) {
    errores.push({ campo: campoPasswordConfirmacion, mensaje: 'Las contraseñas no coinciden.' });
  }
  return errores;
};


/* ---------------------------------------------------------------------
   7. GUARDAR CAMBIOS
   --------------------------------------------------------------------- */

const guardarCambios = () => {
  const usuario = obtenerUsuarioActivo();
  const errores = [...validarDatosPersonales(usuario), ...validarCambioPassword(usuario)];

  if (!aplicarErrores(seccionAjustes, errores)) {
    mostrarMensaje(zonaMensajePerfil, 'No guardamos los cambios. Revisa los campos marcados.', 'error');
    return;
  }

  const actualizado = {
    ...usuario,
    nombre: campoNombre.value.trim(),
    usuario: campoUsuario.value.trim(),
    email: campoEmail.value.trim(),
    password: quiereCambiarPassword() ? campoPasswordNueva.value : usuario.password
  };

  if (!guardarUsuario(actualizado)) {
    mostrarMensaje(zonaMensajePerfil, 'No pudimos guardar los cambios. El almacenamiento del navegador está lleno.', 'error');
    return;
  }

  formularioPassword.reset();
  renderizarPanelLateral();
  renderizarNavbar();
  mostrarMensaje(zonaMensajePerfil, 'Guardamos los cambios de tu perfil.', 'exito');
};

// Enter dentro del formulario de contraseña guarda, en lugar de recargar la página.
const manejarEnvioPassword = (evento) => {
  evento.preventDefault();
  guardarCambios();
};


/* ---------------------------------------------------------------------
   8. IDIOMA DE LA INTERFAZ
   Se guarda en cuenta en cuanto se elige, sin esperar a Guardar cambios, y se
   recarga la página para aplicarlo. Por eso queda conservado al volver a ingresar.
   --------------------------------------------------------------------- */

const cambiarIdioma = () => {
  const usuario = obtenerUsuarioActivo();
  usuario.idioma = selectorIdioma.value;
  if (!guardarUsuario(usuario)) {
    mostrarMensaje(zonaMensajePerfil, 'No pudimos guardar el idioma elegido.', 'error');
    return;
  }
  dejarAviso('Actualizamos el idioma de la interfaz.');
  window.location.reload();
};

// Muestra la confirmación que quedó guardada antes de recargar.
const mostrarAvisoPendiente = () => {
  const aviso = tomarAviso();
  if (aviso) {
    mostrarMensaje(zonaMensajePerfil, aviso, 'exito');
  }
};


/* ---------------------------------------------------------------------
   9. CERRAR SESIÓN
   --------------------------------------------------------------------- */

// Quita la identificación activa. La cuenta y su avance quedan guardados.
const manejarCierreDeSesion = (evento) => {
  evento.preventDefault();
  cerrarSesion();
  dejarAviso('Cerraste sesión. Tus avances quedaron guardados.');
  window.location.href = '../login/login.html';
};


/* ---------------------------------------------------------------------
   10. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

if (exigirSesion()) {
  renderizarPanelLateral();
  renderizarDatosPersonales();
  renderizarLogros();
  botonGuardar.closest('.flex').before(zonaMensajePerfil);
  mostrarAvisoPendiente();

  botonGuardar.addEventListener('click', guardarCambios);
  formularioPassword.addEventListener('submit', manejarEnvioPassword);
  selectorIdioma.addEventListener('change', cambiarIdioma);
  botonCerrarSesion.addEventListener('click', manejarCierreDeSesion);
}
