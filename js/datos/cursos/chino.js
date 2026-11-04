/* =====================================================================
   chino.js  -  CURSO: CHINO

   Contenido propio de este idioma: niveles, unidades, lecciones y ejercicios.
   Las unidades compartidas las agrega js/datos/generador_cursos.js.
   ===================================================================== */


const CURSO_CHINO = {
  id: "chino",
  nombre: "Chino Mandarín",
  nombreCompleto: "Chino Mandarín desde Español",
  codigoIdioma: "zh",
  descripcion: "Abre las puertas al mercado más grande y a una cultura milenaria fascinante.",
  niveles: [
    {
      id: "a1",
      nombre: "HSK 1",
      titulo: "Inicial"
    },
    {
      id: "a2",
      nombre: "HSK 2",
      titulo: "Básico"
    },
    {
      id: "b1",
      nombre: "HSK 3",
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
          descripcion: "Aprende el saludo <span lang=\"zh\">Nǐ hǎo (你好)</span>",
          consejo: "<span lang=\"zh\">Nǐ hǎo (你好)</span> significa «hola». Para saludar con más respeto se usa <span lang=\"zh\">Nín hǎo (您好)</span>. Para presentarte, di <span lang=\"zh\">Wǒ jiào… (我叫…)</span>, que significa «me llamo…».",
          teoria: {
            titulo: "Aprende a saludar y presentarte",
            html: "<p>Para saludar, puedes decir <strong lang=\"zh\">Nǐ hǎo (你好)</strong>. Para presentarte, puedes decir <strong lang=\"zh\">Wǒ jiào Ana (我叫 Ana)</strong>.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Nǐ hǎo (你好)</span> <span>→ hola</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Zàijiàn (再见)</span> <span>→ adiós</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Xièxie (谢谢)</span> <span>→ gracias</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ jiào Ana (我叫 Ana)</span> <span>→ me llamo Ana</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Rènshi nǐ hěn gāoxìng (认识你很高兴)</span> <span>→ encantado de conocerte</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Qué significa <span lang=\"zh\">Nǐ hǎo (你好)</span>?",
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
              acierto: "¡Correcto! <span lang=\"zh\">Nǐ hǎo (你好)</span> significa «hola».",
              error: "Todavía no. <span lang=\"zh\">Nǐ hǎo (你好)</span> significa «hola». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Cómo se dice «adiós»?",
              opciones: [
                {
                  texto: "Xièxie (谢谢)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "Nǐ hǎo (你好)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "Zàijiàn (再见)",
                  idioma: "zh",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Zàijiàn (再见)</span> significa «adiós».",
              error: "Todavía no. <span lang=\"zh\">Xièxie (谢谢)</span> es «gracias» y <span lang=\"zh\">Nǐ hǎo (你好)</span> es «hola». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona el significado correcto.",
              pregunta: "¿Qué significa <span lang=\"zh\">Xièxie (谢谢)</span>?",
              opciones: [
                {
                  texto: "Gracias",
                  correcta: true
                },
                {
                  texto: "Por favor",
                  correcta: false
                },
                {
                  texto: "Hola",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Xièxie (谢谢)</span> significa «gracias».",
              error: "Todavía no. <span lang=\"zh\">Xièxie (谢谢)</span> significa «gracias». Puedes elegir otra opción."
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
          titulo: "El verbo shì (是)",
          descripcion: "Aprende a decir quién eres",
          consejo: "<span lang=\"zh\">Shì (是)</span> significa «ser». No cambia según la persona: <span lang=\"zh\">wǒ shì</span>, <span lang=\"zh\">nǐ shì</span>, <span lang=\"zh\">tā shì</span>. Para negar se pone <span lang=\"zh\">bù (不)</span> delante: <span lang=\"zh\">bú shì (不是)</span>.",
          teoria: {
            titulo: "Aprende a decir quién eres",
            html: "<p>Para decir quién eres, usa <strong lang=\"zh\">Wǒ shì… (我是…)</strong>, que significa «yo soy…».</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ shì xuéshēng (我是学生)</span> <span>→ yo soy estudiante</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Tā shì lǎoshī (她是老师)</span> <span>→ ella es profesora</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒmen shì péngyou (我们是朋友)</span> <span>→ nosotros somos amigos</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ bú shì lǎoshī (我不是老师)</span> <span>→ yo no soy profesor</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona el significado correcto.",
              pregunta: "¿Qué significa <span lang=\"zh\">shì (是)</span>?",
              opciones: [
                {
                  texto: "Tener",
                  correcta: false
                },
                {
                  texto: "Ser",
                  correcta: true
                },
                {
                  texto: "Ir",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">shì (是)</span> significa «ser».",
              error: "Todavía no. <span lang=\"zh\">shì (是)</span> significa «ser». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «yo soy estudiante»?",
              opciones: [
                {
                  texto: "Wǒ shì xuéshēng (我是学生)",
                  idioma: "zh",
                  correcta: true
                },
                {
                  texto: "Nǐ shì xuéshēng (你是学生)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "Wǒ bú shì xuéshēng (我不是学生)",
                  idioma: "zh",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ shì xuéshēng (我是学生)</span> significa «yo soy estudiante».",
              error: "Todavía no. <span lang=\"zh\">Wǒ (我)</span> es «yo» y <span lang=\"zh\">bú shì (不是)</span> es «no ser». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona el significado correcto.",
              pregunta: "¿Qué significa <span lang=\"zh\">Tā shì lǎoshī (她是老师)</span>?",
              opciones: [
                {
                  texto: "Yo soy profesora",
                  correcta: false
                },
                {
                  texto: "Ella es profesora",
                  correcta: true
                },
                {
                  texto: "Ella no es profesora",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Tā shì lǎoshī (她是老师)</span> significa «ella es profesora».",
              error: "Todavía no. <span lang=\"zh\">tā (她)</span> significa «ella» y <span lang=\"zh\">lǎoshī (老师)</span> es «profesora». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 3,
          titulo: "Acciones en presente con zài (在)",
          descripcion: "Di lo que estás haciendo ahora",
          consejo: "Para decir que algo está pasando ahora, se pone <span lang=\"zh\">zài (在)</span> antes del verbo: <span lang=\"zh\">Wǒ zài chīfàn (我在吃饭)</span>, «estoy comiendo». Los verbos en chino no cambian según la persona.",
          teoria: {
            titulo: "Aprende a decir lo que estás haciendo",
            html: "<p>Para una acción que pasa ahora, usa <strong lang=\"zh\">zài (在)</strong> + verbo: <strong lang=\"zh\">Wǒ zài chīfàn (我在吃饭)</strong>.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">chī (吃)</span> <span>→ comer</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">hē (喝)</span> <span>→ beber</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">kàn (看)</span> <span>→ mirar / leer</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ zài chīfàn (我在吃饭)</span> <span>→ estoy comiendo</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Tā zài kàn shū (他在看书)</span> <span>→ él está leyendo un libro</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona el significado correcto.",
              pregunta: "¿Qué significa <span lang=\"zh\">chī (吃)</span>?",
              opciones: [
                {
                  texto: "Beber",
                  correcta: false
                },
                {
                  texto: "Comer",
                  correcta: true
                },
                {
                  texto: "Dormir",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">chī (吃)</span> significa «comer».",
              error: "Todavía no. <span lang=\"zh\">chī (吃)</span> significa «comer». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «estoy comiendo»?",
              opciones: [
                {
                  texto: "Wǒ zài chīfàn (我在吃饭)",
                  idioma: "zh",
                  correcta: true
                },
                {
                  texto: "Wǒ shì chīfàn (我是吃饭)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "Wǒ chīfàn le (我吃饭了)",
                  idioma: "zh",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ zài chīfàn (我在吃饭)</span> significa «estoy comiendo».",
              error: "Todavía no. Para algo que pasa ahora se usa <span lang=\"zh\">zài (在)</span> antes del verbo. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona el significado correcto.",
              pregunta: "¿Qué significa <span lang=\"zh\">Tā zài kàn shū (他在看书)</span>?",
              opciones: [
                {
                  texto: "Él leyó un libro",
                  correcta: false
                },
                {
                  texto: "Él está leyendo un libro",
                  correcta: true
                },
                {
                  texto: "Él es un libro",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Tā zài kàn shū (他在看书)</span> significa «él está leyendo un libro».",
              error: "Todavía no. <span lang=\"zh\">zài (在)</span> indica que la acción está pasando ahora. Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 4,
          titulo: "Hablar del pasado con le (了)",
          descripcion: "Cuenta lo que ya hiciste",
          consejo: "Para decir que una acción ya terminó, se pone <span lang=\"zh\">le (了)</span> después del verbo o al final de la frase: <span lang=\"zh\">Wǒ chīfàn le (我吃饭了)</span>, «ya comí». Palabras como <span lang=\"zh\">zuótiān (昨天)</span>, «ayer», también indican pasado.",
          teoria: {
            titulo: "Aprende a hablar del pasado",
            html: "<p>Para una acción terminada, agrega <strong lang=\"zh\">le (了)</strong>: <strong lang=\"zh\">Wǒ chīfàn le (我吃饭了)</strong>.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ chīfàn le (我吃饭了)</span> <span>→ ya comí</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Tā qù le Běijīng (他去了北京)</span> <span>→ él fue a Pekín</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">zuótiān (昨天)</span> <span>→ ayer</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Zuótiān wǒ kàn le diànyǐng (昨天我看了电影)</span> <span>→ ayer vi una película</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona el significado correcto.",
              pregunta: "¿Qué significa <span lang=\"zh\">zuótiān (昨天)</span>?",
              opciones: [
                {
                  texto: "Hoy",
                  correcta: false
                },
                {
                  texto: "Ayer",
                  correcta: true
                },
                {
                  texto: "Mañana",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">zuótiān (昨天)</span> significa «ayer».",
              error: "Todavía no. <span lang=\"zh\">zuótiān (昨天)</span> significa «ayer». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «ya comí»?",
              opciones: [
                {
                  texto: "Wǒ chīfàn le (我吃饭了)",
                  idioma: "zh",
                  correcta: true
                },
                {
                  texto: "Wǒ zài chīfàn (我在吃饭)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "Wǒ shì chīfàn (我是吃饭)",
                  idioma: "zh",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ chīfàn le (我吃饭了)</span> significa «ya comí».",
              error: "Todavía no. Para una acción terminada se usa <span lang=\"zh\">le (了)</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona el significado correcto.",
              pregunta: "¿Qué significa <span lang=\"zh\">Tā qù le Běijīng (他去了北京)</span>?",
              opciones: [
                {
                  texto: "Él va a Pekín",
                  correcta: false
                },
                {
                  texto: "Él fue a Pekín",
                  correcta: true
                },
                {
                  texto: "Él está en Pekín",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Tā qù le Běijīng (他去了北京)</span> significa «él fue a Pekín».",
              error: "Todavía no. <span lang=\"zh\">le (了)</span> indica que la acción ya pasó. Puedes elegir otra opción."
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
          consejo: "Con los números del 1 al 10 puedes formar los demás: 11 es <span lang=\"zh\">shí yī (十一)</span>, «diez y uno», y 20 es <span lang=\"zh\">èr shí (二十)</span>, «dos dieces». Para la hora se usa <span lang=\"zh\">diǎn (点)</span>: <span lang=\"zh\">sān diǎn (三点)</span>, «las tres».",
          teoria: {
            titulo: "Aprende los números y la hora",
            html: "<p>Los primeros números son <strong lang=\"zh\">yī, èr, sān (一, 二, 三)</strong>. Para preguntar la hora se dice <strong lang=\"zh\">Xiànzài jǐ diǎn? (现在几点？)</strong>.</p><ul class=\"lista-vocabulario lista-numeros\"> <li><strong lang=\"zh\">yī (一)</strong> <span>uno</span></li> <li><strong lang=\"zh\">èr (二)</strong> <span>dos</span></li> <li><strong lang=\"zh\">sān (三)</strong> <span>tres</span></li> <li><strong lang=\"zh\">sì (四)</strong> <span>cuatro</span></li> <li><strong lang=\"zh\">wǔ (五)</strong> <span>cinco</span></li> <li><strong lang=\"zh\">liù (六)</strong> <span>seis</span></li> <li><strong lang=\"zh\">qī (七)</strong> <span>siete</span></li> <li><strong lang=\"zh\">bā (八)</strong> <span>ocho</span></li> <li><strong lang=\"zh\">jiǔ (九)</strong> <span>nueve</span></li> <li><strong lang=\"zh\">shí (十)</strong> <span>diez</span></li> </ul><p class=\"ejemplo-chino\"><span lang=\"zh\">èr shí (二十)</span> <span>→ veinte</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Xiànzài jǐ diǎn? (现在几点？)</span> <span>→ ¿Qué hora es?</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Sān diǎn (三点)</span> <span>→ son las tres</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Qué número es <span lang=\"zh\">wǔ (五)</span>?",
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
              acierto: "¡Correcto! <span lang=\"zh\">wǔ (五)</span> significa «cinco».",
              error: "Todavía no. <span lang=\"zh\">wǔ (五)</span> significa «cinco». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Cómo se dice «diez»?",
              opciones: [
                {
                  texto: "shí (十)",
                  idioma: "zh",
                  correcta: true
                },
                {
                  texto: "sì (四)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "qī (七)",
                  idioma: "zh",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! «Diez» se dice <span lang=\"zh\">shí (十)</span>.",
              error: "Todavía no. <span lang=\"zh\">sì (四)</span> es «cuatro» y <span lang=\"zh\">qī (七)</span> es «siete». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se pregunta la hora?",
              opciones: [
                {
                  texto: "Nǐ jiào shénme míngzi? (你叫什么名字？)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "Xiànzài jǐ diǎn? (现在几点？)",
                  idioma: "zh",
                  correcta: true
                },
                {
                  texto: "Nǐ hǎo ma? (你好吗？)",
                  idioma: "zh",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Xiànzài jǐ diǎn? (现在几点？)</span> significa «¿qué hora es?».",
              error: "Todavía no. <span lang=\"zh\">Nǐ jiào shénme míngzi?</span> pregunta el nombre y <span lang=\"zh\">Nǐ hǎo ma?</span> pregunta cómo estás. Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 6,
          titulo: "Mi familia",
          descripcion: "Presenta a los miembros de tu familia",
          consejo: "En chino hay palabras distintas para los hermanos mayores y menores. Para decir «tengo» se usa <span lang=\"zh\">yǒu (有)</span>, y para presentar a alguien, <span lang=\"zh\">Zhè shì… (这是…)</span>, «este / esta es…».",
          teoria: {
            titulo: "Aprende los miembros de la familia",
            html: "<p>Para presentar a tu familia, puedes decir <strong lang=\"zh\">Zhè shì wǒ māma (这是我妈妈)</strong>.</p><ul class=\"lista-vocabulario\"> <li><strong lang=\"zh\">bàba (爸爸)</strong> <span>papá</span></li> <li><strong lang=\"zh\">māma (妈妈)</strong> <span>mamá</span></li> <li><strong lang=\"zh\">gēge (哥哥)</strong> <span>hermano mayor</span></li> <li><strong lang=\"zh\">jiějie (姐姐)</strong> <span>hermana mayor</span></li> <li><strong lang=\"zh\">dìdi (弟弟)</strong> <span>hermano menor</span></li> <li><strong lang=\"zh\">mèimei (妹妹)</strong> <span>hermana menor</span></li> </ul><p class=\"ejemplo-chino\"><span lang=\"zh\">Zhè shì wǒ māma (这是我妈妈)</span> <span>→ esta es mi mamá</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ yǒu yí ge gēge (我有一个哥哥)</span> <span>→ tengo un hermano mayor</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona el significado correcto.",
              pregunta: "¿Qué significa <span lang=\"zh\">māma (妈妈)</span>?",
              opciones: [
                {
                  texto: "Papá",
                  correcta: false
                },
                {
                  texto: "Mamá",
                  correcta: true
                },
                {
                  texto: "Hermana",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">māma (妈妈)</span> significa «mamá».",
              error: "Todavía no. <span lang=\"zh\">māma (妈妈)</span> significa «mamá». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Cómo se dice «papá»?",
              opciones: [
                {
                  texto: "gēge (哥哥)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "bàba (爸爸)",
                  idioma: "zh",
                  correcta: true
                },
                {
                  texto: "dìdi (弟弟)",
                  idioma: "zh",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! «Papá» se dice <span lang=\"zh\">bàba (爸爸)</span>.",
              error: "Todavía no. <span lang=\"zh\">gēge (哥哥)</span> es «hermano mayor» y <span lang=\"zh\">dìdi (弟弟)</span> es «hermano menor». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «esta es mi mamá»?",
              opciones: [
                {
                  texto: "Zhè shì wǒ māma (这是我妈妈)",
                  idioma: "zh",
                  correcta: true
                },
                {
                  texto: "Wǒ shì māma (我是妈妈)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "Zhè shì nǐ māma (这是你妈妈)",
                  idioma: "zh",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Zhè shì wǒ māma (这是我妈妈)</span> significa «esta es mi mamá».",
              error: "Todavía no. <span lang=\"zh\">zhè (这)</span> es «esta» y <span lang=\"zh\">wǒ (我)</span> es «mi». Puedes elegir otra opción."
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
          consejo: "En este repaso combinas saludos, <span lang=\"zh\">shì (是)</span>, <span lang=\"zh\">zài (在)</span> y la palabra <span lang=\"zh\">ma (吗)</span>, que al final de una frase la convierte en pregunta. Lee el diálogo con atención antes de responder.",
          teoria: {
            titulo: "Lee el diálogo",
            html: "<p>Li Ming y Ana se conocen. Lee lo que dicen y fíjate en la traducción.</p><dl class=\"dialogo-chino\"> <dt>Lǐ Míng</dt> <dd><span lang=\"zh\">Nǐ hǎo! Wǒ jiào Lǐ Míng. (你好！我叫李明。)</span> <span>→ ¡Hola! Me llamo Li Ming.</span></dd> <dt>Ana</dt> <dd><span lang=\"zh\">Nǐ hǎo! Wǒ shì Ana. Rènshi nǐ hěn gāoxìng. (你好！我是 Ana。认识你很高兴。)</span> <span>→ ¡Hola! Soy Ana. Encantada de conocerte.</span></dd> <dt>Lǐ Míng</dt> <dd><span lang=\"zh\">Nǐ shì xuéshēng ma? (你是学生吗？)</span> <span>→ ¿Eres estudiante?</span></dd> <dt>Ana</dt> <dd><span lang=\"zh\">Shì, wǒ zài xuéxí Zhōngwén. (是，我在学习中文。)</span> <span>→ Sí, estoy estudiando chino.</span></dd> </dl>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Elige la respuesta adecuada.",
              pregunta: "Li Ming dice <span lang=\"zh\">Nǐ hǎo! Wǒ jiào Lǐ Míng.</span> ¿Qué responde Ana?",
              opciones: [
                {
                  texto: "Nǐ hǎo! Wǒ shì Ana. (你好！我是 Ana。)",
                  idioma: "zh",
                  correcta: true
                },
                {
                  texto: "Zàijiàn (再见)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "Xièxie (谢谢)",
                  idioma: "zh",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Ana saluda y se presenta: <span lang=\"zh\">Nǐ hǎo! Wǒ shì Ana.</span>",
              error: "Todavía no. Cuando alguien se presenta, saludas y dices tu nombre. Puedes elegir otra opción."
            },
            {
              titulo: "Completa la frase",
              consigna: "Elige la palabra que falta.",
              pregunta: "<span lang=\"zh\">Rènshi nǐ hěn ___ (认识你很___)</span> (Encantada de conocerte.)",
              opciones: [
                {
                  texto: "xuéshēng (学生)",
                  idioma: "zh",
                  correcta: false
                },
                {
                  texto: "gāoxìng (高兴)",
                  idioma: "zh",
                  correcta: true
                },
                {
                  texto: "Zhōngwén (中文)",
                  idioma: "zh",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Rènshi nǐ hěn gāoxìng (认识你很高兴)</span> significa «encantada de conocerte».",
              error: "Todavía no. <span lang=\"zh\">gāoxìng (高兴)</span> significa «contento». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona el significado correcto.",
              pregunta: "¿Qué significa <span lang=\"zh\">Nǐ shì xuéshēng ma? (你是学生吗？)</span>",
              opciones: [
                {
                  texto: "¿Eres profesora?",
                  correcta: false
                },
                {
                  texto: "¿Cómo te llamas?",
                  correcta: false
                },
                {
                  texto: "¿Eres estudiante?",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Nǐ shì xuéshēng ma?</span> significa «¿eres estudiante?».",
              error: "Todavía no. <span lang=\"zh\">xuéshēng (学生)</span> significa «estudiante». Puedes elegir otra opción."
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
          consejo: "<span lang=\"zh\">bēi (杯)</span> es el clasificador de las bebidas servidas en vaso o taza.",
          teoria: {
            titulo: "Aprende a pedir con cortesía",
            html: "<p>Estas frases te sirven para pedir algo en un restaurante o una tienda.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ yào yī bēi kāfēi (我要一杯咖啡)</span> <span>→ quiero un café</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Mǎidān (买单)</span> <span>→ la cuenta, por favor</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Duōshao qián? (多少钱？)</span> <span>→ ¿Cuánto cuesta?</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «quiero un café»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Wǒ yào yī bēi kāfēi (我要一杯咖啡)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Duōshao qián? (多少钱？)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Mǎidān (买单)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ yào yī bēi kāfēi (我要一杯咖啡)</span> significa «quiero un café».",
              error: "Todavía no. <span lang=\"zh\">Wǒ yào yī bēi kāfēi (我要一杯咖啡)</span> significa «quiero un café». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"zh\">Mǎidān (买单)</span>?",
              opciones: [
                {
                  texto: "la cuenta, por favor",
                  correcta: true
                },
                {
                  texto: "quiero un café",
                  correcta: false
                },
                {
                  texto: "¿Cuánto cuesta?",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Mǎidān (买单)</span> significa «la cuenta, por favor».",
              error: "Todavía no. <span lang=\"zh\">Mǎidān (买单)</span> significa «la cuenta, por favor». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Cuánto cuesta?»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Duōshao qián? (多少钱？)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Mǎidān (买单)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Wǒ yào yī bēi kāfēi (我要一杯咖啡)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Duōshao qián? (多少钱？)</span> significa «¿Cuánto cuesta?».",
              error: "Todavía no. <span lang=\"zh\">Duōshao qián? (多少钱？)</span> significa «¿Cuánto cuesta?». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 9,
          titulo: "Cómo llegar",
          descripcion: "Pregunta y entiende direcciones",
          consejo: "<span lang=\"zh\">zuǒ (左)</span> significa «izquierda» y <span lang=\"zh\">yòu (右)</span> significa «derecha».",
          teoria: {
            titulo: "Aprende a orientarte",
            html: "<p>Con estas frases puedes preguntar dónde queda un lugar y seguir indicaciones.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Chēzhàn zài nǎr? (车站在哪儿？)</span> <span>→ ¿Dónde está la estación?</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span> <span>→ dobla a la izquierda</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Yìzhí zǒu (一直走)</span> <span>→ sigue derecho</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Dónde está la estación?»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Chēzhàn zài nǎr? (车站在哪儿？)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Yìzhí zǒu (一直走)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Chēzhàn zài nǎr? (车站在哪儿？)</span> significa «¿Dónde está la estación?».",
              error: "Todavía no. <span lang=\"zh\">Chēzhàn zài nǎr? (车站在哪儿？)</span> significa «¿Dónde está la estación?». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span>?",
              opciones: [
                {
                  texto: "sigue derecho",
                  correcta: false
                },
                {
                  texto: "dobla a la izquierda",
                  correcta: true
                },
                {
                  texto: "¿Dónde está la estación?",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span> significa «dobla a la izquierda».",
              error: "Todavía no. <span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span> significa «dobla a la izquierda». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «sigue derecho»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Chēzhàn zài nǎr? (车站在哪儿？)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Yìzhí zǒu (一直走)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Wǎng zuǒ guǎi (往左拐)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Yìzhí zǒu (一直走)</span> significa «sigue derecho».",
              error: "Todavía no. <span lang=\"zh\">Yìzhí zǒu (一直走)</span> significa «sigue derecho». Puedes elegir otra opción."
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
          consejo: "<span lang=\"zh\">dǎsuàn (打算)</span> significa «planear», y <span lang=\"zh\">huì (会)</span> anuncia algo que va a ocurrir.",
          teoria: {
            titulo: "Aprende a hablar del futuro",
            html: "<p>Estas frases te permiten contar tus planes.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ dǎsuàn qù Běijīng (我打算去北京)</span> <span>→ planeo ir a Pekín</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span> <span>→ ella planea estudiar</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Míngtiān huì xià yǔ (明天会下雨)</span> <span>→ mañana va a llover</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «planeo ir a Pekín»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Míngtiān huì xià yǔ (明天会下雨)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Wǒ dǎsuàn qù Běijīng (我打算去北京)</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ dǎsuàn qù Běijīng (我打算去北京)</span> significa «planeo ir a Pekín».",
              error: "Todavía no. <span lang=\"zh\">Wǒ dǎsuàn qù Běijīng (我打算去北京)</span> significa «planeo ir a Pekín». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span>?",
              opciones: [
                {
                  texto: "planeo ir a Pekín",
                  correcta: false
                },
                {
                  texto: "mañana va a llover",
                  correcta: false
                },
                {
                  texto: "ella planea estudiar",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span> significa «ella planea estudiar».",
              error: "Todavía no. <span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span> significa «ella planea estudiar». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «mañana va a llover»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Tā dǎsuàn xuéxí (她打算学习)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Wǒ dǎsuàn qù Běijīng (我打算去北京)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Míngtiān huì xià yǔ (明天会下雨)</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Míngtiān huì xià yǔ (明天会下雨)</span> significa «mañana va a llover».",
              error: "Todavía no. <span lang=\"zh\">Míngtiān huì xià yǔ (明天会下雨)</span> significa «mañana va a llover». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 11,
          titulo: "Comparaciones",
          descripcion: "Compara personas y cosas",
          consejo: "La comparación se forma con <span lang=\"zh\">bǐ (比)</span>: A + 比 + B + adjetivo.",
          teoria: {
            titulo: "Aprende a comparar",
            html: "<p>Estas estructuras sirven para decir qué es más grande, más caro o mejor.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ bǐ tā gāo (我比他高)</span> <span>→ soy más alto que él</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span> <span>→ este es más caro que aquel</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">zuì hǎo (最好)</span> <span>→ el mejor</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «soy más alto que él»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Wǒ bǐ tā gāo (我比他高)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">zuì hǎo (最好)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ bǐ tā gāo (我比他高)</span> significa «soy más alto que él».",
              error: "Todavía no. <span lang=\"zh\">Wǒ bǐ tā gāo (我比他高)</span> significa «soy más alto que él». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span>?",
              opciones: [
                {
                  texto: "este es más caro que aquel",
                  correcta: true
                },
                {
                  texto: "soy más alto que él",
                  correcta: false
                },
                {
                  texto: "el mejor",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span> significa «este es más caro que aquel».",
              error: "Todavía no. <span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span> significa «este es más caro que aquel». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «el mejor»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">zuì hǎo (最好)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Zhège bǐ nàge guì (这个比那个贵)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Wǒ bǐ tā gāo (我比他高)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">zuì hǎo (最好)</span> significa «el mejor».",
              error: "Todavía no. <span lang=\"zh\">zuì hǎo (最好)</span> significa «el mejor». Puedes elegir otra opción."
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
          consejo: "<span lang=\"zh\">juéde (觉得)</span> significa «creer» o «parecer» cuando se da una opinión.",
          teoria: {
            titulo: "Aprende a opinar",
            html: "<p>Con estas frases puedes dar tu opinión y decir si estás de acuerdo.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ juéde hěn hǎo (我觉得很好)</span> <span>→ creo que está muy bien</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ tóngyì (我同意)</span> <span>→ estoy de acuerdo</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ bù tóngyì (我不同意)</span> <span>→ no estoy de acuerdo</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «creo que está muy bien»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Wǒ tóngyì (我同意)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Wǒ juéde hěn hǎo (我觉得很好)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Wǒ bù tóngyì (我不同意)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ juéde hěn hǎo (我觉得很好)</span> significa «creo que está muy bien».",
              error: "Todavía no. <span lang=\"zh\">Wǒ juéde hěn hǎo (我觉得很好)</span> significa «creo que está muy bien». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"zh\">Wǒ tóngyì (我同意)</span>?",
              opciones: [
                {
                  texto: "no estoy de acuerdo",
                  correcta: false
                },
                {
                  texto: "estoy de acuerdo",
                  correcta: true
                },
                {
                  texto: "creo que está muy bien",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ tóngyì (我同意)</span> significa «estoy de acuerdo».",
              error: "Todavía no. <span lang=\"zh\">Wǒ tóngyì (我同意)</span> significa «estoy de acuerdo». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «no estoy de acuerdo»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Wǒ juéde hěn hǎo (我觉得很好)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Wǒ bù tóngyì (我不同意)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Wǒ tóngyì (我同意)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ bù tóngyì (我不同意)</span> significa «no estoy de acuerdo».",
              error: "Todavía no. <span lang=\"zh\">Wǒ bù tóngyì (我不同意)</span> significa «no estoy de acuerdo». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 13,
          titulo: "Consejos y deseos",
          descripcion: "Aconseja y habla de lo que te gustaría",
          consejo: "<span lang=\"zh\">yīnggāi (应该)</span> da consejos, y <span lang=\"zh\">rúguǒ (如果)</span> significa «si».",
          teoria: {
            titulo: "Aprende a aconsejar",
            html: "<p>Estas frases sirven para dar consejos y hablar de situaciones posibles.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Nǐ yīnggāi xuéxí (你应该学习)</span> <span>→ deberías estudiar</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span> <span>→ si tengo tiempo, voy a viajar</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ xiǎng qù Zhōngguó (我想去中国)</span> <span>→ me gustaría ir a China</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «deberías estudiar»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Wǒ xiǎng qù Zhōngguó (我想去中国)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Nǐ yīnggāi xuéxí (你应该学习)</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Nǐ yīnggāi xuéxí (你应该学习)</span> significa «deberías estudiar».",
              error: "Todavía no. <span lang=\"zh\">Nǐ yīnggāi xuéxí (你应该学习)</span> significa «deberías estudiar». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span>?",
              opciones: [
                {
                  texto: "deberías estudiar",
                  correcta: false
                },
                {
                  texto: "me gustaría ir a China",
                  correcta: false
                },
                {
                  texto: "si tengo tiempo, voy a viajar",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span> significa «si tengo tiempo, voy a viajar».",
              error: "Todavía no. <span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span> significa «si tengo tiempo, voy a viajar». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «me gustaría ir a China»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Rúguǒ yǒu shíjiān, wǒ huì lǚxíng (如果有时间，我会旅行)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Nǐ yīnggāi xuéxí (你应该学习)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Wǒ xiǎng qù Zhōngguó (我想去中国)</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ xiǎng qù Zhōngguó (我想去中国)</span> significa «me gustaría ir a China».",
              error: "Todavía no. <span lang=\"zh\">Wǒ xiǎng qù Zhōngguó (我想去中国)</span> significa «me gustaría ir a China». Puedes elegir otra opción."
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
          consejo: "<span lang=\"zh\">guo (过)</span> va después del verbo e indica una experiencia vivida.",
          teoria: {
            titulo: "Aprende a contar experiencias",
            html: "<p>Estas frases te permiten hablar de lo que hiciste, o nunca hiciste, en tu vida.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Nǐ qùguo Běijīng ma? (你去过北京吗？)</span> <span>→ ¿Alguna vez fuiste a Pekín?</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span> <span>→ probé los jiaozi</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ méi qùguo (我没去过)</span> <span>→ nunca fui</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Alguna vez fuiste a Pekín?»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Nǐ qùguo Běijīng ma? (你去过北京吗？)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Wǒ méi qùguo (我没去过)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Nǐ qùguo Běijīng ma? (你去过北京吗？)</span> significa «¿Alguna vez fuiste a Pekín?».",
              error: "Todavía no. <span lang=\"zh\">Nǐ qùguo Běijīng ma? (你去过北京吗？)</span> significa «¿Alguna vez fuiste a Pekín?». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span>?",
              opciones: [
                {
                  texto: "probé los jiaozi",
                  correcta: true
                },
                {
                  texto: "¿Alguna vez fuiste a Pekín?",
                  correcta: false
                },
                {
                  texto: "nunca fui",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span> significa «probé los jiaozi».",
              error: "Todavía no. <span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span> significa «probé los jiaozi». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «nunca fui»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Wǒ méi qùguo (我没去过)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Wǒ chīguo jiǎozi (我吃过饺子)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Nǐ qùguo Běijīng ma? (你去过北京吗？)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ méi qùguo (我没去过)</span> significa «nunca fui».",
              error: "Todavía no. <span lang=\"zh\">Wǒ méi qùguo (我没去过)</span> significa «nunca fui». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 15,
          titulo: "Trabajo y estudios",
          descripcion: "Habla de tu trabajo y tu búsqueda laboral",
          consejo: "<span lang=\"zh\">zài (在)</span> antes de un verbo indica una acción en curso, como en <span lang=\"zh\">zài zhǎo (在找)</span>.",
          teoria: {
            titulo: "Aprende a hablar de trabajo",
            html: "<p>Estas frases son útiles para una entrevista o para presentarte en el trabajo.</p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ zài gōngsī gōngzuò (我在公司工作)</span> <span>→ trabajo en una empresa</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span> <span>→ soy responsable de ventas</span></p><p class=\"ejemplo-chino\"><span lang=\"zh\">Wǒ zài zhǎo gōngzuò (我在找工作)</span> <span>→ estoy buscando trabajo</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «trabajo en una empresa»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Wǒ zài gōngsī gōngzuò (我在公司工作)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Wǒ zài zhǎo gōngzuò (我在找工作)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ zài gōngsī gōngzuò (我在公司工作)</span> significa «trabajo en una empresa».",
              error: "Todavía no. <span lang=\"zh\">Wǒ zài gōngsī gōngzuò (我在公司工作)</span> significa «trabajo en una empresa». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span>?",
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
                  texto: "trabajo en una empresa",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span> significa «soy responsable de ventas».",
              error: "Todavía no. <span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span> significa «soy responsable de ventas». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «estoy buscando trabajo»?",
              opciones: [
                {
                  texto: "<span lang=\"zh\">Wǒ zài gōngsī gōngzuò (我在公司工作)</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"zh\">Wǒ zài zhǎo gōngzuò (我在找工作)</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"zh\">Wǒ fùzé xiāoshòu (我负责销售)</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"zh\">Wǒ zài zhǎo gōngzuò (我在找工作)</span> significa «estoy buscando trabajo».",
              error: "Todavía no. <span lang=\"zh\">Wǒ zài zhǎo gōngzuò (我在找工作)</span> significa «estoy buscando trabajo». Puedes elegir otra opción."
            }
          ]
        }
      ]
    }
  ]
};
