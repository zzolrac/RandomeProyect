// ===== EDITA ESTO SIN MIEDO (no necesitas saber programar) =====
// Para cambiar el link de pago: pon tu link de Gumroad aquí.
const PRO_LINK = "https://gumroad.com/l/tu-pack-pro"; // <-- cámbialo cuando crees el producto

// Para añadir un generador nuevo: copia un bloque {…} entero, cambia emoji, titulo, desc y lista.
const GENERATORS = [
{
id:"negocios", emoji:"💡", title:"Ideas de negocio", desc:"120 ideas para empezar con poco dinero",
color:"#FFD60A",
affil:'🚀 Crea tu web en 10 min con <a href="https://www.shopify.com/?ref=TU-CODIGO" target="_blank" rel="sponsored nofollow noopener">Shopify</a> <small>(enlace afiliado)</small>',
items:["Tienda de velas personalizadas","Newsletter de ofertas de tu ciudad","Alquiler de consolas retro por finde","Curso de Excel para opositores","Pack de plantillas Notion para autónomos","Servicio de fotos de producto con móvil","Suscripción de desayunos oficina","Reventa de muebles restaurados","Agencia de TikTok para bares","Paseador de perros premium finde","Limpieza de pisos turísticos","Diseño de CVs en 24h","Traducción de menús para restaurantes","Clases de cocina mexicana online","Mantenimiento WordPress 29€/mes","Venta de presets Lightroom","Organizador de trasteros","Community manager para peluquerías","Alquiler de furgoneta por horas","Impresión 3D de llaveros para bodas"]
},
{
id:"comida", emoji:"🍽️", title:"¿Qué como hoy?", desc:"Recetas baratas con lo que tienes",
color:"#0ED1A2",
affil:'🍳 Mis sartenes favoritas en <a href="https://www.amazon.es/?tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">Amazon</a> <small>(afiliado)</small>',
items:["Pasta garlic-chili 15min: ajo, guindilla, parmesano","Tortilla de patata jugosa + ensalada","Arroz frito con huevo y soja","Tacos de pollo con limón","Lentejas exprés 20min","Ensalada César con pollo","Ramen instantáneo mejorado con huevo","Bowl de atún, arroz y aguacate","Quesadillas + pico de gallo","Crema de calabaza + picatostes","Bocadillo de tortilla francesa","Pizza naan con mozzarella","Salmón al horno + patatas","Garbanzos al curry con coco","Tostada de hummus y tomate"]
},
{
id:"fitness", emoji:"🏋️", title:"Reto fitness 10 min", desc:"Rutina random sin material",
color:"#FF5DA2",
affil:'⌚ Mide tu progreso con <a href="https://www.amazon.es/?tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">esta pulsera barata</a> <small>(afiliado)</small>',
items:["30 sentadillas + 20 flexiones + 60s plancha","Tabata: 8 rondas 20s/10s jumping jacks","100 zancadas + 50 mountain climbers","5 min burpees suaves + 5 min estirar","3 rondas: 15 push-ups, 20 sit-ups, 30s plancha","Caminata rápida 10 min + 50 sentadillas","AMRAP 10min: 10 air squats, 10 dips silla","100 jumping jacks + 60s wall-sit x3","Yoga 10min: saludo al sol x5","Escaleras: sube/baja 10 min sin parar"]
},
{
id:"nombres", emoji:"✨", title:"Nombres para negocios", desc:"Para tu tienda, canal o proyecto",
color:"#8EC5FF",
affil:'🌐 Registra el dominio en <a href="https://www.cloudflare.com/" target="_blank" rel="nofollow noopener">Cloudflare</a> antes de que te lo quiten',
items:["LunaLab","TacoTeca","PisoPiloto","Menta&Mango","KioskoClick","BúhoBrillante","RutaRápida","CasaCactus","OndaOlive","PapelPiña","NubeNómada","SalsaSana","VueltaVerde","DadoDorado","ChispaStudio"]
},
{
id:"viajes", emoji:"✈️", title:"¿A dónde viajo barato?", desc:"Escapadas desde España <150€",
color:"#FFB020",
affil:'🏨 Reserva aquí con <a href="https://www.booking.com/?aid=TU-CODIGO" target="_blank" rel="sponsored nofollow noopener">Booking</a> <small>(afiliado)</small>',
items:["Oporto 2 días: bodegas + francesinha","Marrakech exprés: zoco + desierto","Roma lowcost: Trastevere a pie","Lisboa en tren: miradores + fado","París bus nocturno + Louvre gratis 1er domingo","Tánger ferry desde Tarifa","Praga: castillo + cerveza 3€","Bilbao: Guggenheim + pintxos","Granada: Alhambra + tapas","Budapest: balnearios + ruin pubs"]
},
{
id:"habitos", emoji:"🌱", title:"Mini-hábito de hoy", desc:"Mejora 1% sin esfuerzo",
color:"#C6F135",
affil:'📓 Mi cuaderno favorito para hábitos en <a href="https://www.amazon.es/?tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">Amazon</a> <small>(afiliado)</small>',
items:["Bebe 2 vasos de agua al despertar","Ordena 5 min una cajón","Camina 10 min sin móvil","Escribe 3 cosas que agradeces","Lee 5 páginas","Haz la cama nada más levantarte","Llama 2 min a alguien que quieres","Apaga notificaciones 1 hora","Prepara la ropa de mañana","Medita 3 min con temporizador"]
},
{
id:"peliculas", emoji:"🎬", title:"¿Qué película veo hoy?", desc:"Deja de hacer scroll 40 min y dale al play",
color:"#E50914",
affil:'🍿 Prueba <a href="https://www.amazon.es/gp/video/primesignup?tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">Prime Video 30 días gratis</a> <small>(afiliado)</small>',
items:["Maratón Nolan: empieza por Interstellar","Ocho apellidos vascos para reírte","Un lugar tranquilo con palomitas","Dune 2 en pantalla grande","Spider-Verse te volará la cabeza","En busca de la felicidad","Knives Out y juega a adivinar","Jurassic Park nunca falla","La La Land un viernes","John Wick 4 a todo volumen","El estafador de Tinder","Mamma Mia con amigos","El cuerpo te dejará helado","El Señor de los Anillos extendida","Parásitos, obra maestra","Paddington 2, mejor de lo esperado","El hoyo, 90 min tensos","Forrest Gump otra vez","Expediente Warren con luces apagadas","Torrente solo para valientes"]
},
{
id:"libros", emoji:"📚", title:"¿Qué libro leo ahora?", desc:"Sal del bloqueo lector",
color:"#8B5E34",
affil:'Tu próxima lectura en <a href="https://www.amazon.es/b/?node=599364031&tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">libros top Amazon</a> <small>(afiliado)</small>',
items:["Hábitos atómicos si quieres cambiar ya","Padre rico padre pobre para el dinero","El alquimista para motivarte","Cien años de soledad","La sombra del viento","It de Stephen King","Sapiens sin aburrirte","Piensa rápido piensa despacio","El club de las 5am","Los juegos del hambre en un finde","Harry Potter y la piedra filosofal","La paciente silenciosa","El poder de los hábitos","Reina Roja, crimen español","El principito de adulto","Boulevard, arrasa en TikTok","Clean Code si programas","El monje que vendió su Ferrari","La casa de Bernarda Alba","After para desconectar"]
},
{
id:"side-hustle", emoji:"💸", title:"Gana 100€ este finde", desc:"Extra real sin humo",
color:"#00BFA6",
affil:'Organízate con <a href="https://www.amazon.es/s?k=agenda+productividad&tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">esta agenda superventas</a> <small>(afiliado)</small>',
items:["Vende 5 prendas en Vinted hoy","Pasea 3 perros por 10€ cada uno","Fotos de producto a un bar por 50€","Edita 2 Reels para un negocio","Cuida niños el sábado por 40€","Limpia trasteros y vende en Wallapop","Reparte en bici 4h el viernes","Logos exprés en Fiverr por 25€","Clases de inglés online 2h","Vende tu Play con 5 juegos","Limpieza Airbnb de tu zona","Traduce un menú turístico","Monta muebles IKEA por 30€","Vende plantillas CV en Etsy","Graba voces para YouTube","Revende zapatillas nuevas","Fotos LinkedIn con móvil por 15€","Cocina tuppers para 3 vecinos","Lava coches a domicilio domingo","Alquila tu cámara o bici"]
},
{
id:"citas", emoji:"❤️", title:"Idea de cita perfecta", desc:"Planes baratos que impresionan",
color:"#FF4D6D",
affil:'Ambiente con <a href="https://www.amazon.es/s?k=velas+aromaticas+romanticas&tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">velas románticas top</a> <small>(afiliado)</small>',
items:["Picnic al atardecer con vino barato","Museos gratis primer domingo","Ruta de tapas reto 5€ por bar","Cine al aire libre con manta","Mirador secreto + playlist","Sushi casero juntos","Paseo en bici + helado","Juegos de mesa + chocolate","Mercado vintage reto regalo 10€","Atardecer playa con bocatas","Salsa de YouTube en casa","Stargazing fuera ciudad","Tour librerías segunda mano","Karaoke cutre un jueves","Escape room entre semana","Fotos tontas de turista","Churros domingo 8am","Preguntas incómodas + vino","Patinaje aunque os caigáis","Voluntariado en protectora"]
},
{
id:"nombres-bebe", emoji:"👶", title:"Nombres bebé + nicks", desc:"Originales para bebé y gamer",
color:"#7C4DFF",
affil:'Guarda ideas en <a href="https://www.amazon.es/s?k=libro+nombres+bebe&tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">libro de nombres top</a> <small>(afiliado)</small>',
items:["Liam Vega, corto y fuerte","Aitana Luz, protagonista","Enzo León, energía total","Mía Valentina con carácter","Thiago Rex que impone","Luna Nova bebé o gamer","Hugo Ferox para shooters","Olivia Moon memorable","Izan Volt veloz","Emma Quinn fácil","Noah Kraken épico","Alma Pixel friki","Dante Zero villano total","Sofía Blaze brilla","Leo Phantom sigiloso","Valeria Storm imparable","Kai Shadow letal FPS","Julia Nebula cósmica","Gael Toxic con estilo","Lucía Frost fría ranked"]
},
{
id:"recetas-fit", emoji:"🥗", title:"Receta fit 15 min", desc:"Sano sin cocinar 1 hora",
color:"#43A047",
affil:'Más rápido con <a href="https://www.amazon.es/s?k=freidora+aire+oferta&tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">freidora aire en oferta</a> <small>(afiliado)</small>',
items:["Bowl pollo arroz y aguacate","Tortilla claras con espinacas","Wraps atún con yogur griego","Ensalada garbanzos atún huevo","Tostada hummus tomate","Pasta integral pollo pesto light","Gambas con calabacín y soja","Yogur griego avena arándanos","Tacos lechuga pavo","Revuelto tofu cúrcuma","Salmón plancha brócoli limón","Batido plátano crema cacahuete","Quinoa express huevo poché","Pechuga mostaza ensalada","Poke atún edamame mango","Crepes avena fresas","Merluza micro patata","Ensalada caprese pollo","Overnight oats cacao chía","Calabaza rellena atún"]
},
{
id:"ideas-contenido", emoji:"🎥", title:"Qué publico hoy", desc:"30 días TikTok / IG",
color:"#FF0050",
affil:'Edita como pro con <a href="https://www.canva.com/" target="_blank" rel="sponsored nofollow noopener">Canva Pro gratis</a>',
items:["3 errores que cometiste al empezar","Tu rutina real sin filtros","Tour de tu nevera honesto","Responde el hate con humor","Compra Mercadona por 20€","Cuánto ganas sin vergüenza","Antes/después limpiar cuarto","Prueba receta viral y puntúa","3 apps que usas cada día","Tu historia en 60 segundos","Ranking de tus series","POV: tu jefe un domingo","Qué hay en tu mochila","Reto 7 días 2L agua","Reacciona a tu primer vídeo","Explica tema difícil en 30s","Haul segunda mano Humana","Setup trabajo <100€","Un secreto de tu trabajo","Seguidores eligen tu cena"]
},
{
id:"rompehielos", emoji:"💼", title:"Excusas y rompehielos", desc:"Salva reuniones con humor",
color:"#FF9800",
affil:'Mejora tu home office con <a href="https://www.amazon.es/s?k=auriculares+reuniones&tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">auriculares teletrabajo</a> <small>(afiliado)</small>',
items:["Mi cámara no va, timidez tecnológica","Estaba en mute reflexionando","Mi gato pidió la palabra","Se cayó el wifi como mis ganas de lunes","¿Si fueras un meme cuál serías?","Vuestro peor fail con micro abierto","¿Qué superpoder para los lunes?","Asentí tan fuerte que congelé","Buscaba el botón de subir sueldo","Mi perro se comió el informe","¿Pizza con o sin piña? Votemos","Qué desayunaste estilo MasterChef","¿Si esto fuera serie, comedia o terror?","Apuntes mentales, muy mentales","Mi hijo puso fondo Peppa Pig","¿Canción para antes de reunión dura?","Luché con la impresora y perdí","Truco para no dormir en Zoom","Fingí corte para no responder","¿A qué famoso invitarías?"]
},
{
id:"regalos", emoji:"🎁", title:"¿Qué regalo compro?", desc:"Acierta según presupuesto",
color:"#D81B60",
affil:'El regalo perfecto en <a href="https://www.amazon.es/s?k=ideas+regalos+originales&tag=TU-TAG-21" target="_blank" rel="sponsored nofollow noopener">ideas regalo Amazon</a> <small>(afiliado)</small>',
items:["Taza personalizada <15€","Vela Yankee pequeña","Libro dedicado con nota","Calcetines de su serie","Llavero grabado con fecha","Kit cervezas artesanas 25€","Auriculares Bluetooth básicos","Manta Netflix 30€","Lego Architecture pequeño","Caja Lindt nunca falla","Pulsera acero 20€","Altavoz Bluetooth <40€","Spa para dos en oferta","Echo Dot de oferta","Sudadera frase interna","Set skincare coreano viral","Foto estilo polaroid","Bono cena 50€","Freidora mini si vive solo","Finde Lisboa Ryanair"]
}
];
