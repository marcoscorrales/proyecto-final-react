import React from 'react'
import './UploadProduct.css'

const UploadProduct = () => {
  return (
    <div className='uploadProduct'>
        <h1 className='uploadProduct__title'>Nuevo Modelo</h1>

        <form className='uploadProduct__form' action="#">

        <section className='uploadProduct__info'>
            <div className='uploadProduct__info__field'>
                <label className='uploadProduct__info__label' htmlFor="nombre">Nombre</label><input name='nombre' type="text"/>
            </div>
            <div className='uploadProduct__info__field'>
                <label className='uploadProduct__info__label' htmlFor="descripcion">Descripción</label><textarea name="Descripcion" id="descripcion" cols="30" rows="10"></textarea>
            </div>
            <div className='uploadProduct__info__field'>
                <label className='uploadProduct__info__label' htmlFor="nombre">Precio</label><input type="number" name="precio" id="precio" />
            </div>
            <div className='uploadProduct__info__field'>
                <label className='uploadProduct__info__label' htmlFor="nombre">Categoría</label><select name="categoria" id="categoria"><option value="1">Categoria1</option></select>
            </div>
        </section>

        <section className='uploadProduct__files'>
            <div>
                <label className='uploadProduct__files__label' htmlFor="nombre">Archivo</label>
                <input className='form-control' type="file" name="archivo" id="archivo" />
            </div>
            <div>
                <label className='uploadProduct__files__label' htmlFor="nombre">Foto</label>
                <input className='form-control' type="file" name="foto" id="foto" />
            </div>
            <div>
                <input className='files__button' type="submit" value="Enviar" />
            </div>

        </section>

        </form>

    </div>
  )
}

export default UploadProduct