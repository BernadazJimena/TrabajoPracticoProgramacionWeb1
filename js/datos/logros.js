/* =====================================================================
   logros.js  -  LOGROS

   Lista de logros, cada uno con su condición.
   ===================================================================== */


/* ---------------------------------------------------------------------
   LOGROS
   Cada logro trae su propia condición: una función que recibe el resumen de
   actividad de la cuenta (lo arma resumirActividad en js/nucleo/progreso.js) y devuelve
   true o false. Así los logros siempre se calculan a partir del avance real.
   --------------------------------------------------------------------- */
const LOGROS = Object.freeze([
  { id: 'primera_leccion', icono: '🌱', titulo: 'Primer paso', descripcion: 'Completa tu primera lección.', cumple: (r) => r.leccionesCompletadas >= 1 },
  { id: 'cinco_lecciones', icono: '📚', titulo: 'Constancia', descripcion: 'Completa 5 lecciones.', cumple: (r) => r.leccionesCompletadas >= 5 },
  { id: 'racha_tres', icono: '🔥', titulo: 'En racha', descripcion: 'Alcanza una racha de 3 días.', cumple: (r) => r.racha >= 3 },
  { id: 'mil_xp', icono: '⚡', titulo: 'Mil puntos', descripcion: 'Acumula 1000 XP.', cumple: (r) => r.xp >= 1000 },
  { id: 'nivel_completo', icono: '🎖️', titulo: 'Nivel superado', descripcion: 'Completa todas las lecciones de un nivel.', cumple: (r) => r.nivelesCompletos >= 1 },
  { id: 'curso_completo', icono: '🏅', titulo: 'Curso terminado', descripcion: 'Completa todos los niveles de un curso.', cumple: (r) => r.cursosCompletos >= 1 },
  { id: 'opinion', icono: '💬', titulo: 'Tu voz cuenta', descripcion: 'Valora un curso o deja un comentario.', cumple: (r) => r.opiniones >= 1 }
]);
