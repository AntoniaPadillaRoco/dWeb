import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EventContext } from '../../Context/Context'
import {toast} from 'react-hot-toast'

const RegisterForm = () => {
    const [form, setForm] = useState()
    const navigate = useNavigate()
    const {setUserData} = useContext(EventContext)
    const handleChange = (e) => {
        setForm(prevState => ({...prevState, [e.target.name] : e.target.value}))
    } 
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (form.nombre && form.apellido && form.correoElectronico && form.nombreUsuario && form.contrasena) {
          const response = await fetch('http://23.23.204.103/API/usuarios/registrar', {
            method:'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({...form, asientosReservados: []})
          })
          const result = await response.json()
          console.log(result)
          toast.success('Usuario creado exitosamente!')
          navigate('/login')
          
        }
        //POST logic
    }
  return (
    <form className='w-75 d-flex flex-column justify-content-center' onSubmit={handleSubmit}>
    <h3 className='text-center fw-bold mb-5'>Registrate en Ticketera</h3>
    <div className='d-flex flex-column gap-3'>
    <input className='form-control' placeholder='Nombre' name='nombre' onChange={e => handleChange(e)}/>
    <input className='form-control' placeholder='Apellido'name='apellido' onChange={e => handleChange(e)}/>
    <input className='form-control' placeholder='Correo electrónico' name='correoElectronico' onChange={e => handleChange(e)}/>
    <input className='form-control' placeholder='Nombre de usuario' name='nombreUsuario' onChange={e => handleChange(e)}/>
    <input className='form-control' type='password' placeholder='Contraseña' name='contrasena' onChange={e => handleChange(e)}/>
    <input type='submit' className='btn text-white fw-bold' style={{backgroundColor:'#362E7B'}}/>
    <span>Ya tienes una cuenta? <Link to='/login'>Inicia sesion</Link></span>
    </div>
</form>
  )
}

export default RegisterForm