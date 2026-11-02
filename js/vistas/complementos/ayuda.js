/* =====================================================================
   ayuda.js  -  PREGUNTAS FRECUENTES
   Archivo: js/vistas/complementos/ayuda.js

   Arma la lista desde datos.js y hace funcionar el acordeón: en el HTML
   original los botones no hacían nada y todas las respuestas estaban abiertas.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. ACORDEÓN
   --------------------------------------------------------------------- */

// Abre o cierra una pregunta. La clase .activo ya estaba definida en ayuda.css.
const alternarPregunta = (item, boton) => {
  const abierta = item.classList.toggle('activo');
  boton.setAttribute('aria-expanded', String(abierta));
};


/* ---------------------------------------------------------------------
   2. LISTA DE PREGUNTAS
   --------------------------------------------------------------------- */

const crearPregunta = ({ pregunta, respuesta }, indice) => {
  const item = crearElemento('article', { clase: 'faq-item' });
  const idRespuesta = `respuesta-${indice}`;
  const boton = crearElemento('button', {
    clase: 'faq-pregunta',
    texto: pregunta,
    atributos: { type: 'button', 'aria-expanded': 'false', 'aria-controls': idRespuesta }
  });
  const contenido = crearElemento('div', { clase: 'faq-respuesta', atributos: { id: idRespuesta } });

  boton.appendChild(crearElemento('span', { clase: 'faq-icono', texto: '+', atributos: { 'aria-hidden': 'true' } }));
  boton.addEventListener('click', () => alternarPregunta(item, boton));
  contenido.appendChild(crearElemento('p', { texto: respuesta }));
  item.append(boton, contenido);
  return item;
};

// Quita las preguntas escritas en el HTML y pone las de datos.js.
const renderizarPreguntas = () => {
  const contenedor = document.querySelector('.faq-contenedor');
  contenedor.querySelectorAll('.faq-item').forEach((item) => item.remove());
  contenedor.append(...PREGUNTAS_FRECUENTES.map(crearPregunta));
};


/* ---------------------------------------------------------------------
   3. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

renderizarPreguntas();
