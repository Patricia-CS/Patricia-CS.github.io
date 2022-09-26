'use script'
const boton = document.querySelectorAll('li')
const img = document.querySelectorAll('.fondo')
const h2 = document.querySelectorAll('.li__h2')

boton.forEach(function(cadaBoton, i){
    cadaBoton.addEventListener('mouseover', function(){
        img[i].classList.add('ver')
        h2[i].classList.add('azul')
        h2.forEach(function(cadah2, j){
            if(i===j){
                cadah2.classList.remove('transparente')
            }else{
                cadah2.classList.add('transparente')
            }
             
        })
    })
    cadaBoton.addEventListener('mouseout', function(){
        img[i].classList.remove('ver')
        h2[i].classList.remove('azul')
        h2.forEach(function(cadah2, j){
            cadah2.classList.remove('transparente')
        })
    })
})