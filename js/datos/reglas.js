/* =====================================================================
   reglas.js  -  REGLAS DEL JUEGO Y LIGAS

   Números que definen premios y penalizaciones, y las ligas del ranking.
   Solo declara datos fijos: no ejecuta nada.
   ===================================================================== */


/* ---------------------------------------------------------------------
   REGLAS DEL JUEGO
   Números que definen cuánto premia y penaliza la app. Tenerlos juntos
   permite ajustar la dificultad sin buscar valores sueltos por el código.
   --------------------------------------------------------------------- */
const REGLAS = Object.freeze({
  OPORTUNIDADES_POR_LECCION: 3,
  XP_LECCION: 20,            // XP por completar una lección por primera vez
  XP_BONUS_SIN_ERRORES: 10,  // XP extra si no hubo ninguna respuesta incorrecta
  XP_REPASO: 5,              // XP por repetir una lección ya completada
  XP_PENALIZACION_ERROR: 2,  // XP que se resta por cada respuesta incorrecta
  GEMAS_LECCION: 5,          // Gemas por completar una lección por primera vez
  GEMAS_INICIALES: 25,       // Gemas con las que arranca una cuenta nueva
  META_DIARIA_INICIAL: 50,   // XP por día
  XP_NIVEL_LEYENDA: 5000     // Objetivo del Ranking Histórico
});

// Opciones que se ofrecen en el selector de meta diaria (Rachas/Tienda).
const METAS_DIARIAS = Object.freeze([20, 50, 100]);


/* ---------------------------------------------------------------------
   LIGAS
   "ascienden" y "descienden" dicen cuántos puestos suben o bajan al cerrar
   la semana. Diamante no tiene participantes a propósito: la consigna pide
   mostrar un mensaje informativo cuando una liga está vacía.
   --------------------------------------------------------------------- */
const LIGAS = Object.freeze([
  { id: 'bronce', nombre: 'Liga Bronce', icono: '🥉', ascienden: 3, descienden: 0 },
  { id: 'plata', nombre: 'Liga Plata', icono: '🥈', ascienden: 3, descienden: 2 },
  { id: 'oro', nombre: 'Liga Oro', icono: '🥇', ascienden: 2, descienden: 2 },
  { id: 'diamante', nombre: 'Liga Diamante', icono: '💎', ascienden: 0, descienden: 2 }
]);
