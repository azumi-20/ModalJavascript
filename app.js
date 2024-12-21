let identificador = document.querySelector('.btn')//el boton de inicio
let salir =  document.querySelector('.salir')//el boton de salida
let capa = document.querySelector('.contenido')//la clase de model

identificador.addEventListener('click', (e)=>{
    e.preventDefault();
    capa.classList.toggle('modal1')
})

salir.addEventListener('click', (e)=>{
    e.preventDefault();
    capa.classList.remove('modal1')
})

