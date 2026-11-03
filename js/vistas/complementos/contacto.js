/* =====================================================================
   contacto.js  -  SOPORTE Y CONTACTO

   Valida el reporte y lo guarda en localStorage (no se envía a ningún lado).
   Del archivo adjunto solo se guarda el nombre y el peso: una captura o un
   video no entrarían en localStorage.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. CONSTANTES Y ELEMENTOS DE LA PÁGINA
   --------------------------------------------------------------------- */

const TAMANIO_MAXIMO_ADJUNTO = 5 * 1024 * 1024;
const TIPOS_DE_ADJUNTO = Object.freeze(['image/png', 'image/jpeg', 'image/webp', 'video/mp4', 'video/webm']);

const formularioContacto = document.querySelector('.formulario-contacto');
const campoCorreo = document.querySelector('#correo');
const campoTipo = document.querySelector('#tipo-problema');
const campoAsunto = document.querySelector('#asunto');
const campoMensaje = document.querySelector('#mensaje');
const campoAdjunto = document.querySelector('#archivo-adjunto');
const zonaMensajeContacto = crearZonaMensaje();
const seccionReportes = crearElemento('section', { clase: 'tarjeta mt-md' });


/* ---------------------------------------------------------------------
   2. VALIDACIÓN
   --------------------------------------------------------------------- */

const validarAdjunto = () => {
  const [archivo] = campoAdjunto.files;
  if (!archivo) {
    return null; // Es opcional
  }
  if (!TIPOS_DE_ADJUNTO.includes(archivo.type)) {
    return { campo: campoAdjunto, mensaje: 'El archivo debe ser PNG, JPG, WEBP, MP4 o WEBM.' };
  }
  if (archivo.size > TAMANIO_MAXIMO_ADJUNTO) {
    return { campo: campoAdjunto, mensaje: 'El archivo no puede superar los 5 MB.' };
  }
  return null;
};

const validarFormulario = () => {
  const errores = [];
  if (!EMAIL_REGEX.test(campoCorreo.value.trim())) {
    errores.push({ campo: campoCorreo, mensaje: 'Ingresa un correo válido, por ejemplo tu@correo.com.' });
  }
  if (campoTipo.value === '') {
    errores.push({ campo: campoTipo, mensaje: 'Selecciona una categoría.' });
  }
  if (campoAsunto.value.trim().length < 5) {
    errores.push({ campo: campoAsunto, mensaje: 'Escribe un asunto de al menos 5 caracteres.' });
  }
  if (campoMensaje.value.trim().length < 10) {
    errores.push({ campo: campoMensaje, mensaje: 'Describe el problema con al menos 10 caracteres.' });
  }
  const errorAdjunto = validarAdjunto();
  return errorAdjunto ? [...errores, errorAdjunto] : errores;
};


/* ---------------------------------------------------------------------
   3. REPORTES GUARDADOS
   --------------------------------------------------------------------- */

const crearReporte = () => {
  const [archivo] = campoAdjunto.files;
  return {
    id: `reporte_${Date.now()}`,
    usuarioId: obtenerUsuarioActivo()?.id ?? null,
    correo: campoCorreo.value.trim(),
    tipo: campoTipo.options[campoTipo.selectedIndex].textContent,
    asunto: campoAsunto.value.trim(),
    mensaje: campoMensaje.value.trim(),
    adjunto: archivo ? archivo.name : null,
    fecha: fechaHoy()
  };
};

// Lista los reportes de la cuenta activa, sin mezclar los de otras personas.
const renderizarReportes = () => {
  const usuario = obtenerUsuarioActivo();
  const propios = usuario ? leerColeccion(CLAVES.REPORTES).filter((r) => r.usuarioId === usuario.id) : [];

  seccionReportes.hidden = propios.length === 0;
  vaciar(seccionReportes).appendChild(crearElemento('h3', { texto: 'Tus reportes enviados' }));

  const lista = crearElemento('ul', { clase: 'lista-reportes' });
  [...propios].reverse().forEach(({ asunto, tipo, fecha, adjunto }) => {
    const detalle = `${asunto} · ${tipo} · ${mostrarFecha(fecha)}${adjunto ? ` · 📎 ${adjunto}` : ''}`;
    lista.appendChild(crearElemento('li', { texto: detalle }));
  });
  seccionReportes.appendChild(lista);
};


/* ---------------------------------------------------------------------
   4. ENVÍO DEL FORMULARIO
   --------------------------------------------------------------------- */

const completarCorreo = () => {
  campoCorreo.value = obtenerUsuarioActivo()?.email ?? '';
};

const manejarEnvio = (evento) => {
  evento.preventDefault();
  ocultarMensaje(zonaMensajeContacto);

  if (!aplicarErrores(formularioContacto, validarFormulario())) {
    return;
  }

  const guardado = guardarColeccion(CLAVES.REPORTES, [...leerColeccion(CLAVES.REPORTES), crearReporte()]);
  if (!guardado) {
    mostrarMensaje(zonaMensajeContacto, 'No pudimos guardar tu reporte. El almacenamiento del navegador está lleno.', 'error');
    return;
  }

  formularioContacto.reset();
  completarCorreo();
  renderizarReportes();
  mostrarMensaje(zonaMensajeContacto, '¡Recibimos tu reporte! Te responderemos a la brevedad.', 'exito');
};


/* ---------------------------------------------------------------------
   5. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

formularioContacto.noValidate = true;
formularioContacto.after(zonaMensajeContacto, seccionReportes);
completarCorreo();
renderizarReportes();
formularioContacto.addEventListener('submit', manejarEnvio);
