# LingoWeb - Trabajo Práctico N.º 2

Plataforma de aprendizaje de idiomas de Programación Web I (UNLaM). Es una aplicación
dinámica que funciona solo en el navegador: el contenido sale de `js/datos/datos.js` y
todo lo que cambia con el uso se guarda en `localStorage`.

## Cómo abrirlo en Visual Studio Code

1. Descomprimir el ZIP y abrir la carpeta `LingoWeb` con **Archivo > Abrir carpeta**.
2. Instalar la extensión **Live Server**.
3. Clic derecho sobre `index.html` > **Open with Live Server**.

También abre con doble clic, pero Live Server evita que algunos navegadores separen el
`localStorage` por archivo. Es la opción recomendada.

## Cuentas de prueba

| Usuario | Contraseña | Situación |
| --- | --- | --- |
| `juanperez` | `Demo1234` | Cuenta con avance, Liga Plata e histórico |
| `mariag` | `Demo1234` | Cuenta avanzada, Liga Oro |

También se puede crear una cuenta nueva desde **Registrarse**. Son datos ficticios: no
usar contraseñas reales.

Para volver al estado inicial, en la consola del navegador (F12):

```js
localStorage.clear();
```

## Qué hace la aplicación

- **Usuarios:** registro, inicio y cierre de sesión. Varias cuentas con datos separados.
- **Perfil:** edición de datos, contraseña, idioma de interfaz y foto (hasta 400 KB).
- **Cursos:** 6 idiomas con niveles progresivos. Cada curso tiene 22 unidades y 65 lecciones:
  A1 (23 lecciones), A2 y B1 (21 lecciones cada uno). En Chino son HSK 1, 2 y 3.
- **Niveles:** al terminar uno se abre el siguiente. También se puede arrancar por un
  nivel más alto con **Empezar por este nivel**, desde el mapa del curso.
- **Lecciones:** se desbloquean en orden dentro de cada nivel. El avance se guarda paso a paso.
- **Puntos:** cada lección suma XP y gemas; cada respuesta incorrecta resta 2 XP.
- **Retroceder:** el botón **Reiniciar** del mapa borra el avance desde esa lección y
  descuenta lo ganado. Las barras bajan y el puesto en el ranking se recalcula.
- **Barras de progreso:** se animan desde su valor anterior, hacia arriba o hacia abajo.
- **Clasificación:** se ordena por XP semanal, así que las posiciones cambian con cada lección.
- **Rachas/Tienda, opiniones y contacto:** todo queda guardado por cuenta.

## Estructura de carpetas

```text
LingoWeb/
├── index.html                  Portada
├── login/                      Inicio de sesión
├── registro/                   Crear cuenta
├── Recuperacion_contrasenia/   Recuperar contraseña
├── mis_cursos/                 Panel principal
├── mapa_lecciones/             Un HTML por idioma, mismo JS
├── leccion/                    Única página de lecciones
├── perfil/                     Perfil y preferencias
├── Ranking/                    Tabla de clasificación
├── ranking_historico/          Temporadas anteriores
├── tienda/                     Rachas/Tienda
├── contacto/                   Soporte
├── ayuda/                      Preguntas frecuentes
├── imagenes/                   Imágenes (cada una de hasta 400 KB)
├── css/
│   ├── base/                   Variables y estilos generales
│   ├── layout/                 Barra de navegación, encabezado y pie
│   ├── componentes/            Estilos de lo que crea JavaScript
│   └── pages/                  Un CSS por vista y por idioma
└── js/
    ├── datos/                  Catálogo: cursos, temas, ligas, tienda, logros, cuentas demo
    ├── nucleo/                 Lo que comparten todas las vistas
    │   ├── base_de_datos.js    localStorage, usuarios y sesión
    │   ├── progreso.js         Avance, puntos, racha, ligas, opiniones y logros
    │   ├── interfaz.js         Creación de elementos y mensajes
    │   ├── traduccion.js       Idioma de la interfaz: español, inglés y portugués
    │   └── navegacion.js       Idioma, barra superior y arranque
    └── vistas/                 Un archivo por vista, agrupados por funcionalidad
        ├── portada/            index.js
        ├── acceso/             login.js, registro.js, recuperacion.js
        ├── cursos/             mis_cursos.js, mapa_lecciones.js, leccion.js
        ├── cuenta/             perfil.js
        ├── clasificacion/      ranking.js, ranking_historico.js
        └── complementos/       tienda.js, contacto.js, ayuda.js
```

Cada archivo empieza con un comentario que describe qué hace, y los archivos JavaScript
están divididos en secciones por funcionalidad.

## Orden de los scripts

Cada HTML carga los archivos en este orden, porque cada uno usa lo declarado en los anteriores:

```html
<script src="../js/datos/datos.js"></script>
<script src="../js/nucleo/base_de_datos.js"></script>
<script src="../js/nucleo/progreso.js"></script>
<script src="../js/nucleo/interfaz.js"></script>
<script src="../js/nucleo/traduccion.js"></script>
<script src="../js/nucleo/navegacion.js"></script>
<script src="../js/vistas/cursos/mis_cursos.js"></script>
```

## Qué se guarda en localStorage

| Clave | Contenido |
| --- | --- |
| `lingoweb_usuarios` | Cuentas con su progreso, XP, racha, foto y preferencias |
| `lingoweb_sesion` | Id de la cuenta activa |
| `lingoweb_valoraciones` | Calificaciones por curso y persona |
| `lingoweb_comentarios` | Comentarios por curso y persona |
| `lingoweb_reportes` | Reportes del formulario de contacto |

## Agregar otro nivel

1. Sumar el nivel a `niveles` del curso en `js/datos/datos.js` (por ejemplo B2).
2. Agregar sus unidades con `nivel: 'b2'`. La numeración de unidades y lecciones se calcula sola.

El nivel aparece solo en las pestañas del mapa y funciona igual que los demás.

## Agregar unidades a todos los idiomas

Sumar el tema a la tabla `TEMAS` de `js/datos/temas.js`, con seis frases por lección y una
columna por idioma. La teoría y los ejercicios se arman solos con esas frases.

## Agregar otro idioma

1. Sumar el curso a `CURSOS` en `js/datos/datos.js`.
2. Copiar `css/pages/leccion_ingles.css` y `css/pages/mapa_lecciones_ingles.css`,
   reemplazando `ingles` por el id del curso.
3. Copiar `mapa_lecciones/mapa_lecciones_ingles.html` con el nombre del curso.

El curso aparece solo en el panel, en el menú y en la portada.

## Alcance

El sitio funciona sin conexión a servicios externos, como pide la consigna: no usa
contenido embebido ni fuentes en línea.

Es una demostración: no hay servidor y las contraseñas quedan en texto plano en
`localStorage`. El español es el idioma por defecto. El selector del perfil cambia toda la interfaz a
inglés o portugués y se conserva por cuenta; el contenido de los cursos se enseña desde
el español y no cambia.
