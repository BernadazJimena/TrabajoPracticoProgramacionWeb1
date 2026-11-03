/* =====================================================================
   temas.js  -  UNIDADES TEMÁTICAS DE LOS CURSOS

   Guarda las unidades que comparten los seis idiomas. Cada lección tiene seis
   frases, una columna por idioma, y datos.js arma con ellas la teoría y los
   ejercicios. Para sumar actividades alcanza con agregar frases a esta tabla.

   Orden de cada frase:
   [español, inglés, alemán, chino en pinyin, chino en caracteres, francés, italiano, portugués]
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. TABLA DE TEMAS
   --------------------------------------------------------------------- */

const TEMAS = Object.freeze([
  {
    nivel: 'a1',
    titulo: 'Comida y bebida',
    descripcion: 'Nombra alimentos y di lo que te gusta comer.',
    lecciones: [
      {
        titulo: 'Alimentos básicos',
        descripcion: 'Aprende los alimentos de todos los días',
        uso: 'Son palabras que verás en cualquier menú.',
        frases: [
          ['El pan', 'The bread', 'Das Brot', 'Miànbāo', '面包', 'Le pain', 'Il pane', 'O pão'],
          ['El agua', 'The water', 'Das Wasser', 'Shuǐ', '水', "L'eau", "L'acqua", 'A água'],
          ['La leche', 'The milk', 'Die Milch', 'Niúnǎi', '牛奶', 'Le lait', 'Il latte', 'O leite'],
          ['El arroz', 'The rice', 'Der Reis', 'Mǐfàn', '米饭', 'Le riz', 'Il riso', 'O arroz'],
          ['La manzana', 'The apple', 'Der Apfel', 'Píngguǒ', '苹果', 'La pomme', 'La mela', 'A maçã'],
          ['El huevo', 'The egg', 'Das Ei', 'Jīdàn', '鸡蛋', "L'œuf", "L'uovo", 'O ovo']
        ]
      },
      {
        titulo: 'El desayuno',
        descripcion: 'Cuenta qué comes por la mañana',
        uso: 'Sirve para hablar de tu primera comida del día.',
        frases: [
          ['Yo como pan', 'I eat bread', 'Ich esse Brot', 'Wǒ chī miànbāo', '我吃面包', 'Je mange du pain', 'Mangio il pane', 'Eu como pão'],
          ['Yo bebo café', 'I drink coffee', 'Ich trinke Kaffee', 'Wǒ hē kāfēi', '我喝咖啡', 'Je bois du café', 'Bevo il caffè', 'Eu bebo café'],
          ['Ella bebe té', 'She drinks tea', 'Sie trinkt Tee', 'Tā hē chá', '她喝茶', 'Elle boit du thé', 'Lei beve il tè', 'Ela bebe chá'],
          ['Él come un huevo', 'He eats an egg', 'Er isst ein Ei', 'Tā chī yī gè jīdàn', '他吃一个鸡蛋', 'Il mange un œuf', 'Lui mangia un uovo', 'Ele come um ovo'],
          ['El desayuno está listo', 'Breakfast is ready', 'Das Frühstück ist fertig', 'Zǎofàn hǎo le', '早饭好了', 'Le petit déjeuner est prêt', 'La colazione è pronta', 'O café da manhã está pronto'],
          ['Tengo hambre', 'I am hungry', 'Ich habe Hunger', 'Wǒ è le', '我饿了', "J'ai faim", 'Ho fame', 'Estou com fome']
        ]
      },
      {
        titulo: 'Lo que me gusta',
        descripcion: 'Expresa tus gustos con la comida',
        uso: 'Sirve para decir qué te gusta y qué no.',
        frases: [
          ['Me gusta el pescado', 'I like fish', 'Ich mag Fisch', 'Wǒ xǐhuan chī yú', '我喜欢吃鱼', "J'aime le poisson", 'Mi piace il pesce', 'Eu gosto de peixe'],
          ['No me gusta la carne', 'I do not like meat', 'Ich mag kein Fleisch', 'Wǒ bù xǐhuan chī ròu', '我不喜欢吃肉', "Je n'aime pas la viande", 'Non mi piace la carne', 'Eu não gosto de carne'],
          ['La sopa está caliente', 'The soup is hot', 'Die Suppe ist heiß', 'Tāng hěn rè', '汤很热', 'La soupe est chaude', 'La zuppa è calda', 'A sopa está quente'],
          ['El helado está frío', 'The ice cream is cold', 'Das Eis ist kalt', 'Bīngqílín hěn liáng', '冰淇淋很凉', 'La glace est froide', 'Il gelato è freddo', 'O sorvete está frio'],
          ['Esto está rico', 'This is delicious', 'Das ist lecker', 'Zhège hěn hǎochī', '这个很好吃', "C'est délicieux", 'Questo è buono', 'Isto está gostoso'],
          ['Tengo sed', 'I am thirsty', 'Ich habe Durst', 'Wǒ kě le', '我渴了', "J'ai soif", 'Ho sete', 'Estou com sede']
        ]
      }
    ]
  },
  {
    nivel: 'a1',
    titulo: 'Mi casa',
    descripcion: 'Describe tu casa y lo que haces en ella.',
    lecciones: [
      {
        titulo: 'Las habitaciones',
        descripcion: 'Nombra cada parte de la casa',
        uso: 'Te ayuda a describir dónde vives.',
        frases: [
          ['La cocina', 'The kitchen', 'Die Küche', 'Chúfáng', '厨房', 'La cuisine', 'La cucina', 'A cozinha'],
          ['El baño', 'The bathroom', 'Das Badezimmer', 'Wèishēngjiān', '卫生间', 'La salle de bain', 'Il bagno', 'O banheiro'],
          ['El dormitorio', 'The bedroom', 'Das Schlafzimmer', 'Wòshì', '卧室', 'La chambre', 'La camera da letto', 'O quarto'],
          ['La sala de estar', 'The living room', 'Das Wohnzimmer', 'Kètīng', '客厅', 'Le salon', 'Il soggiorno', 'A sala de estar'],
          ['El jardín', 'The garden', 'Der Garten', 'Huāyuán', '花园', 'Le jardin', 'Il giardino', 'O jardim'],
          ['La puerta', 'The door', 'Die Tür', 'Mén', '门', 'La porte', 'La porta', 'A porta']
        ]
      },
      {
        titulo: 'Los muebles',
        descripcion: 'Di qué hay en cada habitación',
        uso: 'Sirve para contar qué hay en un lugar.',
        frases: [
          ['La mesa es grande', 'The table is big', 'Der Tisch ist groß', 'Zhuōzi hěn dà', '桌子很大', 'La table est grande', 'Il tavolo è grande', 'A mesa é grande'],
          ['La silla es pequeña', 'The chair is small', 'Der Stuhl ist klein', 'Yǐzi hěn xiǎo', '椅子很小', 'La chaise est petite', 'La sedia è piccola', 'A cadeira é pequena'],
          ['La cama es cómoda', 'The bed is comfortable', 'Das Bett ist bequem', 'Chuáng hěn shūfu', '床很舒服', 'Le lit est confortable', 'Il letto è comodo', 'A cama é confortável'],
          ['Hay un sofá nuevo', 'There is a new sofa', 'Es gibt ein neues Sofa', 'Yǒu yī gè xīn shāfā', '有一个新沙发', 'Il y a un nouveau canapé', "C'è un divano nuovo", 'Tem um sofá novo'],
          ['La lámpara está aquí', 'The lamp is here', 'Die Lampe ist hier', 'Dēng zài zhèlǐ', '灯在这里', 'La lampe est ici', 'La lampada è qui', 'A lâmpada está aqui'],
          ['La ventana está abierta', 'The window is open', 'Das Fenster ist offen', 'Chuānghu kāizhe', '窗户开着', 'La fenêtre est ouverte', 'La finestra è aperta', 'A janela está aberta']
        ]
      },
      {
        titulo: 'Tareas de la casa',
        descripcion: 'Habla de lo que haces en casa',
        uso: 'Son acciones que repites todas las semanas.',
        frases: [
          ['Yo limpio la cocina', 'I clean the kitchen', 'Ich putze die Küche', 'Wǒ dǎsǎo chúfáng', '我打扫厨房', 'Je nettoie la cuisine', 'Pulisco la cucina', 'Eu limpo a cozinha'],
          ['Él cocina la cena', 'He cooks dinner', 'Er kocht das Abendessen', 'Tā zuò wǎnfàn', '他做晚饭', 'Il prépare le dîner', 'Lui prepara la cena', 'Ele faz o jantar'],
          ['Ella lava los platos', 'She washes the dishes', 'Sie spült das Geschirr', 'Tā xǐ wǎn', '她洗碗', 'Elle lave la vaisselle', 'Lei lava i piatti', 'Ela lava a louça'],
          ['Nosotros abrimos la ventana', 'We open the window', 'Wir öffnen das Fenster', 'Wǒmen kāi chuānghu', '我们开窗户', 'Nous ouvrons la fenêtre', 'Apriamo la finestra', 'Nós abrimos a janela'],
          ['Yo cierro la puerta', 'I close the door', 'Ich schließe die Tür', 'Wǒ guān mén', '我关门', 'Je ferme la porte', 'Chiudo la porta', 'Eu fecho a porta'],
          ['La casa está limpia', 'The house is clean', 'Das Haus ist sauber', 'Fángzi hěn gānjìng', '房子很干净', 'La maison est propre', 'La casa è pulita', 'A casa está limpa']
        ]
      }
    ]
  },
  {
    nivel: 'a1',
    titulo: 'Colores y ropa',
    descripcion: 'Describe lo que llevas puesto.',
    lecciones: [
      {
        titulo: 'Los colores',
        descripcion: 'Aprende los colores principales',
        uso: 'Los colores te permiten describir casi cualquier cosa.',
        frases: [
          ['Rojo', 'Red', 'Rot', 'Hóngsè', '红色', 'Rouge', 'Rosso', 'Vermelho'],
          ['Azul', 'Blue', 'Blau', 'Lánsè', '蓝色', 'Bleu', 'Blu', 'Azul'],
          ['Verde', 'Green', 'Grün', 'Lǜsè', '绿色', 'Vert', 'Verde', 'Verde'],
          ['Amarillo', 'Yellow', 'Gelb', 'Huángsè', '黄色', 'Jaune', 'Giallo', 'Amarelo'],
          ['Negro', 'Black', 'Schwarz', 'Hēisè', '黑色', 'Noir', 'Nero', 'Preto'],
          ['Blanco', 'White', 'Weiß', 'Báisè', '白色', 'Blanc', 'Bianco', 'Branco']
        ]
      },
      {
        titulo: 'La ropa',
        descripcion: 'Nombra las prendas más comunes',
        uso: 'Las usarás al comprar ropa o describir a alguien.',
        frases: [
          ['La camisa', 'The shirt', 'Das Hemd', 'Chènshān', '衬衫', 'La chemise', 'La camicia', 'A camisa'],
          ['Los pantalones', 'The trousers', 'Die Hose', 'Kùzi', '裤子', 'Le pantalon', 'I pantaloni', 'A calça'],
          ['Los zapatos', 'The shoes', 'Die Schuhe', 'Xiézi', '鞋子', 'Les chaussures', 'Le scarpe', 'Os sapatos'],
          ['El abrigo', 'The coat', 'Der Mantel', 'Dàyī', '大衣', 'Le manteau', 'Il cappotto', 'O casaco'],
          ['El vestido', 'The dress', 'Das Kleid', 'Liányīqún', '连衣裙', 'La robe', 'Il vestito', 'O vestido'],
          ['El sombrero', 'The hat', 'Der Hut', 'Màozi', '帽子', 'Le chapeau', 'Il cappello', 'O chapéu']
        ]
      },
      {
        titulo: 'Qué llevas hoy',
        descripcion: 'Describe tu ropa con colores',
        uso: 'Combina prendas y colores en frases completas.',
        frases: [
          ['Llevo una camisa azul', 'I am wearing a blue shirt', 'Ich trage ein blaues Hemd', 'Wǒ chuān lánsè de chènshān', '我穿蓝色的衬衫', 'Je porte une chemise bleue', 'Porto una camicia blu', 'Estou usando uma camisa azul'],
          ['Ella lleva un vestido rojo', 'She is wearing a red dress', 'Sie trägt ein rotes Kleid', 'Tā chuān hóngsè de liányīqún', '她穿红色的连衣裙', 'Elle porte une robe rouge', 'Lei porta un vestito rosso', 'Ela está usando um vestido vermelho'],
          ['Mis zapatos son negros', 'My shoes are black', 'Meine Schuhe sind schwarz', 'Wǒ de xiézi shì hēisè de', '我的鞋子是黑色的', 'Mes chaussures sont noires', 'Le mie scarpe sono nere', 'Meus sapatos são pretos'],
          ['Me gusta este abrigo', 'I like this coat', 'Ich mag diesen Mantel', 'Wǒ xǐhuan zhè jiàn dàyī', '我喜欢这件大衣', "J'aime ce manteau", 'Mi piace questo cappotto', 'Eu gosto deste casaco'],
          ['Hace falta un sombrero', 'A hat is needed', 'Man braucht einen Hut', 'Xūyào yī dǐng màozi', '需要一顶帽子', 'Il faut un chapeau', 'Serve un cappello', 'É preciso um chapéu'],
          ['Esta ropa es nueva', 'These clothes are new', 'Diese Kleidung ist neu', 'Zhè jiàn yīfu shì xīn de', '这件衣服是新的', 'Ces vêtements sont neufs', 'Questi vestiti sono nuovi', 'Esta roupa é nova']
        ]
      }
    ]
  },
  {
    nivel: 'a1',
    titulo: 'Mi día',
    descripcion: 'Cuenta tu rutina, los días y el clima.',
    lecciones: [
      {
        titulo: 'Mi rutina',
        descripcion: 'Explica qué haces cada día',
        uso: 'Son frases para contar un día normal.',
        frases: [
          ['Me levanto temprano', 'I get up early', 'Ich stehe früh auf', 'Wǒ qǐ de hěn zǎo', '我起得很早', 'Je me lève tôt', 'Mi alzo presto', 'Eu acordo cedo'],
          ['Voy al trabajo', 'I go to work', 'Ich gehe zur Arbeit', 'Wǒ qù shàngbān', '我去上班', 'Je vais au travail', 'Vado al lavoro', 'Eu vou para o trabalho'],
          ['Estudio por la tarde', 'I study in the afternoon', 'Ich lerne am Nachmittag', 'Wǒ xiàwǔ xuéxí', '我下午学习', "J'étudie l'après-midi", 'Studio il pomeriggio', 'Eu estudo à tarde'],
          ['Vuelvo a casa', 'I go back home', 'Ich gehe nach Hause', 'Wǒ huí jiā', '我回家', 'Je rentre à la maison', 'Torno a casa', 'Eu volto para casa'],
          ['Ceno con mi familia', 'I have dinner with my family', 'Ich esse mit meiner Familie zu Abend', 'Wǒ hé jiārén chī wǎnfàn', '我和家人吃晚饭', 'Je dîne avec ma famille', 'Ceno con la mia famiglia', 'Eu janto com a minha família'],
          ['Me acuesto a las diez', 'I go to bed at ten', 'Ich gehe um zehn ins Bett', 'Wǒ shí diǎn shuìjiào', '我十点睡觉', 'Je me couche à dix heures', 'Vado a letto alle dieci', 'Eu vou dormir às dez']
        ]
      },
      {
        titulo: 'Los días de la semana',
        descripcion: 'Organiza tu semana',
        uso: 'Te sirven para acordar citas y planes.',
        frases: [
          ['Lunes', 'Monday', 'Montag', 'Xīngqī yī', '星期一', 'Lundi', 'Lunedì', 'Segunda-feira'],
          ['Miércoles', 'Wednesday', 'Mittwoch', 'Xīngqī sān', '星期三', 'Mercredi', 'Mercoledì', 'Quarta-feira'],
          ['Viernes', 'Friday', 'Freitag', 'Xīngqī wǔ', '星期五', 'Vendredi', 'Venerdì', 'Sexta-feira'],
          ['Domingo', 'Sunday', 'Sonntag', 'Xīngqītiān', '星期天', 'Dimanche', 'Domenica', 'Domingo'],
          ['Hoy es sábado', 'Today is Saturday', 'Heute ist Samstag', 'Jīntiān shì xīngqī liù', '今天是星期六', "Aujourd'hui, c'est samedi", 'Oggi è sabato', 'Hoje é sábado'],
          ['Mañana es martes', 'Tomorrow is Tuesday', 'Morgen ist Dienstag', 'Míngtiān shì xīngqī èr', '明天是星期二', 'Demain, c\'est mardi', 'Domani è martedì', 'Amanhã é terça-feira']
        ]
      },
      {
        titulo: 'El clima',
        descripcion: 'Comenta cómo está el día',
        uso: 'Hablar del clima es una forma simple de iniciar una charla.',
        frases: [
          ['Hace calor', 'It is hot', 'Es ist heiß', 'Tiānqì hěn rè', '天气很热', 'Il fait chaud', 'Fa caldo', 'Está calor'],
          ['Hace frío', 'It is cold', 'Es ist kalt', 'Tiānqì hěn lěng', '天气很冷', 'Il fait froid', 'Fa freddo', 'Está frio'],
          ['Está lloviendo', 'It is raining', 'Es regnet', 'Xià yǔ le', '下雨了', 'Il pleut', 'Piove', 'Está chovendo'],
          ['Está nevando', 'It is snowing', 'Es schneit', 'Xià xuě le', '下雪了', 'Il neige', 'Nevica', 'Está nevando'],
          ['Hoy hace sol', 'It is sunny today', 'Heute ist es sonnig', 'Jīntiān shì qíngtiān', '今天是晴天', "Aujourd'hui, il y a du soleil", "Oggi c'è il sole", 'Hoje está ensolarado'],
          ['Hace mucho viento', 'It is very windy', 'Es ist sehr windig', 'Fēng hěn dà', '风很大', 'Il y a beaucoup de vent', "C'è molto vento", 'Está ventando muito']
        ]
      }
    ]
  },
  {
    nivel: 'a2',
    titulo: 'De compras',
    descripcion: 'Compra, compara precios y resuelve cambios.',
    lecciones: [
      {
        titulo: 'En el supermercado',
        descripcion: 'Encuentra lo que necesitas',
        uso: 'Son frases útiles para hacer las compras.',
        frases: [
          ['Necesito comprar fruta', 'I need to buy fruit', 'Ich muss Obst kaufen', 'Wǒ xūyào mǎi shuǐguǒ', '我需要买水果', "J'ai besoin d'acheter des fruits", 'Devo comprare la frutta', 'Preciso comprar frutas'],
          ['¿Dónde está la leche?', 'Where is the milk?', 'Wo ist die Milch?', 'Niúnǎi zài nǎlǐ?', '牛奶在哪里？', 'Où est le lait ?', "Dov'è il latte?", 'Onde está o leite?'],
          ['Quiero un kilo de tomates', 'I want a kilo of tomatoes', 'Ich möchte ein Kilo Tomaten', 'Wǒ yào yī gōngjīn xīhóngshì', '我要一公斤西红柿', 'Je veux un kilo de tomates', 'Vorrei un chilo di pomodori', 'Quero um quilo de tomates'],
          ['Esta bolsa pesa mucho', 'This bag is very heavy', 'Diese Tasche ist sehr schwer', 'Zhège dàizi hěn zhòng', '这个袋子很重', 'Ce sac est très lourd', 'Questa borsa è molto pesante', 'Esta sacola está muito pesada'],
          ['No queda pan', 'There is no bread left', 'Es gibt kein Brot mehr', 'Miànbāo méiyǒu le', '面包没有了', "Il n'y a plus de pain", 'Non è rimasto pane', 'Não tem mais pão'],
          ['La caja está cerrada', 'The checkout is closed', 'Die Kasse ist geschlossen', 'Shōuyíntái guān le', '收银台关了', 'La caisse est fermée', 'La cassa è chiusa', 'O caixa está fechado']
        ]
      },
      {
        titulo: 'Precios y pagos',
        descripcion: 'Pregunta cuánto cuesta y paga',
        uso: 'Las necesitas cada vez que vas a pagar.',
        frases: [
          ['¿Cuánto cuesta esto?', 'How much does this cost?', 'Wie viel kostet das?', 'Zhège duōshao qián?', '这个多少钱？', 'Combien ça coûte ?', 'Quanto costa questo?', 'Quanto custa isto?'],
          ['Es demasiado caro', 'It is too expensive', 'Das ist zu teuer', 'Tài guì le', '太贵了', "C'est trop cher", 'È troppo caro', 'É caro demais'],
          ['Esta oferta es barata', 'This offer is cheap', 'Dieses Angebot ist günstig', 'Zhège yōuhuì hěn piányi', '这个优惠很便宜', 'Cette offre est bon marché', 'Questa offerta è economica', 'Esta oferta é barata'],
          ['¿Puedo pagar con tarjeta?', 'Can I pay by card?', 'Kann ich mit Karte bezahlen?', 'Kěyǐ shuā kǎ ma?', '可以刷卡吗？', 'Puis-je payer par carte ?', 'Posso pagare con la carta?', 'Posso pagar com cartão?'],
          ['Solo tengo efectivo', 'I only have cash', 'Ich habe nur Bargeld', 'Wǒ zhǐ yǒu xiànjīn', '我只有现金', "Je n'ai que de l'argent liquide", 'Ho solo contanti', 'Só tenho dinheiro'],
          ['Quisiera el recibo', 'I would like the receipt', 'Ich hätte gern die Quittung', 'Wǒ xiǎng yào shōujù', '我想要收据', 'Je voudrais le reçu', 'Vorrei la ricevuta', 'Eu gostaria do recibo']
        ]
      },
      {
        titulo: 'Cambios y devoluciones',
        descripcion: 'Resuelve un problema con una compra',
        uso: 'Te ayudan a reclamar con amabilidad.',
        frases: [
          ['Quiero cambiar estos zapatos', 'I want to exchange these shoes', 'Ich möchte diese Schuhe umtauschen', 'Wǒ xiǎng huàn zhè shuāng xié', '我想换这双鞋', 'Je veux échanger ces chaussures', 'Vorrei cambiare queste scarpe', 'Quero trocar estes sapatos'],
          ['Esta talla es pequeña', 'This size is small', 'Diese Größe ist klein', 'Zhège chǐmǎ hěn xiǎo', '这个尺码很小', 'Cette taille est petite', 'Questa taglia è piccola', 'Este tamanho é pequeno'],
          ['El producto está roto', 'The product is broken', 'Das Produkt ist kaputt', 'Chǎnpǐn huài le', '产品坏了', 'Le produit est cassé', 'Il prodotto è rotto', 'O produto está quebrado'],
          ['¿Me devuelven el dinero?', 'Will you give me my money back?', 'Bekomme ich mein Geld zurück?', 'Kěyǐ tuì qián ma?', '可以退钱吗？', 'Vous me remboursez ?', 'Mi restituite i soldi?', 'Vocês devolvem o dinheiro?'],
          ['Aquí tiene la factura', 'Here is the invoice', 'Hier ist die Rechnung', 'Zhè shì fāpiào', '这是发票', 'Voici la facture', 'Ecco la fattura', 'Aqui está a nota fiscal'],
          ['Lo compré ayer', 'I bought it yesterday', 'Ich habe es gestern gekauft', 'Wǒ zuótiān mǎi de', '我昨天买的', "Je l'ai acheté hier", "L'ho comprato ieri", 'Comprei ontem']
        ]
      }
    ]
  },
  {
    nivel: 'a2',
    titulo: 'De viaje',
    descripcion: 'Muévete por aeropuertos, hoteles y estaciones.',
    lecciones: [
      {
        titulo: 'En el aeropuerto',
        descripcion: 'Prepárate para tomar un vuelo',
        uso: 'Son las frases que más escucharás antes de volar.',
        frases: [
          ['Aquí está mi pasaporte', 'Here is my passport', 'Hier ist mein Reisepass', 'Zhè shì wǒ de hùzhào', '这是我的护照', 'Voici mon passeport', 'Ecco il mio passaporto', 'Aqui está o meu passaporte'],
          ['¿Dónde está la puerta de embarque?', 'Where is the boarding gate?', 'Wo ist das Gate?', 'Dēngjīkǒu zài nǎlǐ?', '登机口在哪里？', "Où est la porte d'embarquement ?", "Dov'è il gate?", 'Onde fica o portão de embarque?'],
          ['Mi vuelo está retrasado', 'My flight is delayed', 'Mein Flug hat Verspätung', 'Wǒ de hángbān yánwù le', '我的航班延误了', 'Mon vol est retardé', 'Il mio volo è in ritardo', 'Meu voo está atrasado'],
          ['Tengo una maleta', 'I have one suitcase', 'Ich habe einen Koffer', 'Wǒ yǒu yī gè xíngli xiāng', '我有一个行李箱', "J'ai une valise", 'Ho una valigia', 'Tenho uma mala'],
          ['Perdí mi equipaje', 'I lost my luggage', 'Ich habe mein Gepäck verloren', 'Wǒ de xíngli diū le', '我的行李丢了', "J'ai perdu mes bagages", 'Ho perso il mio bagaglio', 'Perdi minha bagagem'],
          ['El avión sale a las ocho', 'The plane leaves at eight', 'Das Flugzeug startet um acht', 'Fēijī bā diǎn qǐfēi', '飞机八点起飞', "L'avion part à huit heures", "L'aereo parte alle otto", 'O avião sai às oito']
        ]
      },
      {
        titulo: 'En el hotel',
        descripcion: 'Reserva y pide lo que necesitas',
        uso: 'Te sirven para registrarte y pedir ayuda en la recepción.',
        frases: [
          ['Tengo una reserva', 'I have a reservation', 'Ich habe eine Reservierung', 'Wǒ yǒu yùdìng', '我有预订', "J'ai une réservation", 'Ho una prenotazione', 'Tenho uma reserva'],
          ['Quiero una habitación doble', 'I want a double room', 'Ich möchte ein Doppelzimmer', 'Wǒ yào yī gè shuāngrén fángjiān', '我要一个双人房间', 'Je veux une chambre double', 'Vorrei una camera doppia', 'Quero um quarto duplo'],
          ['¿El desayuno está incluido?', 'Is breakfast included?', 'Ist das Frühstück inklusive?', 'Bāo zǎocān ma?', '包早餐吗？', 'Le petit déjeuner est-il inclus ?', 'La colazione è inclusa?', 'O café da manhã está incluído?'],
          ['¿Cuál es la clave del wifi?', 'What is the wifi password?', 'Wie lautet das WLAN-Passwort?', 'Wúxiàn wǎng mìmǎ shì shénme?', '无线网密码是什么？', 'Quel est le mot de passe du wifi ?', 'Qual è la password del wifi?', 'Qual é a senha do wifi?'],
          ['La llave no funciona', 'The key does not work', 'Der Schlüssel funktioniert nicht', 'Yàoshi bù néng yòng', '钥匙不能用', 'La clé ne marche pas', 'La chiave non funziona', 'A chave não funciona'],
          ['Me voy mañana', 'I am leaving tomorrow', 'Ich reise morgen ab', 'Wǒ míngtiān líkāi', '我明天离开', 'Je pars demain', 'Parto domani', 'Vou embora amanhã']
        ]
      },
      {
        titulo: 'En la estación',
        descripcion: 'Compra pasajes y encuentra tu tren',
        uso: 'Las usarás para viajar en tren o autobús.',
        frases: [
          ['Un boleto a la capital', 'A ticket to the capital', 'Eine Fahrkarte in die Hauptstadt', 'Yī zhāng qù shǒudū de piào', '一张去首都的票', 'Un billet pour la capitale', 'Un biglietto per la capitale', 'Uma passagem para a capital'],
          ['¿A qué hora sale el tren?', 'What time does the train leave?', 'Wann fährt der Zug ab?', 'Huǒchē jǐ diǎn kāi?', '火车几点开？', 'À quelle heure part le train ?', 'A che ora parte il treno?', 'A que horas sai o trem?'],
          ['¿Qué andén es?', 'Which platform is it?', 'Welches Gleis ist das?', 'Shì nǎge zhàntái?', '是哪个站台？', 'Quel quai est-ce ?', 'Qual è il binario?', 'Qual é a plataforma?'],
          ['Este asiento está libre', 'This seat is free', 'Dieser Platz ist frei', 'Zhège zuòwèi méi rén', '这个座位没人', 'Cette place est libre', 'Questo posto è libero', 'Este assento está livre'],
          ['Debo cambiar de tren', 'I must change trains', 'Ich muss umsteigen', 'Wǒ yào huàn chē', '我要换车', 'Je dois changer de train', 'Devo cambiare treno', 'Preciso trocar de trem'],
          ['Llegamos a tiempo', 'We arrived on time', 'Wir sind pünktlich angekommen', 'Wǒmen zhǔnshí dào le', '我们准时到了', "Nous sommes arrivés à l'heure", 'Siamo arrivati in orario', 'Chegamos na hora']
        ]
      }
    ]
  },
  {
    nivel: 'a2',
    titulo: 'La salud',
    descripcion: 'Explica cómo te sientes y pide ayuda.',
    lecciones: [
      {
        titulo: 'El cuerpo',
        descripcion: 'Nombra las partes del cuerpo',
        uso: 'Es el vocabulario básico para hablar de salud.',
        frases: [
          ['La cabeza', 'The head', 'Der Kopf', 'Tóu', '头', 'La tête', 'La testa', 'A cabeça'],
          ['La mano', 'The hand', 'Die Hand', 'Shǒu', '手', 'La main', 'La mano', 'A mão'],
          ['La espalda', 'The back', 'Der Rücken', 'Bèi', '背', 'Le dos', 'La schiena', 'As costas'],
          ['El estómago', 'The stomach', 'Der Magen', 'Wèi', '胃', "L'estomac", 'Lo stomaco', 'O estômago'],
          ['La pierna', 'The leg', 'Das Bein', 'Tuǐ', '腿', 'La jambe', 'La gamba', 'A perna'],
          ['Los ojos', 'The eyes', 'Die Augen', 'Yǎnjing', '眼睛', 'Les yeux', 'Gli occhi', 'Os olhos']
        ]
      },
      {
        titulo: 'En el médico',
        descripcion: 'Cuenta qué te duele',
        uso: 'Te permiten explicar tus síntomas.',
        frases: [
          ['Me duele la cabeza', 'I have a headache', 'Ich habe Kopfschmerzen', 'Wǒ tóu téng', '我头疼', "J'ai mal à la tête", 'Ho mal di testa', 'Estou com dor de cabeça'],
          ['Tengo fiebre', 'I have a fever', 'Ich habe Fieber', 'Wǒ fāshāo le', '我发烧了', "J'ai de la fièvre", 'Ho la febbre', 'Estou com febre'],
          ['Estoy resfriado', 'I have a cold', 'Ich bin erkältet', 'Wǒ gǎnmào le', '我感冒了', 'Je suis enrhumé', 'Ho il raffreddore', 'Estou resfriado'],
          ['Necesito un médico', 'I need a doctor', 'Ich brauche einen Arzt', 'Wǒ xūyào yīshēng', '我需要医生', "J'ai besoin d'un médecin", 'Ho bisogno di un medico', 'Preciso de um médico'],
          ['Me siento mejor', 'I feel better', 'Ich fühle mich besser', 'Wǒ hǎo duō le', '我好多了', 'Je me sens mieux', 'Mi sento meglio', 'Estou me sentindo melhor'],
          ['Debes descansar', 'You must rest', 'Du musst dich ausruhen', 'Nǐ yào xiūxi', '你要休息', 'Tu dois te reposer', 'Devi riposare', 'Você precisa descansar']
        ]
      },
      {
        titulo: 'En la farmacia',
        descripcion: 'Pide medicamentos e indicaciones',
        uso: 'Son útiles si te enfermas durante un viaje.',
        frases: [
          ['Busco una farmacia', 'I am looking for a pharmacy', 'Ich suche eine Apotheke', 'Wǒ zhǎo yàodiàn', '我找药店', 'Je cherche une pharmacie', 'Cerco una farmacia', 'Procuro uma farmácia'],
          ['Tengo una receta', 'I have a prescription', 'Ich habe ein Rezept', 'Wǒ yǒu chǔfāng', '我有处方', "J'ai une ordonnance", 'Ho una ricetta', 'Tenho uma receita'],
          ['Tome una pastilla', 'Take one pill', 'Nehmen Sie eine Tablette', 'Qǐng chī yī piàn yào', '请吃一片药', 'Prenez un comprimé', 'Prenda una pastiglia', 'Tome um comprimido'],
          ['Dos veces al día', 'Twice a day', 'Zweimal am Tag', 'Yī tiān liǎng cì', '一天两次', 'Deux fois par jour', 'Due volte al giorno', 'Duas vezes por dia'],
          ['Soy alérgico a la penicilina', 'I am allergic to penicillin', 'Ich bin allergisch gegen Penicillin', 'Wǒ duì qīngméisù guòmǐn', '我对青霉素过敏', 'Je suis allergique à la pénicilline', 'Sono allergico alla penicillina', 'Sou alérgico à penicilina'],
          ['Este jarabe es para la tos', 'This syrup is for coughs', 'Dieser Saft ist gegen Husten', 'Zhè shì zhǐké tángjiāng', '这是止咳糖浆', 'Ce sirop est contre la toux', 'Questo sciroppo è per la tosse', 'Este xarope é para a tosse']
        ]
      }
    ]
  },
  {
    nivel: 'a2',
    titulo: 'La ciudad',
    descripcion: 'Ubica lugares y usa el transporte.',
    lecciones: [
      {
        titulo: 'Lugares de la ciudad',
        descripcion: 'Conoce los sitios más importantes',
        uso: 'Son los lugares que aparecen en cualquier mapa.',
        frases: [
          ['El banco', 'The bank', 'Die Bank', 'Yínháng', '银行', 'La banque', 'La banca', 'O banco'],
          ['El hospital', 'The hospital', 'Das Krankenhaus', 'Yīyuàn', '医院', "L'hôpital", "L'ospedale", 'O hospital'],
          ['La biblioteca', 'The library', 'Die Bibliothek', 'Túshūguǎn', '图书馆', 'La bibliothèque', 'La biblioteca', 'A biblioteca'],
          ['El museo', 'The museum', 'Das Museum', 'Bówùguǎn', '博物馆', 'Le musée', 'Il museo', 'O museu'],
          ['El parque', 'The park', 'Der Park', 'Gōngyuán', '公园', 'Le parc', 'Il parco', 'O parque'],
          ['El correo', 'The post office', 'Die Post', 'Yóujú', '邮局', 'La poste', "L'ufficio postale", 'Os correios']
        ]
      },
      {
        titulo: 'El transporte',
        descripcion: 'Viaja por la ciudad',
        uso: 'Te ayudan a moverte sin perderte.',
        frases: [
          ['Tomo el autobús', 'I take the bus', 'Ich nehme den Bus', 'Wǒ zuò gōngjiāochē', '我坐公交车', 'Je prends le bus', "Prendo l'autobus", 'Eu pego o ônibus'],
          ['Voy en metro', 'I go by subway', 'Ich fahre mit der U-Bahn', 'Wǒ zuò dìtiě', '我坐地铁', 'Je vais en métro', 'Vado in metropolitana', 'Eu vou de metrô'],
          ['Prefiero ir en bicicleta', 'I prefer to go by bicycle', 'Ich fahre lieber mit dem Fahrrad', 'Wǒ gèng xǐhuan qí zìxíngchē', '我更喜欢骑自行车', 'Je préfère y aller à vélo', 'Preferisco andare in bicicletta', 'Prefiro ir de bicicleta'],
          ['Llamemos un taxi', 'Let us call a taxi', 'Rufen wir ein Taxi', 'Wǒmen jiào chūzūchē ba', '我们叫出租车吧', 'Appelons un taxi', 'Chiamiamo un taxi', 'Vamos chamar um táxi'],
          ['¿Dónde está la parada?', 'Where is the stop?', 'Wo ist die Haltestelle?', 'Chēzhàn zài nǎlǐ?', '车站在哪里？', "Où est l'arrêt ?", "Dov'è la fermata?", 'Onde fica o ponto?'],
          ['Hay mucho tráfico', 'There is a lot of traffic', 'Es gibt viel Verkehr', 'Lùshàng hěn dǔ', '路上很堵', 'Il y a beaucoup de circulation', "C'è molto traffico", 'Tem muito trânsito']
        ]
      },
      {
        titulo: 'Pedir ayuda en la calle',
        descripcion: 'Pregunta con cortesía',
        uso: 'Sirven para acercarte a alguien con amabilidad.',
        frases: [
          ['Disculpe, estoy perdido', 'Excuse me, I am lost', 'Entschuldigung, ich habe mich verlaufen', 'Duìbuqǐ, wǒ mílù le', '对不起，我迷路了', 'Excusez-moi, je suis perdu', 'Mi scusi, mi sono perso', 'Com licença, estou perdido'],
          ['¿Está lejos de aquí?', 'Is it far from here?', 'Ist es weit von hier?', 'Lí zhèlǐ yuǎn ma?', '离这里远吗？', "C'est loin d'ici ?", 'È lontano da qui?', 'É longe daqui?'],
          ['Está cerca del banco', 'It is near the bank', 'Es ist in der Nähe der Bank', 'Zài yínháng fùjìn', '在银行附近', 'C\'est près de la banque', 'È vicino alla banca', 'Fica perto do banco'],
          ['¿Puede repetirlo, por favor?', 'Can you repeat that, please?', 'Können Sie das bitte wiederholen?', 'Qǐng zài shuō yī biàn', '请再说一遍', 'Pouvez-vous répéter, s\'il vous plaît ?', 'Può ripetere, per favore?', 'Pode repetir, por favor?'],
          ['No hablo muy bien', 'I do not speak very well', 'Ich spreche nicht sehr gut', 'Wǒ shuō de bù tài hǎo', '我说得不太好', 'Je ne parle pas très bien', 'Non parlo molto bene', 'Não falo muito bem'],
          ['Muchas gracias por su ayuda', 'Thank you very much for your help', 'Vielen Dank für Ihre Hilfe', 'Fēicháng gǎnxiè nín de bāngzhù', '非常感谢您的帮助', 'Merci beaucoup pour votre aide', 'Grazie mille per il suo aiuto', 'Muito obrigado pela sua ajuda']
        ]
      }
    ]
  },
  {
    nivel: 'b1',
    titulo: 'Medio ambiente',
    descripcion: 'Debate sobre el planeta y tus hábitos.',
    lecciones: [
      {
        titulo: 'Reciclar en casa',
        descripcion: 'Habla de tus hábitos diarios',
        uso: 'Te permiten contar qué haces para cuidar el ambiente.',
        frases: [
          ['Separamos la basura', 'We separate the rubbish', 'Wir trennen den Müll', 'Wǒmen fēnlèi lājī', '我们分类垃圾', 'Nous trions les déchets', 'Separiamo la spazzatura', 'Nós separamos o lixo'],
          ['Reciclo el vidrio y el papel', 'I recycle glass and paper', 'Ich recycle Glas und Papier', 'Wǒ huíshōu bōli hé zhǐ', '我回收玻璃和纸', 'Je recycle le verre et le papier', 'Riciclo il vetro e la carta', 'Eu reciclo vidro e papel'],
          ['Deberíamos usar menos plástico', 'We should use less plastic', 'Wir sollten weniger Plastik benutzen', 'Wǒmen yīnggāi shǎo yòng sùliào', '我们应该少用塑料', 'Nous devrions utiliser moins de plastique', 'Dovremmo usare meno plastica', 'Deveríamos usar menos plástico'],
          ['Llevo mi propia bolsa', 'I bring my own bag', 'Ich bringe meine eigene Tasche mit', 'Wǒ dài zìjǐ de dàizi', '我带自己的袋子', "J'apporte mon propre sac", 'Porto la mia borsa', 'Levo minha própria sacola'],
          ['Tirar comida es un problema', 'Wasting food is a problem', 'Lebensmittel wegzuwerfen ist ein Problem', 'Làngfèi shíwù shì yī gè wèntí', '浪费食物是一个问题', 'Jeter de la nourriture est un problème', 'Sprecare il cibo è un problema', 'Desperdiçar comida é um problema'],
          ['Cada pequeño gesto ayuda', 'Every small gesture helps', 'Jede kleine Geste hilft', 'Měi yī gè xiǎo xíngdòng dōu yǒu bāngzhù', '每一个小行动都有帮助', 'Chaque petit geste compte', 'Ogni piccolo gesto aiuta', 'Cada pequeno gesto ajuda']
        ]
      },
      {
        titulo: 'Energía y recursos',
        descripcion: 'Explica cómo ahorrar',
        uso: 'Son frases para opinar sobre el consumo.',
        frases: [
          ['Debemos ahorrar energía', 'We must save energy', 'Wir müssen Energie sparen', 'Wǒmen bìxū jiéyuē néngyuán', '我们必须节约能源', "Nous devons économiser l'énergie", "Dobbiamo risparmiare energia", 'Devemos economizar energia'],
          ['Apago la luz al salir', 'I turn off the light when I leave', 'Ich mache das Licht aus, wenn ich gehe', 'Líkāi shí wǒ huì guān dēng', '离开时我会关灯', 'J\'éteins la lumière en sortant', 'Spengo la luce quando esco', 'Apago a luz ao sair'],
          ['El agua es un recurso limitado', 'Water is a limited resource', 'Wasser ist eine begrenzte Ressource', 'Shuǐ shì yǒuxiàn de zīyuán', '水是有限的资源', "L'eau est une ressource limitée", "L'acqua è una risorsa limitata", 'A água é um recurso limitado'],
          ['La energía solar es limpia', 'Solar energy is clean', 'Solarenergie ist sauber', 'Tàiyángnéng hěn qīngjié', '太阳能很清洁', "L'énergie solaire est propre", "L'energia solare è pulita", 'A energia solar é limpa'],
          ['El transporte público contamina menos', 'Public transport pollutes less', 'Öffentliche Verkehrsmittel verschmutzen weniger', 'Gōnggòng jiāotōng wūrǎn gèng shǎo', '公共交通污染更少', 'Les transports publics polluent moins', 'I mezzi pubblici inquinano meno', 'O transporte público polui menos'],
          ['Las facturas son cada vez más altas', 'Bills are getting higher and higher', 'Die Rechnungen werden immer höher', 'Zhàngdān yuèláiyuè gāo', '账单越来越高', 'Les factures sont de plus en plus élevées', 'Le bollette sono sempre più alte', 'As contas estão cada vez mais altas']
        ]
      },
      {
        titulo: 'Naturaleza y clima',
        descripcion: 'Comenta los cambios del planeta',
        uso: 'Te ayudan a participar en debates actuales.',
        frases: [
          ['El clima está cambiando', 'The climate is changing', 'Das Klima verändert sich', 'Qìhòu zhèngzài biànhuà', '气候正在变化', 'Le climat change', 'Il clima sta cambiando', 'O clima está mudando'],
          ['Los bosques están en peligro', 'Forests are in danger', 'Die Wälder sind in Gefahr', 'Sēnlín chǔyú wēixiǎn zhī zhōng', '森林处于危险之中', 'Les forêts sont en danger', 'Le foreste sono in pericolo', 'As florestas estão em perigo'],
          ['El aire de la ciudad está contaminado', 'The city air is polluted', 'Die Stadtluft ist verschmutzt', 'Chéngshì de kōngqì shòudào wūrǎn', '城市的空气受到污染', "L'air de la ville est pollué", "L'aria della città è inquinata", 'O ar da cidade está poluído'],
          ['Muchos animales han desaparecido', 'Many animals have disappeared', 'Viele Tiere sind verschwunden', 'Xǔduō dòngwù yǐjīng xiāoshī le', '许多动物已经消失了', 'Beaucoup d\'animaux ont disparu', 'Molti animali sono scomparsi', 'Muitos animais desapareceram'],
          ['Hay que proteger los océanos', 'We have to protect the oceans', 'Wir müssen die Ozeane schützen', 'Wǒmen yào bǎohù hǎiyáng', '我们要保护海洋', 'Il faut protéger les océans', 'Bisogna proteggere gli oceani', 'É preciso proteger os oceanos'],
          ['Plantamos árboles cada primavera', 'We plant trees every spring', 'Wir pflanzen jeden Frühling Bäume', 'Wǒmen měi nián chūntiān zhòng shù', '我们每年春天种树', 'Nous plantons des arbres chaque printemps', 'Piantiamo alberi ogni primavera', 'Plantamos árvores toda primavera']
        ]
      }
    ]
  },
  {
    nivel: 'b1',
    titulo: 'Tecnología',
    descripcion: 'Habla de internet, aplicaciones y seguridad.',
    lecciones: [
      {
        titulo: 'El celular',
        descripcion: 'Explica cómo usas tu teléfono',
        uso: 'Son frases habituales de la vida conectada.',
        frases: [
          ['Se me quedó sin batería', 'My battery ran out', 'Mein Akku ist leer', 'Wǒ de shǒujī méi diàn le', '我的手机没电了', "Je n'ai plus de batterie", 'Mi si è scaricata la batteria', 'Minha bateria acabou'],
          ['Te envío un mensaje luego', 'I will send you a message later', 'Ich schicke dir später eine Nachricht', 'Wǒ děng yīxià gěi nǐ fā xiāoxi', '我等一下给你发消息', 'Je t\'envoie un message plus tard', 'Ti mando un messaggio dopo', 'Te mando uma mensagem depois'],
          ['Descargué una aplicación nueva', 'I downloaded a new app', 'Ich habe eine neue App heruntergeladen', 'Wǒ xiàzài le yī gè xīn yìngyòng', '我下载了一个新应用', "J'ai téléchargé une nouvelle application", "Ho scaricato una nuova applicazione", 'Baixei um aplicativo novo'],
          ['La pantalla está rota', 'The screen is broken', 'Der Bildschirm ist kaputt', 'Píngmù huài le', '屏幕坏了', "L'écran est cassé", 'Lo schermo è rotto', 'A tela está quebrada'],
          ['No tengo señal aquí', 'I have no signal here', 'Ich habe hier keinen Empfang', 'Zhèlǐ méiyǒu xìnhào', '这里没有信号', "Je n'ai pas de réseau ici", 'Qui non ho campo', 'Estou sem sinal aqui'],
          ['Uso demasiado el teléfono', 'I use my phone too much', 'Ich benutze mein Handy zu viel', 'Wǒ yòng shǒujī tài duō le', '我用手机太多了', "J'utilise trop mon téléphone", 'Uso troppo il telefono', 'Uso demais o celular']
        ]
      },
      {
        titulo: 'Internet y redes',
        descripcion: 'Comenta lo que haces en línea',
        uso: 'Te ayudan a hablar de tu vida digital.',
        frases: [
          ['Publiqué una foto ayer', 'I posted a photo yesterday', 'Ich habe gestern ein Foto gepostet', 'Wǒ zuótiān fā le yī zhāng zhàopiàn', '我昨天发了一张照片', "J'ai publié une photo hier", 'Ho pubblicato una foto ieri', 'Postei uma foto ontem'],
          ['Sigo esa cuenta desde hace años', 'I have followed that account for years', 'Ich folge diesem Konto seit Jahren', 'Wǒ guānzhù nàge zhànghào hěn duō nián le', '我关注那个账号很多年了', 'Je suis ce compte depuis des années', 'Seguo quel profilo da anni', 'Sigo essa conta há anos'],
          ['La conexión es muy lenta', 'The connection is very slow', 'Die Verbindung ist sehr langsam', 'Wǎngsù hěn màn', '网速很慢', 'La connexion est très lente', 'La connessione è molto lenta', 'A conexão está muito lenta'],
          ['Busqué la información en internet', 'I looked up the information online', 'Ich habe die Informationen im Internet gesucht', 'Wǒ zài wǎngshàng chá le zīliào', '我在网上查了资料', "J'ai cherché l'information sur internet", "Ho cercato l'informazione su internet", 'Procurei a informação na internet'],
          ['Las noticias falsas se difunden rápido', 'Fake news spreads quickly', 'Falschmeldungen verbreiten sich schnell', 'Jiǎ xīnwén chuánbō hěn kuài', '假新闻传播很快', 'Les fausses nouvelles se répandent vite', 'Le notizie false si diffondono in fretta', 'As notícias falsas se espalham rápido'],
          ['Compro casi todo en línea', 'I buy almost everything online', 'Ich kaufe fast alles online', 'Wǒ jīhū dōu zài wǎngshàng mǎi dōngxi', '我几乎都在网上买东西', "J'achète presque tout en ligne", 'Compro quasi tutto online', 'Compro quase tudo pela internet']
        ]
      },
      {
        titulo: 'Seguridad digital',
        descripcion: 'Protege tus cuentas y tus datos',
        uso: 'Son consejos que conviene saber explicar.',
        frases: [
          ['Cambia tu contraseña seguido', 'Change your password often', 'Ändere dein Passwort oft', 'Yào jīngcháng gēnggǎi mìmǎ', '要经常更改密码', 'Change souvent ton mot de passe', 'Cambia spesso la password', 'Troque sua senha com frequência'],
          ['No abras ese enlace', 'Do not open that link', 'Öffne diesen Link nicht', 'Bié dǎkāi nàge liànjiē', '别打开那个链接', "N'ouvre pas ce lien", 'Non aprire quel link', 'Não abra esse link'],
          ['Me robaron la cuenta', 'My account was stolen', 'Mein Konto wurde gestohlen', 'Wǒ de zhànghào bèi dào le', '我的账号被盗了', "On m'a volé mon compte", 'Mi hanno rubato il profilo', 'Roubaram minha conta'],
          ['Haz una copia de seguridad', 'Make a backup', 'Mach eine Sicherungskopie', 'Qǐng bèifèn wénjiàn', '请备份文件', 'Fais une sauvegarde', 'Fai una copia di sicurezza', 'Faça uma cópia de segurança'],
          ['Mis datos son privados', 'My data is private', 'Meine Daten sind privat', 'Wǒ de shùjù shì sīmì de', '我的数据是私密的', 'Mes données sont privées', 'I miei dati sono privati', 'Meus dados são privados'],
          ['Ese correo parece sospechoso', 'That email looks suspicious', 'Diese E-Mail sieht verdächtig aus', 'Nà fēng yóujiàn kàn qǐlái hěn kěyí', '那封邮件看起来很可疑', 'Ce courriel semble suspect', 'Quella mail sembra sospetta', 'Esse e-mail parece suspeito']
        ]
      }
    ]
  },
  {
    nivel: 'b1',
    titulo: 'Cultura y ocio',
    descripcion: 'Comparte tus películas, música y libros.',
    lecciones: [
      {
        titulo: 'Cine y series',
        descripcion: 'Recomienda lo que viste',
        uso: 'Sirven para comentar una película con amigos.',
        frases: [
          ['La película me pareció aburrida', 'I found the film boring', 'Ich fand den Film langweilig', 'Wǒ juéde zhè bù diànyǐng hěn wúliáo', '我觉得这部电影很无聊', "J'ai trouvé le film ennuyeux", 'Il film mi è sembrato noioso', 'Achei o filme chato'],
          ['El final me sorprendió', 'The ending surprised me', 'Das Ende hat mich überrascht', 'Jiéjú ràng wǒ hěn jīngyà', '结局让我很惊讶', "La fin m'a surpris", 'Il finale mi ha sorpreso', 'O final me surpreendeu'],
          ['Esa actriz es excelente', 'That actress is excellent', 'Diese Schauspielerin ist ausgezeichnet', 'Nà wèi nǚ yǎnyuán fēicháng yōuxiù', '那位女演员非常优秀', 'Cette actrice est excellente', 'Quella attrice è eccellente', 'Essa atriz é excelente'],
          ['Te recomiendo esta serie', 'I recommend this series to you', 'Ich empfehle dir diese Serie', 'Wǒ xiàng nǐ tuījiàn zhè bù diànshìjù', '我向你推荐这部电视剧', 'Je te recommande cette série', 'Ti consiglio questa serie', 'Recomendo esta série para você'],
          ['Vi tres capítulos seguidos', 'I watched three episodes in a row', 'Ich habe drei Folgen hintereinander gesehen', 'Wǒ liánxù kàn le sān jí', '我连续看了三集', "J'ai regardé trois épisodes d'affilée", 'Ho visto tre episodi di fila', 'Vi três episódios seguidos'],
          ['Prefiero las historias reales', 'I prefer true stories', 'Ich bevorzuge wahre Geschichten', 'Wǒ gèng xǐhuan zhēnshí de gùshi', '我更喜欢真实的故事', 'Je préfère les histoires vraies', 'Preferisco le storie vere', 'Prefiro histórias reais']
        ]
      },
      {
        titulo: 'Música y conciertos',
        descripcion: 'Cuenta qué escuchas',
        uso: 'Te ayudan a hablar de gustos musicales.',
        frases: [
          ['Escucho música mientras trabajo', 'I listen to music while I work', 'Ich höre Musik, während ich arbeite', 'Wǒ biān gōngzuò biān tīng yīnyuè', '我边工作边听音乐', "J'écoute de la musique en travaillant", 'Ascolto musica mentre lavoro', 'Ouço música enquanto trabalho'],
          ['El concierto fue increíble', 'The concert was incredible', 'Das Konzert war unglaublich', 'Yīnyuèhuì tài bàng le', '音乐会太棒了', 'Le concert était incroyable', 'Il concerto è stato incredibile', 'O show foi incrível'],
          ['Aprendí a tocar la guitarra', 'I learned to play the guitar', 'Ich habe Gitarre spielen gelernt', 'Wǒ xué huì le tán jítā', '我学会了弹吉他', "J'ai appris à jouer de la guitare", 'Ho imparato a suonare la chitarra', 'Aprendi a tocar violão'],
          ['Esa canción me trae recuerdos', 'That song brings back memories', 'Dieses Lied weckt Erinnerungen', 'Nà shǒu gē ràng wǒ xiǎngqǐ wǎngshì', '那首歌让我想起往事', 'Cette chanson me rappelle des souvenirs', 'Quella canzone mi ricorda il passato', 'Essa música me traz lembranças'],
          ['Las entradas se agotaron enseguida', 'The tickets sold out right away', 'Die Karten waren sofort ausverkauft', 'Piào hěn kuài jiù mài wán le', '票很快就卖完了', 'Les billets sont partis tout de suite', 'I biglietti sono finiti subito', 'Os ingressos esgotaram na hora'],
          ['Mi banda favorita vuelve este año', 'My favourite band is coming back this year', 'Meine Lieblingsband kommt dieses Jahr zurück', 'Wǒ zuì xǐhuan de yuèduì jīnnián huílái', '我最喜欢的乐队今年回来', 'Mon groupe préféré revient cette année', 'La mia band preferita torna quest\'anno', 'Minha banda favorita volta este ano']
        ]
      },
      {
        titulo: 'Libros y fiestas',
        descripcion: 'Habla de lecturas y tradiciones',
        uso: 'Te permiten contar costumbres y recomendar lecturas.',
        frases: [
          ['Estoy leyendo una novela', 'I am reading a novel', 'Ich lese gerade einen Roman', 'Wǒ zhèngzài kàn yī běn xiǎoshuō', '我正在看一本小说', 'Je suis en train de lire un roman', 'Sto leggendo un romanzo', 'Estou lendo um romance'],
          ['El autor cuenta su infancia', 'The author tells about his childhood', 'Der Autor erzählt von seiner Kindheit', 'Zuòzhě jiǎngshù tā de tóngnián', '作者讲述他的童年', "L'auteur raconte son enfance", "L'autore racconta la sua infanzia", 'O autor conta sua infância'],
          ['Préstame ese libro cuando termines', 'Lend me that book when you finish', 'Leih mir dieses Buch, wenn du fertig bist', 'Nǐ kàn wán bǎ nà běn shū jiè gěi wǒ', '你看完把那本书借给我', 'Prête-moi ce livre quand tu auras fini', 'Prestami quel libro quando finisci', 'Me empresta esse livro quando terminar'],
          ['Celebramos el año nuevo en familia', 'We celebrate the new year with family', 'Wir feiern das neue Jahr mit der Familie', 'Wǒmen hé jiārén yīqǐ guò xīnnián', '我们和家人一起过新年', 'Nous fêtons le nouvel an en famille', "Festeggiamo l'anno nuovo in famiglia", 'Comemoramos o ano-novo em família'],
          ['Esta tradición es muy antigua', 'This tradition is very old', 'Diese Tradition ist sehr alt', 'Zhège chuántǒng hěn gǔlǎo', '这个传统很古老', 'Cette tradition est très ancienne', 'Questa tradizione è molto antica', 'Esta tradição é muito antiga'],
          ['Todos cantan durante la fiesta', 'Everyone sings during the party', 'Alle singen während des Festes', 'Jiérì shí dàjiā dōu chànggē', '节日时大家都唱歌', 'Tout le monde chante pendant la fête', 'Tutti cantano durante la festa', 'Todos cantam durante a festa']
        ]
      }
    ]
  },
  {
    nivel: 'b1',
    titulo: 'Vida social',
    descripcion: 'Organiza encuentros y resuelve malentendidos.',
    lecciones: [
      {
        titulo: 'Invitar y aceptar',
        descripcion: 'Propón planes con tus amigos',
        uso: 'Sirven para organizar una salida.',
        frases: [
          ['¿Te gustaría venir a cenar?', 'Would you like to come to dinner?', 'Möchtest du zum Abendessen kommen?', 'Nǐ xiǎng lái chī wǎnfàn ma?', '你想来吃晚饭吗？', 'Aimerais-tu venir dîner ?', 'Ti piacerebbe venire a cena?', 'Você gostaria de vir jantar?'],
          ['Me encantaría ir', 'I would love to go', 'Ich würde sehr gern kommen', 'Wǒ hěn yuànyì qù', '我很愿意去', "J'adorerais y aller", 'Mi piacerebbe molto andare', 'Eu adoraria ir'],
          ['Lamentablemente no puedo', 'Unfortunately I cannot', 'Leider kann ich nicht', 'Hěn yíhàn, wǒ qù bù liǎo', '很遗憾，我去不了', 'Malheureusement, je ne peux pas', 'Purtroppo non posso', 'Infelizmente não posso'],
          ['Ya tengo otro compromiso', 'I already have another commitment', 'Ich habe schon einen anderen Termin', 'Wǒ yǐjīng yǒu biéde ānpái le', '我已经有别的安排了', "J'ai déjà un autre engagement", 'Ho già un altro impegno', 'Já tenho outro compromisso'],
          ['Podemos vernos el sábado', 'We can meet on Saturday', 'Wir können uns am Samstag treffen', 'Wǒmen kěyǐ xīngqī liù jiànmiàn', '我们可以星期六见面', 'Nous pouvons nous voir samedi', 'Possiamo vederci sabato', 'Podemos nos encontrar no sábado'],
          ['Avísame cuando llegues', 'Let me know when you arrive', 'Sag mir Bescheid, wenn du ankommst', 'Dào le gàosu wǒ', '到了告诉我', 'Préviens-moi quand tu arrives', 'Avvisami quando arrivi', 'Me avise quando chegar']
        ]
      },
      {
        titulo: 'Resolver malentendidos',
        descripcion: 'Pide disculpas y aclara las cosas',
        uso: 'Te ayudan a evitar discusiones.',
        frases: [
          ['No quise decir eso', 'I did not mean that', 'Das wollte ich nicht sagen', 'Wǒ bú shì nàge yìsi', '我不是那个意思', "Je ne voulais pas dire ça", 'Non volevo dire questo', 'Não quis dizer isso'],
          ['Te pido disculpas', 'I apologise to you', 'Ich bitte dich um Entschuldigung', 'Wǒ xiàng nǐ dàoqiàn', '我向你道歉', 'Je te présente mes excuses', 'Ti chiedo scusa', 'Peço desculpas'],
          ['Creo que me entendiste mal', 'I think you misunderstood me', 'Ich glaube, du hast mich falsch verstanden', 'Wǒ juéde nǐ wùhuì wǒ le', '我觉得你误会我了', 'Je crois que tu as mal compris', 'Credo che tu abbia capito male', 'Acho que você me entendeu mal'],
          ['No fue mi intención', 'It was not my intention', 'Das war nicht meine Absicht', 'Wǒ bú shì gùyì de', '我不是故意的', "Ce n'était pas mon intention", 'Non era mia intenzione', 'Não foi minha intenção'],
          ['Hablemos con calma', 'Let us talk calmly', 'Reden wir in Ruhe', 'Wǒmen hǎohǎo tán tan', '我们好好谈谈', 'Parlons calmement', 'Parliamo con calma', 'Vamos conversar com calma'],
          ['Tienes razón', 'You are right', 'Du hast recht', 'Nǐ shuō de duì', '你说得对', 'Tu as raison', 'Hai ragione', 'Você tem razão']
        ]
      },
      {
        titulo: 'Contar novedades',
        descripcion: 'Comparte noticias personales',
        uso: 'Sirven para ponerte al día con alguien.',
        frases: [
          ['¿Sabes qué me pasó?', 'Do you know what happened to me?', 'Weißt du, was mir passiert ist?', 'Nǐ zhīdào wǒ fāshēng le shénme ma?', '你知道我发生了什么吗？', "Tu sais ce qui m'est arrivé ?", 'Sai cosa mi è successo?', 'Sabe o que aconteceu comigo?'],
          ['Me mudé el mes pasado', 'I moved last month', 'Ich bin letzten Monat umgezogen', 'Wǒ shàng gè yuè bān jiā le', '我上个月搬家了', "J'ai déménagé le mois dernier", 'Mi sono trasferito il mese scorso', 'Eu me mudei no mês passado'],
          ['Conseguí un trabajo nuevo', 'I got a new job', 'Ich habe eine neue Arbeit bekommen', 'Wǒ zhǎo dào le xīn gōngzuò', '我找到了新工作', "J'ai trouvé un nouveau travail", 'Ho trovato un nuovo lavoro', 'Consegui um emprego novo'],
          ['Mi hermana se casó', 'My sister got married', 'Meine Schwester hat geheiratet', 'Wǒ jiějie jiéhūn le', '我姐姐结婚了', "Ma sœur s'est mariée", 'Mia sorella si è sposata', 'Minha irmã se casou'],
          ['Hace mucho que no nos vemos', 'We have not seen each other for a long time', 'Wir haben uns lange nicht gesehen', 'Wǒmen hǎojiǔ méi jiàn le', '我们好久没见了', 'Ça fait longtemps qu\'on ne s\'est pas vus', 'È da tanto che non ci vediamo', 'Faz tempo que não nos vemos'],
          ['Me alegra mucho saberlo', 'I am very glad to hear that', 'Das freut mich sehr', 'Tīngdào zhège wǒ hěn gāoxìng', '听到这个我很高兴', 'Je suis très content de le savoir', 'Sono molto contento di saperlo', 'Fico muito feliz em saber']
        ]
      }
    ]
  }
]);


/* ---------------------------------------------------------------------
   2. CÓMO SE LEE CADA COLUMNA
   --------------------------------------------------------------------- */

// Posición de cada idioma dentro de una frase. El chino usa dos columnas.
const COLUMNA_IDIOMA = Object.freeze({ ingles: 1, aleman: 2, chino: 3, frances: 5, italiano: 6, portugues: 7 });

// Texto de una frase en el idioma del curso. El chino muestra pinyin y caracteres.
const fraseEnIdioma = (frase, cursoId) => {
  const columna = COLUMNA_IDIOMA[cursoId];
  return cursoId === 'chino' ? `${frase[columna]} (${frase[columna + 1]})` : frase[columna];
};

const marcarIdioma = (texto, curso) => `<span lang="${curso.codigoIdioma}">${texto}</span>`;

// Devuelve tres opciones con la correcta en un lugar distinto según el ejercicio.
const armarOpciones = (correcta, otras, indice) => {
  const opciones = [
    { texto: correcta, correcta: true },
    { texto: otras[0], correcta: false },
    { texto: otras[1], correcta: false }
  ];
  const giro = indice % opciones.length;
  return [...opciones.slice(giro), ...opciones.slice(0, giro)];
};

// Toma dos elementos distintos del que se está preguntando.
const elegirOtras = (lista, indice) => {
  const distintas = [...new Set(lista)].filter((valor) => valor !== lista[indice]);
  const inicio = indice % distintas.length;
  return [distintas[inicio], distintas[(inicio + 1) % distintas.length]];
};


/* ---------------------------------------------------------------------
   3. EJERCICIOS
   Se alternan traducir, reconocer y completar para que la lección varíe.
   --------------------------------------------------------------------- */

const ejercicioTraducir = (frases, indice, curso) => {
  const textos = frases.map((frase) => marcarIdioma(fraseEnIdioma(frase, curso.id), curso));
  return {
    titulo: 'Traduce la frase',
    consigna: 'Selecciona la traducción correcta.',
    pregunta: `¿Cómo se dice «${frases[indice][0]}»?`,
    opciones: armarOpciones(textos[indice], elegirOtras(textos, indice), indice),
    acierto: `¡Correcto! ${textos[indice]} significa «${frases[indice][0]}».`,
    error: `Todavía no. «${frases[indice][0]}» se dice ${textos[indice]}. Puedes elegir otra opción.`
  };
};

const ejercicioReconocer = (frases, indice, curso) => {
  const texto = marcarIdioma(fraseEnIdioma(frases[indice], curso.id), curso);
  const significados = frases.map((frase) => frase[0]);
  return {
    titulo: '¿Qué significa?',
    consigna: 'Elige el significado en español.',
    pregunta: texto,
    opciones: armarOpciones(significados[indice], elegirOtras(significados, indice), indice),
    acierto: `¡Correcto! ${texto} significa «${significados[indice]}».`,
    error: `Todavía no. ${texto} significa «${significados[indice]}». Puedes elegir otra opción.`
  };
};

// Palabra más larga de la frase, sin contar la primera para no perder la mayúscula.
const palabraParaCompletar = (texto) => {
  const palabras = texto.replace(/[¿?¡!.,]/g, ' ').split(/\s+/).filter(Boolean);
  return palabras.slice(1).reduce((mayor, palabra) => (palabra.length > mayor.length ? palabra : mayor), '');
};

const ejercicioCompletar = (frases, indice, curso) => {
  const textos = frases.map((frase) => frase[COLUMNA_IDIOMA[curso.id]]);
  const palabras = textos.map(palabraParaCompletar);
  if (curso.id === 'chino' || palabras[indice] === '' || new Set(palabras.filter(Boolean)).size < 3) {
    return ejercicioLeer(frases, indice, curso);
  }
  const completa = marcarIdioma(textos[indice], curso);
  const validas = palabras.map((palabra) => (palabra === '' ? palabras[indice] : palabra));
  return {
    titulo: 'Completa la frase',
    consigna: `Elige la palabra que falta para decir «${frases[indice][0]}».`,
    pregunta: marcarIdioma(textos[indice].replace(palabras[indice], '___'), curso),
    opciones: armarOpciones(marcarIdioma(palabras[indice], curso), elegirOtras(validas, indice).map((palabra) => marcarIdioma(palabra, curso)), indice),
    acierto: `¡Correcto! ${completa} significa «${frases[indice][0]}».`,
    error: `Todavía no. La frase completa es ${completa}. Puedes elegir otra opción.`
  };
};

// Variante de completar: reconoce la frase sin ayuda de la traducción.
const ejercicioLeer = (frases, indice, curso) => {
  const columna = COLUMNA_IDIOMA[curso.id];
  const lecturas = frases.map((frase) => marcarIdioma(frase[columna], curso));
  const pregunta = curso.id === 'chino' ? marcarIdioma(frases[indice][columna + 1], curso) : `Situación: «${frases[indice][0]}»`;
  return {
    titulo: curso.id === 'chino' ? 'Lee los caracteres' : 'Elige la frase',
    consigna: curso.id === 'chino' ? 'Selecciona el pinyin que corresponde.' : 'Selecciona la frase adecuada.',
    pregunta,
    opciones: armarOpciones(lecturas[indice], elegirOtras(lecturas, indice), indice),
    acierto: `¡Correcto! ${marcarIdioma(fraseEnIdioma(frases[indice], curso.id), curso)} significa «${frases[indice][0]}».`,
    error: `Todavía no. La opción correcta es ${lecturas[indice]}. Puedes elegir otra opción.`
  };
};

const TIPOS_DE_EJERCICIO = [ejercicioTraducir, ejercicioReconocer, ejercicioCompletar];


/* ---------------------------------------------------------------------
   4. LECCIONES Y UNIDADES
   --------------------------------------------------------------------- */

const armarTeoria = (leccion, curso, claseEjemplo) => ({
  titulo: `Aprende: ${leccion.titulo.toLowerCase()}`,
  html: `<p>${leccion.uso}</p>${leccion.frases.map((frase) =>
    `<p class="${claseEjemplo}">${marcarIdioma(fraseEnIdioma(frase, curso.id), curso)} <span>→ ${frase[0]}</span></p>`).join('')}`
});

const armarLeccionTematica = (leccion, curso, claseEjemplo) => ({
  titulo: leccion.titulo,
  descripcion: leccion.descripcion,
  consejo: `${marcarIdioma(fraseEnIdioma(leccion.frases[0], curso.id), curso)} significa «${leccion.frases[0][0]}». ${leccion.uso}`,
  teoria: armarTeoria(leccion, curso, claseEjemplo),
  ejercicios: leccion.frases.map((_, indice) => TIPOS_DE_EJERCICIO[indice % TIPOS_DE_EJERCICIO.length](leccion.frases, indice, curso))
});

// Convierte en ejercicios los ejemplos que ya tiene la teoría de una lección.
const ejerciciosDeEjemplos = (leccion) => {
  const ejemplos = [...leccion.teoria.html.matchAll(/(<span lang="[a-z]+">.*?<\/span>) <span>→ (.*?)<\/span>/g)]
    .filter((ejemplo) => !leccion.ejercicios.some((ejercicio) => ejercicio.pregunta === ejemplo[1]));
  const significados = ejemplos.map((ejemplo) => ejemplo[2]);
  if (new Set(significados).size < 3) {
    return [];
  }
  return ejemplos.slice(0, 3).map(([, texto, significado], indice) => ({
    titulo: '¿Qué significa?',
    consigna: 'Elige el significado en español.',
    pregunta: texto,
    opciones: armarOpciones(significado, elegirOtras(significados, indice), indice),
    acierto: `¡Correcto! ${texto} significa «${significado}».`,
    error: `Todavía no. ${texto} significa «${significado}». Puedes elegir otra opción.`
  }));
};

const reforzarLeccion = (leccion) => ({ ...leccion, ejercicios: [...leccion.ejercicios, ...ejerciciosDeEjemplos(leccion)] });

const reforzarUnidad = (unidad) => ({ ...unidad, lecciones: unidad.lecciones.map(reforzarLeccion) });

// Busca la clase de ejemplos que ya usa el curso para mantener su diseño.
const claseDeEjemplos = (curso) => {
  const html = curso.unidades.flatMap((unidad) => unidad.lecciones).map((leccion) => leccion.teoria.html).join('');
  return html.match(/class="(ejemplo-[a-z]+)"/)?.[1] ?? 'ejemplo-idioma';
};

// Última lección de una unidad: mezcla frases de todas sus lecciones.
const repasoDeTema = (tema) => ({
  titulo: `Repaso: ${tema.titulo.toLowerCase()}`,
  descripcion: 'Practica todo lo aprendido en la unidad',
  uso: 'Repasa las frases principales de la unidad antes de seguir.',
  frases: tema.lecciones.flatMap(({ frases }) => [frases[1], frases[3], frases[5]])
});

const unidadesTematicas = (curso, nivelId) => {
  const claseEjemplo = claseDeEjemplos(curso);
  return TEMAS.filter((tema) => tema.nivel === nivelId).map((tema) => ({
    titulo: tema.titulo,
    descripcion: tema.descripcion,
    nivel: tema.nivel,
    lecciones: [...tema.lecciones, repasoDeTema(tema)].map((leccion) => armarLeccionTematica(leccion, curso, claseEjemplo))
  }));
};

// Cierre de los niveles que no tienen un repaso propio en datos.js.
const unidadDeRepaso = (curso, nivel) => ({
  titulo: 'Repaso',
  descripcion: 'Combina lo aprendido en todo el nivel.',
  nivel: nivel.id,
  lecciones: [armarLeccionTematica({
    titulo: `Repaso del nivel ${nivel.nombre}`,
    descripcion: 'Comprueba lo que aprendiste en este nivel',
    uso: 'Este repaso mezcla frases de todas las unidades del nivel.',
    frases: TEMAS.filter((tema) => tema.nivel === nivel.id).flatMap((tema) => tema.lecciones.map(({ frases }) => frases[2]))
  }, curso, claseDeEjemplos(curso))]
});

// Ordena las unidades por nivel. El repaso de un nivel queda siempre como cierre.
const ordenarUnidades = (curso) => curso.niveles.flatMap((nivel) => {
  const propias = curso.unidades.filter((unidad) => unidad.nivel === nivel.id);
  const repaso = propias.filter((unidad) => unidad.titulo === 'Repaso');
  const resto = propias.filter((unidad) => unidad.titulo !== 'Repaso');
  const cierre = repaso.length > 0 ? repaso.map(reforzarUnidad) : [unidadDeRepaso(curso, nivel)];
  return [...resto.map(reforzarUnidad), ...unidadesTematicas(curso, nivel.id), ...cierre];
});

// Numera unidades y lecciones de corrido, en el orden en que se recorren.
const numerarCurso = (unidades) => {
  let numeroLeccion = 0;
  return unidades.map((unidad, indice) => ({
    ...unidad,
    id: indice + 1,
    lecciones: unidad.lecciones.map((leccion) => {
      numeroLeccion += 1;
      return { ...leccion, id: numeroLeccion };
    })
  }));
};

// Suma las unidades temáticas a un curso de datos.js.
const ampliarCurso = (curso) => ({ ...curso, unidades: numerarCurso(ordenarUnidades(curso)) });
