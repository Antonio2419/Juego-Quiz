const txtPuntaje = document.querySelector("#puntos");
const nombre= document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");


//asignacion info LOCAL STORAGE

nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");



//recupero el puntaje en caso de ya no jagar
let puntajeTotal = 0;
if(localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// categorias que se juegan
let categoriasJugadas;
//controlo si ya hay algo cargado en el local storage cuando vuelvo
//al juego.html para cargar las categorias ya jugadas
const categoriasJugadasLS = JSON.parse(localStorage.getItem
("categorias-jugadas"));
if(categoriasJugadasLS){
    categoriasJugadas = categoriasJugadasLS;
}
else{
    //comienzo un areglo vacio
    categoriasJugadas = [];
}
console.log(categoriasJugadas);
//agrego un eventlistener a todos los botones de las categorias
function agregarEventListenerOpciones(){
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria=>{
        categoria.addEventListener("click", (e)=>{
            console.log(e.currentTarget.id);
            //ALMACENA LA CATEGORIA ACTUAL EN EL LOCAL STORAGE
            localStorage.setItem("categoria-actual", e.currentTarget.id);
            //agrego of al areglo de categoria
            categoriasJugadas.push(e.currentTarget.id);
            localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas));
            //console.log(categoriasJugadas);
            //envio a la pagina del juego
            location.href = "juego.html";
        });
    });
    //se desabilitan las categorias ya jugadas
    categorias.forEach(categoria =>{
        if(categoriasJugadas.includes(categoria.id)){
            categoria.classList.add("desabilitada");
            categoria.classList.add("no-events");
        }
    })

}
agregarEventListenerOpciones();