'use strict'
// Portada
const boton = document.querySelectorAll<HTMLElement>('.botones__contenedor')
const texto = document.querySelectorAll<HTMLElement>('.mitad__texto')
const texto__contenedor = (document.querySelector('.textos') as HTMLElement)
const img__contenedor = (document.querySelector('.mitad__img') as HTMLElement)
const img = document.querySelectorAll<HTMLImageElement>('.mitad__img img')

// Menu desplegable
const botones = document.querySelectorAll<HTMLElement>('.botones') 
const listas = document.querySelectorAll<HTMLElement>('.lista')
const btnMueble = (document.querySelector('.unico') as HTMLElement)
const sofa = (document.querySelector('.mitad.__acordeon img') as HTMLImageElement)

const X = (document.querySelector('.menu__x') as HTMLElement)
const velo = (document.querySelector('.velo') as HTMLElement)
const desplazable = (document.querySelector('.desplazable') as HTMLElement)
const mater = (document.querySelector('.wrapper__menu h1') as HTMLElement)


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

