'use strict'
// Portada
const boton = document.querySelectorAll('.botones__contenedor')
const texto = document.querySelectorAll('.mitad__texto')
const texto__contenedor = document.querySelector('.textos')
const img__contenedor = document.querySelector('.mitad__img')
const img = document.querySelectorAll('.mitad__img img')

// Menu desplegable
const botones = document.querySelectorAll('.botones') 
const listas = document.querySelectorAll('.lista')
const btnMueble = document.querySelector('.unico')
const sofa = document.querySelector('.mitad.__acordeon img')

const X = document.querySelector('.menu__x')
const velo = document.querySelector('.velo')
const desplazable = document.querySelector('.desplazable')
const mater = document.querySelector('.wrapper__menu h1')


// Portada
boton.forEach((cadaBoton, i) =>{
    
    cadaBoton.addEventListener('click', ()=>{
        
        texto__contenedor.style.transform = `translateY(${i*-50}%)`
        img__contenedor.style.transform = `translateY(${i*-50}%)` 

        boton.forEach((cadaBoton, i)=>{
            cadaBoton.classList.remove('resaltar')
        })
        boton[i].classList.add('resaltar')
        
        texto.forEach((cadaTexto, j)=>{
            cadaTexto.classList.remove('mostrar')
        })
        texto[i].classList.add('mostrar')

        img.forEach((cadaImg, i)=>{
            cadaImg.classList.remove('mostrar')
        })
        img[i].classList.add('mostrar')
    })
})

// Menu desplegable

X.addEventListener('click', ()=>{
    X.classList.toggle('activar')

    velo.classList.toggle('mostrar')

    desplazable.classList.toggle('mostrar')
    
    setTimeout( ()=>{
        mater.classList.toggle('blanco')
    },500)
})

botones.forEach((cadaBoton, i)=>{
    cadaBoton.addEventListener('mouseover', ()=>{
        listas[i].classList.add('mostrar')
    })
    cadaBoton.addEventListener('mouseout', ()=>{
        listas.forEach((cadaLista, i)=>{
            cadaLista.classList.remove('mostrar')
        })
    })
})

btnMueble.addEventListener('mouseover', ()=>{
    sofa.classList.add('mostrar')
})
btnMueble.addEventListener('mouseout', ()=>{
    sofa.classList.remove('mostrar')
})

