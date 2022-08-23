import axios from 'axios';
import React, { useState } from 'react'
import './UploadProduct.css'

const endpoint= 'http://127.0.0.1:8000/api/modelo'

const UploadProduct = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [archivo, setArchivo] = useState('');

    const handleChange = (file) =>{
        setArchivo(file[0]);
    }
    const handleChange2 = (file) =>{
        setImagen(file[0]);
    }

    const subirProducto = async (e) => {
        e.preventDefault();
        const fData = new FormData();

        fData.append('nombre', nombre);
        fData.append('descripcion', descripcion);
        fData.append('id_creador', JSON.parse(localStorage.getItem('loggedUser')).id);
        fData.append('precio', precio);
        fData.append('categoria', categoria);
        fData.append('archivo', archivo); 
        fData.append('imagen', imagen); 

        if(precio >= 0){
            axios({
                method: "post",
                url: endpoint,
                data: fData,
                headers: { "Content-Type": "multipart/form-data" },
              })
                .then(function (response) {
                  //handle success
                  alert("Modelo subido")
                  console.log(response);
                })
                .catch(function (response) {
                  //handle error
                  alert("Error al subir modelo")
                  console.log(response);
                });
        }else{
            alert("Precio incorrecto");
        }

        

      }

  return (
    <div className='uploadProduct'>
        <h1 className='uploadProduct__title'>Nuevo Modelo</h1>

        <form className='uploadProduct__form' onSubmit={subirProducto}>

        <section className='uploadProduct__info'>
            <div className='uploadProduct__info__field'>
                <label className='uploadProduct__info__label' htmlFor="nombre">Nombre</label><input name='nombre' type="text" required
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
            />
            </div>
            <div className='uploadProduct__info__field'>
                <label className='uploadProduct__info__label' htmlFor="descripcion">Descripción</label><textarea name="Descripcion" id="descripcion" cols="30" rows="10" 
                value={descripcion} required
                onChange={(e)=> setDescripcion(e.target.value)}>
            </textarea>
            </div>
            <div className='uploadProduct__info__field'>
                <label className='uploadProduct__info__label' htmlFor="precio">Precio</label><input type="number" name="precio" min={0} max={999} required  id="precio" 
                value={precio}
            onChange={(e)=> setPrecio(e.target.value)}
            />
            </div>
            <div className='uploadProduct__info__field'>
                <label className='uploadProduct__info__label' htmlFor="nombre">Categoría</label><select name="categoria" id="categoria"
                value={categoria}
            onChange={(e)=> setCategoria(e.target.value)}
            >
                    
                    <option value="arte">Arte</option>
                    <option value="juegos">Juegos</option>
                    <option value="moda">Moda</option>
                    <option value="herramientas">Herramientas</option>
                
                </select>
            </div>
        </section>

        <section className='uploadProduct__files'>
            <div>
                <label className='uploadProduct__files__label' htmlFor="archivo">Archivo (STL Recomendable)</label>
                <input className='form-control' type="file" name="archivo" id="archivo" required onChange={e => handleChange(e.target.files)} />
            </div>
            <div>
                <label className='uploadProduct__files__label' htmlFor="foto">Foto</label>
                <input className='form-control' type="file" name="foto" id="foto" required onChange={e => handleChange2(e.target.files)}/>
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