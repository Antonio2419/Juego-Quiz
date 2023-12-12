const nombre = document.querySelector("#nombre")
const btnComenzar = document.querySelector("#comenzar")

btnComenzar.addEventListener("click", ()=>{
    // reseteo de valores 
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total",0)
    //eliminadel local storage
    localStorage.removeItem("categorias-jugadas")


    //lo dirijo al menu
    location.href = "menu.html"
})
