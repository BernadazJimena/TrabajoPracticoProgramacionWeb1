/* =====================================================================
   datos.js  -  CATÁLOGO DE LA APLICACIÓN

   ===================================================================== */


/* ---------------------------------------------------------------------
   1. REGLAS DEL JUEGO
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
   2. LIGAS
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


/* ---------------------------------------------------------------------
   3. TIENDA
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


/* ---------------------------------------------------------------------
   4. LOGROS
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


/* ---------------------------------------------------------------------
   5. CUENTAS DE DEMOSTRACIÓN
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


/* ---------------------------------------------------------------------
   6. PREGUNTAS FRECUENTES (vista Ayuda)
   --------------------------------------------------------------------- */
const PREGUNTAS_FRECUENTES = Object.freeze([
  {
    pregunta: "¿Puedo empezar por un nivel más avanzado?",
    respuesta: "Sí. Cada idioma tiene niveles progresivos: al terminar uno se abre el siguiente. Si ya tienes conocimientos, entra al mapa del curso, elige el nivel y selecciona \"Empezar por este nivel\"."
  },
  {
    pregunta: "¿Qué es LingoWeb?",
    respuesta: "LingoWeb es una plataforma gratuita, divertida y efectiva para aprender idiomas. Actualmente ofrecemos cursos de Inglés, Alemán, Chino Mandarín, Francés, Italiano y Portugués, con un enfoque dinámico y basado en lecciones prácticas."
  },
  {
    pregunta: "¿LingoWeb es realmente gratis?",
    respuesta: "¡Sí! Aprender idiomas en LingoWeb es completamente gratis, rápido y lo puedes hacer desde cualquier lugar. Creemos que la educación debe ser accesible para todos."
  },
  {
    pregunta: "¿Qué son los Puntos de Experiencia (XP)?",
    respuesta: "Ganas XP (⚡) al completar lecciones y se restan 2 XP por cada respuesta incorrecta. Cuanta más experiencia sumes en la semana, más subirás en la Clasificación de tu liga."
  },
  {
    pregunta: "¿Qué es la Racha (🔥)?",
    respuesta: "Tu racha muestra cuántos días seguidos has completado al menos una lección. Si pasas un día sin practicar, ¡tu racha volverá a cero! Convierte el aprendizaje en un hábito para mantenerla intacta."
  },
  {
    pregunta: "¿Para qué sirven la Clasificación y el Histórico?",
    respuesta: "La Clasificación te permite competir con otras cuentas de tu liga según la XP ganada en la semana. El Histórico muestra tus temporadas anteriores y tus mejores resultados."
  },
  {
    pregunta: "¿Puedo aprender varios idiomas al mismo tiempo?",
    respuesta: "¡Claro que sí! En la sección \"Cursos\" puedes elegir qué idioma avanzar y aprender los idiomas que quieras a tu propio ritmo y en paralelo."
  },
  {
    pregunta: "Olvidé mi contraseña, ¿qué hago?",
    respuesta: "Puedes ir a la página de inicio de sesión y hacer clic en \"¿Olvidaste tu contraseña?\". Allí simularemos el envío de un enlace para recuperarla, ya que LingoWeb es una demostración."
  },
  {
    pregunta: "¿Cómo cambio el idioma de la interfaz?",
    respuesta: "Ingresa a tu Perfil y, en \"Ajustes de cuenta\", elige el idioma de la interfaz. La opción se aplica en toda la web y se conserva al volver a ingresar. El contenido de los cursos se mantiene en español."
  },
  {
    pregunta: "¿Qué son las gemas y la tienda?",
    respuesta: "Ganas gemas (💎) al completar lecciones por primera vez y puedes canjearlas en Rachas/Tienda por protectores de racha, oportunidades extra, experiencia doble e insignias para tu perfil."
  }
]);


/* ---------------------------------------------------------------------
   7. CURSOS
   Estructura: curso > niveles y unidades > lecciones > ejercicios.
   Las unidades compartidas entre idiomas salen de js/datos/temas.js.
   Cada unidad tiene título y descripción; su estado se calcula con el avance.
   - niveles: los que ofrece el curso, en orden. Cada unidad indica a cuál
     pertenece. Para sumar un nivel (por ejemplo B2) alcanza con agregarlo a
     "niveles" y cargar sus unidades: la lógica y las vistas no cambian.
   - id de lección: número correlativo dentro del curso. Es el que va en la
     dirección: leccion.html?curso=ingles&leccion=3
   - teoria: la explicación que se muestra antes de los ejercicios.
   - opciones: exactamente una debe tener correcta: true.
   - acierto / error: el mensaje que ve la persona al comprobar su respuesta.
   --------------------------------------------------------------------- */
const CURSOS = Object.freeze([
  {
    id: "ingles",
    nombre: "Inglés",
    nombreCompleto: "Inglés desde Español",
    codigoIdioma: "en",
    descripcion: "El idioma más hablado a nivel mundial, ideal para viajar y negocios.",
    niveles: [
      {
        id: "a1",
        nombre: "A1",
        titulo: "Principiante"
      },
      {
        id: "a2",
        nombre: "A2",
        titulo: "Elemental"
      },
      {
        id: "b1",
        nombre: "B1",
        titulo: "Intermedio"
      }
    ],
    unidades: [
      {
        id: 1,
        titulo: "Saludos y presentaciones",
        descripcion: "Saluda y presenta quién eres.",
        nivel: "a1",
        lecciones: [
          {
            id: 1,
            titulo: "Saludos y presentaciones",
            descripcion: "Aprende <span lang=\"en\">Hello</span>, <span lang=\"en\">Good morning</span> y <span lang=\"en\">My name is</span>",
            consejo: "<span lang=\"en\">Hi</span> es informal y <span lang=\"en\">Hello</span> sirve para cualquier situación. <span lang=\"en\">Good morning</span> se usa por la mañana, <span lang=\"en\">Good afternoon</span> por la tarde y <span lang=\"en\">Good evening</span> por la noche. <span lang=\"en\">Good night</span> solo se usa para despedirse.",
            teoria: {
              titulo: "Aprende a saludar y presentarte",
              html: "<p>Para saludar, puedes decir <strong lang=\"en\">Hello</strong>. Para presentarte, puedes decir <strong lang=\"en\">My name is Ana</strong>.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">Hello / Hi</span> <span>→ hola</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">Good morning</span> <span>→ buenos días</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">My name is Ana</span> <span>→ me llamo Ana</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">Nice to meet you</span> <span>→ encantado de conocerte</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Qué significa <span lang=\"en\">Hello</span>?",
                opciones: [
                  {
                    texto: "Adiós",
                    correcta: false
                  },
                  {
                    texto: "Hola",
                    correcta: true
                  },
                  {
                    texto: "Gracias",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">Hello</span> significa «hola».",
                error: "Todavía no. <span lang=\"en\">Hello</span> significa «hola». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Cómo se dice «buenos días»?",
                opciones: [
                  {
                    texto: "Good night",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "Good morning",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "Good evening",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">Good morning</span> significa «buenos días».",
                error: "Todavía no. <span lang=\"en\">Good night</span> se usa para despedirse de noche y <span lang=\"en\">Good evening</span> para saludar de noche. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «me llamo Ana»?",
                opciones: [
                  {
                    texto: "My name is Ana",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "My name are Ana",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "Me name is Ana",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">My name is Ana</span> significa «me llamo Ana».",
                error: "Todavía no. Se dice <span lang=\"en\">My name is</span>: con <span lang=\"en\">my name</span> se usa <span lang=\"en\">is</span>. Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 2,
        titulo: "Tiempos verbales",
        descripcion: "Usa los verbos básicos en presente y pasado.",
        nivel: "a1",
        lecciones: [
          {
            id: 2,
            titulo: "Verbo to be",
            descripcion: "Aprende <span lang=\"en\">I am</span>, <span lang=\"en\">you are</span> y <span lang=\"en\">she is</span>",
            consejo: "<span lang=\"en\">I am Juan Perez</span> significa «yo soy Juan Perez». <span lang=\"en\">am</span> se usa cuando se habla de uno mismo (<span lang=\"en\">I</span>), <span lang=\"en\">are</span> con <span lang=\"en\">you, we, they</span> e <span lang=\"en\">is</span> con <span lang=\"en\">she, he, it</span>.",
            teoria: {
              titulo: "Aprende a presentarte",
              html: "<p>Para presentarte, puedes decir <strong lang=\"en\">I am Juan</strong>.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I am</span> <span>→ yo soy</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">She is / He is</span> <span>→ ella es / él es</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">We are / They are</span> <span>→ nosotros somos / ellos son</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «yo soy Juan»?",
                opciones: [
                  {
                    texto: "I is",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "I am",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "I are",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I am Juan</span> significa «yo soy Juan».",
                error: "Todavía no. <span lang=\"en\">I am</span> significa «yo soy». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Cómo se dice «ella es profesora»?",
                opciones: [
                  {
                    texto: "She am a teacher",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "She are a teacher",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "She is a teacher",
                    idioma: "en",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"en\">she</span> se usa <span lang=\"en\">is</span>: <span lang=\"en\">She is a teacher</span>.",
                error: "Todavía no. Con <span lang=\"en\">she, he, it</span> se usa <span lang=\"en\">is</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Cómo se dice «nosotros somos amigos»?",
                opciones: [
                  {
                    texto: "We are friends",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "We is friends",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "We am friends",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">We are friends</span> significa «nosotros somos amigos».",
                error: "Todavía no. Con <span lang=\"en\">we</span> se usa <span lang=\"en\">are</span>. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 3,
            titulo: "Presente simple y continuo",
            descripcion: "Aprende <span lang=\"en\">I work</span> y <span lang=\"en\">I am working</span>",
            consejo: "En presente simple, con <span lang=\"en\">he, she, it</span> el verbo lleva -s: <span lang=\"en\">She works</span>. Para lo que pasa ahora mismo se usa el presente continuo: <span lang=\"en\">am, is, are</span> + verbo con -ing, por ejemplo <span lang=\"en\">I am working</span>.",
            teoria: {
              titulo: "Aprende los presentes",
              html: "<p>Para hablar de hábitos usa el presente simple: <strong lang=\"en\">I work</strong>. Para lo que pasa ahora usa el presente continuo: <strong lang=\"en\">I am working</strong>.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I work</span> <span>→ yo trabajo</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">She works</span> <span>→ ella trabaja</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I am working</span> <span>→ estoy trabajando (ahora)</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «yo juego al fútbol»?",
                opciones: [
                  {
                    texto: "I plays football",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "I play football",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "I playing football",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I play football</span> significa «yo juego al fútbol».",
                error: "Todavía no. Con <span lang=\"en\">I</span> el verbo no lleva -s: <span lang=\"en\">I play</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Completa la frase",
                consigna: "Elige la palabra que falta.",
                pregunta: "<span lang=\"en\">She ___ English.</span> (Ella habla inglés.)",
                opciones: [
                  {
                    texto: "speak",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "speaking",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "speaks",
                    idioma: "en",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"en\">she</span> el verbo lleva -s: <span lang=\"en\">She speaks English</span>.",
                error: "Todavía no. Con <span lang=\"en\">he, she, it</span> el verbo lleva -s. Puedes elegir otra opción."
              },
              {
                titulo: "¿Qué pasa ahora?",
                consigna: "Elige la forma correcta para una acción que está ocurriendo en este momento.",
                pregunta: "<span lang=\"en\">Look! He ___ a book now.</span> (¡Mira! Él está leyendo un libro ahora.)",
                opciones: [
                  {
                    texto: "reads",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "is reading",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "are reading",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Para algo que pasa ahora se usa el presente continuo: <span lang=\"en\">He is reading a book</span>.",
                error: "Todavía no. Para lo que pasa ahora usa <span lang=\"en\">am, is, are</span> + verbo con -ing. Con <span lang=\"en\">he</span> se usa <span lang=\"en\">is</span>. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 4,
            titulo: "Pasado simple y continuo",
            descripcion: "Cuenta lo que hiciste y lo que estabas haciendo",
            consejo: "En pasado simple, los verbos regulares terminan en -ed: <span lang=\"en\">work → worked</span>. Algunos son irregulares: <span lang=\"en\">go → went</span>. El pasado continuo se forma con <span lang=\"en\">was / were</span> + verbo con -ing: <span lang=\"en\">I was reading</span>.",
            teoria: {
              titulo: "Aprende los pasados",
              html: "<p>Para una acción terminada usa el pasado simple: <strong lang=\"en\">I worked</strong>. Para una acción que estaba en curso usa el pasado continuo: <strong lang=\"en\">I was working</strong>.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I worked</span> <span>→ yo trabajé</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">She went</span> <span>→ ella fue</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I was reading</span> <span>→ yo estaba leyendo</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">They were playing</span> <span>→ ellos estaban jugando</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «yo trabajé ayer»?",
                opciones: [
                  {
                    texto: "I work yesterday",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "I worked yesterday",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "I working yesterday",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I worked yesterday</span> significa «yo trabajé ayer».",
                error: "Todavía no. Para el pasado de un verbo regular se agrega -ed: <span lang=\"en\">worked</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Completa la frase",
                consigna: "Elige la palabra que falta.",
                pregunta: "<span lang=\"en\">She ___ to the park yesterday.</span> (Ella fue al parque ayer.)",
                opciones: [
                  {
                    texto: "go",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "goes",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "went",
                    idioma: "en",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">went</span> es el pasado de <span lang=\"en\">go</span>.",
                error: "Todavía no. <span lang=\"en\">go</span> es irregular: su pasado es <span lang=\"en\">went</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Cómo se dice «yo estaba leyendo»?",
                opciones: [
                  {
                    texto: "I was reading",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "I were reading",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "I am read",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I was reading</span> significa «yo estaba leyendo».",
                error: "Todavía no. Con <span lang=\"en\">I</span> se usa <span lang=\"en\">was</span> + verbo con -ing. Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        titulo: "Vida cotidiana",
        descripcion: "Habla de los números, la hora y tu familia.",
        nivel: "a1",
        lecciones: [
          {
            id: 5,
            titulo: "Números y la hora",
            descripcion: "Cuenta y di qué hora es",
            consejo: "Para preguntar la hora se dice <span lang=\"en\">What time is it?</span>. Para responder se usa <span lang=\"en\">It's</span> + la hora; si es una hora en punto se agrega <span lang=\"en\">o'clock</span>: <span lang=\"en\">It's three o'clock</span>.",
            teoria: {
              titulo: "Aprende los números y la hora",
              html: "<p>Los primeros números son <strong lang=\"en\">one, two, three</strong>. Para decir la hora puedes usar <strong lang=\"en\">It's … o'clock</strong>.</p><ul class=\"lista-vocabulario lista-numeros\"> <li><strong lang=\"en\">one</strong> <span>uno</span></li> <li><strong lang=\"en\">two</strong> <span>dos</span></li> <li><strong lang=\"en\">three</strong> <span>tres</span></li> <li><strong lang=\"en\">four</strong> <span>cuatro</span></li> <li><strong lang=\"en\">five</strong> <span>cinco</span></li> <li><strong lang=\"en\">six</strong> <span>seis</span></li> <li><strong lang=\"en\">seven</strong> <span>siete</span></li> <li><strong lang=\"en\">eight</strong> <span>ocho</span></li> <li><strong lang=\"en\">nine</strong> <span>nueve</span></li> <li><strong lang=\"en\">ten</strong> <span>diez</span></li> </ul><p class=\"ejemplo-ingles\"><span lang=\"en\">twenty</span> <span>→ veinte</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">What time is it?</span> <span>→ ¿Qué hora es?</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">It's three o'clock</span> <span>→ son las tres en punto</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Qué número es <span lang=\"en\">five</span>?",
                opciones: [
                  {
                    texto: "Cuatro",
                    correcta: false
                  },
                  {
                    texto: "Cinco",
                    correcta: true
                  },
                  {
                    texto: "Seis",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">five</span> significa «cinco».",
                error: "Todavía no. <span lang=\"en\">five</span> significa «cinco». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Cómo se dice «diez»?",
                opciones: [
                  {
                    texto: "ten",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "two",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "twelve",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! «Diez» se dice <span lang=\"en\">ten</span>.",
                error: "Todavía no. <span lang=\"en\">two</span> es «dos» y <span lang=\"en\">twelve</span> es «doce». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se pregunta la hora?",
                opciones: [
                  {
                    texto: "How old are you?",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "What time is it?",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "What is your name?",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">What time is it?</span> significa «¿qué hora es?».",
                error: "Todavía no. <span lang=\"en\">How old are you?</span> pregunta la edad y <span lang=\"en\">What is your name?</span> pregunta el nombre. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 6,
            titulo: "Mi familia",
            descripcion: "Presenta a los miembros de tu familia",
            consejo: "Para decir «mi» se usa <span lang=\"en\">my</span>: <span lang=\"en\">my mother</span>, <span lang=\"en\">my brother</span>. Para presentar a alguien se dice <span lang=\"en\">This is my…</span>, que significa «este / esta es mi…».",
            teoria: {
              titulo: "Aprende los miembros de la familia",
              html: "<p>Para presentar a tu familia, puedes decir <strong lang=\"en\">This is my mother</strong>.</p><ul class=\"lista-vocabulario\"> <li><strong lang=\"en\">mother</strong> <span>madre</span></li> <li><strong lang=\"en\">father</strong> <span>padre</span></li> <li><strong lang=\"en\">brother</strong> <span>hermano</span></li> <li><strong lang=\"en\">sister</strong> <span>hermana</span></li> <li><strong lang=\"en\">grandmother</strong> <span>abuela</span></li> <li><strong lang=\"en\">grandfather</strong> <span>abuelo</span></li> </ul><p class=\"ejemplo-ingles\"><span lang=\"en\">This is my mother</span> <span>→ esta es mi madre</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I have two brothers</span> <span>→ tengo dos hermanos</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Qué significa <span lang=\"en\">mother</span>?",
                opciones: [
                  {
                    texto: "Padre",
                    correcta: false
                  },
                  {
                    texto: "Madre",
                    correcta: true
                  },
                  {
                    texto: "Hermana",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">mother</span> significa «madre».",
                error: "Todavía no. <span lang=\"en\">mother</span> significa «madre». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Cómo se dice «hermano»?",
                opciones: [
                  {
                    texto: "sister",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "brother",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "father",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! «Hermano» se dice <span lang=\"en\">brother</span>.",
                error: "Todavía no. <span lang=\"en\">sister</span> es «hermana» y <span lang=\"en\">father</span> es «padre». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «esta es mi hermana»?",
                opciones: [
                  {
                    texto: "This is my sister",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "This are my sister",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "These is my sister",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">This is my sister</span> significa «esta es mi hermana».",
                error: "Todavía no. Para una persona se usa <span lang=\"en\">This is</span>. Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 4,
        titulo: "Repaso",
        descripcion: "Combina lo aprendido en una conversación.",
        nivel: "a1",
        lecciones: [
          {
            id: 7,
            titulo: "Diálogo de repaso",
            descripcion: "Combina lo aprendido en una conversación",
            consejo: "En este repaso combinas lo que aprendiste: saludos, el verbo <span lang=\"en\">to be</span>, el presente y el pasado. Lee el diálogo con atención antes de responder.",
            teoria: {
              titulo: "Lee el diálogo",
              html: "<p>Tom y Ana se conocen. Lee lo que dicen y fíjate en la traducción.</p><dl class=\"dialogo-ingles\"> <dt>Tom</dt> <dd><span lang=\"en\">Hello! My name is Tom.</span> <span>→ ¡Hola! Me llamo Tom.</span></dd> <dt>Ana</dt> <dd><span lang=\"en\">Hi, Tom! I am Ana. Nice to meet you.</span> <span>→ ¡Hola, Tom! Soy Ana. Encantada de conocerte.</span></dd> <dt>Tom</dt> <dd><span lang=\"en\">Where do you live?</span> <span>→ ¿Dónde vives?</span></dd> <dt>Ana</dt> <dd><span lang=\"en\">I live in Madrid. I work in a school.</span> <span>→ Vivo en Madrid. Trabajo en una escuela.</span></dd> </dl>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Elige la respuesta adecuada.",
                pregunta: "Tom dice <span lang=\"en\">Hello! My name is Tom.</span> ¿Qué responde Ana?",
                opciones: [
                  {
                    texto: "Hi, Tom! I am Ana.",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "Goodbye, Tom.",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "Good night, Tom.",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Ana saluda y se presenta: <span lang=\"en\">Hi, Tom! I am Ana.</span>",
                error: "Todavía no. Cuando alguien se presenta, saludas y dices tu nombre. Puedes elegir otra opción."
              },
              {
                titulo: "Completa la frase",
                consigna: "Elige la palabra que falta.",
                pregunta: "<span lang=\"en\">Nice to ___ you.</span> (Encantada de conocerte.)",
                opciones: [
                  {
                    texto: "name",
                    idioma: "en",
                    correcta: false
                  },
                  {
                    texto: "meet",
                    idioma: "en",
                    correcta: true
                  },
                  {
                    texto: "work",
                    idioma: "en",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">Nice to meet you</span> significa «encantada de conocerte».",
                error: "Todavía no. <span lang=\"en\">meet</span> significa «conocer». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"en\">Where do you live?</span>",
                opciones: [
                  {
                    texto: "¿Dónde trabajas?",
                    correcta: false
                  },
                  {
                    texto: "¿Cómo te llamas?",
                    correcta: false
                  },
                  {
                    texto: "¿Dónde vives?",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">Where do you live?</span> significa «¿dónde vives?».",
                error: "Todavía no. <span lang=\"en\">live</span> significa «vivir». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 5,
        titulo: "Vida diaria",
        descripcion: "Desenvuélvete en un restaurante y en la calle.",
        nivel: "a2",
        lecciones: [
          {
            id: 8,
            titulo: "En el restaurante",
            descripcion: "Pide comida y pregunta precios",
            consejo: "<span lang=\"en\">I would like</span> es una forma amable de pedir. Suele abreviarse <span lang=\"en\">I'd like</span>.",
            teoria: {
              titulo: "Aprende a pedir con cortesía",
              html: "<p>Estas frases te sirven para pedir algo en un restaurante o una tienda.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I would like a coffee</span> <span>→ quisiera un café</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">Can I have the bill, please?</span> <span>→ ¿Me trae la cuenta, por favor?</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">How much is it?</span> <span>→ ¿Cuánto cuesta?</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «quisiera un café»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">I would like a coffee</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">How much is it?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">Can I have the bill, please?</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I would like a coffee</span> significa «quisiera un café».",
                error: "Todavía no. <span lang=\"en\">I would like a coffee</span> significa «quisiera un café». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"en\">Can I have the bill, please?</span>?",
                opciones: [
                  {
                    texto: "¿Me trae la cuenta, por favor?",
                    correcta: true
                  },
                  {
                    texto: "quisiera un café",
                    correcta: false
                  },
                  {
                    texto: "¿Cuánto cuesta?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">Can I have the bill, please?</span> significa «¿Me trae la cuenta, por favor?».",
                error: "Todavía no. <span lang=\"en\">Can I have the bill, please?</span> significa «¿Me trae la cuenta, por favor?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Cuánto cuesta?»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">How much is it?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">Can I have the bill, please?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">I would like a coffee</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">How much is it?</span> significa «¿Cuánto cuesta?».",
                error: "Todavía no. <span lang=\"en\">How much is it?</span> significa «¿Cuánto cuesta?». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 9,
            titulo: "Cómo llegar",
            descripcion: "Pregunta y entiende direcciones",
            consejo: "<span lang=\"en\">Turn</span> significa «doblar» y <span lang=\"en\">straight ahead</span> significa «derecho».",
            teoria: {
              titulo: "Aprende a orientarte",
              html: "<p>Con estas frases puedes preguntar dónde queda un lugar y seguir indicaciones.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">Where is the station?</span> <span>→ ¿Dónde está la estación?</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">Turn left</span> <span>→ dobla a la izquierda</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">Go straight ahead</span> <span>→ sigue derecho</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Dónde está la estación?»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">Turn left</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">Where is the station?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">Go straight ahead</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">Where is the station?</span> significa «¿Dónde está la estación?».",
                error: "Todavía no. <span lang=\"en\">Where is the station?</span> significa «¿Dónde está la estación?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"en\">Turn left</span>?",
                opciones: [
                  {
                    texto: "sigue derecho",
                    correcta: false
                  },
                  {
                    texto: "dobla a la izquierda",
                    correcta: true
                  },
                  {
                    texto: "¿Dónde está la estación?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">Turn left</span> significa «dobla a la izquierda».",
                error: "Todavía no. <span lang=\"en\">Turn left</span> significa «dobla a la izquierda». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «sigue derecho»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">Where is the station?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">Go straight ahead</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">Turn left</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">Go straight ahead</span> significa «sigue derecho».",
                error: "Todavía no. <span lang=\"en\">Go straight ahead</span> significa «sigue derecho». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 6,
        titulo: "Planes y comparaciones",
        descripcion: "Cuenta tus planes y compara personas y cosas.",
        nivel: "a2",
        lecciones: [
          {
            id: 10,
            titulo: "Planes futuros",
            descripcion: "Cuenta lo que vas a hacer",
            consejo: "<span lang=\"en\">Going to</span> se usa para planes ya decididos, y va después del verbo <span lang=\"en\">to be</span>.",
            teoria: {
              titulo: "Aprende a hablar del futuro",
              html: "<p>Estas frases te permiten contar tus planes.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I am going to travel</span> <span>→ voy a viajar</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">She is going to study</span> <span>→ ella va a estudiar</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">We are going to eat</span> <span>→ vamos a comer</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «voy a viajar»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">We are going to eat</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">She is going to study</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">I am going to travel</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I am going to travel</span> significa «voy a viajar».",
                error: "Todavía no. <span lang=\"en\">I am going to travel</span> significa «voy a viajar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"en\">She is going to study</span>?",
                opciones: [
                  {
                    texto: "voy a viajar",
                    correcta: false
                  },
                  {
                    texto: "vamos a comer",
                    correcta: false
                  },
                  {
                    texto: "ella va a estudiar",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">She is going to study</span> significa «ella va a estudiar».",
                error: "Todavía no. <span lang=\"en\">She is going to study</span> significa «ella va a estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «vamos a comer»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">She is going to study</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">I am going to travel</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">We are going to eat</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">We are going to eat</span> significa «vamos a comer».",
                error: "Todavía no. <span lang=\"en\">We are going to eat</span> significa «vamos a comer». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 11,
            titulo: "Comparaciones",
            descripcion: "Compara personas y cosas",
            consejo: "Las palabras cortas suman -er (<span lang=\"en\">bigger</span>). Las largas usan <span lang=\"en\">more</span> (<span lang=\"en\">more expensive</span>).",
            teoria: {
              titulo: "Aprende a comparar",
              html: "<p>Estas estructuras sirven para decir qué es más grande, más caro o mejor.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">bigger than</span> <span>→ más grande que</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">more expensive than</span> <span>→ más caro que</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">the best</span> <span>→ el mejor</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «más grande que»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">bigger than</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">the best</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">more expensive than</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">bigger than</span> significa «más grande que».",
                error: "Todavía no. <span lang=\"en\">bigger than</span> significa «más grande que». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"en\">more expensive than</span>?",
                opciones: [
                  {
                    texto: "más caro que",
                    correcta: true
                  },
                  {
                    texto: "más grande que",
                    correcta: false
                  },
                  {
                    texto: "el mejor",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">more expensive than</span> significa «más caro que».",
                error: "Todavía no. <span lang=\"en\">more expensive than</span> significa «más caro que». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «el mejor»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">the best</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">more expensive than</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">bigger than</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">the best</span> significa «el mejor».",
                error: "Todavía no. <span lang=\"en\">the best</span> significa «el mejor». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 7,
        titulo: "Opiniones y consejos",
        descripcion: "Expresa lo que piensas y da consejos.",
        nivel: "b1",
        lecciones: [
          {
            id: 12,
            titulo: "Dar tu opinión",
            descripcion: "Expresa lo que piensas",
            consejo: "<span lang=\"en\">I think that</span> presenta una opinión personal. En el habla diaria, <span lang=\"en\">that</span> muchas veces se omite.",
            teoria: {
              titulo: "Aprende a opinar",
              html: "<p>Con estas frases puedes dar tu opinión y decir si estás de acuerdo.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I think that it is good</span> <span>→ creo que está bien</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">In my opinion</span> <span>→ en mi opinión</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I agree</span> <span>→ estoy de acuerdo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «creo que está bien»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">In my opinion</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">I think that it is good</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">I agree</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I think that it is good</span> significa «creo que está bien».",
                error: "Todavía no. <span lang=\"en\">I think that it is good</span> significa «creo que está bien». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"en\">In my opinion</span>?",
                opciones: [
                  {
                    texto: "estoy de acuerdo",
                    correcta: false
                  },
                  {
                    texto: "en mi opinión",
                    correcta: true
                  },
                  {
                    texto: "creo que está bien",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">In my opinion</span> significa «en mi opinión».",
                error: "Todavía no. <span lang=\"en\">In my opinion</span> significa «en mi opinión». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy de acuerdo»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">I think that it is good</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">I agree</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">In my opinion</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I agree</span> significa «estoy de acuerdo».",
                error: "Todavía no. <span lang=\"en\">I agree</span> significa «estoy de acuerdo». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 13,
            titulo: "Consejos y deseos",
            descripcion: "Aconseja y habla de lo que te gustaría",
            consejo: "<span lang=\"en\">Should</span> da consejos. Después de <span lang=\"en\">if</span> + pasado se usa <span lang=\"en\">would</span> para imaginar situaciones.",
            teoria: {
              titulo: "Aprende a aconsejar",
              html: "<p>Estas frases sirven para dar consejos y hablar de situaciones posibles.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">You should study</span> <span>→ deberías estudiar</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">If I had time, I would travel</span> <span>→ si tuviera tiempo, viajaría</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I would like to learn</span> <span>→ me gustaría aprender</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «deberías estudiar»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">I would like to learn</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">If I had time, I would travel</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">You should study</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">You should study</span> significa «deberías estudiar».",
                error: "Todavía no. <span lang=\"en\">You should study</span> significa «deberías estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"en\">If I had time, I would travel</span>?",
                opciones: [
                  {
                    texto: "deberías estudiar",
                    correcta: false
                  },
                  {
                    texto: "me gustaría aprender",
                    correcta: false
                  },
                  {
                    texto: "si tuviera tiempo, viajaría",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">If I had time, I would travel</span> significa «si tuviera tiempo, viajaría».",
                error: "Todavía no. <span lang=\"en\">If I had time, I would travel</span> significa «si tuviera tiempo, viajaría». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «me gustaría aprender»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">If I had time, I would travel</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">You should study</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">I would like to learn</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I would like to learn</span> significa «me gustaría aprender».",
                error: "Todavía no. <span lang=\"en\">I would like to learn</span> significa «me gustaría aprender». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 8,
        titulo: "Experiencias y trabajo",
        descripcion: "Habla de tu vida, tus estudios y tu trabajo.",
        nivel: "b1",
        lecciones: [
          {
            id: 14,
            titulo: "Experiencias",
            descripcion: "Cuenta lo que hiciste en tu vida",
            consejo: "<span lang=\"en\">Have you ever...?</span> pregunta si alguien hizo algo alguna vez, sin decir cuándo.",
            teoria: {
              titulo: "Aprende a contar experiencias",
              html: "<p>Estas frases te permiten hablar de lo que hiciste, o nunca hiciste, en tu vida.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">Have you ever been to London?</span> <span>→ ¿Alguna vez fuiste a Londres?</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I have visited Rome</span> <span>→ visité Roma</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I have never eaten that</span> <span>→ nunca comí eso</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Alguna vez fuiste a Londres?»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">Have you ever been to London?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">I have never eaten that</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">I have visited Rome</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">Have you ever been to London?</span> significa «¿Alguna vez fuiste a Londres?».",
                error: "Todavía no. <span lang=\"en\">Have you ever been to London?</span> significa «¿Alguna vez fuiste a Londres?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"en\">I have visited Rome</span>?",
                opciones: [
                  {
                    texto: "visité Roma",
                    correcta: true
                  },
                  {
                    texto: "¿Alguna vez fuiste a Londres?",
                    correcta: false
                  },
                  {
                    texto: "nunca comí eso",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I have visited Rome</span> significa «visité Roma».",
                error: "Todavía no. <span lang=\"en\">I have visited Rome</span> significa «visité Roma». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nunca comí eso»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">I have never eaten that</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">I have visited Rome</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">Have you ever been to London?</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I have never eaten that</span> significa «nunca comí eso».",
                error: "Todavía no. <span lang=\"en\">I have never eaten that</span> significa «nunca comí eso». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 15,
            titulo: "Trabajo y estudios",
            descripcion: "Habla de tu trabajo y tu búsqueda laboral",
            consejo: "<span lang=\"en\">For</span> indica cuánto dura algo: <span lang=\"en\">for two years</span> significa «desde hace dos años».",
            teoria: {
              titulo: "Aprende a hablar de trabajo",
              html: "<p>Estas frases son útiles para una entrevista o para presentarte en el trabajo.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I have worked here for two years</span> <span>→ trabajo aquí desde hace dos años</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I am responsible for sales</span> <span>→ soy responsable de ventas</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I am looking for a job</span> <span>→ estoy buscando trabajo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «trabajo aquí desde hace dos años»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">I am responsible for sales</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">I have worked here for two years</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">I am looking for a job</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I have worked here for two years</span> significa «trabajo aquí desde hace dos años».",
                error: "Todavía no. <span lang=\"en\">I have worked here for two years</span> significa «trabajo aquí desde hace dos años». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"en\">I am responsible for sales</span>?",
                opciones: [
                  {
                    texto: "estoy buscando trabajo",
                    correcta: false
                  },
                  {
                    texto: "soy responsable de ventas",
                    correcta: true
                  },
                  {
                    texto: "trabajo aquí desde hace dos años",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I am responsible for sales</span> significa «soy responsable de ventas».",
                error: "Todavía no. <span lang=\"en\">I am responsible for sales</span> significa «soy responsable de ventas». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy buscando trabajo»?",
                opciones: [
                  {
                    texto: "<span lang=\"en\">I have worked here for two years</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"en\">I am looking for a job</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"en\">I am responsible for sales</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"en\">I am looking for a job</span> significa «estoy buscando trabajo».",
                error: "Todavía no. <span lang=\"en\">I am looking for a job</span> significa «estoy buscando trabajo». Puedes elegir otra opción."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "aleman",
    nombre: "Alemán",
    nombreCompleto: "Alemán desde Español",
    codigoIdioma: "de",
    descripcion: "La lengua clave para oportunidades en ciencia, tecnología e industria europea.",
    niveles: [
      {
        id: "a1",
        nombre: "A1",
        titulo: "Principiante"
      },
      {
        id: "a2",
        nombre: "A2",
        titulo: "Elemental"
      },
      {
        id: "b1",
        nombre: "B1",
        titulo: "Intermedio"
      }
    ],
    unidades: [
      {
        id: 1,
        titulo: "Saludos y cortesía",
        descripcion: "Saluda, despídete y habla con cortesía.",
        nivel: "a1",
        lecciones: [
          {
            id: 1,
            titulo: "Decir hola",
            descripcion: "Aprende el saludo <span lang=\"de\">Hallo</span>",
            consejo: "<span lang=\"de\">Hallo</span> significa «hola». Es una forma sencilla de saludar en alemán.",
            teoria: {
              titulo: "Aprende una palabra",
              html: "<p>Para saludar, puedes decir <strong lang=\"de\">Hallo</strong>. Se usa de manera similar a «hola» en español.</p><p class=\"ejemplo-aleman\"><span lang=\"de\">Hallo!</span> <span>→ ¡Hola!</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción de la palabra en alemán.",
                pregunta: "¿Qué significa <span lang=\"de\">Hallo</span>?",
                opciones: [
                  {
                    texto: "Adiós",
                    correcta: false
                  },
                  {
                    texto: "Hola",
                    correcta: true
                  },
                  {
                    texto: "Gracias",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Hallo</span> significa «hola».",
                error: "Todavía no. <span lang=\"de\">Hallo</span> significa «hola». Puedes elegir otra opción."
              },
              {
                titulo: "Reconoce el saludo",
                consigna: "Selecciona la palabra que usarías para saludar.",
                pregunta: "¿Cuál de estas palabras significa «hola»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Danke</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Hallo</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Tschüss</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Hallo</span> significa «hola».",
                error: "Todavía no. Para decir «hola» se utiliza <span lang=\"de\">Hallo</span>."
              }
            ]
          },
          {
            id: 2,
            titulo: "Despedidas y cortesía",
            descripcion: "Aprende a despedirte y dar las gracias",
            consejo: "<strong lang=\"de\">Tschüss</strong> es informal. <strong lang=\"de\">Auf Wiedersehen</strong> se utiliza en situaciones más formales.",
            teoria: {
              titulo: "Aprende expresiones básicas",
              html: "<p>Estas expresiones te permitirán despedirte y ser amable en conversaciones sencillas.</p><p class=\"ejemplo-aleman\"><span lang=\"de\">Tschüss!</span> <span>→ ¡Chau!</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Auf Wiedersehen!</span> <span>→ ¡Hasta luego!</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Danke!</span> <span>→ ¡Gracias!</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Bitte!</span> <span>→ ¡Por favor! / ¡De nada!</span></p>"
            },
            ejercicios: [
              {
                titulo: "Elige una despedida informal",
                consigna: "Selecciona la expresión que usarías para despedirte de un amigo.",
                pregunta: "¿Cuál de estas opciones significa «chau»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Danke</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Tschüss</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Bitte</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Tschüss</span> es una despedida informal.",
                error: "Todavía no. La respuesta correcta es <span lang=\"de\">Tschüss</span>."
              },
              {
                titulo: "Practica una expresión de cortesía",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Danke</span>?",
                opciones: [
                  {
                    texto: "Hola",
                    correcta: false
                  },
                  {
                    texto: "Gracias",
                    correcta: true
                  },
                  {
                    texto: "Adiós",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Danke</span> significa «gracias».",
                error: "Todavía no. <span lang=\"de\">Danke</span> significa «gracias»."
              },
              {
                titulo: "Usa una expresión de cortesía",
                consigna: "Selecciona la traducción adecuada.",
                pregunta: "¿Qué puede significar <span lang=\"de\">Bitte</span>?",
                opciones: [
                  {
                    texto: "Por favor / De nada",
                    correcta: true
                  },
                  {
                    texto: "Buenos días",
                    correcta: false
                  },
                  {
                    texto: "¿Cómo estás?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Bitte</span> puede significar «por favor» o «de nada».",
                error: "Todavía no. <span lang=\"de\">Bitte</span> se usa para decir «por favor» o «de nada»."
              }
            ]
          }
        ]
      },
      {
        id: 2,
        titulo: "Presentaciones",
        descripcion: "Di tu nombre y pregunta cómo está alguien.",
        nivel: "a1",
        lecciones: [
          {
            id: 3,
            titulo: "Decir tu nombre",
            descripcion: "Preséntate y pregunta el nombre",
            consejo: "<span lang=\"de\">Ich heiße</span> se usa para decir «me llamo». La letra ß tiene un sonido parecido a una doble s.",
            teoria: {
              titulo: "Aprende a presentarte",
              html: "<p>Estas frases sirven para decir tu nombre y preguntarle el suyo a otra persona.</p><ul class=\"lista-vocabulario\"> <li><strong lang=\"de\">Ich heiße Ana.</strong><span>Me llamo Ana.</span></li> <li><strong lang=\"de\">Mein Name ist Leo.</strong><span>Mi nombre es Leo.</span></li> <li><strong lang=\"de\">Wie heißt du?</strong><span>¿Cómo te llamas?</span></li> </ul>"
            },
            ejercicios: [
              {
                titulo: "Reconoce una presentación",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Ich heiße Sofia</span>?",
                opciones: [
                  {
                    texto: "Soy de Sofía",
                    correcta: false
                  },
                  {
                    texto: "Me llamo Sofía",
                    correcta: true
                  },
                  {
                    texto: "Hola, Sofía",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich heiße Sofia</span> significa «Me llamo Sofía».",
                error: "Todavía no. <span lang=\"de\">Ich heiße</span> significa «me llamo»."
              },
              {
                titulo: "Pregunta el nombre",
                consigna: "Elige la pregunta adecuada.",
                pregunta: "¿Cómo preguntarías «¿Cómo te llamas?»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Wie heißt du?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Wie geht es dir?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Woher kommst du?</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Wie heißt du?</span> pregunta el nombre.",
                error: "Todavía no. Para preguntar el nombre se usa <span lang=\"de\">Wie heißt du?</span>."
              },
              {
                titulo: "Completa la presentación",
                consigna: "Elige la palabra que falta.",
                pregunta: "<span lang=\"de\">Mein ___ ist Leo.</span>",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Name</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">gut</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Danke</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Mein Name ist Leo</span> significa «Mi nombre es Leo».",
                error: "Todavía no. La palabra que falta es <span lang=\"de\">Name</span>."
              }
            ]
          },
          {
            id: 4,
            titulo: "Preguntar cómo estás",
            descripcion: "Pregunta y responde cómo te sientes",
            consejo: "<span lang=\"de\">Wie geht es dir?</span> es una forma sencilla e informal de preguntar cómo está otra persona.",
            teoria: {
              titulo: "Habla sobre cómo te sientes",
              html: "<p>Aprende una pregunta frecuente y tres respuestas muy simples.</p><ul class=\"lista-vocabulario\"> <li><strong lang=\"de\">Wie geht es dir?</strong><span>¿Cómo estás?</span></li> <li><strong lang=\"de\">Mir geht es gut.</strong><span>Estoy bien.</span></li> <li><strong lang=\"de\">Sehr gut.</strong><span>Muy bien.</span></li> <li><strong lang=\"de\">Nicht so gut.</strong><span>No muy bien.</span></li> </ul>"
            },
            ejercicios: [
              {
                titulo: "Reconoce la pregunta",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Wie geht es dir?</span>?",
                opciones: [
                  {
                    texto: "¿Cómo te llamas?",
                    correcta: false
                  },
                  {
                    texto: "¿Cómo estás?",
                    correcta: true
                  },
                  {
                    texto: "¿De dónde eres?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! La pregunta significa «¿Cómo estás?».",
                error: "Todavía no. <span lang=\"de\">Wie geht es dir?</span> significa «¿Cómo estás?»."
              },
              {
                titulo: "Elige una respuesta",
                consigna: "Selecciona una respuesta apropiada.",
                pregunta: "¿Cómo responderías «Estoy bien»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Mir geht es gut.</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Mein Name ist Ana.</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Auf Wiedersehen.</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Mir geht es gut</span> significa «Estoy bien».",
                error: "Todavía no. La respuesta adecuada es <span lang=\"de\">Mir geht es gut.</span>"
              },
              {
                titulo: "Reconoce otra respuesta",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"de\">Nicht so gut</span>?",
                opciones: [
                  {
                    texto: "Muy bien",
                    correcta: false
                  },
                  {
                    texto: "No muy bien",
                    correcta: true
                  },
                  {
                    texto: "Gracias",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Nicht so gut</span> significa «No muy bien».",
                error: "Todavía no. La traducción correcta es «No muy bien»."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        titulo: "Información personal",
        descripcion: "Cuenta de dónde eres y usa los números.",
        nivel: "a1",
        lecciones: [
          {
            id: 5,
            titulo: "Decir de dónde eres",
            descripcion: "Pregunta y responde sobre el origen",
            consejo: "La expresión <span lang=\"de\">Ich komme aus...</span> se completa con el nombre del país de origen.",
            teoria: {
              titulo: "Pregunta y responde sobre el origen",
              html: "<p>Usa estas expresiones para decir de qué país eres.</p><ul class=\"lista-vocabulario\"> <li><strong lang=\"de\">Woher kommst du?</strong><span>¿De dónde eres?</span></li> <li><strong lang=\"de\">Ich komme aus Argentinien.</strong><span>Soy de Argentina.</span></li> <li><strong lang=\"de\">Ich komme aus Deutschland.</strong><span>Soy de Alemania.</span></li> </ul>"
            },
            ejercicios: [
              {
                titulo: "Reconoce la pregunta",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Woher kommst du?</span>?",
                opciones: [
                  {
                    texto: "¿Cómo estás?",
                    correcta: false
                  },
                  {
                    texto: "¿De dónde eres?",
                    correcta: true
                  },
                  {
                    texto: "¿Cómo te llamas?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! La pregunta significa «¿De dónde eres?».",
                error: "Todavía no. <span lang=\"de\">Woher kommst du?</span> pregunta el lugar de origen."
              },
              {
                titulo: "Completa la respuesta",
                consigna: "Elige la frase que indica que alguien es de Argentina.",
                pregunta: "¿Cuál es la respuesta correcta?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Ich komme aus Argentinien.</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Ich heiße Argentinien.</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Mir geht es gut.</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich komme aus Argentinien</span> expresa el país de origen.",
                error: "Todavía no. Para indicar el origen se usa <span lang=\"de\">Ich komme aus...</span>"
              },
              {
                titulo: "Completa la frase",
                consigna: "Elige la palabra que falta.",
                pregunta: "<span lang=\"de\">Ich komme ___ Deutschland.</span>",
                opciones: [
                  {
                    texto: "<span lang=\"de\">aus</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">ist</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">gut</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Se dice <span lang=\"de\">Ich komme aus Deutschland</span>.",
                error: "Todavía no. Para indicar el origen se usa <span lang=\"de\">aus</span>."
              }
            ]
          },
          {
            id: 6,
            titulo: "Números del 1 al 10",
            descripcion: "Aprende los primeros números",
            consejo: "<span lang=\"de\">Drei</span> significa «tres» y se pronuncia de forma parecida a «drai».",
            teoria: {
              titulo: "Aprende los primeros números",
              html: "<p>Relaciona cada número con su palabra en alemán.</p><ul class=\"lista-vocabulario lista-numeros\"> <li><strong lang=\"de\">eins</strong><span>1</span></li> <li><strong lang=\"de\">zwei</strong><span>2</span></li> <li><strong lang=\"de\">drei</strong><span>3</span></li> <li><strong lang=\"de\">vier</strong><span>4</span></li> <li><strong lang=\"de\">fünf</strong><span>5</span></li> <li><strong lang=\"de\">sechs</strong><span>6</span></li> <li><strong lang=\"de\">sieben</strong><span>7</span></li> <li><strong lang=\"de\">acht</strong><span>8</span></li> <li><strong lang=\"de\">neun</strong><span>9</span></li> <li><strong lang=\"de\">zehn</strong><span>10</span></li> </ul>"
            },
            ejercicios: [
              {
                titulo: "Reconoce un número",
                consigna: "Selecciona el número correcto.",
                pregunta: "¿Qué número significa <span lang=\"de\">sieben</span>?",
                opciones: [
                  {
                    texto: "6",
                    correcta: false
                  },
                  {
                    texto: "7",
                    correcta: true
                  },
                  {
                    texto: "10",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Sieben</span> significa «siete».",
                error: "Todavía no. <span lang=\"de\">Sieben</span> corresponde al número 7."
              },
              {
                titulo: "Elige la palabra correcta",
                consigna: "Selecciona cómo se escribe el número.",
                pregunta: "¿Cómo se dice «tres» en alemán?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">drei</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">vier</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">fünf</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! «Tres» se dice <span lang=\"de\">drei</span>.",
                error: "Todavía no. La palabra correcta es <span lang=\"de\">drei</span>."
              },
              {
                titulo: "Practica un número más",
                consigna: "Selecciona el número correcto.",
                pregunta: "¿Qué número significa <span lang=\"de\">zehn</span>?",
                opciones: [
                  {
                    texto: "8",
                    correcta: false
                  },
                  {
                    texto: "9",
                    correcta: false
                  },
                  {
                    texto: "10",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Zehn</span> significa «diez».",
                error: "Todavía no. <span lang=\"de\">Zehn</span> corresponde al número 10."
              }
            ]
          }
        ]
      },
      {
        id: 4,
        titulo: "Repaso",
        descripcion: "Combina lo aprendido en una conversación.",
        nivel: "a1",
        lecciones: [
          {
            id: 7,
            titulo: "Diálogo de repaso",
            descripcion: "Combina lo aprendido en una conversación",
            consejo: "No es necesario traducir palabra por palabra. Identifica primero el saludo, la presentación y la despedida.",
            teoria: {
              titulo: "Lee un diálogo completo",
              html: "<p>Este diálogo combina las expresiones principales del curso.</p><dl class=\"dialogo-aleman\"> <dt>Ana</dt><dd lang=\"de\">Hallo! Ich heiße Ana. Wie heißt du?</dd> <dt>Leo</dt><dd lang=\"de\">Hallo! Mein Name ist Leo.</dd> <dt>Ana</dt><dd lang=\"de\">Wie geht es dir?</dd> <dt>Leo</dt><dd lang=\"de\">Mir geht es gut, danke.</dd> <dt>Ana</dt><dd lang=\"de\">Tschüss!</dd> </dl>"
            },
            ejercicios: [
              {
                titulo: "Completa el diálogo",
                consigna: "Selecciona la respuesta más adecuada.",
                pregunta: "<span lang=\"de\">Hallo! Wie heißt du?</span>",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Ich heiße Marta.</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Ich komme aus Argentinien.</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Auf Wiedersehen.</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich heiße Marta</span> responde la pregunta por el nombre.",
                error: "Todavía no. La pregunta pide el nombre, por eso corresponde <span lang=\"de\">Ich heiße Marta.</span>"
              },
              {
                titulo: "Cierra la conversación",
                consigna: "Elige una despedida apropiada.",
                pregunta: "¿Qué expresión usarías para finalizar el diálogo?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Danke</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Tschüss</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Wie heißt du?</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Tschüss</span> permite finalizar una conversación informal.",
                error: "Todavía no. La despedida adecuada es <span lang=\"de\">Tschüss</span>."
              },
              {
                titulo: "Responde en el diálogo",
                consigna: "Elige la respuesta que continúa correctamente la conversación.",
                pregunta: "<span lang=\"de\">Wie geht es dir?</span>",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Ich heiße Leo.</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Mir geht es gut, danke.</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Ich komme aus Deutschland.</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Mir geht es gut, danke</span> responde cómo está la persona.",
                error: "Todavía no. La respuesta adecuada es <span lang=\"de\">Mir geht es gut, danke.</span>"
              }
            ]
          }
        ]
      },
      {
        id: 5,
        titulo: "Vida diaria",
        descripcion: "Desenvuélvete en un restaurante y en la calle.",
        nivel: "a2",
        lecciones: [
          {
            id: 8,
            titulo: "En el restaurante",
            descripcion: "Pide comida y pregunta precios",
            consejo: "<span lang=\"de\">Ich möchte</span> es la forma cortés de pedir algo.",
            teoria: {
              titulo: "Aprende a pedir con cortesía",
              html: "<p>Estas frases te sirven para pedir algo en un restaurante o una tienda.</p><p class=\"ejemplo-aleman\"><span lang=\"de\">Ich möchte einen Kaffee</span> <span>→ quisiera un café</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Die Rechnung, bitte</span> <span>→ la cuenta, por favor</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Wie viel kostet das?</span> <span>→ ¿Cuánto cuesta?</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «quisiera un café»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Ich möchte einen Kaffee</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Wie viel kostet das?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Die Rechnung, bitte</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich möchte einen Kaffee</span> significa «quisiera un café».",
                error: "Todavía no. <span lang=\"de\">Ich möchte einen Kaffee</span> significa «quisiera un café». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Die Rechnung, bitte</span>?",
                opciones: [
                  {
                    texto: "la cuenta, por favor",
                    correcta: true
                  },
                  {
                    texto: "quisiera un café",
                    correcta: false
                  },
                  {
                    texto: "¿Cuánto cuesta?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Die Rechnung, bitte</span> significa «la cuenta, por favor».",
                error: "Todavía no. <span lang=\"de\">Die Rechnung, bitte</span> significa «la cuenta, por favor». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Cuánto cuesta?»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Wie viel kostet das?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Die Rechnung, bitte</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Ich möchte einen Kaffee</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Wie viel kostet das?</span> significa «¿Cuánto cuesta?».",
                error: "Todavía no. <span lang=\"de\">Wie viel kostet das?</span> significa «¿Cuánto cuesta?». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 9,
            titulo: "Cómo llegar",
            descripcion: "Pregunta y entiende direcciones",
            consejo: "<span lang=\"de\">links</span> significa «izquierda» y <span lang=\"de\">rechts</span> significa «derecha».",
            teoria: {
              titulo: "Aprende a orientarte",
              html: "<p>Con estas frases puedes preguntar dónde queda un lugar y seguir indicaciones.</p><p class=\"ejemplo-aleman\"><span lang=\"de\">Wo ist der Bahnhof?</span> <span>→ ¿Dónde está la estación?</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Gehen Sie nach links</span> <span>→ vaya a la izquierda</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Gehen Sie geradeaus</span> <span>→ siga derecho</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Dónde está la estación?»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Gehen Sie nach links</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Wo ist der Bahnhof?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Gehen Sie geradeaus</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Wo ist der Bahnhof?</span> significa «¿Dónde está la estación?».",
                error: "Todavía no. <span lang=\"de\">Wo ist der Bahnhof?</span> significa «¿Dónde está la estación?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Gehen Sie nach links</span>?",
                opciones: [
                  {
                    texto: "siga derecho",
                    correcta: false
                  },
                  {
                    texto: "vaya a la izquierda",
                    correcta: true
                  },
                  {
                    texto: "¿Dónde está la estación?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Gehen Sie nach links</span> significa «vaya a la izquierda».",
                error: "Todavía no. <span lang=\"de\">Gehen Sie nach links</span> significa «vaya a la izquierda». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «siga derecho»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Wo ist der Bahnhof?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Gehen Sie geradeaus</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Gehen Sie nach links</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Gehen Sie geradeaus</span> significa «siga derecho».",
                error: "Todavía no. <span lang=\"de\">Gehen Sie geradeaus</span> significa «siga derecho». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 6,
        titulo: "Planes y comparaciones",
        descripcion: "Cuenta tus planes y compara personas y cosas.",
        nivel: "a2",
        lecciones: [
          {
            id: 10,
            titulo: "Planes futuros",
            descripcion: "Cuenta lo que vas a hacer",
            consejo: "El futuro se forma con <span lang=\"de\">werden</span>, y el verbo principal va al final de la frase.",
            teoria: {
              titulo: "Aprende a hablar del futuro",
              html: "<p>Estas frases te permiten contar tus planes.</p><p class=\"ejemplo-aleman\"><span lang=\"de\">Ich werde reisen</span> <span>→ voy a viajar</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Sie wird studieren</span> <span>→ ella va a estudiar</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Wir werden essen</span> <span>→ vamos a comer</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «voy a viajar»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Wir werden essen</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Sie wird studieren</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Ich werde reisen</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich werde reisen</span> significa «voy a viajar».",
                error: "Todavía no. <span lang=\"de\">Ich werde reisen</span> significa «voy a viajar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Sie wird studieren</span>?",
                opciones: [
                  {
                    texto: "voy a viajar",
                    correcta: false
                  },
                  {
                    texto: "vamos a comer",
                    correcta: false
                  },
                  {
                    texto: "ella va a estudiar",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Sie wird studieren</span> significa «ella va a estudiar».",
                error: "Todavía no. <span lang=\"de\">Sie wird studieren</span> significa «ella va a estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «vamos a comer»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Sie wird studieren</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Ich werde reisen</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Wir werden essen</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Wir werden essen</span> significa «vamos a comer».",
                error: "Todavía no. <span lang=\"de\">Wir werden essen</span> significa «vamos a comer». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 11,
            titulo: "Comparaciones",
            descripcion: "Compara personas y cosas",
            consejo: "Para comparar se suma -er al adjetivo y se usa <span lang=\"de\">als</span>, «que».",
            teoria: {
              titulo: "Aprende a comparar",
              html: "<p>Estas estructuras sirven para decir qué es más grande, más caro o mejor.</p><p class=\"ejemplo-aleman\"><span lang=\"de\">größer als</span> <span>→ más grande que</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">teurer als</span> <span>→ más caro que</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">am besten</span> <span>→ lo mejor</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «más grande que»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">größer als</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">am besten</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">teurer als</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">größer als</span> significa «más grande que».",
                error: "Todavía no. <span lang=\"de\">größer als</span> significa «más grande que». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">teurer als</span>?",
                opciones: [
                  {
                    texto: "más caro que",
                    correcta: true
                  },
                  {
                    texto: "más grande que",
                    correcta: false
                  },
                  {
                    texto: "lo mejor",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">teurer als</span> significa «más caro que».",
                error: "Todavía no. <span lang=\"de\">teurer als</span> significa «más caro que». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «lo mejor»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">am besten</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">teurer als</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">größer als</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">am besten</span> significa «lo mejor».",
                error: "Todavía no. <span lang=\"de\">am besten</span> significa «lo mejor». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 7,
        titulo: "Opiniones y consejos",
        descripcion: "Expresa lo que piensas y da consejos.",
        nivel: "b1",
        lecciones: [
          {
            id: 12,
            titulo: "Dar tu opinión",
            descripcion: "Expresa lo que piensas",
            consejo: "Después de <span lang=\"de\">dass</span>, el verbo conjugado va al final: <span lang=\"de\">dass es gut ist</span>.",
            teoria: {
              titulo: "Aprende a opinar",
              html: "<p>Con estas frases puedes dar tu opinión y decir si estás de acuerdo.</p><p class=\"ejemplo-aleman\"><span lang=\"de\">Ich denke, dass es gut ist</span> <span>→ creo que está bien</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Meiner Meinung nach</span> <span>→ en mi opinión</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Ich bin einverstanden</span> <span>→ estoy de acuerdo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «creo que está bien»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Meiner Meinung nach</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Ich denke, dass es gut ist</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Ich bin einverstanden</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich denke, dass es gut ist</span> significa «creo que está bien».",
                error: "Todavía no. <span lang=\"de\">Ich denke, dass es gut ist</span> significa «creo que está bien». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Meiner Meinung nach</span>?",
                opciones: [
                  {
                    texto: "estoy de acuerdo",
                    correcta: false
                  },
                  {
                    texto: "en mi opinión",
                    correcta: true
                  },
                  {
                    texto: "creo que está bien",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Meiner Meinung nach</span> significa «en mi opinión».",
                error: "Todavía no. <span lang=\"de\">Meiner Meinung nach</span> significa «en mi opinión». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy de acuerdo»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Ich denke, dass es gut ist</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Ich bin einverstanden</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Meiner Meinung nach</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich bin einverstanden</span> significa «estoy de acuerdo».",
                error: "Todavía no. <span lang=\"de\">Ich bin einverstanden</span> significa «estoy de acuerdo». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 13,
            titulo: "Consejos y deseos",
            descripcion: "Aconseja y habla de lo que te gustaría",
            consejo: "<span lang=\"de\">Du solltest</span> da un consejo. <span lang=\"de\">Würde</span> sirve para hablar de situaciones imaginarias.",
            teoria: {
              titulo: "Aprende a aconsejar",
              html: "<p>Estas frases sirven para dar consejos y hablar de situaciones posibles.</p><p class=\"ejemplo-aleman\"><span lang=\"de\">Du solltest lernen</span> <span>→ deberías estudiar</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Wenn ich Zeit hätte, würde ich reisen</span> <span>→ si tuviera tiempo, viajaría</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Ich würde gern lernen</span> <span>→ me gustaría aprender</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «deberías estudiar»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Ich würde gern lernen</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Wenn ich Zeit hätte, würde ich reisen</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Du solltest lernen</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Du solltest lernen</span> significa «deberías estudiar».",
                error: "Todavía no. <span lang=\"de\">Du solltest lernen</span> significa «deberías estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Wenn ich Zeit hätte, würde ich reisen</span>?",
                opciones: [
                  {
                    texto: "deberías estudiar",
                    correcta: false
                  },
                  {
                    texto: "me gustaría aprender",
                    correcta: false
                  },
                  {
                    texto: "si tuviera tiempo, viajaría",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Wenn ich Zeit hätte, würde ich reisen</span> significa «si tuviera tiempo, viajaría».",
                error: "Todavía no. <span lang=\"de\">Wenn ich Zeit hätte, würde ich reisen</span> significa «si tuviera tiempo, viajaría». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «me gustaría aprender»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Wenn ich Zeit hätte, würde ich reisen</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Du solltest lernen</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Ich würde gern lernen</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich würde gern lernen</span> significa «me gustaría aprender».",
                error: "Todavía no. <span lang=\"de\">Ich würde gern lernen</span> significa «me gustaría aprender». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 8,
        titulo: "Experiencias y trabajo",
        descripcion: "Habla de tu vida, tus estudios y tu trabajo.",
        nivel: "b1",
        lecciones: [
          {
            id: 14,
            titulo: "Experiencias",
            descripcion: "Cuenta lo que hiciste en tu vida",
            consejo: "El pasado conversado se forma con <span lang=\"de\">haben</span> o <span lang=\"de\">sein</span> más el participio.",
            teoria: {
              titulo: "Aprende a contar experiencias",
              html: "<p>Estas frases te permiten hablar de lo que hiciste, o nunca hiciste, en tu vida.</p><p class=\"ejemplo-aleman\"><span lang=\"de\">Warst du schon einmal in Berlin?</span> <span>→ ¿Alguna vez estuviste en Berlín?</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Ich habe Rom besucht</span> <span>→ visité Roma</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Das habe ich noch nie gegessen</span> <span>→ nunca comí eso</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Alguna vez estuviste en Berlín?»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Warst du schon einmal in Berlin?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Das habe ich noch nie gegessen</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Ich habe Rom besucht</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Warst du schon einmal in Berlin?</span> significa «¿Alguna vez estuviste en Berlín?».",
                error: "Todavía no. <span lang=\"de\">Warst du schon einmal in Berlin?</span> significa «¿Alguna vez estuviste en Berlín?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Ich habe Rom besucht</span>?",
                opciones: [
                  {
                    texto: "visité Roma",
                    correcta: true
                  },
                  {
                    texto: "¿Alguna vez estuviste en Berlín?",
                    correcta: false
                  },
                  {
                    texto: "nunca comí eso",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich habe Rom besucht</span> significa «visité Roma».",
                error: "Todavía no. <span lang=\"de\">Ich habe Rom besucht</span> significa «visité Roma». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nunca comí eso»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Das habe ich noch nie gegessen</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Ich habe Rom besucht</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Warst du schon einmal in Berlin?</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Das habe ich noch nie gegessen</span> significa «nunca comí eso».",
                error: "Todavía no. <span lang=\"de\">Das habe ich noch nie gegessen</span> significa «nunca comí eso». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 15,
            titulo: "Trabajo y estudios",
            descripcion: "Habla de tu trabajo y tu búsqueda laboral",
            consejo: "<span lang=\"de\">Seit</span> indica desde cuándo sucede algo, y el verbo va en presente.",
            teoria: {
              titulo: "Aprende a hablar de trabajo",
              html: "<p>Estas frases son útiles para una entrevista o para presentarte en el trabajo.</p><p class=\"ejemplo-aleman\"><span lang=\"de\">Ich arbeite seit zwei Jahren hier</span> <span>→ trabajo aquí desde hace dos años</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Ich bin für den Verkauf zuständig</span> <span>→ soy responsable de ventas</span></p><p class=\"ejemplo-aleman\"><span lang=\"de\">Ich suche eine Stelle</span> <span>→ estoy buscando trabajo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «trabajo aquí desde hace dos años»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Ich bin für den Verkauf zuständig</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Ich arbeite seit zwei Jahren hier</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Ich suche eine Stelle</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich arbeite seit zwei Jahren hier</span> significa «trabajo aquí desde hace dos años».",
                error: "Todavía no. <span lang=\"de\">Ich arbeite seit zwei Jahren hier</span> significa «trabajo aquí desde hace dos años». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"de\">Ich bin für den Verkauf zuständig</span>?",
                opciones: [
                  {
                    texto: "estoy buscando trabajo",
                    correcta: false
                  },
                  {
                    texto: "soy responsable de ventas",
                    correcta: true
                  },
                  {
                    texto: "trabajo aquí desde hace dos años",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich bin für den Verkauf zuständig</span> significa «soy responsable de ventas».",
                error: "Todavía no. <span lang=\"de\">Ich bin für den Verkauf zuständig</span> significa «soy responsable de ventas». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy buscando trabajo»?",
                opciones: [
                  {
                    texto: "<span lang=\"de\">Ich arbeite seit zwei Jahren hier</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"de\">Ich suche eine Stelle</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"de\">Ich bin für den Verkauf zuständig</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"de\">Ich suche eine Stelle</span> significa «estoy buscando trabajo».",
                error: "Todavía no. <span lang=\"de\">Ich suche eine Stelle</span> significa «estoy buscando trabajo». Puedes elegir otra opción."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "chino",
    nombre: "Chino Mandarín",
    nombreCompleto: "Chino Mandarín desde Español",
    codigoIdioma: "zh",
    descripcion: "Abre las puertas al mercado más grande y a una cultura milenaria fascinante.",
    niveles: [
      {
        id: "a1",
        nombre: "HSK 1",
        titulo: "Inicial"
      },
      {
        id: "a2",
        nombre: "HSK 2",
        titulo: "Básico"
      },
      {
        id: "b1",
        nombre: "HSK 3",
        titulo: "Intermedio"
      }
    ],
    unidades: [
      {
        id: 1,
        titulo: "Saludos y presentaciones",
        descripcion: "Saluda y presenta quién eres.",
        nivel: "a1",
        lecciones: [
          {
            id: 1,
            titulo: "Saludos y presentaciones",
            descripcion: "Aprende el saludo <span lang=\"zh\">Nǐ hǎo (你好)</span>",
            consejo: "<span lang=\"zh\">Nǐ hǎo (你好)</span> significa «hola». Para saludar con más respeto se usa <span lang=\"zh\">Nín hǎo (您好)</span>. Para presentarte, di <span lang=\"zh\">Wǒ jiào… (我叫…)</span>, que significa «me llamo…».",
            teoria: {
              titulo: "Aprende a saludar y presentarte",
              html: "<p>Para saludar, puedes decir <strong lang=\"zh\">Nǐ hǎo (你好)</strong>. Para presentarte, puedes decir <strong lang=\"zh\">Wǒ jiào Ana (我叫 Ana)</strong>.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Nǐ hǎo (你好)</span> <span>→ hola</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Zàijiàn (再见)</span> <span>→ adiós</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Xièxie (谢谢)</span> <span>→ gracias</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ jiào Ana (我叫 Ana)</span> <span>→ me llamo Ana</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Rènshi nǐ hěn gāoxìng (认识你很高兴)</span> <span>→ encantado de conocerte</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Qué significa <span lang=\"zh\">Nǐ hǎo (你好)</span>?",
                opciones: [
                  {
                    texto: "Adiós",
                    correcta: false
                  },
                  {
                    texto: "Hola",
                    correcta: true
                  },
                  {
                    texto: "Gracias",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Nǐ hǎo (你好)</span> significa «hola».",
                error: "Todavía no. <span lang=\"zh\">Nǐ hǎo (你好)</span> significa «hola». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Cómo se dice «adiós»?",
                opciones: [
                  {
                    texto: "Xièxie (谢谢)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "Nǐ hǎo (你好)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "Zàijiàn (再见)",
                    idioma: "zh",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Zàijiàn (再见)</span> significa «adiós».",
                error: "Todavía no. <span lang=\"zh\">Xièxie (谢谢)</span> es «gracias» y <span lang=\"zh\">Nǐ hǎo (你好)</span> es «hola». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"zh\">Xièxie (谢谢)</span>?",
                opciones: [
                  {
                    texto: "Gracias",
                    correcta: true
                  },
                  {
                    texto: "Por favor",
                    correcta: false
                  },
                  {
                    texto: "Hola",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Xièxie (谢谢)</span> significa «gracias».",
                error: "Todavía no. <span lang=\"zh\">Xièxie (谢谢)</span> significa «gracias». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 2,
        titulo: "Gramática básica",
        descripcion: "Construye frases en presente y pasado.",
        nivel: "a1",
        lecciones: [
          {
            id: 2,
            titulo: "El verbo shì (是)",
            descripcion: "Aprende a decir quién eres",
            consejo: "<span lang=\"zh\">Shì (是)</span> significa «ser». No cambia según la persona: <span lang=\"zh\">wǒ shì</span>, <span lang=\"zh\">nǐ shì</span>, <span lang=\"zh\">tā shì</span>. Para negar se pone <span lang=\"zh\">bù (不)</span> delante: <span lang=\"zh\">bú shì (不是)</span>.",
            teoria: {
              titulo: "Aprende a decir quién eres",
              html: "<p>Para decir quién eres, usa <strong lang=\"zh\">Wǒ shì… (我是…)</strong>, que significa «yo soy…».</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ shì xuéshēng (我是学生)</span> <span>→ yo soy estudiante</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Tā shì lǎoshī (她是老师)</span> <span>→ ella es profesora</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒmen shì péngyou (我们是朋友)</span> <span>→ nosotros somos amigos</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ bú shì lǎoshī (我不是老师)</span> <span>→ yo no soy profesor</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"zh\">shì (是)</span>?",
                opciones: [
                  {
                    texto: "Tener",
                    correcta: false
                  },
                  {
                    texto: "Ser",
                    correcta: true
                  },
                  {
                    texto: "Ir",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">shì (是)</span> significa «ser».",
                error: "Todavía no. <span lang=\"zh\">shì (是)</span> significa «ser». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «yo soy estudiante»?",
                opciones: [
                  {
                    texto: "Wǒ shì xuéshēng (我是学生)",
                    idioma: "zh",
                    correcta: true
                  },
                  {
                    texto: "Nǐ shì xuéshēng (你是学生)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "Wǒ bú shì xuéshēng (我不是学生)",
                    idioma: "zh",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ shì xuéshēng (我是学生)</span> significa «yo soy estudiante».",
                error: "Todavía no. <span lang=\"zh\">Wǒ (我)</span> es «yo» y <span lang=\"zh\">bú shì (不是)</span> es «no ser». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"zh\">Tā shì lǎoshī (她是老师)</span>?",
                opciones: [
                  {
                    texto: "Yo soy profesora",
                    correcta: false
                  },
                  {
                    texto: "Ella es profesora",
                    correcta: true
                  },
                  {
                    texto: "Ella no es profesora",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Tā shì lǎoshī (她是老师)</span> significa «ella es profesora».",
                error: "Todavía no. <span lang=\"zh\">tā (她)</span> significa «ella» y <span lang=\"zh\">lǎoshī (老师)</span> es «profesora». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 3,
            titulo: "Acciones en presente con zài (在)",
            descripcion: "Di lo que estás haciendo ahora",
            consejo: "Para decir que algo está pasando ahora, se pone <span lang=\"zh\">zài (在)</span> antes del verbo: <span lang=\"zh\">Wǒ zài chīfàn (我在吃饭)</span>, «estoy comiendo». Los verbos en chino no cambian según la persona.",
            teoria: {
              titulo: "Aprende a decir lo que estás haciendo",
              html: "<p>Para una acción que pasa ahora, usa <strong lang=\"zh\">zài (在)</strong> + verbo: <strong lang=\"zh\">Wǒ zài chīfàn (我在吃饭)</strong>.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">chī (吃)</span> <span>→ comer</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">hē (喝)</span> <span>→ beber</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">kàn (看)</span> <span>→ mirar / leer</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ zài chīfàn (我在吃饭)</span> <span>→ estoy comiendo</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Tā zài kàn shū (他在看书)</span> <span>→ él está leyendo un libro</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"zh\">chī (吃)</span>?",
                opciones: [
                  {
                    texto: "Beber",
                    correcta: false
                  },
                  {
                    texto: "Comer",
                    correcta: true
                  },
                  {
                    texto: "Dormir",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">chī (吃)</span> significa «comer».",
                error: "Todavía no. <span lang=\"zh\">chī (吃)</span> significa «comer». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy comiendo»?",
                opciones: [
                  {
                    texto: "Wǒ zài chīfàn (我在吃饭)",
                    idioma: "zh",
                    correcta: true
                  },
                  {
                    texto: "Wǒ shì chīfàn (我是吃饭)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "Wǒ chīfàn le (我吃饭了)",
                    idioma: "zh",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ zài chīfàn (我在吃饭)</span> significa «estoy comiendo».",
                error: "Todavía no. Para algo que pasa ahora se usa <span lang=\"zh\">zài (在)</span> antes del verbo. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"zh\">Tā zài kàn shū (他在看书)</span>?",
                opciones: [
                  {
                    texto: "Él leyó un libro",
                    correcta: false
                  },
                  {
                    texto: "Él está leyendo un libro",
                    correcta: true
                  },
                  {
                    texto: "Él es un libro",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Tā zài kàn shū (他在看书)</span> significa «él está leyendo un libro».",
                error: "Todavía no. <span lang=\"zh\">zài (在)</span> indica que la acción está pasando ahora. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 4,
            titulo: "Hablar del pasado con le (了)",
            descripcion: "Cuenta lo que ya hiciste",
            consejo: "Para decir que una acción ya terminó, se pone <span lang=\"zh\">le (了)</span> después del verbo o al final de la frase: <span lang=\"zh\">Wǒ chīfàn le (我吃饭了)</span>, «ya comí». Palabras como <span lang=\"zh\">zuótiān (昨天)</span>, «ayer», también indican pasado.",
            teoria: {
              titulo: "Aprende a hablar del pasado",
              html: "<p>Para una acción terminada, agrega <strong lang=\"zh\">le (了)</strong>: <strong lang=\"zh\">Wǒ chīfàn le (我吃饭了)</strong>.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ chīfàn le (我吃饭了)</span> <span>→ ya comí</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Tā qù le Běijīng (他去了北京)</span> <span>→ él fue a Pekín</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">zuótiān (昨天)</span> <span>→ ayer</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Zuótiān wǒ kàn le diànyǐng (昨天我看了电影)</span> <span>→ ayer vi una película</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"zh\">zuótiān (昨天)</span>?",
                opciones: [
                  {
                    texto: "Hoy",
                    correcta: false
                  },
                  {
                    texto: "Ayer",
                    correcta: true
                  },
                  {
                    texto: "Mañana",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">zuótiān (昨天)</span> significa «ayer».",
                error: "Todavía no. <span lang=\"zh\">zuótiān (昨天)</span> significa «ayer». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «ya comí»?",
                opciones: [
                  {
                    texto: "Wǒ chīfàn le (我吃饭了)",
                    idioma: "zh",
                    correcta: true
                  },
                  {
                    texto: "Wǒ zài chīfàn (我在吃饭)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "Wǒ shì chīfàn (我是吃饭)",
                    idioma: "zh",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ chīfàn le (我吃饭了)</span> significa «ya comí».",
                error: "Todavía no. Para una acción terminada se usa <span lang=\"zh\">le (了)</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"zh\">Tā qù le Běijīng (他去了北京)</span>?",
                opciones: [
                  {
                    texto: "Él va a Pekín",
                    correcta: false
                  },
                  {
                    texto: "Él fue a Pekín",
                    correcta: true
                  },
                  {
                    texto: "Él está en Pekín",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Tā qù le Běijīng (他去了北京)</span> significa «él fue a Pekín».",
                error: "Todavía no. <span lang=\"zh\">le (了)</span> indica que la acción ya pasó. Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        titulo: "Vida cotidiana",
        descripcion: "Habla de los números, la hora y tu familia.",
        nivel: "a1",
        lecciones: [
          {
            id: 5,
            titulo: "Números y la hora",
            descripcion: "Cuenta y di qué hora es",
            consejo: "Con los números del 1 al 10 puedes formar los demás: 11 es <span lang=\"zh\">shí yī (十一)</span>, «diez y uno», y 20 es <span lang=\"zh\">èr shí (二十)</span>, «dos dieces». Para la hora se usa <span lang=\"zh\">diǎn (点)</span>: <span lang=\"zh\">sān diǎn (三点)</span>, «las tres».",
            teoria: {
              titulo: "Aprende los números y la hora",
              html: "<p>Los primeros números son <strong lang=\"zh\">yī, èr, sān (一, 二, 三)</strong>. Para preguntar la hora se dice <strong lang=\"zh\">Xiànzài jǐ diǎn? (现在几点？)</strong>.</p><ul class=\"lista-vocabulario lista-numeros\"> <li><strong lang=\"zh\">yī (一)</strong> <span>uno</span></li> <li><strong lang=\"zh\">èr (二)</strong> <span>dos</span></li> <li><strong lang=\"zh\">sān (三)</strong> <span>tres</span></li> <li><strong lang=\"zh\">sì (四)</strong> <span>cuatro</span></li> <li><strong lang=\"zh\">wǔ (五)</strong> <span>cinco</span></li> <li><strong lang=\"zh\">liù (六)</strong> <span>seis</span></li> <li><strong lang=\"zh\">qī (七)</strong> <span>siete</span></li> <li><strong lang=\"zh\">bā (八)</strong> <span>ocho</span></li> <li><strong lang=\"zh\">jiǔ (九)</strong> <span>nueve</span></li> <li><strong lang=\"zh\">shí (十)</strong> <span>diez</span></li> </ul><p class=\"ejemplo-chino\"><span lang=\"zh\">èr shí (二十)</span> <span>→ veinte</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Xiànzài jǐ diǎn? (现在几点？)</span> <span>→ ¿Qué hora es?</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Sān diǎn (三点)</span> <span>→ son las tres</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Qué número es <span lang=\"zh\">wǔ (五)</span>?",
                opciones: [
                  {
                    texto: "Cuatro",
                    correcta: false
                  },
                  {
                    texto: "Cinco",
                    correcta: true
                  },
                  {
                    texto: "Seis",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">wǔ (五)</span> significa «cinco».",
                error: "Todavía no. <span lang=\"zh\">wǔ (五)</span> significa «cinco». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Cómo se dice «diez»?",
                opciones: [
                  {
                    texto: "shí (十)",
                    idioma: "zh",
                    correcta: true
                  },
                  {
                    texto: "sì (四)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "qī (七)",
                    idioma: "zh",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! «Diez» se dice <span lang=\"zh\">shí (十)</span>.",
                error: "Todavía no. <span lang=\"zh\">sì (四)</span> es «cuatro» y <span lang=\"zh\">qī (七)</span> es «siete». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se pregunta la hora?",
                opciones: [
                  {
                    texto: "Nǐ jiào shénme míngzi? (你叫什么名字？)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "Xiànzài jǐ diǎn? (现在几点？)",
                    idioma: "zh",
                    correcta: true
                  },
                  {
                    texto: "Nǐ hǎo ma? (你好吗？)",
                    idioma: "zh",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Xiànzài jǐ diǎn? (现在几点？)</span> significa «¿qué hora es?».",
                error: "Todavía no. <span lang=\"zh\">Nǐ jiào shénme míngzi?</span> pregunta el nombre y <span lang=\"zh\">Nǐ hǎo ma?</span> pregunta cómo estás. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 6,
            titulo: "Mi familia",
            descripcion: "Presenta a los miembros de tu familia",
            consejo: "En chino hay palabras distintas para los hermanos mayores y menores. Para decir «tengo» se usa <span lang=\"zh\">yǒu (有)</span>, y para presentar a alguien, <span lang=\"zh\">Zhè shì… (这是…)</span>, «este / esta es…».",
            teoria: {
              titulo: "Aprende los miembros de la familia",
              html: "<p>Para presentar a tu familia, puedes decir <strong lang=\"zh\">Zhè shì wǒ māma (这是我妈妈)</strong>.</p><ul class=\"lista-vocabulario\"> <li><strong lang=\"zh\">bàba (爸爸)</strong> <span>papá</span></li> <li><strong lang=\"zh\">māma (妈妈)</strong> <span>mamá</span></li> <li><strong lang=\"zh\">gēge (哥哥)</strong> <span>hermano mayor</span></li> <li><strong lang=\"zh\">jiějie (姐姐)</strong> <span>hermana mayor</span></li> <li><strong lang=\"zh\">dìdi (弟弟)</strong> <span>hermano menor</span></li> <li><strong lang=\"zh\">mèimei (妹妹)</strong> <span>hermana menor</span></li> </ul><p class=\"ejemplo-chino\"><span lang=\"zh\">Zhè shì wǒ māma (这是我妈妈)</span> <span>→ esta es mi mamá</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ yǒu yí ge gēge (我有一个哥哥)</span> <span>→ tengo un hermano mayor</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"zh\">māma (妈妈)</span>?",
                opciones: [
                  {
                    texto: "Papá",
                    correcta: false
                  },
                  {
                    texto: "Mamá",
                    correcta: true
                  },
                  {
                    texto: "Hermana",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">māma (妈妈)</span> significa «mamá».",
                error: "Todavía no. <span lang=\"zh\">māma (妈妈)</span> significa «mamá». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la traducción correcta.",
                pregunta: "¿Cómo se dice «papá»?",
                opciones: [
                  {
                    texto: "gēge (哥哥)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "bàba (爸爸)",
                    idioma: "zh",
                    correcta: true
                  },
                  {
                    texto: "dìdi (弟弟)",
                    idioma: "zh",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! «Papá» se dice <span lang=\"zh\">bàba (爸爸)</span>.",
                error: "Todavía no. <span lang=\"zh\">gēge (哥哥)</span> es «hermano mayor» y <span lang=\"zh\">dìdi (弟弟)</span> es «hermano menor». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «esta es mi mamá»?",
                opciones: [
                  {
                    texto: "Zhè shì wǒ māma (这是我妈妈)",
                    idioma: "zh",
                    correcta: true
                  },
                  {
                    texto: "Wǒ shì māma (我是妈妈)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "Zhè shì nǐ māma (这是你妈妈)",
                    idioma: "zh",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Zhè shì wǒ māma (这是我妈妈)</span> significa «esta es mi mamá».",
                error: "Todavía no. <span lang=\"zh\">zhè (这)</span> es «esta» y <span lang=\"zh\">wǒ (我)</span> es «mi». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 4,
        titulo: "Repaso",
        descripcion: "Combina lo aprendido en una conversación.",
        nivel: "a1",
        lecciones: [
          {
            id: 7,
            titulo: "Diálogo de repaso",
            descripcion: "Combina lo aprendido en una conversación",
            consejo: "En este repaso combinas saludos, <span lang=\"zh\">shì (是)</span>, <span lang=\"zh\">zài (在)</span> y la palabra <span lang=\"zh\">ma (吗)</span>, que al final de una frase la convierte en pregunta. Lee el diálogo con atención antes de responder.",
            teoria: {
              titulo: "Lee el diálogo",
              html: "<p>Li Ming y Ana se conocen. Lee lo que dicen y fíjate en la traducción.</p><dl class=\"dialogo-chino\"> <dt>Lǐ Míng</dt> <dd><span lang=\"zh\">Nǐ hǎo! Wǒ jiào Lǐ Míng. (你好！我叫李明。)</span> <span>→ ¡Hola! Me llamo Li Ming.</span></dd> <dt>Ana</dt> <dd><span lang=\"zh\">Nǐ hǎo! Wǒ shì Ana. Rènshi nǐ hěn gāoxìng. (你好！我是 Ana。认识你很高兴。)</span> <span>→ ¡Hola! Soy Ana. Encantada de conocerte.</span></dd> <dt>Lǐ Míng</dt> <dd><span lang=\"zh\">Nǐ shì xuéshēng ma? (你是学生吗？)</span> <span>→ ¿Eres estudiante?</span></dd> <dt>Ana</dt> <dd><span lang=\"zh\">Shì, wǒ zài xuéxí Zhōngwén. (是，我在学习中文。)</span> <span>→ Sí, estoy estudiando chino.</span></dd> </dl>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Elige la respuesta adecuada.",
                pregunta: "Li Ming dice <span lang=\"zh\">Nǐ hǎo! Wǒ jiào Lǐ Míng.</span> ¿Qué responde Ana?",
                opciones: [
                  {
                    texto: "Nǐ hǎo! Wǒ shì Ana. (你好！我是 Ana。)",
                    idioma: "zh",
                    correcta: true
                  },
                  {
                    texto: "Zàijiàn (再见)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "Xièxie (谢谢)",
                    idioma: "zh",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Ana saluda y se presenta: <span lang=\"zh\">Nǐ hǎo! Wǒ shì Ana.</span>",
                error: "Todavía no. Cuando alguien se presenta, saludas y dices tu nombre. Puedes elegir otra opción."
              },
              {
                titulo: "Completa la frase",
                consigna: "Elige la palabra que falta.",
                pregunta: "<span lang=\"zh\">Rènshi nǐ hěn ___ (认识你很___)</span> (Encantada de conocerte.)",
                opciones: [
                  {
                    texto: "xuéshēng (学生)",
                    idioma: "zh",
                    correcta: false
                  },
                  {
                    texto: "gāoxìng (高兴)",
                    idioma: "zh",
                    correcta: true
                  },
                  {
                    texto: "Zhōngwén (中文)",
                    idioma: "zh",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Rènshi nǐ hěn gāoxìng (认识你很高兴)</span> significa «encantada de conocerte».",
                error: "Todavía no. <span lang=\"zh\">gāoxìng (高兴)</span> significa «contento». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona el significado correcto.",
                pregunta: "¿Qué significa <span lang=\"zh\">Nǐ shì xuéshēng ma? (你是学生吗？)</span>",
                opciones: [
                  {
                    texto: "¿Eres profesora?",
                    correcta: false
                  },
                  {
                    texto: "¿Cómo te llamas?",
                    correcta: false
                  },
                  {
                    texto: "¿Eres estudiante?",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Nǐ shì xuéshēng ma?</span> significa «¿eres estudiante?».",
                error: "Todavía no. <span lang=\"zh\">xuéshēng (学生)</span> significa «estudiante». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 5,
        titulo: "Vida diaria",
        descripcion: "Desenvuélvete en un restaurante y en la calle.",
        nivel: "a2",
        lecciones: [
          {
            id: 8,
            titulo: "En el restaurante",
            descripcion: "Pide comida y pregunta precios",
            consejo: "<span lang=\"zh\">bēi (杯)</span> es el clasificador de las bebidas servidas en vaso o taza.",
            teoria: {
              titulo: "Aprende a pedir con cortesía",
              html: "<p>Estas frases te sirven para pedir algo en un restaurante o una tienda.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ yào yī bēi kāfēi (我要一杯咖啡)</span> <span>→ quiero un café</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Mǎidān (买单)</span> <span>→ la cuenta, por favor</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Duōshao qián? (多少钱？)</span> <span>→ ¿Cuánto cuesta?</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «quiero un café»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Wǒ yào yī bēi kāfēi (我要一杯咖啡)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Duōshao qián? (多少钱？)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Mǎidān (买单)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ yào yī bēi kāfēi (我要一杯咖啡)</span> significa «quiero un café».",
                error: "Todavía no. <span lang=\"zh\">Wǒ yào yī bēi kāfēi (我要一杯咖啡)</span> significa «quiero un café». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"zh\">Mǎidān (买单)</span>?",
                opciones: [
                  {
                    texto: "la cuenta, por favor",
                    correcta: true
                  },
                  {
                    texto: "quiero un café",
                    correcta: false
                  },
                  {
                    texto: "¿Cuánto cuesta?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Mǎidān (买单)</span> significa «la cuenta, por favor».",
                error: "Todavía no. <span lang=\"zh\">Mǎidān (买单)</span> significa «la cuenta, por favor». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Cuánto cuesta?»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Duōshao qián? (多少钱？)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Mǎidān (买单)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ yào yī bēi kāfēi (我要一杯咖啡)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Duōshao qián? (多少钱？)</span> significa «¿Cuánto cuesta?».",
                error: "Todavía no. <span lang=\"zh\">Duōshao qián? (多少钱？)</span> significa «¿Cuánto cuesta?». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 9,
            titulo: "Cómo llegar",
            descripcion: "Pregunta y entiende direcciones",
            consejo: "<span lang=\"zh\">zuǒ (左)</span> significa «izquierda» y <span lang=\"zh\">yòu (右)</span> significa «derecha».",
            teoria: {
              titulo: "Aprende a orientarte",
              html: "<p>Con estas frases puedes preguntar dónde queda un lugar y seguir indicaciones.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Chēzhàn zài nǎr? (车站在哪儿？)</span> <span>→ ¿Dónde está la estación?</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span> <span>→ dobla a la izquierda</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Yìzhí zǒu (一直走)</span> <span>→ sigue derecho</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Dónde está la estación?»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Chēzhàn zài nǎr? (车站在哪儿？)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Yìzhí zǒu (一直走)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Chēzhàn zài nǎr? (车站在哪儿？)</span> significa «¿Dónde está la estación?».",
                error: "Todavía no. <span lang=\"zh\">Chēzhàn zài nǎr? (车站在哪儿？)</span> significa «¿Dónde está la estación?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span>?",
                opciones: [
                  {
                    texto: "sigue derecho",
                    correcta: false
                  },
                  {
                    texto: "dobla a la izquierda",
                    correcta: true
                  },
                  {
                    texto: "¿Dónde está la estación?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span> significa «dobla a la izquierda».",
                error: "Todavía no. <span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span> significa «dobla a la izquierda». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «sigue derecho»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Chēzhàn zài nǎr? (车站在哪儿？)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Yìzhí zǒu (一直走)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Yìzhí zǒu (一直走)</span> significa «sigue derecho».",
                error: "Todavía no. <span lang=\"zh\">Yìzhí zǒu (一直走)</span> significa «sigue derecho». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 6,
        titulo: "Planes y comparaciones",
        descripcion: "Cuenta tus planes y compara personas y cosas.",
        nivel: "a2",
        lecciones: [
          {
            id: 10,
            titulo: "Planes futuros",
            descripcion: "Cuenta lo que vas a hacer",
            consejo: "<span lang=\"zh\">dǎsuàn (打算)</span> significa «planear», y <span lang=\"zh\">huì (会)</span> anuncia algo que va a ocurrir.",
            teoria: {
              titulo: "Aprende a hablar del futuro",
              html: "<p>Estas frases te permiten contar tus planes.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ dǎsuàn qù Běijīng (我打算去北京)</span> <span>→ planeo ir a Pekín</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span> <span>→ ella planea estudiar</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Míngtiān huì xià yǔ (明天会下雨)</span> <span>→ mañana va a llover</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «planeo ir a Pekín»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Míngtiān huì xià yǔ (明天会下雨)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ dǎsuàn qù Běijīng (我打算去北京)</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ dǎsuàn qù Běijīng (我打算去北京)</span> significa «planeo ir a Pekín».",
                error: "Todavía no. <span lang=\"zh\">Wǒ dǎsuàn qù Běijīng (我打算去北京)</span> significa «planeo ir a Pekín». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span>?",
                opciones: [
                  {
                    texto: "planeo ir a Pekín",
                    correcta: false
                  },
                  {
                    texto: "mañana va a llover",
                    correcta: false
                  },
                  {
                    texto: "ella planea estudiar",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span> significa «ella planea estudiar».",
                error: "Todavía no. <span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span> significa «ella planea estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «mañana va a llover»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ dǎsuàn qù Běijīng (我打算去北京)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Míngtiān huì xià yǔ (明天会下雨)</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Míngtiān huì xià yǔ (明天会下雨)</span> significa «mañana va a llover».",
                error: "Todavía no. <span lang=\"zh\">Míngtiān huì xià yǔ (明天会下雨)</span> significa «mañana va a llover». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 11,
            titulo: "Comparaciones",
            descripcion: "Compara personas y cosas",
            consejo: "La comparación se forma con <span lang=\"zh\">bǐ (比)</span>: A + 比 + B + adjetivo.",
            teoria: {
              titulo: "Aprende a comparar",
              html: "<p>Estas estructuras sirven para decir qué es más grande, más caro o mejor.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ bǐ tā gāo (我比他高)</span> <span>→ soy más alto que él</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span> <span>→ este es más caro que aquel</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">zuì hǎo (最好)</span> <span>→ el mejor</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «soy más alto que él»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Wǒ bǐ tā gāo (我比他高)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">zuì hǎo (最好)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ bǐ tā gāo (我比他高)</span> significa «soy más alto que él».",
                error: "Todavía no. <span lang=\"zh\">Wǒ bǐ tā gāo (我比他高)</span> significa «soy más alto que él». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span>?",
                opciones: [
                  {
                    texto: "este es más caro que aquel",
                    correcta: true
                  },
                  {
                    texto: "soy más alto que él",
                    correcta: false
                  },
                  {
                    texto: "el mejor",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span> significa «este es más caro que aquel».",
                error: "Todavía no. <span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span> significa «este es más caro que aquel». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «el mejor»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">zuì hǎo (最好)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ bǐ tā gāo (我比他高)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">zuì hǎo (最好)</span> significa «el mejor».",
                error: "Todavía no. <span lang=\"zh\">zuì hǎo (最好)</span> significa «el mejor». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 7,
        titulo: "Opiniones y consejos",
        descripcion: "Expresa lo que piensas y da consejos.",
        nivel: "b1",
        lecciones: [
          {
            id: 12,
            titulo: "Dar tu opinión",
            descripcion: "Expresa lo que piensas",
            consejo: "<span lang=\"zh\">juéde (觉得)</span> significa «creer» o «parecer» cuando se da una opinión.",
            teoria: {
              titulo: "Aprende a opinar",
              html: "<p>Con estas frases puedes dar tu opinión y decir si estás de acuerdo.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ juéde hěn hǎo (我觉得很好)</span> <span>→ creo que está muy bien</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ tóngyì (我同意)</span> <span>→ estoy de acuerdo</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ bù tóngyì (我不同意)</span> <span>→ no estoy de acuerdo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «creo que está muy bien»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Wǒ tóngyì (我同意)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ juéde hěn hǎo (我觉得很好)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ bù tóngyì (我不同意)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ juéde hěn hǎo (我觉得很好)</span> significa «creo que está muy bien».",
                error: "Todavía no. <span lang=\"zh\">Wǒ juéde hěn hǎo (我觉得很好)</span> significa «creo que está muy bien». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"zh\">Wǒ tóngyì (我同意)</span>?",
                opciones: [
                  {
                    texto: "no estoy de acuerdo",
                    correcta: false
                  },
                  {
                    texto: "estoy de acuerdo",
                    correcta: true
                  },
                  {
                    texto: "creo que está muy bien",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ tóngyì (我同意)</span> significa «estoy de acuerdo».",
                error: "Todavía no. <span lang=\"zh\">Wǒ tóngyì (我同意)</span> significa «estoy de acuerdo». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «no estoy de acuerdo»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Wǒ juéde hěn hǎo (我觉得很好)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ bù tóngyì (我不同意)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ tóngyì (我同意)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ bù tóngyì (我不同意)</span> significa «no estoy de acuerdo».",
                error: "Todavía no. <span lang=\"zh\">Wǒ bù tóngyì (我不同意)</span> significa «no estoy de acuerdo». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 13,
            titulo: "Consejos y deseos",
            descripcion: "Aconseja y habla de lo que te gustaría",
            consejo: "<span lang=\"zh\">yīnggāi (应该)</span> da consejos, y <span lang=\"zh\">rúguǒ (如果)</span> significa «si».",
            teoria: {
              titulo: "Aprende a aconsejar",
              html: "<p>Estas frases sirven para dar consejos y hablar de situaciones posibles.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Nǐ yīnggāi xuéxí (你应该学习)</span> <span>→ deberías estudiar</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span> <span>→ si tengo tiempo, voy a viajar</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ xiǎng qù Zhōngguó (我想去中国)</span> <span>→ me gustaría ir a China</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «deberías estudiar»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Wǒ xiǎng qù Zhōngguó (我想去中国)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Nǐ yīnggāi xuéxí (你应该学习)</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Nǐ yīnggāi xuéxí (你应该学习)</span> significa «deberías estudiar».",
                error: "Todavía no. <span lang=\"zh\">Nǐ yīnggāi xuéxí (你应该学习)</span> significa «deberías estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span>?",
                opciones: [
                  {
                    texto: "deberías estudiar",
                    correcta: false
                  },
                  {
                    texto: "me gustaría ir a China",
                    correcta: false
                  },
                  {
                    texto: "si tengo tiempo, voy a viajar",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span> significa «si tengo tiempo, voy a viajar».",
                error: "Todavía no. <span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span> significa «si tengo tiempo, voy a viajar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «me gustaría ir a China»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Nǐ yīnggāi xuéxí (你应该学习)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ xiǎng qù Zhōngguó (我想去中国)</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ xiǎng qù Zhōngguó (我想去中国)</span> significa «me gustaría ir a China».",
                error: "Todavía no. <span lang=\"zh\">Wǒ xiǎng qù Zhōngguó (我想去中国)</span> significa «me gustaría ir a China». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 8,
        titulo: "Experiencias y trabajo",
        descripcion: "Habla de tu vida, tus estudios y tu trabajo.",
        nivel: "b1",
        lecciones: [
          {
            id: 14,
            titulo: "Experiencias",
            descripcion: "Cuenta lo que hiciste en tu vida",
            consejo: "<span lang=\"zh\">guo (过)</span> va después del verbo e indica una experiencia vivida.",
            teoria: {
              titulo: "Aprende a contar experiencias",
              html: "<p>Estas frases te permiten hablar de lo que hiciste, o nunca hiciste, en tu vida.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Nǐ qùguo Běijīng ma? (你去过北京吗？)</span> <span>→ ¿Alguna vez fuiste a Pekín?</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span> <span>→ probé los jiaozi</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ méi qùguo (我没去过)</span> <span>→ nunca fui</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Alguna vez fuiste a Pekín?»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Nǐ qùguo Běijīng ma? (你去过北京吗？)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ méi qùguo (我没去过)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Nǐ qùguo Běijīng ma? (你去过北京吗？)</span> significa «¿Alguna vez fuiste a Pekín?».",
                error: "Todavía no. <span lang=\"zh\">Nǐ qùguo Běijīng ma? (你去过北京吗？)</span> significa «¿Alguna vez fuiste a Pekín?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span>?",
                opciones: [
                  {
                    texto: "probé los jiaozi",
                    correcta: true
                  },
                  {
                    texto: "¿Alguna vez fuiste a Pekín?",
                    correcta: false
                  },
                  {
                    texto: "nunca fui",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span> significa «probé los jiaozi».",
                error: "Todavía no. <span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span> significa «probé los jiaozi». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nunca fui»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Wǒ méi qùguo (我没去过)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Nǐ qùguo Běijīng ma? (你去过北京吗？)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ méi qùguo (我没去过)</span> significa «nunca fui».",
                error: "Todavía no. <span lang=\"zh\">Wǒ méi qùguo (我没去过)</span> significa «nunca fui». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 15,
            titulo: "Trabajo y estudios",
            descripcion: "Habla de tu trabajo y tu búsqueda laboral",
            consejo: "<span lang=\"zh\">zài (在)</span> antes de un verbo indica una acción en curso, como en <span lang=\"zh\">zài zhǎo (在找)</span>.",
            teoria: {
              titulo: "Aprende a hablar de trabajo",
              html: "<p>Estas frases son útiles para una entrevista o para presentarte en el trabajo.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ zài gōngsī gōngzuò (我在公司工作)</span> <span>→ trabajo en una empresa</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span> <span>→ soy responsable de ventas</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ zài zhǎo gōngzuò (我在找工作)</span> <span>→ estoy buscando trabajo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «trabajo en una empresa»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ zài gōngsī gōngzuò (我在公司工作)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ zài zhǎo gōngzuò (我在找工作)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ zài gōngsī gōngzuò (我在公司工作)</span> significa «trabajo en una empresa».",
                error: "Todavía no. <span lang=\"zh\">Wǒ zài gōngsī gōngzuò (我在公司工作)</span> significa «trabajo en una empresa». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span>?",
                opciones: [
                  {
                    texto: "estoy buscando trabajo",
                    correcta: false
                  },
                  {
                    texto: "soy responsable de ventas",
                    correcta: true
                  },
                  {
                    texto: "trabajo en una empresa",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span> significa «soy responsable de ventas».",
                error: "Todavía no. <span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span> significa «soy responsable de ventas». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy buscando trabajo»?",
                opciones: [
                  {
                    texto: "<span lang=\"zh\">Wǒ zài gōngsī gōngzuò (我在公司工作)</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ zài zhǎo gōngzuò (我在找工作)</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"zh\">Wǒ zài zhǎo gōngzuò (我在找工作)</span> significa «estoy buscando trabajo».",
                error: "Todavía no. <span lang=\"zh\">Wǒ zài zhǎo gōngzuò (我在找工作)</span> significa «estoy buscando trabajo». Puedes elegir otra opción."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "frances",
    nombre: "Francés",
    nombreCompleto: "Francés desde Español",
    codigoIdioma: "fr",
    descripcion: "La lengua de la diplomacia, el arte y la gastronomía, hablada en cinco continentes.",
    niveles: [
      {
        id: "a1",
        nombre: "A1",
        titulo: "Principiante"
      },
      {
        id: "a2",
        nombre: "A2",
        titulo: "Elemental"
      },
      {
        id: "b1",
        nombre: "B1",
        titulo: "Intermedio"
      }
    ],
    unidades: [
      {
        id: 1,
        titulo: "Saludos y presentaciones",
        descripcion: "Saluda y presenta quién eres.",
        nivel: "a1",
        lecciones: [
          {
            id: 1,
            titulo: "Saludos y presentaciones",
            descripcion: "Aprende <span lang=\"fr\">Bonjour</span>, <span lang=\"fr\">Bonsoir</span> y <span lang=\"fr\">Je m'appelle</span>",
            consejo: "<span lang=\"fr\">Bonjour</span> se usa durante el día y <span lang=\"fr\">Bonsoir</span> desde la tarde. Para despedirte puedes decir <span lang=\"fr\">Au revoir</span>.",
            teoria: {
              titulo: "Aprende a saludar y presentarte",
              html: "<p>Para presentarte, puedes decir <span lang=\"fr\">Je m'appelle Ana</span>, que significa «me llamo Ana».</p><p class=\"ejemplo-frances\"><span lang=\"fr\">Bonjour</span> <span>→ buenos días / hola</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Bonsoir</span> <span>→ buenas noches (al llegar)</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je m'appelle...</span> <span>→ me llamo...</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">Bonjour</span>?",
                opciones: [
                  {
                    texto: "Adiós",
                    correcta: false
                  },
                  {
                    texto: "Buenos días",
                    correcta: true
                  },
                  {
                    texto: "Gracias",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Bonjour</span> significa «buenos días».",
                error: "Todavía no. <span lang=\"fr\">Bonjour</span> significa «buenos días». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «me llamo Ana»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Tu t'appelles Ana</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Il s'appelle Ana</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je m'appelle Ana</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Para hablar de ti se usa <span lang=\"fr\">Je m'appelle</span>.",
                error: "Todavía no. Para hablar de ti se usa <span lang=\"fr\">Je m'appelle</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué dirías al llegar a un lugar por la noche?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Bonsoir</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Merci</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Au revoir</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Por la noche se saluda con <span lang=\"fr\">Bonsoir</span>.",
                error: "Todavía no. Por la noche se saluda con <span lang=\"fr\">Bonsoir</span>. Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 2,
        titulo: "Gramática básica",
        descripcion: "Construye frases en presente y pasado.",
        nivel: "a1",
        lecciones: [
          {
            id: 2,
            titulo: "Verbo être",
            descripcion: "Aprende <span lang=\"fr\">je suis</span>, <span lang=\"fr\">tu es</span> y <span lang=\"fr\">elle est</span>",
            consejo: "El verbo <span lang=\"fr\">être</span> significa «ser» o «estar». Cambia con cada persona: <span lang=\"fr\">je suis</span>, <span lang=\"fr\">tu es</span>, <span lang=\"fr\">il est</span>, <span lang=\"fr\">nous sommes</span>.",
            teoria: {
              titulo: "Aprende el verbo être",
              html: "<p>Para decir quién eres, puedes usar <span lang=\"fr\">Je suis étudiant</span>.</p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je suis</span> <span>→ yo soy</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Tu es</span> <span>→ tú eres</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Elle est</span> <span>→ ella es</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Nous sommes</span> <span>→ nosotros somos</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «yo soy estudiante»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Je es étudiant</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je suis étudiant</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Je sont étudiant</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"fr\">je</span> se usa <span lang=\"fr\">suis</span>.",
                error: "Todavía no. Con <span lang=\"fr\">je</span> se usa <span lang=\"fr\">suis</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «ella es profesora»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Elle est professeure</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Elle es professeure</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Elle suis professeure</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"fr\">elle</span> se usa <span lang=\"fr\">est</span>.",
                error: "Todavía no. Con <span lang=\"fr\">elle</span> se usa <span lang=\"fr\">est</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nosotros somos amigos»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Nous êtes amis</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Nous est amis</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Nous sommes amis</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"fr\">nous</span> se usa <span lang=\"fr\">sommes</span>.",
                error: "Todavía no. Con <span lang=\"fr\">nous</span> se usa <span lang=\"fr\">sommes</span>. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 3,
            titulo: "El presente",
            descripcion: "Aprende <span lang=\"fr\">je parle</span> y <span lang=\"fr\">nous parlons</span>",
            consejo: "Los verbos terminados en -er, como <span lang=\"fr\">parler</span>, son los más comunes. Con <span lang=\"fr\">nous</span> terminan en -ons.",
            teoria: {
              titulo: "Aprende el presente",
              html: "<p>El verbo <span lang=\"fr\">parler</span> significa «hablar». Así se conjuga en presente:</p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je parle</span> <span>→ yo hablo</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Tu parles</span> <span>→ tú hablas</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Nous parlons</span> <span>→ nosotros hablamos</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «yo hablo francés»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Je parlons français</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je parle français</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Je parles français</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"fr\">je</span> el verbo termina en -e: <span lang=\"fr\">je parle</span>.",
                error: "Todavía no. Con <span lang=\"fr\">je</span> el verbo termina en -e: <span lang=\"fr\">je parle</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nosotros hablamos»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Nous parlons</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Nous parle</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Nous parles</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"fr\">nous</span> el verbo termina en -ons.",
                error: "Todavía no. Con <span lang=\"fr\">nous</span> el verbo termina en -ons. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «tú trabajas»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Tu travaillons</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Tu travaille</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Tu travailles</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"fr\">tu</span> el verbo termina en -es.",
                error: "Todavía no. Con <span lang=\"fr\">tu</span> el verbo termina en -es. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 4,
            titulo: "El pasado",
            descripcion: "Cuenta lo que hiciste con <span lang=\"fr\">j'ai parlé</span>",
            consejo: "El <span lang=\"fr\">passé composé</span> se forma con el verbo <span lang=\"fr\">avoir</span> y el participio: <span lang=\"fr\">j'ai mangé</span> significa «comí».",
            teoria: {
              titulo: "Aprende el pasado",
              html: "<p>Para contar algo que ya pasó, se usa <span lang=\"fr\">avoir</span> más el participio.</p><p class=\"ejemplo-frances\"><span lang=\"fr\">J'ai mangé</span> <span>→ comí</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Tu as travaillé</span> <span>→ trabajaste</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Nous avons parlé</span> <span>→ hablamos</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «comí»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Je mange</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">J'ai mangé</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Je vais manger</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">J'ai mangé</span> está en pasado; <span lang=\"fr\">je mange</span> está en presente.",
                error: "Todavía no. <span lang=\"fr\">J'ai mangé</span> está en pasado; <span lang=\"fr\">je mange</span> está en presente. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">Tu as travaillé</span>?",
                opciones: [
                  {
                    texto: "Trabajaste",
                    correcta: true
                  },
                  {
                    texto: "Trabajas",
                    correcta: false
                  },
                  {
                    texto: "Trabajarás",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Tu as travaillé</span> significa «trabajaste».",
                error: "Todavía no. <span lang=\"fr\">Tu as travaillé</span> significa «trabajaste». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «hablamos» en pasado?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Nous parlons</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Nous allons parler</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Nous avons parlé</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! El pasado se forma con <span lang=\"fr\">avons</span> y <span lang=\"fr\">parlé</span>.",
                error: "Todavía no. El pasado se forma con <span lang=\"fr\">avons</span> y <span lang=\"fr\">parlé</span>. Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        titulo: "Vida cotidiana",
        descripcion: "Habla de los números, la hora y tu familia.",
        nivel: "a1",
        lecciones: [
          {
            id: 5,
            titulo: "Números y la hora",
            descripcion: "Cuenta y di qué hora es",
            consejo: "Para decir la hora se usa <span lang=\"fr\">Il est</span> y la palabra <span lang=\"fr\">heures</span>: <span lang=\"fr\">Il est trois heures</span> significa «son las tres».",
            teoria: {
              titulo: "Aprende los números y la hora",
              html: "<p>Para preguntar la hora se dice <span lang=\"fr\">Quelle heure est-il ?</span>.</p><ul class=\"lista-vocabulario lista-numeros\"><li><strong lang=\"fr\">un</strong> <span>uno</span></li><li><strong lang=\"fr\">deux</strong> <span>dos</span></li><li><strong lang=\"fr\">trois</strong> <span>tres</span></li><li><strong lang=\"fr\">quatre</strong> <span>cuatro</span></li><li><strong lang=\"fr\">cinq</strong> <span>cinco</span></li><li><strong lang=\"fr\">six</strong> <span>seis</span></li><li><strong lang=\"fr\">sept</strong> <span>siete</span></li><li><strong lang=\"fr\">huit</strong> <span>ocho</span></li><li><strong lang=\"fr\">neuf</strong> <span>nueve</span></li><li><strong lang=\"fr\">dix</strong> <span>diez</span></li></ul><p class=\"ejemplo-frances\"><span lang=\"fr\">Quelle heure est-il ?</span> <span>→ ¿Qué hora es?</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Il est trois heures</span> <span>→ son las tres</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué número es <span lang=\"fr\">cinq</span>?",
                opciones: [
                  {
                    texto: "Cuatro",
                    correcta: false
                  },
                  {
                    texto: "Cinco",
                    correcta: true
                  },
                  {
                    texto: "Seis",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">cinq</span> significa «cinco».",
                error: "Todavía no. <span lang=\"fr\">cinq</span> significa «cinco». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «diez»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">dix</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">deux</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">six</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! «Diez» se dice <span lang=\"fr\">dix</span>; <span lang=\"fr\">deux</span> es «dos» y <span lang=\"fr\">six</span> es «seis».",
                error: "Todavía no. «Diez» se dice <span lang=\"fr\">dix</span>; <span lang=\"fr\">deux</span> es «dos» y <span lang=\"fr\">six</span> es «seis». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se pregunta la hora?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Comment tu t'appelles ?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Comment ça va ?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Quelle heure est-il ?</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Quelle heure est-il ?</span> significa «¿qué hora es?».",
                error: "Todavía no. <span lang=\"fr\">Quelle heure est-il ?</span> significa «¿qué hora es?». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 6,
            titulo: "Mi familia",
            descripcion: "Presenta a los miembros de tu familia",
            consejo: "«Mi» cambia según la palabra: <span lang=\"fr\">mon père</span> (mi padre), <span lang=\"fr\">ma mère</span> (mi madre) y <span lang=\"fr\">mes parents</span> (mis padres).",
            teoria: {
              titulo: "Aprende la familia",
              html: "<p>Para presentar a alguien, puedes decir <span lang=\"fr\">C'est ma sœur</span>, «es mi hermana».</p><ul class=\"lista-vocabulario\"><li><strong lang=\"fr\">le père</strong> <span>el padre</span></li><li><strong lang=\"fr\">la mère</strong> <span>la madre</span></li><li><strong lang=\"fr\">le frère</strong> <span>el hermano</span></li><li><strong lang=\"fr\">la sœur</strong> <span>la hermana</span></li></ul>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">la mère</span>?",
                opciones: [
                  {
                    texto: "La hermana",
                    correcta: false
                  },
                  {
                    texto: "La madre",
                    correcta: true
                  },
                  {
                    texto: "La hija",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">la mère</span> significa «la madre».",
                error: "Todavía no. <span lang=\"fr\">la mère</span> significa «la madre». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «mi hermano»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">mon frère</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">ma sœur</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">mon père</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! «Hermano» es <span lang=\"fr\">frère</span>: <span lang=\"fr\">mon frère</span>.",
                error: "Todavía no. «Hermano» es <span lang=\"fr\">frère</span>: <span lang=\"fr\">mon frère</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">C'est ma sœur</span>?",
                opciones: [
                  {
                    texto: "Es mi madre",
                    correcta: false
                  },
                  {
                    texto: "Es mi amiga",
                    correcta: false
                  },
                  {
                    texto: "Es mi hermana",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">ma sœur</span> significa «mi hermana».",
                error: "Todavía no. <span lang=\"fr\">ma sœur</span> significa «mi hermana». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 4,
        titulo: "Repaso",
        descripcion: "Combina lo aprendido en una conversación.",
        nivel: "a1",
        lecciones: [
          {
            id: 7,
            titulo: "Diálogo de repaso",
            descripcion: "Combina lo aprendido en una conversación",
            consejo: "<span lang=\"fr\">Comment ça va ?</span> significa «¿cómo estás?». Una respuesta habitual es <span lang=\"fr\">Ça va bien, merci</span>.",
            teoria: {
              titulo: "Lee el diálogo",
              html: "<p>Repasa lo aprendido con esta conversación entre dos personas.</p><dl class=\"dialogo-frances\"><dt>Léa</dt><dd lang=\"fr\">Bonjour ! Comment ça va ?</dd><dt>Marc</dt><dd lang=\"fr\">Ça va bien, merci. Et toi ?</dd><dt>Léa</dt><dd lang=\"fr\">Très bien. Comment tu t'appelles ?</dd><dt>Marc</dt><dd lang=\"fr\">Je m'appelle Marc. À bientôt !</dd></dl>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">Comment ça va ?</span>?",
                opciones: [
                  {
                    texto: "¿Cómo te llamas?",
                    correcta: false
                  },
                  {
                    texto: "¿Cómo estás?",
                    correcta: true
                  },
                  {
                    texto: "¿Qué hora es?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Comment ça va ?</span> significa «¿cómo estás?».",
                error: "Todavía no. <span lang=\"fr\">Comment ça va ?</span> significa «¿cómo estás?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo respondes «bien, gracias»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Ça va bien, merci</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Je m'appelle Marc</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Au revoir</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! La respuesta es <span lang=\"fr\">Ça va bien, merci</span>.",
                error: "Todavía no. La respuesta es <span lang=\"fr\">Ça va bien, merci</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">À bientôt</span>?",
                opciones: [
                  {
                    texto: "Buenos días",
                    correcta: false
                  },
                  {
                    texto: "Por favor",
                    correcta: false
                  },
                  {
                    texto: "Hasta pronto",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">À bientôt</span> significa «hasta pronto».",
                error: "Todavía no. <span lang=\"fr\">À bientôt</span> significa «hasta pronto». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 5,
        titulo: "Vida diaria",
        descripcion: "Desenvuélvete en un restaurante y en la calle.",
        nivel: "a2",
        lecciones: [
          {
            id: 8,
            titulo: "En el restaurante",
            descripcion: "Pide comida y pregunta precios",
            consejo: "<span lang=\"fr\">Je voudrais</span> es la forma cortés de pedir algo.",
            teoria: {
              titulo: "Aprende a pedir con cortesía",
              html: "<p>Estas frases te sirven para pedir algo en un restaurante o una tienda.</p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je voudrais un café</span> <span>→ quisiera un café</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">L'addition, s'il vous plaît</span> <span>→ la cuenta, por favor</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">C'est combien ?</span> <span>→ ¿Cuánto cuesta?</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «quisiera un café»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Je voudrais un café</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">C'est combien ?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">L'addition, s'il vous plaît</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Je voudrais un café</span> significa «quisiera un café».",
                error: "Todavía no. <span lang=\"fr\">Je voudrais un café</span> significa «quisiera un café». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">L'addition, s'il vous plaît</span>?",
                opciones: [
                  {
                    texto: "la cuenta, por favor",
                    correcta: true
                  },
                  {
                    texto: "quisiera un café",
                    correcta: false
                  },
                  {
                    texto: "¿Cuánto cuesta?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">L'addition, s'il vous plaît</span> significa «la cuenta, por favor».",
                error: "Todavía no. <span lang=\"fr\">L'addition, s'il vous plaît</span> significa «la cuenta, por favor». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Cuánto cuesta?»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">C'est combien ?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">L'addition, s'il vous plaît</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je voudrais un café</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">C'est combien ?</span> significa «¿Cuánto cuesta?».",
                error: "Todavía no. <span lang=\"fr\">C'est combien ?</span> significa «¿Cuánto cuesta?». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 9,
            titulo: "Cómo llegar",
            descripcion: "Pregunta y entiende direcciones",
            consejo: "<span lang=\"fr\">à gauche</span> significa «a la izquierda» y <span lang=\"fr\">à droite</span> significa «a la derecha».",
            teoria: {
              titulo: "Aprende a orientarte",
              html: "<p>Con estas frases puedes preguntar dónde queda un lugar y seguir indicaciones.</p><p class=\"ejemplo-frances\"><span lang=\"fr\">Où est la gare ?</span> <span>→ ¿Dónde está la estación?</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Tournez à gauche</span> <span>→ doble a la izquierda</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Allez tout droit</span> <span>→ siga derecho</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Dónde está la estación?»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Tournez à gauche</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Où est la gare ?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Allez tout droit</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Où est la gare ?</span> significa «¿Dónde está la estación?».",
                error: "Todavía no. <span lang=\"fr\">Où est la gare ?</span> significa «¿Dónde está la estación?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">Tournez à gauche</span>?",
                opciones: [
                  {
                    texto: "siga derecho",
                    correcta: false
                  },
                  {
                    texto: "doble a la izquierda",
                    correcta: true
                  },
                  {
                    texto: "¿Dónde está la estación?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Tournez à gauche</span> significa «doble a la izquierda».",
                error: "Todavía no. <span lang=\"fr\">Tournez à gauche</span> significa «doble a la izquierda». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «siga derecho»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Où est la gare ?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Allez tout droit</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Tournez à gauche</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Allez tout droit</span> significa «siga derecho».",
                error: "Todavía no. <span lang=\"fr\">Allez tout droit</span> significa «siga derecho». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 6,
        titulo: "Planes y comparaciones",
        descripcion: "Cuenta tus planes y compara personas y cosas.",
        nivel: "a2",
        lecciones: [
          {
            id: 10,
            titulo: "Planes futuros",
            descripcion: "Cuenta lo que vas a hacer",
            consejo: "El futuro cercano se forma con <span lang=\"fr\">aller</span> más el verbo en infinitivo.",
            teoria: {
              titulo: "Aprende a hablar del futuro",
              html: "<p>Estas frases te permiten contar tus planes.</p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je vais voyager</span> <span>→ voy a viajar</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Elle va étudier</span> <span>→ ella va a estudiar</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Nous allons manger</span> <span>→ vamos a comer</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «voy a viajar»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Nous allons manger</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Elle va étudier</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je vais voyager</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Je vais voyager</span> significa «voy a viajar».",
                error: "Todavía no. <span lang=\"fr\">Je vais voyager</span> significa «voy a viajar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">Elle va étudier</span>?",
                opciones: [
                  {
                    texto: "voy a viajar",
                    correcta: false
                  },
                  {
                    texto: "vamos a comer",
                    correcta: false
                  },
                  {
                    texto: "ella va a estudiar",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Elle va étudier</span> significa «ella va a estudiar».",
                error: "Todavía no. <span lang=\"fr\">Elle va étudier</span> significa «ella va a estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «vamos a comer»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Elle va étudier</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je vais voyager</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Nous allons manger</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Nous allons manger</span> significa «vamos a comer».",
                error: "Todavía no. <span lang=\"fr\">Nous allons manger</span> significa «vamos a comer». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 11,
            titulo: "Comparaciones",
            descripcion: "Compara personas y cosas",
            consejo: "Para comparar se usa <span lang=\"fr\">plus</span> + adjetivo + <span lang=\"fr\">que</span>.",
            teoria: {
              titulo: "Aprende a comparar",
              html: "<p>Estas estructuras sirven para decir qué es más grande, más caro o mejor.</p><p class=\"ejemplo-frances\"><span lang=\"fr\">plus grand que</span> <span>→ más grande que</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">plus cher que</span> <span>→ más caro que</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">le meilleur</span> <span>→ el mejor</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «más grande que»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">plus grand que</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">le meilleur</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">plus cher que</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">plus grand que</span> significa «más grande que».",
                error: "Todavía no. <span lang=\"fr\">plus grand que</span> significa «más grande que». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">plus cher que</span>?",
                opciones: [
                  {
                    texto: "más caro que",
                    correcta: true
                  },
                  {
                    texto: "más grande que",
                    correcta: false
                  },
                  {
                    texto: "el mejor",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">plus cher que</span> significa «más caro que».",
                error: "Todavía no. <span lang=\"fr\">plus cher que</span> significa «más caro que». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «el mejor»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">le meilleur</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">plus cher que</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">plus grand que</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">le meilleur</span> significa «el mejor».",
                error: "Todavía no. <span lang=\"fr\">le meilleur</span> significa «el mejor». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 7,
        titulo: "Opiniones y consejos",
        descripcion: "Expresa lo que piensas y da consejos.",
        nivel: "b1",
        lecciones: [
          {
            id: 12,
            titulo: "Dar tu opinión",
            descripcion: "Expresa lo que piensas",
            consejo: "<span lang=\"fr\">À mon avis</span> y <span lang=\"fr\">Je pense que</span> presentan tu opinión.",
            teoria: {
              titulo: "Aprende a opinar",
              html: "<p>Con estas frases puedes dar tu opinión y decir si estás de acuerdo.</p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je pense que c'est bien</span> <span>→ creo que está bien</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">À mon avis</span> <span>→ en mi opinión</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je suis d'accord</span> <span>→ estoy de acuerdo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «creo que está bien»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">À mon avis</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je pense que c'est bien</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Je suis d'accord</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Je pense que c'est bien</span> significa «creo que está bien».",
                error: "Todavía no. <span lang=\"fr\">Je pense que c'est bien</span> significa «creo que está bien». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">À mon avis</span>?",
                opciones: [
                  {
                    texto: "estoy de acuerdo",
                    correcta: false
                  },
                  {
                    texto: "en mi opinión",
                    correcta: true
                  },
                  {
                    texto: "creo que está bien",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">À mon avis</span> significa «en mi opinión».",
                error: "Todavía no. <span lang=\"fr\">À mon avis</span> significa «en mi opinión». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy de acuerdo»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Je pense que c'est bien</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je suis d'accord</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">À mon avis</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Je suis d'accord</span> significa «estoy de acuerdo».",
                error: "Todavía no. <span lang=\"fr\">Je suis d'accord</span> significa «estoy de acuerdo». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 13,
            titulo: "Consejos y deseos",
            descripcion: "Aconseja y habla de lo que te gustaría",
            consejo: "<span lang=\"fr\">Tu devrais</span> da un consejo. Después de <span lang=\"fr\">si</span> + imperfecto se usa el condicional.",
            teoria: {
              titulo: "Aprende a aconsejar",
              html: "<p>Estas frases sirven para dar consejos y hablar de situaciones posibles.</p><p class=\"ejemplo-frances\"><span lang=\"fr\">Tu devrais étudier</span> <span>→ deberías estudiar</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Si j'avais le temps, je voyagerais</span> <span>→ si tuviera tiempo, viajaría</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">J'aimerais apprendre</span> <span>→ me gustaría aprender</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «deberías estudiar»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">J'aimerais apprendre</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Si j'avais le temps, je voyagerais</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Tu devrais étudier</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Tu devrais étudier</span> significa «deberías estudiar».",
                error: "Todavía no. <span lang=\"fr\">Tu devrais étudier</span> significa «deberías estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">Si j'avais le temps, je voyagerais</span>?",
                opciones: [
                  {
                    texto: "deberías estudiar",
                    correcta: false
                  },
                  {
                    texto: "me gustaría aprender",
                    correcta: false
                  },
                  {
                    texto: "si tuviera tiempo, viajaría",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Si j'avais le temps, je voyagerais</span> significa «si tuviera tiempo, viajaría».",
                error: "Todavía no. <span lang=\"fr\">Si j'avais le temps, je voyagerais</span> significa «si tuviera tiempo, viajaría». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «me gustaría aprender»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Si j'avais le temps, je voyagerais</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Tu devrais étudier</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">J'aimerais apprendre</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">J'aimerais apprendre</span> significa «me gustaría aprender».",
                error: "Todavía no. <span lang=\"fr\">J'aimerais apprendre</span> significa «me gustaría aprender». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 8,
        titulo: "Experiencias y trabajo",
        descripcion: "Habla de tu vida, tus estudios y tu trabajo.",
        nivel: "b1",
        lecciones: [
          {
            id: 14,
            titulo: "Experiencias",
            descripcion: "Cuenta lo que hiciste en tu vida",
            consejo: "Los verbos de movimiento, como <span lang=\"fr\">aller</span>, forman el pasado con <span lang=\"fr\">être</span>: <span lang=\"fr\">je suis allé</span>.",
            teoria: {
              titulo: "Aprende a contar experiencias",
              html: "<p>Estas frases te permiten hablar de lo que hiciste, o nunca hiciste, en tu vida.</p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je suis allé à Paris</span> <span>→ fui a París</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">J'ai visité Rome</span> <span>→ visité Roma</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je n'ai jamais mangé ça</span> <span>→ nunca comí eso</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «fui a París»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Je suis allé à Paris</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Je n'ai jamais mangé ça</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">J'ai visité Rome</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Je suis allé à Paris</span> significa «fui a París».",
                error: "Todavía no. <span lang=\"fr\">Je suis allé à Paris</span> significa «fui a París». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">J'ai visité Rome</span>?",
                opciones: [
                  {
                    texto: "visité Roma",
                    correcta: true
                  },
                  {
                    texto: "fui a París",
                    correcta: false
                  },
                  {
                    texto: "nunca comí eso",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">J'ai visité Rome</span> significa «visité Roma».",
                error: "Todavía no. <span lang=\"fr\">J'ai visité Rome</span> significa «visité Roma». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nunca comí eso»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Je n'ai jamais mangé ça</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">J'ai visité Rome</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je suis allé à Paris</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Je n'ai jamais mangé ça</span> significa «nunca comí eso».",
                error: "Todavía no. <span lang=\"fr\">Je n'ai jamais mangé ça</span> significa «nunca comí eso». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 15,
            titulo: "Trabajo y estudios",
            descripcion: "Habla de tu trabajo y tu búsqueda laboral",
            consejo: "<span lang=\"fr\">Depuis</span> indica desde cuándo sucede algo, y el verbo va en presente.",
            teoria: {
              titulo: "Aprende a hablar de trabajo",
              html: "<p>Estas frases son útiles para una entrevista o para presentarte en el trabajo.</p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je travaille ici depuis deux ans</span> <span>→ trabajo aquí desde hace dos años</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je suis responsable des ventes</span> <span>→ soy responsable de ventas</span></p><p class=\"ejemplo-frances\"><span lang=\"fr\">Je cherche un emploi</span> <span>→ estoy buscando trabajo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «trabajo aquí desde hace dos años»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Je suis responsable des ventes</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je travaille ici depuis deux ans</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Je cherche un emploi</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Je travaille ici depuis deux ans</span> significa «trabajo aquí desde hace dos años».",
                error: "Todavía no. <span lang=\"fr\">Je travaille ici depuis deux ans</span> significa «trabajo aquí desde hace dos años». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"fr\">Je suis responsable des ventes</span>?",
                opciones: [
                  {
                    texto: "estoy buscando trabajo",
                    correcta: false
                  },
                  {
                    texto: "soy responsable de ventas",
                    correcta: true
                  },
                  {
                    texto: "trabajo aquí desde hace dos años",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Je suis responsable des ventes</span> significa «soy responsable de ventas».",
                error: "Todavía no. <span lang=\"fr\">Je suis responsable des ventes</span> significa «soy responsable de ventas». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy buscando trabajo»?",
                opciones: [
                  {
                    texto: "<span lang=\"fr\">Je travaille ici depuis deux ans</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"fr\">Je cherche un emploi</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"fr\">Je suis responsable des ventes</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"fr\">Je cherche un emploi</span> significa «estoy buscando trabajo».",
                error: "Todavía no. <span lang=\"fr\">Je cherche un emploi</span> significa «estoy buscando trabajo». Puedes elegir otra opción."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "italiano",
    nombre: "Italiano",
    nombreCompleto: "Italiano desde Español",
    codigoIdioma: "it",
    descripcion: "Un idioma cercano al español, ideal para descubrir el arte, la música y la cocina de Italia.",
    niveles: [
      {
        id: "a1",
        nombre: "A1",
        titulo: "Principiante"
      },
      {
        id: "a2",
        nombre: "A2",
        titulo: "Elemental"
      },
      {
        id: "b1",
        nombre: "B1",
        titulo: "Intermedio"
      }
    ],
    unidades: [
      {
        id: 1,
        titulo: "Saludos y presentaciones",
        descripcion: "Saluda y presenta quién eres.",
        nivel: "a1",
        lecciones: [
          {
            id: 1,
            titulo: "Saludos y presentaciones",
            descripcion: "Aprende <span lang=\"it\">Buongiorno</span>, <span lang=\"it\">Ciao</span> y <span lang=\"it\">Mi chiamo</span>",
            consejo: "<span lang=\"it\">Ciao</span> es informal y sirve para saludar y para despedirse. <span lang=\"it\">Buongiorno</span> se usa por la mañana y <span lang=\"it\">Buonasera</span> desde la tarde.",
            teoria: {
              titulo: "Aprende a saludar y presentarte",
              html: "<p>Para presentarte, puedes decir <span lang=\"it\">Mi chiamo Ana</span>, que significa «me llamo Ana».</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Ciao</span> <span>→ hola / chau</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Buongiorno</span> <span>→ buenos días</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Mi chiamo...</span> <span>→ me llamo...</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Buongiorno</span>?",
                opciones: [
                  {
                    texto: "Gracias",
                    correcta: false
                  },
                  {
                    texto: "Buenos días",
                    correcta: true
                  },
                  {
                    texto: "Adiós",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Buongiorno</span> significa «buenos días».",
                error: "Todavía no. <span lang=\"it\">Buongiorno</span> significa «buenos días». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «me llamo Ana»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Mi chiamo Ana</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Ti chiami Ana</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Si chiama Ana</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Para hablar de ti se usa <span lang=\"it\">Mi chiamo</span>.",
                error: "Todavía no. Para hablar de ti se usa <span lang=\"it\">Mi chiamo</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué saludo usarías por la tarde?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Grazie</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Arrivederci</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Buonasera</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Desde la tarde se saluda con <span lang=\"it\">Buonasera</span>.",
                error: "Todavía no. Desde la tarde se saluda con <span lang=\"it\">Buonasera</span>. Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 2,
        titulo: "Gramática básica",
        descripcion: "Construye frases en presente y pasado.",
        nivel: "a1",
        lecciones: [
          {
            id: 2,
            titulo: "Verbo essere",
            descripcion: "Aprende <span lang=\"it\">io sono</span>, <span lang=\"it\">tu sei</span> y <span lang=\"it\">lei è</span>",
            consejo: "El verbo <span lang=\"it\">essere</span> significa «ser». Cambia con cada persona: <span lang=\"it\">io sono</span>, <span lang=\"it\">tu sei</span>, <span lang=\"it\">lei è</span>, <span lang=\"it\">noi siamo</span>.",
            teoria: {
              titulo: "Aprende el verbo essere",
              html: "<p>Para decir quién eres, puedes usar <span lang=\"it\">Io sono studente</span>.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Io sono</span> <span>→ yo soy</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Tu sei</span> <span>→ tú eres</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Lei è</span> <span>→ ella es</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Noi siamo</span> <span>→ nosotros somos</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «yo soy estudiante»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Io è studente</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Io sei studente</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Io sono studente</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"it\">io</span> se usa <span lang=\"it\">sono</span>.",
                error: "Todavía no. Con <span lang=\"it\">io</span> se usa <span lang=\"it\">sono</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «ella es profesora»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Lei è professoressa</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Lei sei professoressa</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Lei siamo professoressa</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"it\">lei</span> se usa <span lang=\"it\">è</span>.",
                error: "Todavía no. Con <span lang=\"it\">lei</span> se usa <span lang=\"it\">è</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nosotros somos amigos»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Noi sono amici</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Noi siamo amici</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Noi è amici</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"it\">noi</span> se usa <span lang=\"it\">siamo</span>.",
                error: "Todavía no. Con <span lang=\"it\">noi</span> se usa <span lang=\"it\">siamo</span>. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 3,
            titulo: "El presente",
            descripcion: "Aprende <span lang=\"it\">io parlo</span> y <span lang=\"it\">noi parliamo</span>",
            consejo: "Los verbos terminados en -are, como <span lang=\"it\">parlare</span>, terminan en -o con <span lang=\"it\">io</span> y en -iamo con <span lang=\"it\">noi</span>.",
            teoria: {
              titulo: "Aprende el presente",
              html: "<p>El verbo <span lang=\"it\">parlare</span> significa «hablar». Así se conjuga en presente:</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Io parlo</span> <span>→ yo hablo</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Tu parli</span> <span>→ tú hablas</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Noi parliamo</span> <span>→ nosotros hablamos</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «yo hablo italiano»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Io parlo italiano</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Io parli italiano</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Io parliamo italiano</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"it\">io</span> el verbo termina en -o.",
                error: "Todavía no. Con <span lang=\"it\">io</span> el verbo termina en -o. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nosotros hablamos»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Noi parlo</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Noi parli</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Noi parliamo</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"it\">noi</span> el verbo termina en -iamo.",
                error: "Todavía no. Con <span lang=\"it\">noi</span> el verbo termina en -iamo. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «tú trabajas»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Tu lavoro</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Tu lavori</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Tu lavoriamo</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"it\">tu</span> el verbo termina en -i.",
                error: "Todavía no. Con <span lang=\"it\">tu</span> el verbo termina en -i. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 4,
            titulo: "El pasado",
            descripcion: "Cuenta lo que hiciste con <span lang=\"it\">ho parlato</span>",
            consejo: "El <span lang=\"it\">passato prossimo</span> se forma con <span lang=\"it\">avere</span> y el participio: <span lang=\"it\">ho mangiato</span> significa «comí».",
            teoria: {
              titulo: "Aprende el pasado",
              html: "<p>Para contar algo que ya pasó, se usa <span lang=\"it\">avere</span> más el participio.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Ho mangiato</span> <span>→ comí</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Hai lavorato</span> <span>→ trabajaste</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Abbiamo parlato</span> <span>→ hablamos</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «comí»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Ho mangiato</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Mangio</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Mangerò</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Ho mangiato</span> está en pasado; <span lang=\"it\">mangio</span> está en presente.",
                error: "Todavía no. <span lang=\"it\">Ho mangiato</span> está en pasado; <span lang=\"it\">mangio</span> está en presente. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Hai lavorato</span>?",
                opciones: [
                  {
                    texto: "Trabajas",
                    correcta: false
                  },
                  {
                    texto: "Trabajarás",
                    correcta: false
                  },
                  {
                    texto: "Trabajaste",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Hai lavorato</span> significa «trabajaste».",
                error: "Todavía no. <span lang=\"it\">Hai lavorato</span> significa «trabajaste». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «hablamos» en pasado?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Parliamo</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Abbiamo parlato</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Parleremo</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! El pasado se forma con <span lang=\"it\">abbiamo</span> y <span lang=\"it\">parlato</span>.",
                error: "Todavía no. El pasado se forma con <span lang=\"it\">abbiamo</span> y <span lang=\"it\">parlato</span>. Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        titulo: "Vida cotidiana",
        descripcion: "Habla de los números, la hora y tu familia.",
        nivel: "a1",
        lecciones: [
          {
            id: 5,
            titulo: "Números y la hora",
            descripcion: "Cuenta y di qué hora es",
            consejo: "Para decir la hora se usa <span lang=\"it\">Sono le</span>: <span lang=\"it\">Sono le tre</span> significa «son las tres». A la una se dice <span lang=\"it\">È l'una</span>.",
            teoria: {
              titulo: "Aprende los números y la hora",
              html: "<p>Para preguntar la hora se dice <span lang=\"it\">Che ore sono?</span>.</p><ul class=\"lista-vocabulario lista-numeros\"><li><strong lang=\"it\">uno</strong> <span>uno</span></li><li><strong lang=\"it\">due</strong> <span>dos</span></li><li><strong lang=\"it\">tre</strong> <span>tres</span></li><li><strong lang=\"it\">quattro</strong> <span>cuatro</span></li><li><strong lang=\"it\">cinque</strong> <span>cinco</span></li><li><strong lang=\"it\">sei</strong> <span>seis</span></li><li><strong lang=\"it\">sette</strong> <span>siete</span></li><li><strong lang=\"it\">otto</strong> <span>ocho</span></li><li><strong lang=\"it\">nove</strong> <span>nueve</span></li><li><strong lang=\"it\">dieci</strong> <span>diez</span></li></ul><p class=\"ejemplo-italiano\"><span lang=\"it\">Che ore sono?</span> <span>→ ¿Qué hora es?</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Sono le tre</span> <span>→ son las tres</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué número es <span lang=\"it\">cinque</span>?",
                opciones: [
                  {
                    texto: "Cuatro",
                    correcta: false
                  },
                  {
                    texto: "Seis",
                    correcta: false
                  },
                  {
                    texto: "Cinco",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">cinque</span> significa «cinco».",
                error: "Todavía no. <span lang=\"it\">cinque</span> significa «cinco». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «diez»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">dieci</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">due</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">sei</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! «Diez» se dice <span lang=\"it\">dieci</span>; <span lang=\"it\">due</span> es «dos» y <span lang=\"it\">sei</span> es «seis».",
                error: "Todavía no. «Diez» se dice <span lang=\"it\">dieci</span>; <span lang=\"it\">due</span> es «dos» y <span lang=\"it\">sei</span> es «seis». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se pregunta la hora?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Come ti chiami?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Che ore sono?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Come stai?</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Che ore sono?</span> significa «¿qué hora es?».",
                error: "Todavía no. <span lang=\"it\">Che ore sono?</span> significa «¿qué hora es?». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 6,
            titulo: "Mi familia",
            descripcion: "Presenta a los miembros de tu familia",
            consejo: "«Mi» cambia según la palabra: <span lang=\"it\">mio padre</span> (mi padre) y <span lang=\"it\">mia madre</span> (mi madre).",
            teoria: {
              titulo: "Aprende la familia",
              html: "<p>Para presentar a alguien, puedes decir <span lang=\"it\">Questa è mia sorella</span>, «esta es mi hermana».</p><ul class=\"lista-vocabulario\"><li><strong lang=\"it\">il padre</strong> <span>el padre</span></li><li><strong lang=\"it\">la madre</strong> <span>la madre</span></li><li><strong lang=\"it\">il fratello</strong> <span>el hermano</span></li><li><strong lang=\"it\">la sorella</strong> <span>la hermana</span></li></ul>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">la sorella</span>?",
                opciones: [
                  {
                    texto: "La madre",
                    correcta: false
                  },
                  {
                    texto: "La hermana",
                    correcta: true
                  },
                  {
                    texto: "La abuela",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">la sorella</span> significa «la hermana».",
                error: "Todavía no. <span lang=\"it\">la sorella</span> significa «la hermana». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «mi hermano»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">mia sorella</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">mio padre</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">mio fratello</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! «Hermano» es <span lang=\"it\">fratello</span>: <span lang=\"it\">mio fratello</span>.",
                error: "Todavía no. «Hermano» es <span lang=\"it\">fratello</span>: <span lang=\"it\">mio fratello</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Questa è mia madre</span>?",
                opciones: [
                  {
                    texto: "Esta es mi madre",
                    correcta: true
                  },
                  {
                    texto: "Esta es mi hermana",
                    correcta: false
                  },
                  {
                    texto: "Esta es mi amiga",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">mia madre</span> significa «mi madre».",
                error: "Todavía no. <span lang=\"it\">mia madre</span> significa «mi madre». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 4,
        titulo: "Repaso",
        descripcion: "Combina lo aprendido en una conversación.",
        nivel: "a1",
        lecciones: [
          {
            id: 7,
            titulo: "Diálogo de repaso",
            descripcion: "Combina lo aprendido en una conversación",
            consejo: "<span lang=\"it\">Come stai?</span> significa «¿cómo estás?». Una respuesta habitual es <span lang=\"it\">Sto bene, grazie</span>.",
            teoria: {
              titulo: "Lee el diálogo",
              html: "<p>Repasa lo aprendido con esta conversación entre dos personas.</p><dl class=\"dialogo-italiano\"><dt>Giulia</dt><dd lang=\"it\">Ciao! Come stai?</dd><dt>Luca</dt><dd lang=\"it\">Sto bene, grazie. E tu?</dd><dt>Giulia</dt><dd lang=\"it\">Molto bene. Come ti chiami?</dd><dt>Luca</dt><dd lang=\"it\">Mi chiamo Luca. A presto!</dd></dl>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Come stai?</span>?",
                opciones: [
                  {
                    texto: "¿Cómo estás?",
                    correcta: true
                  },
                  {
                    texto: "¿Cómo te llamas?",
                    correcta: false
                  },
                  {
                    texto: "¿Qué hora es?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Come stai?</span> significa «¿cómo estás?».",
                error: "Todavía no. <span lang=\"it\">Come stai?</span> significa «¿cómo estás?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo respondes «bien, gracias»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Mi chiamo Luca</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Sto bene, grazie</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">A presto</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! La respuesta es <span lang=\"it\">Sto bene, grazie</span>.",
                error: "Todavía no. La respuesta es <span lang=\"it\">Sto bene, grazie</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">A presto</span>?",
                opciones: [
                  {
                    texto: "Buenos días",
                    correcta: false
                  },
                  {
                    texto: "Por favor",
                    correcta: false
                  },
                  {
                    texto: "Hasta pronto",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">A presto</span> significa «hasta pronto».",
                error: "Todavía no. <span lang=\"it\">A presto</span> significa «hasta pronto». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 5,
        titulo: "Vida diaria",
        descripcion: "Desenvuélvete en un restaurante y en la calle.",
        nivel: "a2",
        lecciones: [
          {
            id: 8,
            titulo: "En el restaurante",
            descripcion: "Pide comida y pregunta precios",
            consejo: "<span lang=\"it\">Vorrei</span> es la forma cortés de pedir algo.",
            teoria: {
              titulo: "Aprende a pedir con cortesía",
              html: "<p>Estas frases te sirven para pedir algo en un restaurante o una tienda.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Vorrei un caffè</span> <span>→ quisiera un café</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Il conto, per favore</span> <span>→ la cuenta, por favor</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Quanto costa?</span> <span>→ ¿Cuánto cuesta?</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «quisiera un café»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Vorrei un caffè</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Quanto costa?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Il conto, per favore</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Vorrei un caffè</span> significa «quisiera un café».",
                error: "Todavía no. <span lang=\"it\">Vorrei un caffè</span> significa «quisiera un café». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Il conto, per favore</span>?",
                opciones: [
                  {
                    texto: "la cuenta, por favor",
                    correcta: true
                  },
                  {
                    texto: "quisiera un café",
                    correcta: false
                  },
                  {
                    texto: "¿Cuánto cuesta?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Il conto, per favore</span> significa «la cuenta, por favor».",
                error: "Todavía no. <span lang=\"it\">Il conto, per favore</span> significa «la cuenta, por favor». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Cuánto cuesta?»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Quanto costa?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Il conto, per favore</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Vorrei un caffè</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Quanto costa?</span> significa «¿Cuánto cuesta?».",
                error: "Todavía no. <span lang=\"it\">Quanto costa?</span> significa «¿Cuánto cuesta?». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 9,
            titulo: "Cómo llegar",
            descripcion: "Pregunta y entiende direcciones",
            consejo: "<span lang=\"it\">a sinistra</span> significa «a la izquierda» y <span lang=\"it\">a destra</span> significa «a la derecha».",
            teoria: {
              titulo: "Aprende a orientarte",
              html: "<p>Con estas frases puedes preguntar dónde queda un lugar y seguir indicaciones.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Dov'è la stazione?</span> <span>→ ¿Dónde está la estación?</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Giri a sinistra</span> <span>→ doble a la izquierda</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Vada sempre dritto</span> <span>→ siga derecho</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Dónde está la estación?»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Giri a sinistra</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Dov'è la stazione?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Vada sempre dritto</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Dov'è la stazione?</span> significa «¿Dónde está la estación?».",
                error: "Todavía no. <span lang=\"it\">Dov'è la stazione?</span> significa «¿Dónde está la estación?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Giri a sinistra</span>?",
                opciones: [
                  {
                    texto: "siga derecho",
                    correcta: false
                  },
                  {
                    texto: "doble a la izquierda",
                    correcta: true
                  },
                  {
                    texto: "¿Dónde está la estación?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Giri a sinistra</span> significa «doble a la izquierda».",
                error: "Todavía no. <span lang=\"it\">Giri a sinistra</span> significa «doble a la izquierda». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «siga derecho»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Dov'è la stazione?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Vada sempre dritto</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Giri a sinistra</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Vada sempre dritto</span> significa «siga derecho».",
                error: "Todavía no. <span lang=\"it\">Vada sempre dritto</span> significa «siga derecho». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 6,
        titulo: "Planes y comparaciones",
        descripcion: "Cuenta tus planes y compara personas y cosas.",
        nivel: "a2",
        lecciones: [
          {
            id: 10,
            titulo: "Planes futuros",
            descripcion: "Cuenta lo que vas a hacer",
            consejo: "El futuro se forma cambiando la terminación del verbo: <span lang=\"it\">viaggerò</span>, <span lang=\"it\">mangeremo</span>.",
            teoria: {
              titulo: "Aprende a hablar del futuro",
              html: "<p>Estas frases te permiten contar tus planes.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Viaggerò</span> <span>→ viajaré</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Lei studierà</span> <span>→ ella estudiará</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Mangeremo</span> <span>→ comeremos</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «viajaré»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Mangeremo</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Lei studierà</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Viaggerò</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Viaggerò</span> significa «viajaré».",
                error: "Todavía no. <span lang=\"it\">Viaggerò</span> significa «viajaré». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Lei studierà</span>?",
                opciones: [
                  {
                    texto: "viajaré",
                    correcta: false
                  },
                  {
                    texto: "comeremos",
                    correcta: false
                  },
                  {
                    texto: "ella estudiará",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Lei studierà</span> significa «ella estudiará».",
                error: "Todavía no. <span lang=\"it\">Lei studierà</span> significa «ella estudiará». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «comeremos»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Lei studierà</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Viaggerò</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Mangeremo</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Mangeremo</span> significa «comeremos».",
                error: "Todavía no. <span lang=\"it\">Mangeremo</span> significa «comeremos». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 11,
            titulo: "Comparaciones",
            descripcion: "Compara personas y cosas",
            consejo: "Para comparar se usa <span lang=\"it\">più</span> + adjetivo + <span lang=\"it\">di</span>.",
            teoria: {
              titulo: "Aprende a comparar",
              html: "<p>Estas estructuras sirven para decir qué es más grande, más caro o mejor.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">più grande di</span> <span>→ más grande que</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">più caro di</span> <span>→ más caro que</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">il migliore</span> <span>→ el mejor</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «más grande que»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">più grande di</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">il migliore</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">più caro di</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">più grande di</span> significa «más grande que».",
                error: "Todavía no. <span lang=\"it\">più grande di</span> significa «más grande que». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">più caro di</span>?",
                opciones: [
                  {
                    texto: "más caro que",
                    correcta: true
                  },
                  {
                    texto: "más grande que",
                    correcta: false
                  },
                  {
                    texto: "el mejor",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">più caro di</span> significa «más caro que».",
                error: "Todavía no. <span lang=\"it\">più caro di</span> significa «más caro que». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «el mejor»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">il migliore</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">più caro di</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">più grande di</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">il migliore</span> significa «el mejor».",
                error: "Todavía no. <span lang=\"it\">il migliore</span> significa «el mejor». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 7,
        titulo: "Opiniones y consejos",
        descripcion: "Expresa lo que piensas y da consejos.",
        nivel: "b1",
        lecciones: [
          {
            id: 12,
            titulo: "Dar tu opinión",
            descripcion: "Expresa lo que piensas",
            consejo: "Después de <span lang=\"it\">penso che</span> suele usarse el subjuntivo: <span lang=\"it\">penso che sia</span>.",
            teoria: {
              titulo: "Aprende a opinar",
              html: "<p>Con estas frases puedes dar tu opinión y decir si estás de acuerdo.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Penso che sia bene</span> <span>→ creo que está bien</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Secondo me</span> <span>→ en mi opinión</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Sono d'accordo</span> <span>→ estoy de acuerdo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «creo que está bien»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Secondo me</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Penso che sia bene</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Sono d'accordo</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Penso che sia bene</span> significa «creo que está bien».",
                error: "Todavía no. <span lang=\"it\">Penso che sia bene</span> significa «creo que está bien». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Secondo me</span>?",
                opciones: [
                  {
                    texto: "estoy de acuerdo",
                    correcta: false
                  },
                  {
                    texto: "en mi opinión",
                    correcta: true
                  },
                  {
                    texto: "creo que está bien",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Secondo me</span> significa «en mi opinión».",
                error: "Todavía no. <span lang=\"it\">Secondo me</span> significa «en mi opinión». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy de acuerdo»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Penso che sia bene</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Sono d'accordo</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Secondo me</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Sono d'accordo</span> significa «estoy de acuerdo».",
                error: "Todavía no. <span lang=\"it\">Sono d'accordo</span> significa «estoy de acuerdo». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 13,
            titulo: "Consejos y deseos",
            descripcion: "Aconseja y habla de lo que te gustaría",
            consejo: "<span lang=\"it\">Dovresti</span> da un consejo. Después de <span lang=\"it\">se</span> + subjuntivo se usa el condicional.",
            teoria: {
              titulo: "Aprende a aconsejar",
              html: "<p>Estas frases sirven para dar consejos y hablar de situaciones posibles.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Dovresti studiare</span> <span>→ deberías estudiar</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Se avessi tempo, viaggerei</span> <span>→ si tuviera tiempo, viajaría</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Mi piacerebbe imparare</span> <span>→ me gustaría aprender</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «deberías estudiar»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Mi piacerebbe imparare</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Se avessi tempo, viaggerei</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Dovresti studiare</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Dovresti studiare</span> significa «deberías estudiar».",
                error: "Todavía no. <span lang=\"it\">Dovresti studiare</span> significa «deberías estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Se avessi tempo, viaggerei</span>?",
                opciones: [
                  {
                    texto: "deberías estudiar",
                    correcta: false
                  },
                  {
                    texto: "me gustaría aprender",
                    correcta: false
                  },
                  {
                    texto: "si tuviera tiempo, viajaría",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Se avessi tempo, viaggerei</span> significa «si tuviera tiempo, viajaría».",
                error: "Todavía no. <span lang=\"it\">Se avessi tempo, viaggerei</span> significa «si tuviera tiempo, viajaría». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «me gustaría aprender»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Se avessi tempo, viaggerei</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Dovresti studiare</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Mi piacerebbe imparare</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Mi piacerebbe imparare</span> significa «me gustaría aprender».",
                error: "Todavía no. <span lang=\"it\">Mi piacerebbe imparare</span> significa «me gustaría aprender». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 8,
        titulo: "Experiencias y trabajo",
        descripcion: "Habla de tu vida, tus estudios y tu trabajo.",
        nivel: "b1",
        lecciones: [
          {
            id: 14,
            titulo: "Experiencias",
            descripcion: "Cuenta lo que hiciste en tu vida",
            consejo: "Los verbos de movimiento, como <span lang=\"it\">andare</span>, forman el pasado con <span lang=\"it\">essere</span>: <span lang=\"it\">sono andato</span>.",
            teoria: {
              titulo: "Aprende a contar experiencias",
              html: "<p>Estas frases te permiten hablar de lo que hiciste, o nunca hiciste, en tu vida.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Sono andato a Roma</span> <span>→ fui a Roma</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Ho visitato Parigi</span> <span>→ visité París</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Non ho mai mangiato questo</span> <span>→ nunca comí esto</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «fui a Roma»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Sono andato a Roma</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Non ho mai mangiato questo</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Ho visitato Parigi</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Sono andato a Roma</span> significa «fui a Roma».",
                error: "Todavía no. <span lang=\"it\">Sono andato a Roma</span> significa «fui a Roma». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Ho visitato Parigi</span>?",
                opciones: [
                  {
                    texto: "visité París",
                    correcta: true
                  },
                  {
                    texto: "fui a Roma",
                    correcta: false
                  },
                  {
                    texto: "nunca comí esto",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Ho visitato Parigi</span> significa «visité París».",
                error: "Todavía no. <span lang=\"it\">Ho visitato Parigi</span> significa «visité París». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nunca comí esto»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Non ho mai mangiato questo</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Ho visitato Parigi</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Sono andato a Roma</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Non ho mai mangiato questo</span> significa «nunca comí esto».",
                error: "Todavía no. <span lang=\"it\">Non ho mai mangiato questo</span> significa «nunca comí esto». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 15,
            titulo: "Trabajo y estudios",
            descripcion: "Habla de tu trabajo y tu búsqueda laboral",
            consejo: "<span lang=\"it\">Da</span> indica desde cuándo sucede algo, y el verbo va en presente.",
            teoria: {
              titulo: "Aprende a hablar de trabajo",
              html: "<p>Estas frases son útiles para una entrevista o para presentarte en el trabajo.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Lavoro qui da due anni</span> <span>→ trabajo aquí desde hace dos años</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Sono responsabile delle vendite</span> <span>→ soy responsable de ventas</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Cerco lavoro</span> <span>→ estoy buscando trabajo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «trabajo aquí desde hace dos años»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Sono responsabile delle vendite</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Lavoro qui da due anni</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Cerco lavoro</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Lavoro qui da due anni</span> significa «trabajo aquí desde hace dos años».",
                error: "Todavía no. <span lang=\"it\">Lavoro qui da due anni</span> significa «trabajo aquí desde hace dos años». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"it\">Sono responsabile delle vendite</span>?",
                opciones: [
                  {
                    texto: "estoy buscando trabajo",
                    correcta: false
                  },
                  {
                    texto: "soy responsable de ventas",
                    correcta: true
                  },
                  {
                    texto: "trabajo aquí desde hace dos años",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Sono responsabile delle vendite</span> significa «soy responsable de ventas».",
                error: "Todavía no. <span lang=\"it\">Sono responsabile delle vendite</span> significa «soy responsable de ventas». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy buscando trabajo»?",
                opciones: [
                  {
                    texto: "<span lang=\"it\">Lavoro qui da due anni</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"it\">Cerco lavoro</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"it\">Sono responsabile delle vendite</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"it\">Cerco lavoro</span> significa «estoy buscando trabajo».",
                error: "Todavía no. <span lang=\"it\">Cerco lavoro</span> significa «estoy buscando trabajo». Puedes elegir otra opción."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "portugues",
    nombre: "Portugués",
    nombreCompleto: "Portugués desde Español",
    codigoIdioma: "pt",
    descripcion: "El idioma de Brasil y de Portugal, clave para viajar y trabajar en toda la región.",
    niveles: [
      {
        id: "a1",
        nombre: "A1",
        titulo: "Principiante"
      },
      {
        id: "a2",
        nombre: "A2",
        titulo: "Elemental"
      },
      {
        id: "b1",
        nombre: "B1",
        titulo: "Intermedio"
      }
    ],
    unidades: [
      {
        id: 1,
        titulo: "Saludos y presentaciones",
        descripcion: "Saluda y presenta quién eres.",
        nivel: "a1",
        lecciones: [
          {
            id: 1,
            titulo: "Saludos y presentaciones",
            descripcion: "Aprende <span lang=\"pt\">Oi</span>, <span lang=\"pt\">Bom dia</span> y <span lang=\"pt\">Eu me chamo</span>",
            consejo: "<span lang=\"pt\">Oi</span> es informal. <span lang=\"pt\">Bom dia</span> se usa por la mañana, <span lang=\"pt\">Boa tarde</span> por la tarde y <span lang=\"pt\">Boa noite</span> por la noche.",
            teoria: {
              titulo: "Aprende a saludar y presentarte",
              html: "<p>Para presentarte, puedes decir <span lang=\"pt\">Eu me chamo Ana</span>, que significa «me llamo Ana».</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Oi</span> <span>→ hola</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Bom dia</span> <span>→ buenos días</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu me chamo...</span> <span>→ me llamo...</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Bom dia</span>?",
                opciones: [
                  {
                    texto: "Buenas noches",
                    correcta: false
                  },
                  {
                    texto: "Gracias",
                    correcta: false
                  },
                  {
                    texto: "Buenos días",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Bom dia</span> significa «buenos días».",
                error: "Todavía no. <span lang=\"pt\">Bom dia</span> significa «buenos días». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «me llamo Ana»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Eu me chamo Ana</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Você se chama Ana</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Ela se chama Ana</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Para hablar de ti se usa <span lang=\"pt\">Eu me chamo</span>.",
                error: "Todavía no. Para hablar de ti se usa <span lang=\"pt\">Eu me chamo</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué saludo usarías por la noche?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Obrigado</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Boa noite</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Tchau</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Por la noche se saluda con <span lang=\"pt\">Boa noite</span>.",
                error: "Todavía no. Por la noche se saluda con <span lang=\"pt\">Boa noite</span>. Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 2,
        titulo: "Gramática básica",
        descripcion: "Construye frases en presente y pasado.",
        nivel: "a1",
        lecciones: [
          {
            id: 2,
            titulo: "Verbo ser",
            descripcion: "Aprende <span lang=\"pt\">eu sou</span>, <span lang=\"pt\">você é</span> y <span lang=\"pt\">ela é</span>",
            consejo: "En Brasil es muy común usar <span lang=\"pt\">você</span> en lugar de «tú». Por eso se dice <span lang=\"pt\">você é</span>, «tú eres».",
            teoria: {
              titulo: "Aprende el verbo ser",
              html: "<p>Para decir quién eres, puedes usar <span lang=\"pt\">Eu sou estudante</span>.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu sou</span> <span>→ yo soy</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Você é</span> <span>→ tú eres</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Ela é</span> <span>→ ella es</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Nós somos</span> <span>→ nosotros somos</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «yo soy estudiante»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Eu sou estudante</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Eu é estudante</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu somos estudante</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"pt\">eu</span> se usa <span lang=\"pt\">sou</span>.",
                error: "Todavía no. Con <span lang=\"pt\">eu</span> se usa <span lang=\"pt\">sou</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «ella es profesora»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Ela sou professora</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Ela somos professora</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Ela é professora</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"pt\">ela</span> se usa <span lang=\"pt\">é</span>.",
                error: "Todavía no. Con <span lang=\"pt\">ela</span> se usa <span lang=\"pt\">é</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nosotros somos amigos»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Nós é amigos</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Nós somos amigos</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Nós sou amigos</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"pt\">nós</span> se usa <span lang=\"pt\">somos</span>.",
                error: "Todavía no. Con <span lang=\"pt\">nós</span> se usa <span lang=\"pt\">somos</span>. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 3,
            titulo: "El presente",
            descripcion: "Aprende <span lang=\"pt\">eu falo</span> y <span lang=\"pt\">nós falamos</span>",
            consejo: "Los verbos terminados en -ar, como <span lang=\"pt\">falar</span>, terminan en -o con <span lang=\"pt\">eu</span> y en -amos con <span lang=\"pt\">nós</span>.",
            teoria: {
              titulo: "Aprende el presente",
              html: "<p>El verbo <span lang=\"pt\">falar</span> significa «hablar». Así se conjuga en presente:</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu falo</span> <span>→ yo hablo</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Você fala</span> <span>→ tú hablas</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Nós falamos</span> <span>→ nosotros hablamos</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «yo hablo portugués»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Eu falamos português</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu falo português</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Eu fala português</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"pt\">eu</span> el verbo termina en -o.",
                error: "Todavía no. Con <span lang=\"pt\">eu</span> el verbo termina en -o. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nosotros hablamos»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Nós falo</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Nós fala</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Nós falamos</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"pt\">nós</span> el verbo termina en -amos.",
                error: "Todavía no. Con <span lang=\"pt\">nós</span> el verbo termina en -amos. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «tú trabajas»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Você trabalha</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Você trabalho</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Você trabalhamos</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"pt\">você</span> el verbo termina en -a.",
                error: "Todavía no. Con <span lang=\"pt\">você</span> el verbo termina en -a. Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 4,
            titulo: "El pasado",
            descripcion: "Cuenta lo que hiciste con <span lang=\"pt\">eu falei</span>",
            consejo: "En el pasado, los verbos en -ar terminan en -ei con <span lang=\"pt\">eu</span>: <span lang=\"pt\">eu falei</span>. Con <span lang=\"pt\">você</span> terminan en -ou: <span lang=\"pt\">você falou</span>.",
            teoria: {
              titulo: "Aprende el pasado",
              html: "<p>Para contar algo que ya pasó, cambia la terminación del verbo.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu falei</span> <span>→ hablé</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Você trabalhou</span> <span>→ trabajaste</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu comi</span> <span>→ comí</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «comí»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Eu como</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu comi</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Eu vou comer</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Eu comi</span> está en pasado; <span lang=\"pt\">eu como</span> está en presente.",
                error: "Todavía no. <span lang=\"pt\">Eu comi</span> está en pasado; <span lang=\"pt\">eu como</span> está en presente. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Você trabalhou</span>?",
                opciones: [
                  {
                    texto: "Trabajaste",
                    correcta: true
                  },
                  {
                    texto: "Trabajas",
                    correcta: false
                  },
                  {
                    texto: "Trabajarás",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Você trabalhou</span> significa «trabajaste».",
                error: "Todavía no. <span lang=\"pt\">Você trabalhou</span> significa «trabajaste». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «hablé»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Eu falo</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu vou falar</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu falei</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! Con <span lang=\"pt\">eu</span>, el pasado de <span lang=\"pt\">falar</span> es <span lang=\"pt\">falei</span>.",
                error: "Todavía no. Con <span lang=\"pt\">eu</span>, el pasado de <span lang=\"pt\">falar</span> es <span lang=\"pt\">falei</span>. Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        titulo: "Vida cotidiana",
        descripcion: "Habla de los números, la hora y tu familia.",
        nivel: "a1",
        lecciones: [
          {
            id: 5,
            titulo: "Números y la hora",
            descripcion: "Cuenta y di qué hora es",
            consejo: "Para decir la hora se usa <span lang=\"pt\">São</span>: <span lang=\"pt\">São três horas</span> significa «son las tres». A la una se dice <span lang=\"pt\">É uma hora</span>.",
            teoria: {
              titulo: "Aprende los números y la hora",
              html: "<p>Para preguntar la hora se dice <span lang=\"pt\">Que horas são?</span>.</p><ul class=\"lista-vocabulario lista-numeros\"><li><strong lang=\"pt\">um</strong> <span>uno</span></li><li><strong lang=\"pt\">dois</strong> <span>dos</span></li><li><strong lang=\"pt\">três</strong> <span>tres</span></li><li><strong lang=\"pt\">quatro</strong> <span>cuatro</span></li><li><strong lang=\"pt\">cinco</strong> <span>cinco</span></li><li><strong lang=\"pt\">seis</strong> <span>seis</span></li><li><strong lang=\"pt\">sete</strong> <span>siete</span></li><li><strong lang=\"pt\">oito</strong> <span>ocho</span></li><li><strong lang=\"pt\">nove</strong> <span>nueve</span></li><li><strong lang=\"pt\">dez</strong> <span>diez</span></li></ul><p class=\"ejemplo-portugues\"><span lang=\"pt\">Que horas são?</span> <span>→ ¿Qué hora es?</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">São três horas</span> <span>→ son las tres</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué número es <span lang=\"pt\">oito</span>?",
                opciones: [
                  {
                    texto: "Ocho",
                    correcta: true
                  },
                  {
                    texto: "Siete",
                    correcta: false
                  },
                  {
                    texto: "Nueve",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">oito</span> significa «ocho».",
                error: "Todavía no. <span lang=\"pt\">oito</span> significa «ocho». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «diez»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">dois</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">seis</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">dez</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! «Diez» se dice <span lang=\"pt\">dez</span>; <span lang=\"pt\">dois</span> es «dos» y <span lang=\"pt\">seis</span> es «seis».",
                error: "Todavía no. «Diez» se dice <span lang=\"pt\">dez</span>; <span lang=\"pt\">dois</span> es «dos» y <span lang=\"pt\">seis</span> es «seis». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se pregunta la hora?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Como você se chama?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Que horas são?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Tudo bem?</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Que horas são?</span> significa «¿qué hora es?».",
                error: "Todavía no. <span lang=\"pt\">Que horas são?</span> significa «¿qué hora es?». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 6,
            titulo: "Mi familia",
            descripcion: "Presenta a los miembros de tu familia",
            consejo: "«Mi» cambia según la palabra: <span lang=\"pt\">meu pai</span> (mi padre) y <span lang=\"pt\">minha mãe</span> (mi madre).",
            teoria: {
              titulo: "Aprende la familia",
              html: "<p>Para presentar a alguien, puedes decir <span lang=\"pt\">Esta é minha irmã</span>, «esta es mi hermana».</p><ul class=\"lista-vocabulario\"><li><strong lang=\"pt\">o pai</strong> <span>el padre</span></li><li><strong lang=\"pt\">a mãe</strong> <span>la madre</span></li><li><strong lang=\"pt\">o irmão</strong> <span>el hermano</span></li><li><strong lang=\"pt\">a irmã</strong> <span>la hermana</span></li></ul>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">a mãe</span>?",
                opciones: [
                  {
                    texto: "La hermana",
                    correcta: false
                  },
                  {
                    texto: "La madre",
                    correcta: true
                  },
                  {
                    texto: "La hija",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">a mãe</span> significa «la madre».",
                error: "Todavía no. <span lang=\"pt\">a mãe</span> significa «la madre». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «mi hermano»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">meu irmão</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">minha irmã</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">meu pai</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! «Hermano» es <span lang=\"pt\">irmão</span>: <span lang=\"pt\">meu irmão</span>.",
                error: "Todavía no. «Hermano» es <span lang=\"pt\">irmão</span>: <span lang=\"pt\">meu irmão</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Esta é minha irmã</span>?",
                opciones: [
                  {
                    texto: "Esta es mi madre",
                    correcta: false
                  },
                  {
                    texto: "Esta es mi amiga",
                    correcta: false
                  },
                  {
                    texto: "Esta es mi hermana",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">minha irmã</span> significa «mi hermana».",
                error: "Todavía no. <span lang=\"pt\">minha irmã</span> significa «mi hermana». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 4,
        titulo: "Repaso",
        descripcion: "Combina lo aprendido en una conversación.",
        nivel: "a1",
        lecciones: [
          {
            id: 7,
            titulo: "Diálogo de repaso",
            descripcion: "Combina lo aprendido en una conversación",
            consejo: "<span lang=\"pt\">Tudo bem?</span> significa «¿todo bien?». Se responde con <span lang=\"pt\">Tudo bem, obrigado</span>, o <span lang=\"pt\">obrigada</span> si quien habla es mujer.",
            teoria: {
              titulo: "Lee el diálogo",
              html: "<p>Repasa lo aprendido con esta conversación entre dos personas.</p><dl class=\"dialogo-portugues\"><dt>Bia</dt><dd lang=\"pt\">Oi! Tudo bem?</dd><dt>Leo</dt><dd lang=\"pt\">Tudo bem, obrigado. E você?</dd><dt>Bia</dt><dd lang=\"pt\">Muito bem. Como você se chama?</dd><dt>Leo</dt><dd lang=\"pt\">Eu me chamo Leo. Até logo!</dd></dl>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Tudo bem?</span>?",
                opciones: [
                  {
                    texto: "¿Cómo te llamas?",
                    correcta: false
                  },
                  {
                    texto: "¿Todo bien?",
                    correcta: true
                  },
                  {
                    texto: "¿Qué hora es?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Tudo bem?</span> significa «¿todo bien?».",
                error: "Todavía no. <span lang=\"pt\">Tudo bem?</span> significa «¿todo bien?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo preguntas «¿cómo te llamas?»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Como você se chama?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Que horas são?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Tudo bem?</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! La pregunta es <span lang=\"pt\">Como você se chama?</span>.",
                error: "Todavía no. La pregunta es <span lang=\"pt\">Como você se chama?</span>. Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Até logo</span>?",
                opciones: [
                  {
                    texto: "Buenos días",
                    correcta: false
                  },
                  {
                    texto: "Por favor",
                    correcta: false
                  },
                  {
                    texto: "Hasta luego",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Até logo</span> significa «hasta luego».",
                error: "Todavía no. <span lang=\"pt\">Até logo</span> significa «hasta luego». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 5,
        titulo: "Vida diaria",
        descripcion: "Desenvuélvete en un restaurante y en la calle.",
        nivel: "a2",
        lecciones: [
          {
            id: 8,
            titulo: "En el restaurante",
            descripcion: "Pide comida y pregunta precios",
            consejo: "<span lang=\"pt\">Eu gostaria de</span> es la forma cortés de pedir algo.",
            teoria: {
              titulo: "Aprende a pedir con cortesía",
              html: "<p>Estas frases te sirven para pedir algo en un restaurante o una tienda.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu gostaria de um café</span> <span>→ quisiera un café</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">A conta, por favor</span> <span>→ la cuenta, por favor</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Quanto custa?</span> <span>→ ¿Cuánto cuesta?</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «quisiera un café»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Eu gostaria de um café</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Quanto custa?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">A conta, por favor</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Eu gostaria de um café</span> significa «quisiera un café».",
                error: "Todavía no. <span lang=\"pt\">Eu gostaria de um café</span> significa «quisiera un café». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">A conta, por favor</span>?",
                opciones: [
                  {
                    texto: "la cuenta, por favor",
                    correcta: true
                  },
                  {
                    texto: "quisiera un café",
                    correcta: false
                  },
                  {
                    texto: "¿Cuánto cuesta?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">A conta, por favor</span> significa «la cuenta, por favor».",
                error: "Todavía no. <span lang=\"pt\">A conta, por favor</span> significa «la cuenta, por favor». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Cuánto cuesta?»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Quanto custa?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">A conta, por favor</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu gostaria de um café</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Quanto custa?</span> significa «¿Cuánto cuesta?».",
                error: "Todavía no. <span lang=\"pt\">Quanto custa?</span> significa «¿Cuánto cuesta?». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 9,
            titulo: "Cómo llegar",
            descripcion: "Pregunta y entiende direcciones",
            consejo: "<span lang=\"pt\">à esquerda</span> significa «a la izquierda» y <span lang=\"pt\">à direita</span> significa «a la derecha».",
            teoria: {
              titulo: "Aprende a orientarte",
              html: "<p>Con estas frases puedes preguntar dónde queda un lugar y seguir indicaciones.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Onde fica a estação?</span> <span>→ ¿Dónde queda la estación?</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Vire à esquerda</span> <span>→ doble a la izquierda</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Siga em frente</span> <span>→ siga derecho</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Dónde queda la estación?»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Vire à esquerda</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Onde fica a estação?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Siga em frente</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Onde fica a estação?</span> significa «¿Dónde queda la estación?».",
                error: "Todavía no. <span lang=\"pt\">Onde fica a estação?</span> significa «¿Dónde queda la estación?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Vire à esquerda</span>?",
                opciones: [
                  {
                    texto: "siga derecho",
                    correcta: false
                  },
                  {
                    texto: "doble a la izquierda",
                    correcta: true
                  },
                  {
                    texto: "¿Dónde queda la estación?",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Vire à esquerda</span> significa «doble a la izquierda».",
                error: "Todavía no. <span lang=\"pt\">Vire à esquerda</span> significa «doble a la izquierda». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «siga derecho»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Onde fica a estação?</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Siga em frente</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Vire à esquerda</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Siga em frente</span> significa «siga derecho».",
                error: "Todavía no. <span lang=\"pt\">Siga em frente</span> significa «siga derecho». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 6,
        titulo: "Planes y comparaciones",
        descripcion: "Cuenta tus planes y compara personas y cosas.",
        nivel: "a2",
        lecciones: [
          {
            id: 10,
            titulo: "Planes futuros",
            descripcion: "Cuenta lo que vas a hacer",
            consejo: "El futuro cercano se forma con <span lang=\"pt\">ir</span> más el verbo en infinitivo.",
            teoria: {
              titulo: "Aprende a hablar del futuro",
              html: "<p>Estas frases te permiten contar tus planes.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu vou viajar</span> <span>→ voy a viajar</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Ela vai estudar</span> <span>→ ella va a estudiar</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Nós vamos comer</span> <span>→ vamos a comer</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «voy a viajar»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Nós vamos comer</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Ela vai estudar</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu vou viajar</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Eu vou viajar</span> significa «voy a viajar».",
                error: "Todavía no. <span lang=\"pt\">Eu vou viajar</span> significa «voy a viajar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Ela vai estudar</span>?",
                opciones: [
                  {
                    texto: "voy a viajar",
                    correcta: false
                  },
                  {
                    texto: "vamos a comer",
                    correcta: false
                  },
                  {
                    texto: "ella va a estudiar",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Ela vai estudar</span> significa «ella va a estudiar».",
                error: "Todavía no. <span lang=\"pt\">Ela vai estudar</span> significa «ella va a estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «vamos a comer»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Ela vai estudar</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu vou viajar</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Nós vamos comer</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Nós vamos comer</span> significa «vamos a comer».",
                error: "Todavía no. <span lang=\"pt\">Nós vamos comer</span> significa «vamos a comer». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 11,
            titulo: "Comparaciones",
            descripcion: "Compara personas y cosas",
            consejo: "Para comparar se usa <span lang=\"pt\">mais</span> + adjetivo + <span lang=\"pt\">que</span>. Algunas formas son irregulares, como <span lang=\"pt\">maior</span>.",
            teoria: {
              titulo: "Aprende a comparar",
              html: "<p>Estas estructuras sirven para decir qué es más grande, más caro o mejor.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">maior que</span> <span>→ más grande que</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">mais caro que</span> <span>→ más caro que</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">o melhor</span> <span>→ el mejor</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «más grande que»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">maior que</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">o melhor</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">mais caro que</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">maior que</span> significa «más grande que».",
                error: "Todavía no. <span lang=\"pt\">maior que</span> significa «más grande que». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">mais caro que</span>?",
                opciones: [
                  {
                    texto: "más caro que",
                    correcta: true
                  },
                  {
                    texto: "más grande que",
                    correcta: false
                  },
                  {
                    texto: "el mejor",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">mais caro que</span> significa «más caro que».",
                error: "Todavía no. <span lang=\"pt\">mais caro que</span> significa «más caro que». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «el mejor»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">o melhor</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">mais caro que</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">maior que</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">o melhor</span> significa «el mejor».",
                error: "Todavía no. <span lang=\"pt\">o melhor</span> significa «el mejor». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 7,
        titulo: "Opiniones y consejos",
        descripcion: "Expresa lo que piensas y da consejos.",
        nivel: "b1",
        lecciones: [
          {
            id: 12,
            titulo: "Dar tu opinión",
            descripcion: "Expresa lo que piensas",
            consejo: "<span lang=\"pt\">Eu acho que</span> es la forma más común de dar una opinión en Brasil.",
            teoria: {
              titulo: "Aprende a opinar",
              html: "<p>Con estas frases puedes dar tu opinión y decir si estás de acuerdo.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu acho que está bom</span> <span>→ creo que está bien</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Na minha opinião</span> <span>→ en mi opinión</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu concordo</span> <span>→ estoy de acuerdo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «creo que está bien»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Na minha opinião</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu acho que está bom</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Eu concordo</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Eu acho que está bom</span> significa «creo que está bien».",
                error: "Todavía no. <span lang=\"pt\">Eu acho que está bom</span> significa «creo que está bien». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Na minha opinião</span>?",
                opciones: [
                  {
                    texto: "estoy de acuerdo",
                    correcta: false
                  },
                  {
                    texto: "en mi opinión",
                    correcta: true
                  },
                  {
                    texto: "creo que está bien",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Na minha opinião</span> significa «en mi opinión».",
                error: "Todavía no. <span lang=\"pt\">Na minha opinião</span> significa «en mi opinión». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy de acuerdo»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Eu acho que está bom</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu concordo</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Na minha opinião</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Eu concordo</span> significa «estoy de acuerdo».",
                error: "Todavía no. <span lang=\"pt\">Eu concordo</span> significa «estoy de acuerdo». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 13,
            titulo: "Consejos y deseos",
            descripcion: "Aconseja y habla de lo que te gustaría",
            consejo: "<span lang=\"pt\">Você deveria</span> da un consejo. Después de <span lang=\"pt\">se</span> + subjuntivo se usa el condicional.",
            teoria: {
              titulo: "Aprende a aconsejar",
              html: "<p>Estas frases sirven para dar consejos y hablar de situaciones posibles.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Você deveria estudar</span> <span>→ deberías estudiar</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span> <span>→ si tuviera tiempo, viajaría</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu gostaria de aprender</span> <span>→ me gustaría aprender</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «deberías estudiar»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Eu gostaria de aprender</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Você deveria estudar</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Você deveria estudar</span> significa «deberías estudiar».",
                error: "Todavía no. <span lang=\"pt\">Você deveria estudar</span> significa «deberías estudiar». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span>?",
                opciones: [
                  {
                    texto: "deberías estudiar",
                    correcta: false
                  },
                  {
                    texto: "me gustaría aprender",
                    correcta: false
                  },
                  {
                    texto: "si tuviera tiempo, viajaría",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span> significa «si tuviera tiempo, viajaría».",
                error: "Todavía no. <span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span> significa «si tuviera tiempo, viajaría». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «me gustaría aprender»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Você deveria estudar</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu gostaria de aprender</span>",
                    correcta: true
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Eu gostaria de aprender</span> significa «me gustaría aprender».",
                error: "Todavía no. <span lang=\"pt\">Eu gostaria de aprender</span> significa «me gustaría aprender». Puedes elegir otra opción."
              }
            ]
          }
        ]
      },
      {
        id: 8,
        titulo: "Experiencias y trabajo",
        descripcion: "Habla de tu vida, tus estudios y tu trabajo.",
        nivel: "b1",
        lecciones: [
          {
            id: 14,
            titulo: "Experiencias",
            descripcion: "Cuenta lo que hiciste en tu vida",
            consejo: "<span lang=\"pt\">Já</span> significa «ya» y se usa para preguntar por experiencias: <span lang=\"pt\">Você já foi...?</span>.",
            teoria: {
              titulo: "Aprende a contar experiencias",
              html: "<p>Estas frases te permiten hablar de lo que hiciste, o nunca hiciste, en tu vida.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Você já foi ao Rio?</span> <span>→ ¿Ya fuiste a Río?</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu visitei Roma</span> <span>→ visité Roma</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu nunca comi isso</span> <span>→ nunca comí eso</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «¿Ya fuiste a Río?»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Você já foi ao Rio?</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Eu nunca comi isso</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Eu visitei Roma</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Você já foi ao Rio?</span> significa «¿Ya fuiste a Río?».",
                error: "Todavía no. <span lang=\"pt\">Você já foi ao Rio?</span> significa «¿Ya fuiste a Río?». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Eu visitei Roma</span>?",
                opciones: [
                  {
                    texto: "visité Roma",
                    correcta: true
                  },
                  {
                    texto: "¿Ya fuiste a Río?",
                    correcta: false
                  },
                  {
                    texto: "nunca comí eso",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Eu visitei Roma</span> significa «visité Roma».",
                error: "Todavía no. <span lang=\"pt\">Eu visitei Roma</span> significa «visité Roma». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «nunca comí eso»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Eu nunca comi isso</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Eu visitei Roma</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Você já foi ao Rio?</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Eu nunca comi isso</span> significa «nunca comí eso».",
                error: "Todavía no. <span lang=\"pt\">Eu nunca comi isso</span> significa «nunca comí eso». Puedes elegir otra opción."
              }
            ]
          },
          {
            id: 15,
            titulo: "Trabajo y estudios",
            descripcion: "Habla de tu trabajo y tu búsqueda laboral",
            consejo: "<span lang=\"pt\">Há</span> indica cuánto tiempo pasó: <span lang=\"pt\">há dois anos</span> significa «desde hace dos años» o «hace dos años».",
            teoria: {
              titulo: "Aprende a hablar de trabajo",
              html: "<p>Estas frases son útiles para una entrevista o para presentarte en el trabajo.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Trabalho aqui há dois anos</span> <span>→ trabajo aquí desde hace dos años</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Sou responsável pelas vendas</span> <span>→ soy responsable de ventas</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Estou procurando emprego</span> <span>→ estoy buscando trabajo</span></p>"
            },
            ejercicios: [
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «trabajo aquí desde hace dos años»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Sou responsável pelas vendas</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Trabalho aqui há dois anos</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Estou procurando emprego</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Trabalho aqui há dois anos</span> significa «trabajo aquí desde hace dos años».",
                error: "Todavía no. <span lang=\"pt\">Trabalho aqui há dois anos</span> significa «trabajo aquí desde hace dos años». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Qué significa <span lang=\"pt\">Sou responsável pelas vendas</span>?",
                opciones: [
                  {
                    texto: "estoy buscando trabajo",
                    correcta: false
                  },
                  {
                    texto: "soy responsable de ventas",
                    correcta: true
                  },
                  {
                    texto: "trabajo aquí desde hace dos años",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Sou responsável pelas vendas</span> significa «soy responsable de ventas».",
                error: "Todavía no. <span lang=\"pt\">Sou responsável pelas vendas</span> significa «soy responsable de ventas». Puedes elegir otra opción."
              },
              {
                titulo: "Ejercicio práctico",
                consigna: "Selecciona la opción correcta.",
                pregunta: "¿Cómo se dice «estoy buscando trabajo»?",
                opciones: [
                  {
                    texto: "<span lang=\"pt\">Trabalho aqui há dois anos</span>",
                    correcta: false
                  },
                  {
                    texto: "<span lang=\"pt\">Estou procurando emprego</span>",
                    correcta: true
                  },
                  {
                    texto: "<span lang=\"pt\">Sou responsável pelas vendas</span>",
                    correcta: false
                  }
                ],
                acierto: "¡Correcto! <span lang=\"pt\">Estou procurando emprego</span> significa «estoy buscando trabajo».",
                error: "Todavía no. <span lang=\"pt\">Estou procurando emprego</span> significa «estoy buscando trabajo». Puedes elegir otra opción."
              }
            ]
          }
        ]
      }
    ]
  }
].map(ampliarCurso));
