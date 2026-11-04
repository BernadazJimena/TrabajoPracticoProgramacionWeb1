/* =====================================================================
   demostracion.js  -  DATOS DE DEMOSTRACIÓN

   Cuentas, valoraciones y comentarios iniciales.
   Se copian a localStorage la primera vez que se abre el sitio.
   ===================================================================== */


/* ---------------------------------------------------------------------
   CUENTAS DE DEMOSTRACIÓN
   Se copian a localStorage la primera vez que se abre el sitio (ver
   inicializarBaseDeDatos en js/nucleo/base_de_datos.js).
   - Juan y María son cuentas para iniciar sesión. Contraseña: Demo1234
   - Las que tienen bot: true solo aparecen en el ranking, no pueden ingresar.
   "completadas" indica qué lecciones ya hizo cada una, por id de lección.
   Son datos ficticios: el proyecto no usa credenciales reales.
   --------------------------------------------------------------------- */
const CUENTAS_DEMO = Object.freeze([
  {
    id: 'demo_juan', nombre: 'Juan Pérez', usuario: 'juanperez', email: 'juan.perez@demo.lingoweb.test',
    password: 'Demo1234', fechaAlta: '2025-03-10', liga: 'plata', xp: 1500, xpSemanal: 320, gemas: 80, racha: 5,
    completadas: { ingles: [1, 2], aleman: [1] },
    historial: [
      { temporada: 1, liga: 'bronce', xp: 350, puesto: 5 },
      { temporada: 2, liga: 'plata', xp: 1800, puesto: 2 },
      { temporada: 3, liga: 'oro', xp: 3500, puesto: 1 }
    ]
  },
  {
    id: 'demo_maria', nombre: 'María García', usuario: 'mariag', email: 'maria.garcia@demo.lingoweb.test',
    password: 'Demo1234', fechaAlta: '2025-01-22', liga: 'oro', xp: 3450, xpSemanal: 610, gemas: 140, racha: 12,
    completadas: { ingles: [1, 2, 3, 4, 5, 6, 7], chino: [1, 2] },
    historial: [
      { temporada: 1, liga: 'plata', xp: 1200, puesto: 3 },
      { temporada: 2, liga: 'oro', xp: 2600, puesto: 4 }
    ]
  },
  { id: 'bot_alex', nombre: 'Alex Romero', usuario: 'alex99', bot: true, liga: 'plata', xp: 1200, xpSemanal: 410 },
  { id: 'bot_sofia', nombre: 'Sofía Díaz', usuario: 'sofi_d', bot: true, liga: 'plata', xp: 980, xpSemanal: 365 },
  { id: 'bot_tomas', nombre: 'Tomás Ruiz', usuario: 'tomasr', bot: true, liga: 'plata', xp: 1100, xpSemanal: 240 },
  { id: 'bot_lucia', nombre: 'Lucía Sosa', usuario: 'lucia.s', bot: true, liga: 'plata', xp: 870, xpSemanal: 150 },
  { id: 'bot_mateo', nombre: 'Mateo Vera', usuario: 'mateov', bot: true, liga: 'plata', xp: 760, xpSemanal: 90 },
  { id: 'bot_valen', nombre: 'Valentina Paz', usuario: 'valenpaz', bot: true, liga: 'oro', xp: 3900, xpSemanal: 720 },
  { id: 'bot_bruno', nombre: 'Bruno Ledesma', usuario: 'brunol', bot: true, liga: 'oro', xp: 3100, xpSemanal: 540 },
  { id: 'bot_cami', nombre: 'Camila Rey', usuario: 'cami_rey', bot: true, liga: 'oro', xp: 2800, xpSemanal: 300 },
  { id: 'bot_nico', nombre: 'Nicolás Gil', usuario: 'nicogil', bot: true, liga: 'bronce', xp: 420, xpSemanal: 180 },
  { id: 'bot_mica', nombre: 'Micaela Luna', usuario: 'mica.luna', bot: true, liga: 'bronce', xp: 300, xpSemanal: 130 },
  { id: 'bot_fede', nombre: 'Federico Sanz', usuario: 'fedesanz', bot: true, liga: 'bronce', xp: 210, xpSemanal: 70 },
  { id: 'bot_agus', nombre: 'Agustina Mora', usuario: 'agusmora', bot: true, liga: 'bronce', xp: 120, xpSemanal: 40 }
]);

// Opiniones con las que arrancan los cursos, para que la sección no aparezca vacía.
const VALORACIONES_DEMO = Object.freeze([
  { curso: 'ingles', usuarioId: 'demo_maria', estrellas: 5 },
  { curso: 'ingles', usuarioId: 'bot_alex', estrellas: 4 },
  { curso: 'aleman', usuarioId: 'demo_juan', estrellas: 4 },
  { curso: 'chino', usuarioId: 'demo_maria', estrellas: 5 }
]);

const COMENTARIOS_DEMO = Object.freeze([
  { curso: 'ingles', usuarioId: 'demo_maria', texto: 'Las explicaciones son cortas y se entienden muy bien.', fecha: '2026-05-04' },
  { curso: 'ingles', usuarioId: 'bot_alex', texto: 'Me sirvió para repasar los tiempos verbales.', fecha: '2026-06-18' },
  { curso: 'aleman', usuarioId: 'demo_juan', texto: 'Buen curso para empezar desde cero.', fecha: '2026-06-02' },
  { curso: 'chino', usuarioId: 'demo_maria', texto: 'Tener el pinyin junto a los caracteres ayuda mucho.', fecha: '2026-07-11' }
]);
