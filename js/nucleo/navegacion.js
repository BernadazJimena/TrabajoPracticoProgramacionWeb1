/* =====================================================================
   navegacion.js  -  TEXTOS, BARRA DE NAVEGACIÓN Y ARRANQUE
   Archivo: js/nucleo/navegacion.js

   Textos de la interfaz y barra superior. Debe ser el ÚLTIMO archivo de
   js/nucleo: al final pone en marcha la aplicación.

   No usamos import/export (type="module") porque los módulos no funcionan al
   abrir el HTML con doble clic. Con scripts clásicos, lo que se declara acá
   queda disponible en los archivos que se cargan después.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. TEXTOS DE LA INTERFAZ
   Las vistas escriben en español. Si la cuenta eligió otro idioma, los traduce
   js/nucleo/traduccion.js.
   --------------------------------------------------------------------- */

const TEXTOS = Object.freeze({
  navPerfil: 'Perfil', navCursos: 'Cursos', navMapa: 'Mapa de lecciones', navRanking: 'Clasificación', navHistorico: 'Histórico',
  navTienda: 'Rachas/Tienda', navContacto: 'Contacto', navIngresar: 'Iniciar sesión', navRegistrarse: 'Registrarse',
  dia: 'día', dias: 'días', cursosTitulo: 'Mis cursos de idiomas', estadisticas: 'Estadísticas', metaDiaria: 'Meta diaria',
  continuar: 'Continuar', comenzar: 'Comenzar', repasar: 'Repasar', progreso: 'Progreso', nivel: 'Nivel',
  mapaTitulo: 'Mapa de lecciones', volverCursos: '← Volver a mis cursos', opiniones: 'Opiniones del curso',
  ajustes: 'Ajustes de cuenta', infoPersonal: 'Información personal', cambiarPassword: 'Cambiar contraseña',
  guardarCambios: 'Guardar cambios', cerrarSesion: 'Cerrar sesión',
  logros: 'Logros', rankingTitulo: 'Tabla de clasificación', tuPosicion: 'Tu posición',
  historicoTitulo: 'Mi histórico', tiendaTitulo: 'Rachas/Tienda', volverMapa: 'Volver al mapa', volverPanel: 'Ir a mis cursos'
});

// Devuelve el texto de una clave.
const t = (clave) => TEXTOS[clave];


/* ---------------------------------------------------------------------
   2. BARRA DE NAVEGACIÓN
   Se arma desde acá para no repetirla en cada HTML. Reemplaza el contenido
   del <nav class="navbar"> de la página, donde esté.
   --------------------------------------------------------------------- */

// Marca la opción de la página actual. Lleva aria-current para que no se
// distinga solo por el color.
const crearEnlaceNav = (href, texto, activo) => {
  const enlace = crearElemento('a', { clase: `nav-link${activo ? ' active' : ''}`, texto, atributos: { href } });
  if (activo) {
    enlace.setAttribute('aria-current', 'page');
  }
  return enlace;
};

// Menú desplegable con un mapa por curso. Sale de CURSOS: si se suma un idioma,
// aparece solo.
const crearMenuMapas = (ruta) => {
  const menu = crearElemento('details', { clase: 'nav-menu' });
  const activo = ruta.includes('mapa_lecciones');
  const lista = crearElemento('ul', { clase: 'nav-menu-opciones' });

  menu.appendChild(crearElemento('summary', { clase: `nav-link${activo ? ' active' : ''}`, texto: t('navMapa') }));
  CURSOS.forEach((curso) => {
    const item = crearElemento('li');
    const enlace = crearElemento('a', { atributos: { href: urlMapa(curso.id) } });
    enlace.append(crearBandera(curso, 'bandera-mini'), curso.nombre);
    if (ruta.includes(`mapa_lecciones_${curso.id}`)) {
      enlace.setAttribute('aria-current', 'page');
    }
    item.appendChild(enlace);
    lista.appendChild(item);
  });
  menu.appendChild(lista);
  return menu;
};

// Enlaces de quien tiene la sesión iniciada.
const crearEnlacesPrivados = (ruta) => {
  const enlaces = crearElemento('div', { clase: 'nav-links' });
  const enLeccion = ruta.includes('/leccion/');
  enlaces.append(
    crearEnlaceNav(`${RAIZ}mis_cursos/mis_cursos.html`, t('navCursos'), ruta.includes('mis_cursos.html') || enLeccion),
    crearEnlaceNav(`${RAIZ}perfil/perfil.html`, t('navPerfil'), ruta.includes('perfil.html')),
    crearEnlaceNav(`${RAIZ}Ranking/ranking.html`, t('navRanking'), ruta.includes('Ranking/ranking.html')),
    crearEnlaceNav(`${RAIZ}tienda/tienda.html`, t('navTienda'), ruta.includes('tienda.html')),
    crearMenuMapas(ruta),
    crearEnlaceNav(`${RAIZ}ranking_historico/ranking_historico.html`, t('navHistorico'), ruta.includes('ranking_historico.html')),
    crearEnlaceNav(`${RAIZ}contacto/contacto.html`, t('navContacto'), ruta.includes('contacto.html'))
  );
  return enlaces;
};

// Sin sesión solo se ofrece entrar o registrarse: el resto pediría iniciar sesión.
const crearEnlacesPublicos = () => {
  const enlaces = crearElemento('div', { clase: 'nav-links nav-publica' });
  enlaces.append(
    crearEnlaceNav(`${RAIZ}login/login.html`, t('navIngresar'), false),
    crearEnlaceNav(`${RAIZ}registro/registro.html`, t('navRegistrarse'), false)
  );
  return enlaces;
};

const crearEstadisticasNav = (usuario) => {
  const estadisticas = crearElemento('div', { clase: 'nav-stats' });
  estadisticas.append(
    crearElemento('span', { clase: 'stat-item estadistica-racha', texto: `🔥 ${conPlural(usuario.racha, t('dia'), t('dias'))}` }),
    crearElemento('span', { clase: 'stat-item estadistica-xp', texto: `⚡ ${usuario.xp} XP` })
  );
  return estadisticas;
};

const renderizarNavbar = () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) {
    return;
  }
  const usuario = obtenerUsuarioActivo();
  const ruta = window.location.pathname;
  const inicio = usuario ? `${RAIZ}mis_cursos/mis_cursos.html` : `${RAIZ}index.html`;

  vaciar(navbar);
  navbar.setAttribute('aria-label', 'Navegación principal');
  navbar.appendChild(crearElemento('a', { clase: 'nav-brand', texto: 'LingoWeb', atributos: { href: inicio } }));
  navbar.appendChild(usuario ? crearEnlacesPrivados(ruta) : crearEnlacesPublicos());
  if (usuario) {
    navbar.appendChild(crearEstadisticasNav(usuario));
  }
};


/* ---------------------------------------------------------------------
   3. ARRANQUE
   Corre una vez por página, antes que el archivo de la vista.
   --------------------------------------------------------------------- */

inicializarBaseDeDatos();

const usuarioAlCargar = obtenerUsuarioActivo();
if (usuarioAlCargar) {
  sincronizarUsuario(usuarioAlCargar);
}
aplicarIdioma();
renderizarNavbar();

// Al usar Atrás, el navegador puede mostrar la página tal como quedó en memoria,
// con datos viejos. Si eso pasó (persisted), la recargamos para que refleje el
// progreso actual y para que no se vea una cuenta después de cerrar sesión.
window.addEventListener('pageshow', (evento) => {
  if (evento.persisted) {
    window.location.reload();
  }
});

// El evento storage avisa cuando OTRA pestaña cambió localStorage. Mantiene al
// día la XP y la racha de la barra si hay dos pestañas abiertas.
window.addEventListener('storage', renderizarNavbar);
