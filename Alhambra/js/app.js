'use strict'
const fondo = document.querySelectorAll('.intro__img')
const puntitos = document.querySelectorAll('.intro__puntitos')

const hamburguesa = document.querySelector('.hamburguesa')
const menu = document.querySelector('.menu')
const x = document.querySelector('.menu__x svg')
const idioma = document.querySelectorAll('.menu__h5')

const siguiente = document.querySelector('.der')
const anterior = document.querySelector('.izq')
const slider = document.querySelector('.slider__desplazable')

let posicion = 0

// JS del slider header
puntitos.forEach( (cadaPunto, i) =>{
    cadaPunto.addEventListener('click', function(){
        fondo.forEach((cadaFondo, j)=>{
            cadaFondo.classList.remove('ver')
            puntitos[j].classList.remove('ver')
        })
        puntitos[i].classList.add('ver')
        fondo[i].classList.add('ver')
    })  
})

// JS menu desplegable
hamburguesa.addEventListener('click', function(){
    menu.classList.add('ver')
})
x.addEventListener('click', function(){
    menu.classList.remove('ver')
})
idioma.forEach((cadaIdioma, i)=>{
    cadaIdioma.addEventListener('click', function(){
        idioma.forEach( (cadaIdioma, j) =>{
            idioma[j].classList.remove('ver')
            idioma[i].classList.add('ver')
        })
    })
})

// JS Slider
siguiente.addEventListener('click', function(){
    posicion++
    if ( posicion >= 2 ){
        posicion = 1
    }
    slider.style.transform =`translateX(${(posicion * - 50)}%)`
})
anterior.addEventListener('click', function(){
    posicion--
    if ( posicion < 0 ){
        posicion = 0
    }
    slider.style.transform =`translateX(${(posicion * - 50)}%)`
})
