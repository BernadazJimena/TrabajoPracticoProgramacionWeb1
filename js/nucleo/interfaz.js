/* =====================================================================
   interfaz.js  -  HERRAMIENTAS DE INTERFAZ

   Funciones para crear elementos del DOM y mostrar mensajes y errores de
   formulario. Las usan todas las vistas (principio DRY del apunte).

   No usamos import/export (type="module") porque los módulos no funcionan al
   abrir el HTML con doble clic. Con scripts clásicos, lo que se declara acá
   queda disponible en los archivos que se cargan después.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. HERRAMIENTAS DEL DOM
   --------------------------------------------------------------------- */

// Une un número con su palabra en singular o plural: 1 día, 2 días.
const conPlural = (cantidad, singular, plural) => `${cantidad} ${cantidad === 1 ? singular : plural}`;

// Atajo de createElement. "texto" usa textContent, por lo que es seguro para
// datos escritos por la persona usuaria.
const crearElemento = (etiqueta, { clase = '', texto = '', atributos = {} } = {}) => {
  const elemento = document.createElement(etiqueta);
  if (clase) {
    elemento.className = clase;
  }
  if (texto !== '') {
    elemento.textContent = texto;
  }
  Object.entries(atributos).forEach(([nombre, valor]) => elemento.setAttribute(nombre, valor));
  return elemento;
};

// Crea el contenido escrito por nosotros en js/datos, que puede traer etiquetas.
const crearConHtml = (etiqueta, clase, html) => {
  const elemento = crearElemento(etiqueta, { clase });
  elemento.innerHTML = html;
  return elemento;
};

const vaciar = (elemento) => {
  elemento.textContent = '';
  return elemento;
};

// Barra de progreso accesible. Recuerda el último valor mostrado (en
// sessionStorage) y arranca desde ahí: la transición del CSS hace que se vea
// crecer si hubo avance y achicarse si se retrocedió.
const crearBarraProgreso = (porcentaje, etiqueta) => {
  const valor = Math.min(porcentaje, 100);
  const clave = `lingoweb_barra_${localStorage.getItem(CLAVES.SESION)}_${etiqueta}`;
  const anterior = sessionStorage.getItem(clave) ?? valor;
  const fondo = crearElemento('div', {
    clase: 'barra-progreso-bg',
    atributos: { role: 'progressbar', 'aria-label': etiqueta, 'aria-valuenow': valor, 'aria-valuemin': 0, 'aria-valuemax': 100 }
  });
  const relleno = crearElemento('div', { clase: 'barra-progreso-lleno' });

  relleno.style.width = `${anterior}%`;
  fondo.appendChild(relleno);
  sessionStorage.setItem(clave, valor);

  // Espera a que la barra esté en la página: sin un cambio visible, no hay animación.
  setTimeout(() => {
    relleno.style.width = `${valor}%`;
  }, 60);
  return fondo;
};

const iniciales = (nombre) => nombre.trim().split(/\s+/).slice(0, 2).map((parte) => parte.charAt(0).toUpperCase()).join('');

// Avatar de una persona: su foto si la cargó, o sus iniciales.
const crearAvatar = (usuario, clase = 'avatar-mini') => {
  const avatar = crearElemento('span', { clase, atributos: { 'aria-hidden': 'true' } });
  if (usuario.avatar) {
    avatar.appendChild(crearElemento('img', { clase: 'avatar-foto', atributos: { src: usuario.avatar, alt: '' } }));
  } else {
    avatar.textContent = iniciales(usuario.nombre);
  }
  return avatar;
};

// Bandera del curso. Son imágenes SVG y no emojis porque Windows muestra los
// emojis de banderas como letras, y la consigna pide mostrar la bandera.
const crearBandera = (curso, clase) =>
  crearElemento('img', { clase, atributos: { src: `${RAIZ}imagenes/banderas/${curso.id}.svg`, alt: `Bandera: ${curso.nombre}` } });

// Fila de los paneles laterales: ícono, título y detalle.
const crearFilaResumen = (icono, titulo, detalle) => {
  const fila = crearElemento('div', { clase: 'resumen-fila' });
  const textos = crearElemento('div');
  textos.append(
    crearElemento('div', { clase: 'resumen-titulo', texto: titulo }),
    crearElemento('div', { clase: 'resumen-detalle', texto: detalle })
  );
  fila.append(crearElemento('span', { clase: 'resumen-icono', texto: icono, atributos: { 'aria-hidden': 'true' } }), textos);
  return fila;
};

// Mensaje para los estados vacíos, con una acción para seguir y no quedar sin salida.
const crearEstadoVacio = (titulo, texto, enlace = null) => {
  const tarjeta = crearElemento('section', { clase: 'tarjeta estado-vacio' });
  tarjeta.appendChild(crearElemento('h2', { texto: titulo }));
  tarjeta.appendChild(crearElemento('p', { texto }));
  if (enlace) {
    tarjeta.appendChild(crearElemento('a', { clase: 'btn btn-primario', texto: enlace.texto, atributos: { href: enlace.href } }));
  }
  return tarjeta;
};

// Ventana de confirmación propia. Devuelve una Promesa que se resuelve con
// true o false, para poder usarla con await.
const confirmarAccion = (mensaje, textoAceptar, textoCancelar) => new Promise((resolve) => {
  const dialogo = crearElemento('dialog', { clase: 'dialogo-confirmacion' });
  const acciones = crearElemento('div', { clase: 'dialogo-acciones' });
  const aceptar = crearElemento('button', { clase: 'btn btn-primario', texto: textoAceptar, atributos: { type: 'button' } });
  const cancelar = crearElemento('button', { clase: 'btn btn-contorno', texto: textoCancelar, atributos: { type: 'button' } });

  const cerrar = (respuesta) => {
    dialogo.remove();
    resolve(respuesta);
  };

  aceptar.addEventListener('click', () => cerrar(true));
  cancelar.addEventListener('click', () => cerrar(false));
  dialogo.addEventListener('cancel', (evento) => {
    evento.preventDefault();
    cerrar(false);
  });

  acciones.append(cancelar, aceptar);
  dialogo.append(crearElemento('p', { texto: mensaje }), acciones);
  document.body.appendChild(dialogo);
  dialogo.showModal();
});


/* ---------------------------------------------------------------------
   2. VALIDACIÓN Y MENSAJES DE FORMULARIOS
   Los mensajes llevan un ícono y una palabra, para no depender del color.
   --------------------------------------------------------------------- */

const ICONOS_MENSAJE = Object.freeze({ exito: '✅', error: '⚠️', info: 'ℹ️' });

// Crea la zona donde aparecen los resultados. role="status" hace que los
// lectores de pantalla anuncien el mensaje cuando cambia.
const crearZonaMensaje = () => crearElemento('p', { clase: 'mensaje', atributos: { role: 'status', hidden: '' } });

const mostrarMensaje = (zona, texto, tipo = 'info') => {
  zona.textContent = `${ICONOS_MENSAJE[tipo]} ${texto}`;
  zona.className = `mensaje mensaje-${tipo}`;
  zona.hidden = false;
};

const ocultarMensaje = (zona) => {
  zona.hidden = true;
};

// Marca un campo como inválido y deja el motivo justo debajo.
const marcarError = (campo, texto) => {
  const id = `error-${campo.id}`;
  const error = crearElemento('p', { clase: 'error-campo', texto: `⚠️ ${texto}`, atributos: { id } });
  campo.classList.add('campo-invalido');
  campo.setAttribute('aria-invalid', 'true');
  campo.setAttribute('aria-describedby', id);
  campo.after(error);
};

const limpiarErrores = (formulario) => {
  formulario.querySelectorAll('.error-campo').forEach((error) => error.remove());
  formulario.querySelectorAll('.campo-invalido').forEach((campo) => {
    campo.classList.remove('campo-invalido');
    campo.removeAttribute('aria-invalid');
    campo.removeAttribute('aria-describedby');
  });
};

// Recibe una lista de { campo, mensaje }, marca cada error y lleva el foco al
// primero. Devuelve true si no hubo ninguno.
const aplicarErrores = (formulario, errores) => {
  limpiarErrores(formulario);
  errores.forEach(({ campo, mensaje }) => marcarError(campo, mensaje));
  if (errores.length > 0) {
    errores[0].campo.focus();
  }
  return errores.length === 0;
};
