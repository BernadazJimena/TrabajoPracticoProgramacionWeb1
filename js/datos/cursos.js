/* =====================================================================
   cursos.js  -  LISTA DE CURSOS

   Junta los cursos de js/datos/cursos y les suma las unidades compartidas.
   Es la constante CURSOS que usa toda la aplicación.
   Para sumar un idioma: crear su archivo, agregarlo acá y sumar su <script>.
   ===================================================================== */


/* ---------------------------------------------------------------------
   CURSOS
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
  CURSO_INGLES,
  CURSO_ALEMAN,
  CURSO_CHINO,
  CURSO_FRANCES,
  CURSO_ITALIANO,
  CURSO_PORTUGUES
].map(ampliarCurso));
