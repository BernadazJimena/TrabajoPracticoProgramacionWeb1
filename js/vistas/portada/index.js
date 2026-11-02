/* =====================================================================
   index.js  -  PORTADA
   Archivo: js/vistas/portada/index.js

   Muestra los idiomas a partir de los datos y adapta las acciones según
   haya o no una sesión iniciada.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. IDIOMAS DISPONIBLES
   --------------------------------------------------------------------- */

// Crea la tarjeta de un curso.
const crearTarjetaIdioma = (curso) => {
  const tarjeta = crearElemento('article', { clase: 'tarjeta tarjeta-idioma' });
  tarjeta.append(
    crearBandera(curso, 'bandera-tarjeta'),
    crearElemento('h3', { texto: curso.nombre }),
    crearElemento('p', { texto: curso.descripcion })
  );
  return tarjeta;
};

// Reemplaza las tarjetas de ejemplo por una por cada curso de datos.js.
const renderizarIdiomas = () => {
  const grilla = document.querySelector('.idiomas-grid');
  vaciar(grilla).append(...CURSOS.map(crearTarjetaIdioma));
};


/* ---------------------------------------------------------------------
   2. ACCIONES SEGÚN LA SESIÓN
   --------------------------------------------------------------------- */

// Si ya hay una sesión, no tiene sentido invitar a registrarse: se ofrece
// volver directamente al panel.
const adaptarAcciones = () => {
  const usuario = obtenerUsuarioActivo();
  if (!usuario) {
    return;
  }
  const panel = 'mis_cursos/mis_cursos.html';
  const acciones = document.querySelector('.portada-acciones');
  vaciar(acciones).appendChild(crearElemento('a', { clase: 'btn btn-primario', texto: `Continuar como ${usuario.nombre}`, atributos: { href: panel } }));

  const ingresar = document.querySelector('.btn-ingresar');
  ingresar.textContent = t('volverPanel');
  ingresar.setAttribute('href', panel);
};


/* ---------------------------------------------------------------------
   3. BOTONES DE DESCARGA
   --------------------------------------------------------------------- */

// Las aplicaciones no existen: es una demostración. Se informa en lugar de
// dejar un enlace que no hace nada, como pide la consigna.
const activarBotonesDescarga = () => {
  const zona = crearZonaMensaje();
  document.querySelector('.descarga-contenedor').after(zona);

  document.querySelectorAll('.btn-tienda').forEach((boton) => {
    boton.addEventListener('click', (evento) => {
      evento.preventDefault();
      mostrarMensaje(zona, 'La aplicación móvil todavía no está disponible. Puedes usar LingoWeb desde este sitio.', 'info');
    });
  });
};


/* ---------------------------------------------------------------------
   4. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

renderizarIdiomas();
adaptarAcciones();
activarBotonesDescarga();
