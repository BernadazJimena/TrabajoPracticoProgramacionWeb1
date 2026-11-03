/* =====================================================================
   frances.js  -  CURSO: FRANCES

   Contenido propio de este idioma: niveles, unidades, lecciones y ejercicios.
   Las unidades compartidas las agrega js/datos/generador_cursos.js.
   ===================================================================== */


const CURSO_FRANCES = {
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
};
