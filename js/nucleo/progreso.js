/* =====================================================================
   progreso.js  -  PROGRESO, PUNTOS, LIGAS Y LOGROS
   Archivo: js/nucleo/progreso.js

   Las reglas de la aplicación: cálculo del avance en los cursos, suma y resta
   de experiencia, racha, posiciones en el ranking, opiniones y logros.

   No usamos import/export (type="module") porque los módulos no funcionan al
   abrir el HTML con doble clic. Con scripts clásicos, lo que se declara acá
   queda disponible en los archivos que se cargan después.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. FECHAS
   Guardamos fechas como texto 'AAAA-MM-DD' en hora local. No usamos
   toISOString() porque da la hora UTC y a la noche ya sería "mañana".
   --------------------------------------------------------------------- */

const formatearFechaIso = (fecha) => {
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');
  return `${fecha.getFullYear()}-${mes}-${dia}`;
};

const fechaHoy = () => formatearFechaIso(new Date());

// La T00:00:00 hace que se interprete en hora local y no en UTC.
const aFecha = (texto) => new Date(`${texto}T00:00:00`);

const sumarDias = (texto, dias) => {
  const fecha = aFecha(texto);
  fecha.setDate(fecha.getDate() + dias);
  return formatearFechaIso(fecha);
};

const diasEntre = (desde, hasta) => Math.round((aFecha(hasta) - aFecha(desde)) / 86400000);

// Identifica la semana por la fecha de su lunes.
const claveSemana = () => {
  const hoy = new Date();
  const diasDesdeLunes = (hoy.getDay() + 6) % 7;
  return sumarDias(fechaHoy(), -diasDesdeLunes);
};

// Fecha legible para mostrar, según el idioma de la interfaz.
const mostrarFecha = (texto, opciones = { day: 'numeric', month: 'long', year: 'numeric' }) =>
  aFecha(texto).toLocaleDateString(IDIOMAS_INTERFAZ[idiomaActual()].regional, opciones);


/* ---------------------------------------------------------------------
   2. PROGRESO EN LOS CURSOS
   El estado de una lección no se guarda: se calcula. Una lección está
   completada si tiene registro; en curso si todas las anteriores están
   completadas; y bloqueada en cualquier otro caso.
   --------------------------------------------------------------------- */

const obtenerCurso = (cursoId) => CURSOS.find((c) => c.id === cursoId);

// Junta las lecciones de todas las unidades en una sola lista.
const leccionesDelCurso = (curso) => curso.unidades.flatMap((unidad) => unidad.lecciones);

const obtenerLeccion = (curso, leccionId) => leccionesDelCurso(curso).find((l) => l.id === leccionId);

const registroLeccion = (usuario, cursoId, leccionId) => usuario.progreso[cursoId]?.[leccionId] ?? null;

// Devuelve el registro de la lección y lo crea si todavía no existe.
const asegurarRegistro = (usuario, cursoId, leccionId) => {
  usuario.progreso[cursoId] = usuario.progreso[cursoId] ?? {};
  usuario.progreso[cursoId][leccionId] = usuario.progreso[cursoId][leccionId] ?? { completada: false, resultado: null, intento: null, xpAcumulada: 0, gemasAcumuladas: 0 };
  return usuario.progreso[cursoId][leccionId];
};

const leccionCompletada = (usuario, cursoId, leccionId) => registroLeccion(usuario, cursoId, leccionId)?.completada === true;

/* Niveles: cada unidad indica a qué nivel pertenece. Un nivel está disponible si
   es el primero, si se completó el anterior, si la persona eligió empezar por él
   o si ya tiene avance. Esto último evita que quede cerrado al reiniciar el
   nivel anterior. */
const obtenerNivel = (curso, nivelId) => curso.niveles.find((nivel) => nivel.id === nivelId);

const leccionesDelNivel = (curso, nivelId) =>
  curso.unidades.filter((unidad) => unidad.nivel === nivelId).flatMap((unidad) => unidad.lecciones);

const nivelDeLeccion = (curso, leccionId) => {
  const unidad = curso.unidades.find((u) => u.lecciones.some((l) => l.id === leccionId));
  return obtenerNivel(curso, unidad.nivel);
};

const nivelCompletado = (usuario, curso, nivelId) =>
  leccionesDelNivel(curso, nivelId).every((l) => leccionCompletada(usuario, curso.id, l.id));

const nivelDisponible = (usuario, curso, nivelId) => {
  const indice = curso.niveles.findIndex((nivel) => nivel.id === nivelId);
  return indice === 0
    || (usuario.nivelesAbiertos?.[curso.id] ?? []).includes(nivelId)
    || nivelCompletado(usuario, curso, curso.niveles[indice - 1].id)
    || leccionesDelNivel(curso, nivelId).some((l) => registroLeccion(usuario, curso.id, l.id));
};

// Nivel en el que trabaja la persona: el que eligió mientras no lo termine y, si
// no, el primero disponible sin terminar. Así, al completar un nivel pasa al siguiente.
const nivelActual = (usuario, curso) => {
  const elegido = usuario.nivelElegido?.[curso.id];
  if (elegido && nivelDisponible(usuario, curso, elegido) && !nivelCompletado(usuario, curso, elegido)) {
    return obtenerNivel(curso, elegido);
  }
  // Busca primero hacia adelante: quien empezó por A2 y lo terminó sigue con B1.
  const indice = curso.niveles.findIndex((n) => n.id === elegido);
  const orden = [...curso.niveles.slice(indice + 1), ...curso.niveles.slice(0, indice + 1)];
  const pendiente = orden.find((n) => nivelDisponible(usuario, curso, n.id) && !nivelCompletado(usuario, curso, n.id));
  return pendiente ?? curso.niveles[curso.niveles.length - 1];
};

// Guarda el nivel elegido. Si era un nivel cerrado, lo abre: es la opción de
// arrancar por un nivel más avanzado.
const elegirNivel = (usuario, curso, nivelId) => {
  usuario.nivelesAbiertos = usuario.nivelesAbiertos ?? {};
  usuario.nivelElegido = usuario.nivelElegido ?? {};
  usuario.nivelElegido[curso.id] = nivelId;
  if (!nivelDisponible(usuario, curso, nivelId)) {
    usuario.nivelesAbiertos[curso.id] = [...(usuario.nivelesAbiertos[curso.id] ?? []), nivelId];
  }
};

const nombreNivel = ({ nombre, titulo }) => `${titulo} (${nombre})`;

// Devuelve 'completada', 'en_curso' o 'bloqueada'. El orden se exige dentro de
// cada nivel, para que quien empieza por B1 no dependa de A1 ni de A2.
const estadoLeccion = (usuario, curso, leccionId) => {
  if (leccionCompletada(usuario, curso.id, leccionId)) {
    return 'completada';
  }
  const { id: nivelId } = nivelDeLeccion(curso, leccionId);
  if (!nivelDisponible(usuario, curso, nivelId)) {
    return 'bloqueada';
  }
  const lecciones = leccionesDelNivel(curso, nivelId);
  const indice = lecciones.findIndex((l) => l.id === leccionId);
  const anterioresListas = lecciones.slice(0, indice).every((l) => leccionCompletada(usuario, curso.id, l.id));
  return anterioresListas ? 'en_curso' : 'bloqueada';
};

const contarCompletadas = (usuario, curso) =>
  leccionesDelCurso(curso).filter((l) => leccionCompletada(usuario, curso.id, l.id)).length;

const porcentajeCurso = (usuario, curso) =>
  Math.round((contarCompletadas(usuario, curso) / leccionesDelCurso(curso).length) * 100);

// Avance dentro de una lección: 100 si está completada, y si no según su intento.
const porcentajeLeccion = (usuario, curso, leccion) => {
  const registro = registroLeccion(usuario, curso.id, leccion.id);
  if (registro?.completada) {
    return 100;
  }
  return registro?.intento ? Math.round((registro.intento.paso / (leccion.ejercicios.length + 1)) * 100) : 0;
};

const porcentajeNivel = (usuario, curso, nivelId) => {
  const lecciones = leccionesDelNivel(curso, nivelId);
  const completas = lecciones.filter((l) => leccionCompletada(usuario, curso.id, l.id)).length;
  return Math.round((completas / lecciones.length) * 100);
};

const tieneActividad = (usuario) => usuario.xp > 0 || Object.keys(usuario.progreso).length > 0;

// Retrocede en el nivel: borra el avance de esta lección y de las siguientes del
// mismo nivel, porque cada una exige haber completado la anterior. Devuelve lo que la cuenta
// perdió, para informarlo. Después de esto las barras y el ranking bajan solos,
// ya que todo se calcula a partir del progreso guardado.
const retrocederLeccion = (usuario, curso, leccionId) => {
  const lecciones = leccionesDelNivel(curso, nivelDeLeccion(curso, leccionId).id);
  const indice = lecciones.findIndex((l) => l.id === leccionId);
  const registros = usuario.progreso[curso.id] ?? {};
  let xpQuitada = 0;
  let gemasQuitadas = 0;

  lecciones.slice(indice).forEach(({ id }) => {
    if (registros[id]) {
      xpQuitada += restarExperiencia(usuario, registros[id].xpAcumulada ?? 0);
      gemasQuitadas += Math.min(usuario.gemas, registros[id].gemasAcumuladas ?? 0);
      usuario.gemas -= Math.min(usuario.gemas, registros[id].gemasAcumuladas ?? 0);
      delete registros[id];
    }
  });
  return { xpQuitada, gemasQuitadas };
};

// Armado de direcciones, en un solo lugar para no repetir rutas.
const urlMapa = (cursoId, leccionId = null) => {
  const base = `${RAIZ}mapa_lecciones/mapa_lecciones_${cursoId}.html`;
  return leccionId ? `${base}?nivel=${nivelDeLeccion(obtenerCurso(cursoId), leccionId).id}#leccion-${leccionId}` : base;
};

const urlLeccion = (cursoId, leccionId, extra = '') =>
  `${RAIZ}leccion/leccion.html?curso=${cursoId}&leccion=${leccionId}${extra}`;


/* ---------------------------------------------------------------------
   3. EXPERIENCIA, RACHA Y META DIARIA
   --------------------------------------------------------------------- */

const sumarExperiencia = (usuario, cantidad) => {
  usuario.xp += cantidad;
  usuario.xpSemanal += cantidad;
  usuario.xpHoy += cantidad;
};

// Resta experiencia sin bajar de cero. Devuelve cuánto se restó realmente, porque
// una cuenta con 1 XP no puede perder 2.
const restarExperiencia = (usuario, cantidad) => {
  const quitada = Math.min(usuario.xp, cantidad);
  usuario.xp -= quitada;
  usuario.xpSemanal = Math.max(usuario.xpSemanal - quitada, 0);
  usuario.xpHoy = Math.max(usuario.xpHoy - quitada, 0);
  return quitada;
};

// Se llama al terminar una lección. Solo cuenta una vez por día.
const registrarActividadDiaria = (usuario) => {
  const hoy = fechaHoy();
  if (usuario.ultimoDia === hoy) {
    return;
  }
  const continuaRacha = usuario.ultimoDia !== null && diasEntre(usuario.ultimoDia, hoy) === 1;
  usuario.racha = continuaRacha ? usuario.racha + 1 : 1;
  usuario.ultimoDia = hoy;
  usuario.diasActivos = [...usuario.diasActivos, hoy].slice(-30);
};

// Pone al día la cuenta al entrar: reinicia la XP del día, revisa si la racha
// se cortó y cierra la semana si cambió. Si el tiempo no pasó, no modifica nada.
const sincronizarUsuario = (usuario) => {
  const hoy = fechaHoy();
  const copia = JSON.stringify(usuario);

  if (usuario.fechaXpHoy !== hoy) {
    usuario.xpHoy = 0;
    usuario.fechaXpHoy = hoy;
  }

  const diasSinPracticar = usuario.ultimoDia ? diasEntre(usuario.ultimoDia, hoy) : 0;
  if (diasSinPracticar === 2 && usuario.inventario.protector > 0) {
    // El protector cubre un único día perdido: hace de cuenta que practicó ayer.
    usuario.inventario.protector -= 1;
    usuario.ultimoDia = sumarDias(hoy, -1);
  } else if (diasSinPracticar >= 2) {
    usuario.racha = 0;
  }

  if (usuario.semana !== claveSemana()) {
    cerrarSemana(usuario);
  }

  if (JSON.stringify(usuario) !== copia) {
    guardarUsuario(usuario);
  }
};


/* ---------------------------------------------------------------------
   4. LIGAS Y CLASIFICACIÓN
   --------------------------------------------------------------------- */

const obtenerLiga = (ligaId) => LIGAS.find((liga) => liga.id === ligaId);

// XP de la semana en curso. Una cuenta que no entró esta semana todavía tiene
// guardada la XP de la anterior, que ya no debe contar. Los bots no entran
// nunca, así que conservan su puntaje para que el ranking no quede vacío.
const xpSemanalVigente = (usuario) => (usuario.bot || usuario.semana === claveSemana() ? usuario.xpSemanal : 0);

// Participantes de una liga ordenados de mayor a menor puntaje.
const obtenerParticipantes = (ligaId) =>
  obtenerUsuarios()
    .filter((u) => u.liga === ligaId)
    .map((u) => ({ ...u, xpSemanal: xpSemanalVigente(u) }))
    .sort((a, b) => b.xpSemanal - a.xpSemanal || a.usuario.localeCompare(b.usuario));

// Puesto de una cuenta dentro de su liga según los puntajes actuales. Recibe el
// usuario ya modificado por si todavía no se guardó.
const obtenerPuesto = (usuario) => {
  const participantes = obtenerParticipantes(usuario.liga)
    .map((p) => (p.id === usuario.id ? { ...p, xpSemanal: usuario.xpSemanal } : p))
    .sort((a, b) => b.xpSemanal - a.xpSemanal || a.usuario.localeCompare(b.usuario));
  return participantes.findIndex((p) => p.id === usuario.id) + 1;
};

// Dice qué pasaría con un puesto si la semana cerrara ahora.
const estadoEnLiga = (puesto, total, liga, xp) => {
  if (puesto <= liga.ascienden && xp > 0) {
    return { id: 'asciende', texto: '⬆ Asciende' };
  }
  if (liga.descienden > 0 && puesto > total - liga.descienden) {
    return { id: 'desciende', texto: '⬇ Desciende' };
  }
  return { id: 'permanece', texto: '➡ Permanece' };
};

// Archiva la semana terminada como temporada y mueve de liga si corresponde.
const cerrarSemana = (usuario) => {
  if (usuario.xpSemanal > 0) {
    const puesto = obtenerPuesto(usuario);
    const liga = obtenerLiga(usuario.liga);
    const estado = estadoEnLiga(puesto, obtenerParticipantes(usuario.liga).length, liga, usuario.xpSemanal);
    const indice = LIGAS.indexOf(liga);

    usuario.historial = [...usuario.historial, {
      temporada: usuario.historial.length + 1,
      liga: usuario.liga,
      xp: usuario.xpSemanal,
      puesto
    }];
    if (estado.id === 'asciende') {
      usuario.liga = LIGAS[indice + 1]?.id ?? usuario.liga;
    } else if (estado.id === 'desciende') {
      usuario.liga = LIGAS[indice - 1]?.id ?? usuario.liga;
    }
  }
  usuario.xpSemanal = 0;
  usuario.semana = claveSemana();
};


/* ---------------------------------------------------------------------
   5. OPINIONES
   Valoraciones: una por persona y curso (si vuelve a votar, se reemplaza).
   Comentarios: una persona puede dejar varios.
   Se guarda el id de quien opinó y no su nombre: así, si cambia el nombre
   en el perfil, se actualiza también en sus comentarios.
   --------------------------------------------------------------------- */

const obtenerValoraciones = (cursoId) => leerColeccion(CLAVES.VALORACIONES).filter((v) => v.curso === cursoId);

const obtenerComentarios = (cursoId) =>
  leerColeccion(CLAVES.COMENTARIOS)
    .filter((c) => c.curso === cursoId)
    .sort((a, b) => b.fecha.localeCompare(a.fecha));

const guardarValoracion = (cursoId, usuarioId, estrellas) => {
  const otras = leerColeccion(CLAVES.VALORACIONES).filter((v) => !(v.curso === cursoId && v.usuarioId === usuarioId));
  return guardarColeccion(CLAVES.VALORACIONES, [...otras, { curso: cursoId, usuarioId, estrellas }]);
};

const guardarComentario = (cursoId, usuarioId, texto) =>
  guardarColeccion(CLAVES.COMENTARIOS, [...leerColeccion(CLAVES.COMENTARIOS), { curso: cursoId, usuarioId, texto, fecha: fechaHoy() }]);

// Cuántas opiniones dejó una persona en total, entre todos los cursos.
const contarOpiniones = (usuarioId) =>
  [...leerColeccion(CLAVES.VALORACIONES), ...leerColeccion(CLAVES.COMENTARIOS)].filter((o) => o.usuarioId === usuarioId).length;


/* ---------------------------------------------------------------------
   6. LOGROS
   --------------------------------------------------------------------- */

// Resume la actividad de la cuenta con los números que miran los logros.
const resumirActividad = (usuario) => ({
  leccionesCompletadas: CURSOS.reduce((total, curso) => total + contarCompletadas(usuario, curso), 0),
  cursosCompletos: CURSOS.filter((curso) => porcentajeCurso(usuario, curso) === 100).length,
  nivelesCompletos: CURSOS.reduce((total, curso) => total + curso.niveles.filter((n) => nivelCompletado(usuario, curso, n.id)).length, 0),
  racha: usuario.racha,
  xp: usuario.xp,
  opiniones: contarOpiniones(usuario.id)
});

// Lista de logros, cada uno marcado como obtenido o no.
const calcularLogros = (usuario) => {
  const resumen = resumirActividad(usuario);
  return LOGROS.map((logro) => ({ ...logro, obtenido: logro.cumple(resumen) }));
};
