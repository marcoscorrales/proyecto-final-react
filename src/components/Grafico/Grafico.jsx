import React from 'react'
import './Grafico.css'

const Grafico = () => {
  return (
    <div className='grafico'>
        <section className='grafico__cont'>
           <div className='x-box'></div>
            <div className='x-box-cont'>
                <h1>SISTEMA DE COMISIONES</h1>
                <strong className='texto__1'>Diseñadores 80%</strong>
                <strong className='texto__2'>Nuestra Web 15%</strong>
                <strong className='texto__3'>Comisiones bancarias 5%</strong>
            </div> 
        </section>
        
        <div className='texto__comisiones'>
            <p>¿Es usted diseñador y desea <strong>vender sus modelos 3D optimizados para la impresión en 3D</strong>? Gracias a Nuestra Web usted puede <strong>ganar dinero con sus archivos</strong> STL, OBJ, CAD, 3MF, etc.! Por cada descarga, <strong>recibirá el 80% del precio de venta neto</strong> (sin IVA) a través de PayPal. <strong>Nuestra Web se queda con el 20%</strong> de la comisión que se utiliza para financiar las comisiones bancarias (alrededor del 5%) y, a continuación, todos los gastos relacionados con el mantenimiento técnico de la plataforma: alojamiento, ancho de banda, contabilidad, comunicaciones por correo electrónico, traducciones, etc. <strong>No hay un sistema de suscripción ni una tarifa fija que pagar</strong>. ¡Si vendes, ganas!
            </p>
        </div>
    </div>
  )
}

export default Grafico