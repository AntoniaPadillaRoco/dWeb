import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ContextProvider, { EventContext } from '../../Context/Context'

const LoginForm = () => {
  const [formState, setFormState] = useState({})
  const {setUserData, userData} = useContext(EventContext)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormState(prevState => ({...prevState, [e.target.name]:e.target.value}))
  }
  const onSubmit = async(e) => {
    e.preventDefault()
    if(formState.correoElectronico && formState.contrasena) {

      const response = await fetch('http://23.23.204.103:27017/api/usuarios/inicioSesion', {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(formState)
      })
      const result = await response.json()
      if(result.data.length > 0) {
        setUserData({isLogged:true, ...result.data[0]})
        return navigate('/')
      }
      return setError(true) 
    }
  }
  return (
    <form className='w-75 d-flex flex-column justify-content-center' onSubmit={onSubmit}>
        <h3 className='text-center fw-bold mb-5'>Ingresar a Ticketera</h3>
        <div className='d-flex flex-column gap-3'>
        <input className='form-control' placeholder='Correo electrónico' name='correoElectronico' onChange={e => handleChange(e)} onClick={() => setError(false)}/>
        <input className='form-control' placeholder='Contraseña' name='contrasena' type='password' onChange={e => handleChange(e)} onClick={() => setError(false)}/>
        {error && <small className='text-danger'>No encontramos esta combinacion en nuestros registros de usuarios</small>}
        <input type='submit' className='btn text-white' style={{backgroundColor:'#362E7B'}}/>
        </div>
    </form>
  )
}

export default LoginForm