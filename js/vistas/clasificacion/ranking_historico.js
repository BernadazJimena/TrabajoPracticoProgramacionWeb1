/* =====================================================================
   ranking_historico.js  -  HISTÓRICO DE LA CUENTA

   Cada semana cerrada se archiva como una temporada (lo hace cerrarSemana en
   js/nucleo/progreso.js). Esta vista calcula las métricas a partir de ese historial.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. CÁLCULOS
   --------------------------------------------------------------------- */

const ICONOS_PUESTO = Object.freeze({ 1: '🥇', 2: '🥈', 3: '🥉' });

// El historial no incluye la semana en curso; se la suma como temporada abierta.
const temporadasDeLaCuenta = (usuario) => {
  const actual = {
    temporada: usuario.historial.length + 1,
    liga: usuario.liga,
    xp: xpSemanalVigente(usuario),
    puesto: obtenerPuesto(usuario),
    enCurso: true
  };
  return [...usuario.historial, actual].filter((temporada) => temporada.xp > 0).reverse();
};

// Mejor temporada, peor temporada y promedio, usando reduce como en el apunte. La
// semana en curso no cuenta si ya hay temporadas cerradas: como todavía no
// terminó, siempre parecería la peor.
const calcularMetricas = (temporadas) => {
  const cerradas = temporadas.filter((temporada) => !temporada.enCurso);
  const base = cerradas.length > 0 ? cerradas : temporadas;
  const total = base.reduce((suma, temporada) => suma + temporada.xp, 0);
  const maxima = base.reduce((mejor, temporada) => (temporada.xp > mejor.xp ? temporada : mejor));
  const minima = base.reduce((peor, temporada) => (temporada.xp < peor.xp ? temporada : peor));
  return { promedio: Math.round(total / base.length), maxima, minima };
};


/* ---------------------------------------------------------------------
   2. PANEL LATERAL
   --------------------------------------------------------------------- */

const renderizarPanel = (usuario, promedio) => {
  const liga = obtenerLiga(usuario.liga);
  vaciar(document.querySelector('.sidebar-widget')).append(
    crearElemento('h3', { texto: 'Resumen general' }),
    crearFilaResumen(liga.icono, liga.nombre, `Temporada actual #${usuario.historial.length + 1}`),
    crearFilaResumen('📈', 'Promedio', `${promedio} XP / temporada`)
  );
};


/* ---------------------------------------------------------------------
   3. TARJETAS
   --------------------------------------------------------------------- */

const crearMetrica = (icono, etiqueta, temporada) => {
  const tarjeta = crearElemento('article', { clase: 'tarjeta tarjeta-metrica' });
  const info = crearElemento('div', { clase: 'metrica-info' });
  info.append(
    crearElemento('span', { clase: 'metrica-label', texto: etiqueta }),
    crearElemento('strong', { clase: 'metrica-valor', texto: `${temporada.xp} XP` }),
    crearElemento('span', { clase: 'metrica-sub', texto: `${obtenerLiga(temporada.liga).nombre} • Temp. ${temporada.temporada}` })
  );
  tarjeta.append(crearElemento('span', { clase: 'metrica-icono', texto: icono, atributos: { 'aria-hidden': 'true' } }), info);
  return tarjeta;
};

const crearProgresoAcumulado = (usuario) => {
  const meta = REGLAS.XP_NIVEL_LEYENDA;
  const porcentaje = Math.min(Math.round((usuario.xp / meta) * 100), 100);
  return crearTarjetaHistorico('🎯', 'Progreso acumulado', `Meta hacia Nivel Leyenda: ${meta} XP (Total: ${usuario.xp} XP)`, porcentaje, `${porcentaje}%`);
};

// Tarjeta genérica: la usan tanto el progreso acumulado como cada temporada.
const crearTarjetaHistorico = (icono, titulo, detalle, porcentaje, valor) => {
  const tarjeta = crearElemento('article', { clase: 'tarjeta tarjeta-historico' });
  const izquierda = crearElemento('div', { clase: 'historico-izq' });
  const info = crearElemento('div', { clase: 'info-historico' });

  info.append(crearElemento('h3', { texto: titulo }), crearElemento('p', { texto: detalle }), crearBarraProgreso(porcentaje, titulo));
  izquierda.append(crearElemento('span', { clase: 'icono-historico', texto: icono, atributos: { 'aria-hidden': 'true' } }), info);
  tarjeta.append(izquierda, crearElemento('strong', { clase: 'puntos-historico', texto: valor }));
  return tarjeta;
};

// La barra de cada temporada se compara contra la mejor de la cuenta.
const crearTarjetaTemporada = (temporada, maxima) => {
  const liga = obtenerLiga(temporada.liga);
  const titulo = `Temporada ${temporada.temporada} - ${liga.nombre}${temporada.enCurso ? ' (en curso)' : ''}`;
  const porcentaje = Math.round((temporada.xp / maxima.xp) * 100);
  return crearTarjetaHistorico(
    ICONOS_PUESTO[temporada.puesto] ?? '🏅',
    titulo,
    `Puesto ${temporada.enCurso ? 'actual' : 'alcanzado'}: #${temporada.puesto}`,
    porcentaje,
    `${temporada.xp} XP`
  );
};


/* ---------------------------------------------------------------------
   4. ARMADO DE LA VISTA
   --------------------------------------------------------------------- */

const renderizarHistorico = (usuario) => {
  const seccion = vaciar(document.querySelector('.seccion-historico'));
  const temporadas = temporadasDeLaCuenta(usuario);
  seccion.appendChild(crearElemento('h1', { clase: 'titulo-pagina', texto: t('historicoTitulo') }));

  if (temporadas.length === 0) {
    renderizarPanel(usuario, 0);
    seccion.appendChild(crearEstadoVacio(
      'Todavía no tienes temporadas',
      'Completa una lección para sumar experiencia y empezar tu historial.',
      { texto: t('volverPanel'), href: '../mis_cursos/mis_cursos.html' }
    ));
    return;
  }

  const { promedio, maxima, minima } = calcularMetricas(temporadas);
  const metricas = crearElemento('div', { clase: 'grid-metricas' });
  metricas.append(crearMetrica('🚀', 'Puntaje máximo', maxima), crearMetrica('⚓', 'Puntaje mínimo', minima));

  renderizarPanel(usuario, promedio);
  seccion.append(
    metricas,
    crearProgresoAcumulado(usuario),
    crearElemento('h2', { texto: 'Historial por temporada' }),
    ...temporadas.map((temporada) => crearTarjetaTemporada(temporada, maxima))
  );
};


/* ---------------------------------------------------------------------
   5. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

const usuarioActivo = exigirSesion();
if (usuarioActivo) {
  renderizarHistorico(usuarioActivo);
}
