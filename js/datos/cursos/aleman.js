/* =====================================================================
   aleman.js  -  CURSO: ALEMAN

   Contenido propio de este idioma: niveles, unidades, lecciones y ejercicios.
   Las unidades compartidas las agrega js/datos/generador_cursos.js.
   ===================================================================== */


const CURSO_ALEMAN = {
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
};
