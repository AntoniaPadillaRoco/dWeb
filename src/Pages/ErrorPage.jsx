import React from 'react'
import { Frown } from 'react-feather'

const ErrorPage = () => {
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-3'>
        <Frown  size={60} />
        <h1 className='text-primary fw-bold '>404: NOT FOUND</h1>
        <p>Parece que este enlace está roto, o necesitas iniciar sesión para acceder</p>
    </div>
  )
}

export default ErrorPage