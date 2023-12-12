//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"general",
        titulo:"¿Cuál es el planeta más grande de nuestro sistema solar?",
        opcionA:"Tierra",
        opcionB:"Marte",
        opcionC:"Jupiter",
        opcionD:"Saturno",
        correcta:"c"
    },
    {
        id:2,
        categoria:"general",
        titulo:"¿Cuándo acabó la II Guerra Mundial?",
        opcionA:"1945",
        opcionB:"1845",
        opcionC:"1935",
        opcionD:"1955",
        correcta:"a"
    },
    {
        id:3,
        categoria:"general",
        titulo:"¿En qué país se uso la primera bomba atómica?",
        opcionA:"China",
        opcionB:"Japón",
        opcionC:"Alemania",
        opcionD:"Corea",
        correcta:"b"
    },
    {
        id:4,
        categoria:"general",
        titulo:"¿Cuántas veces ha estado un hombre en la Luna?",
        opcionA:"OCho",
        opcionB:"Nueve",
        opcionC:"Cinco",
        opcionD:"Seis",
        correcta:"d"
    },
    {
        id:5,
        categoria:"general",
        titulo:"¿En que año cayó el muro de Berlín?",
        opcionA:"1973",
        opcionB:"1989",
        opcionC:"1998",
        opcionD:"1986",
        correcta:"b"
    },
    {
        id:6,
        categoria:"general",
        titulo:"¿En que año llegó Cristobal Colón a América?",
        opcionA:"1492",
        opcionB:"1592",
        opcionC:"1482",
        opcionD:"1544",
        correcta:"a"
    },
    {
        id:7,
        categoria:"general",
        titulo:"¿En qué país nació Adolf Hitler?",
        opcionA:"Alemania",
        opcionB:"Croacia",
        opcionC:"Austria",
        opcionD:"Hungría",
        correcta:"c"
    },
    {
        id:8,
        categoria:"general",
        titulo:"¿En qué año se hundió el Titanic?",
        opcionA:"1912",
        opcionB:"1922",
        opcionC:"1913",
        opcionD:"1911",
        correcta:"a"
    },
    {
        id:9,
        categoria:"general",
        titulo:"¿Cuál fue la última dinasía en China?",
        opcionA:"Dinastía Ming",
        opcionB:"Dinastía Xia",
        opcionC:"Dinastía Shang",
        opcionD:"Dinastía Qing",
        correcta:"d"
    },
    {
        id:10,
        categoria:"general",
        titulo:"¿Cuál es el  país más visitado del mundo?",
        opcionA:"España",
        opcionB:"Francia",
        opcionC:"Alemania",
        opcionD:"Italia",
        correcta:"b"
    },
    {
        id: 11,
        categoria: "deportes",
        titulo: "¿Quién es el maximo goleador de la historia del fútbol?",
        opcionA: "Leonel Messi",
        opcionB: "Cristiano Ronaldo",
        opcionC: "Josef Bican",
        opcionD: "Pele",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "deportes",
        titulo: "¿Quién es el futbolista con más Balones de Oro?",
        opcionA: "Leonel Messi",
        opcionB: "Cristiano Ronaldo",
        opcionC: "MIchel Platini",
        opcionD: "Johan Cruyff",
        correcta: "a"
    },
    {
        id: 13,
        categoria: "deportes",
        titulo: "¿Qué Selección ha ganado más Mundiales de fútbol?",
        opcionA: "Alemania",
        opcionB: "Argentina",
        opcionC: "Brasil",
        opcionD: "Francia",
        correcta: "c"
    },
    {
        id: 14,
        categoria: "deportes",
        titulo: "¿En qué equipo jugó Michael Jordan la mayor parte de su carrera?",
        opcionA: "North Carolina Tar Heels",
        opcionB: "Detroit. Pistons",
        opcionC: "Washington Wizards",
        opcionD: "Chicago Bulls",
        correcta: "d"
    },
    {
        id: 15,
        categoria: "deportes",
        titulo: "¿Quién fue el número 1 de tenis en 2008?",
        opcionA: "Roger federer",
        opcionB: "Rafael Nadal",
        opcionC: "Andy Murray",
        opcionD: "NOvak Djokovic",
        correcta: "b"
    },
    {
        id: 16,
        categoria: "deportes",
        titulo: "¿Cuántos campeonatos gano Michael Jordan con los Chicago Bulls?",
        opcionA: "Seis",
        opcionB: "Cinco",
        opcionC: "Ocho",
        opcionD: "Cuatro",
        correcta: "a"
    },
    {
        id: 17,
        categoria: "deportes",
        titulo: "¿Equipos de fútbol con más títulos en España en la historia?",
        opcionA: "Real Madrid",
        opcionB: "Atletico de Madrid",
        opcionC: "Barcelona",
        opcionD: "Athletic Club",
        correcta: "c"
    },
    {
        id: 18,
        categoria: "deportes",
        titulo: "¿Equipos más ganadores de la Liga MX?",
        opcionA: "América",
        opcionB: "Chivas",
        opcionC: "Cruz azul",
        opcionD: "Pumas",
        correcta: "a"
    },
    {
        id: 19,
        categoria: "deportes",
        titulo: "¿Cuántas compas del Mundo a ganado Italia",
        opcionA: "3",
        opcionB: "5",
        opcionC: "6",
        opcionD: "4",
        correcta: "d"
    },
    {
        id: 20,
        categoria: "deportes",
        titulo: "¿Deportista con más Medallas Olímpicas?",
        opcionA: "Larisa Latynina",
        opcionB: "Michael Phelps",
        opcionC: "Boris Shakhlin",
        opcionD: "Nikolai Adrianov",
        correcta: "b"
    },
    {
        id: 21,
        categoria: "juegos",
        titulo: "¿Cuál es el fontanero más famoso en el mundo de los videojuegos?",
        opcionA: "Sonic",
        opcionB: "Link",
        opcionC: "Mario",
        opcionD: "Master Chief",
        correcta: "c"
    },
    {
        id: 22,
        categoria: "juegos",
        titulo: "¿En qué videojuego un gorila tira barriles por las escaleras?",
        opcionA: "Donkey Kong",
        opcionB: "Pong",
        opcionC: "Pac Man",
        opcionD: "King Kong",
        correcta: "a"
    },
    {
        id: 23,
        categoria: "juegos",
        titulo: "¿Cómo se llama el mundo de Super Mario?",
        opcionA: "The Tree Kingdom",
        opcionB: "The Mushroom Kingdom",
        opcionC: "The Dragonverse",
        opcionD: "The Dinosaur World",
        correcta: "b"
    },
    {
        id: 24,
        categoria: "juegos",
        titulo: "¿Quién es el protagonista del juego 'The Witcher 3: Wild Hunt'?",
        opcionA: "Geralt of Rivia",
        opcionB: "Ezio Auditore",
        opcionC: "Aloy",
        opcionD: "Joel",
        correcta: "a"
    },
    {
        id: 25,
        categoria: "juegos",
        titulo: "¿Cuál es el juego más vendido de todos los tiempos?",
        opcionA: "Minecraft",
        opcionB: "Tetris",
        opcionC: "Grand Theft Auto V",
        opcionD: "Super Mario Bros.",
        correcta: "b"
    },
    {
        id: 26,
        categoria: "juegos",
        titulo: "¿Quién es el personaje de videojuego más famoso de todos los tiempos?",
        opcionA: "Pikachu",
        opcionB: "Superman",
        opcionC: "Mario",
        opcionD: "Sonico",
        correcta: "c"
    },
    {
        id: 27,
        categoria: "juegos",
        titulo: "¿Cuál es el videojuego más caro de todos los tiempos'?",
        opcionA: "GTA 5",
        opcionB: "Pokemon",
        opcionC: "Super Mario",
        opcionD: "Minecraft",
        correcta: "a"
    },
    {
        id: 28,
        categoria: "juegos",
        titulo: "¿Cómo se llama el fantasma naranja del videojuego “Pac-Man”?",
        opcionA: "Mark",
        opcionB: "Daryn",
        opcionC: "Jason",
        opcionD: "CLYDE",
        correcta: "d"
    },
    {
        id: 29,
        categoria: "juegos",
        titulo: "¿ Cuál es el videojuego más vendido de la historia?",
        opcionA: "Game of Thorones",
        opcionB: "Minicraft",
        opcionC: "Super Mario",
        opcionD: "DoTA",
        correcta: "b"
    },
    {
        id: 30,
        categoria: "juegos",
        titulo: "¿Qué empresa trabaja con SONY para la Playstation?",
        opcionA: "Game Freak",
        opcionB: "Corporación PUBG",
        opcionC: "NAMCO",
        opcionD: "Nintendo",
        correcta: "d"
    },
    {
        id:31,
        categoria:"musica",
        titulo:"¿En qué año murió Freddie Mercury?",
        opcionA:"1992",
        opcionB:"1989",
        opcionC:"1991",
        opcionD:"1982",
        correcta:"c"
    },
    {
        id:32,
        categoria:"musica",
        titulo:"¿cuál es el disco  mas vendido de la historia?",
        opcionA:"Thriller, de Michael Jackson",
        opcionB:"Back in black, de AC/DC",
        opcionC:"The dark side of the moon, de Pink Floyd",
        opcionD:"Bat out of hell, de Meat Loaf",
        correcta:"a"
    },
    {
        id:33,
        categoria:"musica",
        titulo:"¿Cantante femenina más escuchada en spotify 2022?",
        opcionA:"Ariana Grande",
        opcionB:"Taylor Swift",
        opcionC:"Adele",
        opcionD:"Dua Lipa",
        correcta:"b"
    },
    {
        id:34,
        categoria:"musica",
        titulo:"¿Cuáles son los premios más importantes de la música?",
        opcionA:"Billboard Awards",
        opcionB:"Premios American Music Awards",
        opcionC:"Premios Grammy",
        opcionD:"Mercury Prize Awards",
        correcta:"c"
    },
    {
        id:35,
        categoria:"musica",
        titulo:"¿Quién cantaba la canción Hey jude?",
        opcionA:"Elvis Presley",
        opcionB:"Jhon lennon",
        opcionC:"The Beach Boys",
        opcionD:"The Beatles",
        correcta:"d"
    },
    {
        id:36,
        categoria:"musica",
        titulo:"¿Grupo de K-pop que debutó con la canción Fraetruck?",
        opcionA:"NCT 127",
        opcionB:"NCT U",
        opcionC:"NCT dream",
        opcionD:"WayV",
        correcta:"a"
    },
    {
        id:37,
        categoria:"musica",
        titulo:"¿Quién cantaba la canción Hotel California?",
        opcionA:"The Eagle",
        opcionB:"queen",
        opcionC:"The Beach Boys",
        opcionD:"bob dylam",
        correcta:"a"
    },
    {
        id:38,
        categoria:"musica",
        titulo:"¿Cuántos integrantes tiene la banda BTS?",
        opcionA:"Cinco",
        opcionB:"Nueve",
        opcionC:"Siete",
        opcionD:"Dies",
        correcta:"c"
    },
    {
        id:39,
        categoria:"musica",
        titulo:"¿Quién cantaba la canción Gasolina?",
        opcionA:"Romeo Santos",
        opcionB:"Maluna",
        opcionC:"faruko",
        opcionD:"De Daddy Yankee",
        correcta:"d"
    },
    {
        id:40,
        categoria:"musica",
        titulo:"¿En que año murio George Michael?",
        opcionA:"2015",
        opcionB:"2016",
        opcionC:"2000",
        opcionD:"2005",
        correcta:"b"
    },
    {
        id:41,
        categoria:"peliculas",
        titulo:"¿Porque pelicula ganó leonardo DiCapio su primer Óscar?",
        opcionA:"Atrapame si puedes",
        opcionB:"El Lobo de wall Street",
        opcionC:"El renacido",
        opcionD:"El aviador",
        correcta:"c"
    },
    {
        id:42,
        categoria:"peliculas",
        titulo:"¿Pelicula más taquillera de la historia?",
        opcionA:"Titanic",
        opcionB:"Star Wars",
        opcionC:"Vengadores",
        opcionD:"Avatar",
        correcta:"d"
    },
    {
        id:43,
        categoria:"peliculas",
        titulo:"¿Primera  Pelicula de Disney?",
        opcionA:"Blanca Nieves y los 7 Enanos",
        opcionB:"la Sirenita",
        opcionC:"La Cenicienta",
        opcionD:"La Bella y La Bestia",
        correcta:"a"
    },
    {
        id:44,
        categoria:"peliculas",
        titulo:"¿Cuántas peliculas de Harry potter se an hecho?",
        opcionA:"Cinco",
        opcionB:"Nueve",
        opcionC:"Ocho",
        opcionD:"Siete",
        correcta:"c"
    },
    {
        id:45,
        categoria:"peliculas",
        titulo:"¿quién es el enemigo más faso de Batman?",
        opcionA:"El pingüino",
        opcionB:"Joker",
        opcionC:"Harley Quinn",
        opcionD:"Bane",
        correcta:"b"
    },
    {
        id:46,
        categoria:"peliculas",
        titulo:"¿Quien interpretó a Hermione Granger en Harry Potter?",
        opcionA:"Emma Watson",
        opcionB:"Evanna Lynch",
        opcionC:"Bonnie Wright",
        opcionD:"Helena Bonham",
        correcta:"a"
    },
    {
        id:47,
        categoria:"peliculas",
        titulo:"¿Cuál es la seie de Netflix mas vista en 2020?",
        opcionA:"elite",
        opcionB:"Desplazados",
        opcionC:"Las Chicas del Cable",
        opcionD:"La Casa de papel",
        correcta:"d"
    },
    {
        id:48,
        categoria:"peliculas",
        titulo:"¿cuál es la Pelicula con más Óscar de la historia?",
        opcionA:"Amadeus",
        opcionB:"Gandhi",
        opcionC:"Titanic",
        opcionD:"El pasiente Ingles",
        correcta:"c"
    },
    {
        id:49,
        categoria:"peliculas",
        titulo:"¿Los actores mas nominados de la historia?",
        opcionA:"Jack Nicholson",
        opcionB:"Laurence Olivier",
        opcionC:"Spencer Tracy",
        opcionD:"Al Pacino",
        correcta:"a"
    },
    {
        id: 50,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de Pixar sobre emociones que viven en la mente de una niña?",
        opcionA: "Inside Out",
        opcionB: "Finding Nemo",
        opcionC: "Up",
        opcionD: "Ratatouille",
        correcta: "a"
    },
    {
        id: 51,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes lenguajes de programación es de tipado fuerte?",
        opcionA: "JavaScript",
        opcionB: "Python",
        opcionC: "C++",
        opcionD: "Java",
        correcta: "c"
    },
    {
        id: 52,
        categoria: "programacion",
        titulo: "¿Qué significa HTML en el contexto de desarrollo web?",
        opcionA: "HyperText Markup Language",
        opcionB: "High-Level Text Management Language",
        opcionC: "HyperTransfer Markup Language",
        opcionD: "High-Level Transfer Management Language",
        correcta: "a"
    },
    {
        id: 53,
        categoria: "programacion",
        titulo: "¿Cuándo se utilizó por primera vez la palabra Ordenador?",
        opcionA: "1713",
        opcionB: "1613",
        opcionC: "1815",
        opcionD: "1913",
        correcta: "b"
    },
    {
        id: 54,
        categoria: "programacion",
        titulo: "¿En que año se creo Java?",
        opcionA: "1993",
        opcionB: "1982",
        opcionC: "1975",
        opcionD: "1995",
        correcta: "d"
    },
    {
        id: 55,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes no es un sistema de gestión de bases de datos?",
        opcionA: "MySQL",
        opcionB: "MongoDB",
        opcionC: "Express",
        opcionD: "SQLite",
        correcta: "c"
    },
    {
        id: 56,
        categoria: "programacion",
        titulo: "¿En que Año fue creado el lenguaje C?",
        opcionA: "1972",
        opcionB: "1970",
        opcionC: "1976",
        opcionD: "1980",
        correcta: "a"
    },
    {
        id: 57,
        categoria: "programacion",
        titulo: "¿Quién Dineño eel lenguaje C?",
        opcionA: "Steve Jobs",
        opcionB: "Linus Torvalds",
        opcionC: "Ken Thomp",
        opcionD: "Dennis M Ritchie",
        correcta: "d"
    },
    {
        id: 58,
        categoria: "programacion",
        titulo: "¿Cuál es el propósito principal de CSS en desarrollo web?",
        opcionA: "Manejar la lógica del lado del servidor",
        opcionB: "Estilizar la presentación de las páginas web",
        opcionC: "Gestionar la interactividad del usuario",
        opcionD: "Definir las rutas de la aplicación",
        correcta: "b"
    },
    {
        id: 59,
        categoria: "programacion",
        titulo: "¿Qué es un bucle 'for' en la programación?",
        opcionA: "Un tipo de dato",
        opcionB: "Una estructura condicional",
        opcionC: "Una función",
        opcionD: "Una estructura de control de flujo que se repite",
        correcta: "d"
    },
    {
        id: 60,
        categoria: "programacion",
        titulo: "¿Qué es Sass?",
        opcionA: "Un procesador de Java",
        opcionB: "Un procesador de html",
        opcionC: "Un procesador de CSS",
        opcionD: "Un procesador de python",
        correcta: "c"
    }
]

const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

const categoriaActual = localStorage.getItem("categoria-actual");
//console.log(categoriaActual);
//preguntas del temario extraigo
const preguntasCategoria = preguntas.filter(pregunta => pregunta.
    categoria === categoriaActual);
    //console.log(preguntasCategoria);

 //cargo los elementos de html
function cargarSuiguientePregunta(num){
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;

    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML= preguntasCategoria[num].opcionA;
    opcionB.innerHTML= preguntasCategoria[num].opcionB;
    opcionC.innerHTML= preguntasCategoria[num].opcionC;
    opcionD.innerHTML= preguntasCategoria[num].opcionD;


   // agregar un eventslistener a cada boton de respuesta
   const botonesRespuesta = document.querySelectorAll(".opcion"); 
   
   botonesRespuesta.forEach(opcion=>{
    opcion.removeEventListener("click", (e)=>{});
    opcion.classList.remove("correcta");
    opcion.classList.remove("incorrecta");
    opcion.classList.remove("no-events");
   });

   //funcion que maneja caca clip de los botones
   botonesRespuesta.forEach(opcion=>{
     opcion.addEventListener("click", agregarEventListenerBoton);
   });
   txtPregunta.classList.remove("efecto");
 
}   

cargarSuiguientePregunta(numPreguntaActual);


function agregarEventListenerBoton(e){
   //console.log(e.currentTarget.id)

   //controlo si la respuesta s correcta
  if(e.currentTarget.id===preguntasCategoria[numPreguntaActual].correcta){
       e.currentTarget.classList.add("correcta");
       puntajeTotal = puntajeTotal + 10;
       txtPuntaje.innerHTML = puntajeTotal;
       localStorage.setItem("puntaje-total", puntajeTotal);
       txtPuntaje.classList.add("efecto");
  }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"
        +preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");  
  }
   //Agrego un eventlistener a cada boton de respuesta
   const botonesRespuesta = document.querySelectorAll(".opcion");
   //Quito los eventListen para que no pueda seguir haciendo clic
  // console.log(botonesRespuesta)
   botonesRespuesta.forEach(opcion=>{
       opcion.classList.add("no-events");
   })
}
 const btnSiguiente = document.querySelector("#siguiente");
 btnSiguiente.addEventListener("click", ()=>{
    numPreguntaActual++;

    if(numPreguntaActual<=9){
        cargarSuiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})
