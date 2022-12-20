import React from 'react'

const Toast = () => {
  return (
    <div className='toast' role='alert' aria-live="assertive" aria-atomic="true">
        <div className='toast-header'>
            <strong className='mr-auto'>Asientos reservados exitosamente!</strong>
            <button type='button' className='ml-2 mb-1 close' data-dismiss='toast' aria-lablel='Close'> <span aria-hidden="true">&times;</span>
</button>
        </div>
        <div className='toast-body'>
            Tus asientos se reservaron correctamente, revísalos en tu perfil
        </div>

    </div>
  )
}

export default Toast