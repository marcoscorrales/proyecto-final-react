import React from 'react'
import './Category.css'

const Category = () => {
  return (
    <div className='category'>
        <h1 className='category__title'>Categoria</h1>
            <div className='category__cards'>

              <nav class="category__cards__nav">
                <div class="">Ordenar por:</div>
                <a class="">Descargas 
                <span class="">↓</span></a>
                <a class="" >Fecha</a>
                <a class="">Me gusta</a>
              </nav>
                  {/* Crear componente generico para category y populares */}
            </div>
    </div>
  )
}

export default Category