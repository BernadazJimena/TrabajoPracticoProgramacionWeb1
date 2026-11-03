/* =====================================================================
   tienda.js  -  CATÁLOGO DE LA TIENDA

   Categorías y artículos que se pueden canjear.
   Solo declara datos fijos: no ejecuta nada.
   ===================================================================== */


/* ---------------------------------------------------------------------
   TIENDA
   "tipo: consumible" se guarda como una cantidad en el inventario y se gasta
   al usarlo. "tipo: insignia" se compra una sola vez y se ve en el perfil.
   --------------------------------------------------------------------- */
const CATEGORIAS_TIENDA = Object.freeze([
  { id: 'todas', nombre: 'Todos los elementos' },
  { id: 'potenciadores', nombre: 'Potenciadores' },
  { id: 'insignias', nombre: 'Insignias' }
]);

const ARTICULOS_TIENDA = Object.freeze([
  { id: 'protector', categoria: 'potenciadores', tipo: 'consumible', icono: '🛡️', nombre: 'Protector de racha', descripcion: 'Conserva tu racha si te pierdes un día de práctica.', precio: 30 },
  { id: 'vida_extra', categoria: 'potenciadores', tipo: 'consumible', icono: '❤️', nombre: 'Oportunidad extra', descripcion: 'Suma una oportunidad al comenzar tu próxima lección.', precio: 15 },
  { id: 'doble_xp', categoria: 'potenciadores', tipo: 'consumible', icono: '⚡', nombre: 'Experiencia doble', descripcion: 'Duplica la experiencia de la próxima lección que termines.', precio: 40 },
  { id: 'insignia_viajero', categoria: 'insignias', tipo: 'insignia', icono: '🧳', nombre: 'Insignia Viajero', descripcion: 'Muestra en tu perfil que aprendes para recorrer el mundo.', precio: 20 },
  { id: 'insignia_estudioso', categoria: 'insignias', tipo: 'insignia', icono: '🎓', nombre: 'Insignia Estudioso', descripcion: 'Un reconocimiento para quienes no faltan a su práctica.', precio: 35 },
  { id: 'insignia_leyenda', categoria: 'insignias', tipo: 'insignia', icono: '👑', nombre: 'Insignia Leyenda', descripcion: 'La insignia más exclusiva de LingoWeb.', precio: 100 }
]);
