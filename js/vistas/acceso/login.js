/* =====================================================================
   login.js  -  INICIO DE SESIÓN
   Archivo: js/vistas/acceso/login.js

   Valida el formulario, busca la cuenta por usuario o correo y, si los
   datos coinciden, identifica a la persona activa y la lleva al panel.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. ELEMENTOS DE LA PÁGINA
   --------------------------------------------------------------------- */

const formularioLogin = document.querySelector('form');
const campoIdentificador = document.querySelector('#email');
const campoPassword = document.querySelector('#password');
const zonaMensajeLogin = crearZonaMensaje();


/* ---------------------------------------------------------------------
   2. PREPARACIÓN DEL FORMULARIO
   --------------------------------------------------------------------- */

// El HTML tiene type="email", pero la consigna pide aceptar también el nombre de
// usuario. noValidate apaga los globos del navegador para usar nuestros mensajes.
const prepararFormulario = () => {
  campoIdentificador.type = 'text';
  campoIdentificador.placeholder = 'tu_usuario o tu@correo.com';
  campoIdentificador.autocomplete = 'username';
  campoPassword.autocomplete = 'current-password';
  formularioLogin.noValidate = true;
  formularioLogin.before(zonaMensajeLogin);
};

// Muestra el aviso que dejó otra página (registro exitoso, sesión cerrada, etc.).
const mostrarAvisoPendiente = () => {
  const aviso = tomarAviso();
  if (aviso) {
    mostrarMensaje(zonaMensajeLogin, aviso, 'info');
  }
};


/* ---------------------------------------------------------------------
   3. VALIDACIÓN
   --------------------------------------------------------------------- */

// Revisa que no falte información. Devuelve la lista de errores encontrados.
const validarCampos = () => {
  const errores = [];
  if (campoIdentificador.value.trim() === '') {
    errores.push({ campo: campoIdentificador, mensaje: 'Ingresa tu usuario o correo electrónico.' });
  }
  if (campoPassword.value === '') {
    errores.push({ campo: campoPassword, mensaje: 'Ingresa tu contraseña.' });
  }
  return errores;
};

// Busca la cuenta y compara la contraseña. Las cuentas bot no tienen contraseña,
// así que nunca coinciden y no se puede entrar con ellas.
const autenticar = (identificador, password) => {
  const cuenta = buscarPorIdentificador(identificador);
  return cuenta && cuenta.password === password ? cuenta : null;
};


/* ---------------------------------------------------------------------
   4. ENVÍO DEL FORMULARIO
   --------------------------------------------------------------------- */

const manejarEnvio = (evento) => {
  evento.preventDefault();
  ocultarMensaje(zonaMensajeLogin);

  if (!aplicarErrores(formularioLogin, validarCampos())) {
    return;
  }

  const cuenta = autenticar(campoIdentificador.value, campoPassword.value);
  if (!cuenta) {
    // No aclara cuál de los dos datos falló, como en cualquier acceso real.
    mostrarMensaje(zonaMensajeLogin, 'No reconocemos esa cuenta. Revisa tu usuario y tu contraseña.', 'error');
    campoPassword.value = '';
    campoPassword.focus();
    return;
  }

  iniciarSesion(cuenta);
  window.location.href = '../mis_cursos/mis_cursos.html';
};


/* ---------------------------------------------------------------------
   5. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

// Con una sesión ya iniciada no hace falta volver a entrar.
if (obtenerUsuarioActivo()) {
  window.location.replace('../mis_cursos/mis_cursos.html');
} else {
  prepararFormulario();
  mostrarAvisoPendiente();
  formularioLogin.addEventListener('submit', manejarEnvio);
}
