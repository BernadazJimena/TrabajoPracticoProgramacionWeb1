/* =====================================================================
   mis_cursos.js  -  PANEL PRINCIPAL (DASHBOARD)
   Archivo: js/vistas/cursos/mis_cursos.js

   Dibuja el resumen de actividad y una tarjeta por curso con el avance de
   la cuenta activa. Si todavía no hay actividad, muestra una invitación.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. RESUMEN DE ACTIVIDAD (panel lateral)
   --------------------------------------------------------------------- */

const renderizarResumen = (usuario) => {
  const widget = vaciar(document.querySelector('.sidebar-widget'));
  const liga = obtenerLiga(usuario.liga);
  const porcentajeMeta = Math.round((usuario.xpHoy / usuario.metaDiaria) * 100);

  widget.append(
    crearElemento('h3', { texto: t('estadisticas') }),
    crearFilaResumen('🔥', 'Racha', `${conPlural(usuario.racha, 'día seguido', 'días seguidos')}`),
    crearFilaResumen('⚡', 'Experiencia', `${usuario.xp} XP acumulados`),
    crearFilaResumen(liga.icono, liga.nombre, `${xpSemanalVigente(usuario)} XP esta semana`),
    crearFilaResumen('🎯', t('metaDiaria'), `${usuario.xpHoy} / ${usuario.metaDiaria} XP hoy`),
    crearBarraProgreso(porcentajeMeta, 'Avance de la meta diaria')
  );
};


/* ---------------------------------------------------------------------
   2. TARJETAS DE CURSOS
   --------------------------------------------------------------------- */

// El texto del botón depende de cuánto avanzó en ese curso.
const textoBotonCurso = (usuario, curso) => {
  const porcentaje = porcentajeCurso(usuario, curso);
  if (porcentaje === 100) {
    return t('repasar');
  }
  const empezado = Object.keys(usuario.progreso[curso.id] ?? {}).length > 0;
  return empezado ? t('continuar') : t('comenzar');
};

const crearTarjetaCurso = (usuario, curso) => {
  const nivel = nivelActual(usuario, curso);
  const porcentaje = porcentajeNivel(usuario, curso, nivel.id);
  const tarjeta = crearElemento('article', { clase: 'tarjeta tarjeta-curso' });
  const izquierda = crearElemento('div', { clase: 'curso-izq' });
  const info = crearElemento('div', { clase: 'info-curso' });
  const enlace = crearElemento('a', {
    clase: 'btn btn-primario btn-curso',
    texto: textoBotonCurso(usuario, curso),
    atributos: { href: urlMapa(curso.id), 'aria-label': `${textoBotonCurso(usuario, curso)}: ${curso.nombre}` }
  });

  info.append(
    crearElemento('h2', { texto: curso.nombreCompleto }),
    crearElemento('p', { texto: `${t('nivel')}: ${nombreNivel(nivel)} • ${t('progreso')}: ${porcentaje}%` }),
    crearBarraProgreso(porcentaje, `Progreso de ${nivel.nombre} en ${curso.nombre}`)
  );
  izquierda.append(crearBandera(curso, 'bandera-curso'), info);
  tarjeta.append(izquierda, enlace);

  // Toda la tarjeta se ve clickeable (cursor: pointer en el CSS), así que toda
  // abre el curso. El enlace real se conserva para navegar con teclado.
  tarjeta.addEventListener('click', () => {
    window.location.href = urlMapa(curso.id);
  });

  return tarjeta;
};

// Vuelve a dibujar los cursos debajo del título, que queda en su lugar.
const renderizarCursos = (usuario) => {
  const seccion = document.querySelector('.seccion-cursos');
  const titulo = seccion.querySelector('h1');
  titulo.textContent = t('cursosTitulo');
  vaciar(seccion).appendChild(titulo);

  if (!tieneActividad(usuario)) {
    seccion.appendChild(crearEstadoVacio(
      `¡Hola, ${usuario.nombre}!`,
      'Todavía no registras actividad. Elige un idioma y completa tu primera lección para empezar tu racha.',
      { texto: `Empezar con ${CURSOS[0].nombre}`, href: urlLeccion(CURSOS[0].id, 1) }
    ));
  }

  CURSOS.forEach((curso) => seccion.appendChild(crearTarjetaCurso(usuario, curso)));
};


/* ---------------------------------------------------------------------
   3. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

const usuarioActivo = exigirSesion();
if (usuarioActivo) {
  renderizarResumen(usuarioActivo);
  renderizarCursos(usuarioActivo);
}
