import React from 'react'
import { Instagram, Youtube } from 'react-feather'

const Footer = () => {
  return (
    <div className='w-100 p-5 h-100 ' style={{backgroundColor:'#9b5de5'}}>
        <div className='w-100 d-flex h-100 justify-content-evenly align-items-center'>
          <div>

          <p className='text-white'>Todos los derechos son parte de <strong> TicketerasParrilla.</strong> Enterate de mas en nuestras redes sociales! 
          </p>
          </div>
          <div className='d-flex gap-3 align-items-center'>
          <Instagram size={40} color='white'/>
          <Youtube size={45} color='white'/>
        </div>
        </div>
    </div>
  )
}

export default Footer