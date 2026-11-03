/* =====================================================================
   base_de_datos.js  -  BASE DE DATOS, USUARIOS Y SESIÓN

   Es la "base de datos" simulada: todo lo que cambia con el uso se guarda en
   localStorage como texto JSON. Acá están las claves, la
   lectura y escritura, el alta de cuentas y la sesión activa.

   No usamos import/export (type="module") porque los módulos no funcionan al
   abrir el HTML con doble clic. Con scripts clásicos, lo que se declara acá
   queda disponible en los archivos que se cargan después.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. CONSTANTES
   --------------------------------------------------------------------- */

// Nombres de las "tablas" de nuestra base de datos simulada.
const CLAVES = Object.freeze({
  USUARIOS: 'lingoweb_usuarios',
  SESION: 'lingoweb_sesion',
  VALORACIONES: 'lingoweb_valoraciones',
  COMENTARIOS: 'lingoweb_comentarios',
  REPORTES: 'lingoweb_reportes',
  AVISO: 'lingoweb_aviso'
});


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const USUARIO_REGEX = /^[a-zA-Z0-9_.]{3,20}$/;

const MENSAJE_PASSWORD = 'Usa al menos 8 caracteres, con una mayúscula, una minúscula y un número, sin símbolos.';

// Ruta hacia la raíz del sitio. La sacamos del propio <script> para que sirva
// tanto en index.html ("") como en las páginas dentro de carpetas ("../").
const RAIZ = document.querySelector('script[src*="base_de_datos.js"]').getAttribute('src').replace('js/nucleo/base_de_datos.js', '');


/* ---------------------------------------------------------------------
   2. BASE DE DATOS (localStorage)
   localStorage solo guarda texto: JSON.stringify convierte a texto al
   escribir y JSON.parse vuelve a objeto al leer.
   --------------------------------------------------------------------- */

// Lee una colección. Si no existe o el texto está dañado, devuelve una lista vacía.
const leerColeccion = (clave) => {
  try {
    const texto = localStorage.getItem(clave);
    return texto ? JSON.parse(texto) : [];
  } catch (error) {
    console.error(`No se pudo leer ${clave}:`, error);
    return [];
  }
};

// Guarda una colección. Devuelve false si falla (por ejemplo, si se supera el
// límite de unos 5 MB) para no confirmar un guardado que no se hizo.
const guardarColeccion = (clave, datos) => {
  try {
    localStorage.setItem(clave, JSON.stringify(datos));
    return true;
  } catch (error) {
    console.error(`No se pudo guardar ${clave}:`, error);
    return false;
  }
};

// Solo la primera vez que se abre el sitio: copia las cuentas y opiniones de
// demostración a localStorage. Después no se vuelve a pisar lo guardado.
const inicializarBaseDeDatos = () => {
  if (localStorage.getItem(CLAVES.USUARIOS) !== null) {
    return;
  }
  guardarColeccion(CLAVES.USUARIOS, CUENTAS_DEMO.map(crearCuentaDemo));
  guardarColeccion(CLAVES.VALORACIONES, [...VALORACIONES_DEMO]);
  guardarColeccion(CLAVES.COMENTARIOS, [...COMENTARIOS_DEMO]);
  guardarColeccion(CLAVES.REPORTES, []);
};


/* ---------------------------------------------------------------------
   3. USUARIOS
   --------------------------------------------------------------------- */

// Molde de una cuenta. Define todos los campos que debe
// tener, con sus valores iniciales; lo que llega en "datos" pisa esos valores.
// Al pasar por JSON los objetos pierden la clase, por eso las funciones que
// operan sobre un usuario están afuera y no como métodos.
class Usuario {
  constructor(datos) {
    Object.assign(this, {
      id: `usuario_${Date.now()}`,
      nombre: '',
      usuario: '',
      email: '',
      password: null,
      bot: false,
      avatar: null,           // Foto de perfil como texto base64, o null
      fechaAlta: fechaHoy(),
      idioma: 'es',           // Idioma de la interfaz elegido en el perfil
      liga: 'bronce',
      xp: 0,
      xpSemanal: 0,
      xpHoy: 0,
      fechaXpHoy: fechaHoy(),
      semana: claveSemana(),
      gemas: REGLAS.GEMAS_INICIALES,
      metaDiaria: REGLAS.META_DIARIA_INICIAL,
      racha: 0,
      ultimoDia: null,        // Último día con una lección terminada
      diasActivos: [],
      progreso: {},           // { ingles: { 1: { completada, resultado, intento } } }
      nivelesAbiertos: {},    // Niveles que eligió empezar: { ingles: ['b1'] }
      nivelElegido: {},       // Nivel en el que está trabajando: { ingles: 'a2' }
      inventario: { protector: 0, vida_extra: 0, doble_xp: 0 },
      insignias: [],
      historial: []           // Temporadas (semanas) ya cerradas
    }, datos);
  }
}

// Convierte una cuenta de demostracion.js en un usuario completo: expande la lista de
// lecciones completadas y arma una racha coherente que termina ayer.
const crearCuentaDemo = ({ completadas = {}, ...datos }) => {
  const usuario = new Usuario(datos);
  Object.entries(completadas).forEach(([cursoId, lecciones]) => {
    usuario.progreso[cursoId] = {};
    lecciones.forEach((leccionId) => {
      usuario.progreso[cursoId][leccionId] = {
        completada: true,
        intento: null,
        xpAcumulada: 30,
        gemasAcumuladas: 5,
        resultado: { aciertos: 3, errores: 0, xp: 30, xpPerdida: 0, gemas: 5, fecha: usuario.fechaAlta, repeticiones: 0 }
      };
    });
  });
  if (usuario.racha > 0) {
    usuario.ultimoDia = sumarDias(fechaHoy(), -1);
    usuario.diasActivos = Array.from({ length: usuario.racha }, (_, i) => sumarDias(fechaHoy(), -1 - i)).reverse();
  }
  return usuario;
};

const obtenerUsuarios = () => leerColeccion(CLAVES.USUARIOS);

const buscarUsuarioPorId = (id) => obtenerUsuarios().find((u) => u.id === id);

// Reemplaza en la colección al usuario con el mismo id y guarda todo.
const guardarUsuario = (usuario) => {
  const usuarios = obtenerUsuarios().map((u) => (u.id === usuario.id ? usuario : u));
  return guardarColeccion(CLAVES.USUARIOS, usuarios);
};

const agregarUsuario = (usuario) => guardarColeccion(CLAVES.USUARIOS, [...obtenerUsuarios(), usuario]);

// Acepta nombre de usuario o correo, sin distinguir mayúsculas.
const buscarPorIdentificador = (identificador) => {
  const texto = identificador.trim().toLowerCase();
  return obtenerUsuarios().find((u) => u.usuario.toLowerCase() === texto || (u.email ?? '').toLowerCase() === texto);
};

// Indica si un usuario o correo ya lo usa OTRA cuenta. "idPropio" permite que
// en el perfil se pueda guardar sin cambiar el dato propio.
const estaOcupado = (campo, valor, idPropio = null) => {
  const texto = valor.trim().toLowerCase();
  return obtenerUsuarios().some((u) => u.id !== idPropio && (u[campo] ?? '').toLowerCase() === texto);
};


/* ---------------------------------------------------------------------
   4. SESIÓN
   La sesión es solo el id de la persona activa. Cerrar sesión borra ese id,
   pero la cuenta y su avance siguen guardados.
   --------------------------------------------------------------------- */

const iniciarSesion = (usuario) => localStorage.setItem(CLAVES.SESION, usuario.id);

const cerrarSesion = () => localStorage.removeItem(CLAVES.SESION);

const obtenerUsuarioActivo = () => {
  const id = localStorage.getItem(CLAVES.SESION);
  return id ? buscarUsuarioPorId(id) ?? null : null;
};

// Las vistas privadas la llaman al empezar. Sin sesión, redirige al acceso.
const exigirSesion = () => {
  const usuario = obtenerUsuarioActivo();
  if (!usuario) {
    dejarAviso('Inicia sesión para continuar.');
    window.location.href = `${RAIZ}login/login.html`;
  }
  return usuario;
};

// Mensajes que deben sobrevivir a un cambio de página. Van en sessionStorage
// porque son temporales: se muestran una vez y se borran.
const dejarAviso = (texto) => sessionStorage.setItem(CLAVES.AVISO, texto);

const tomarAviso = () => {
  const texto = sessionStorage.getItem(CLAVES.AVISO);
  sessionStorage.removeItem(CLAVES.AVISO);
  return texto;
};
