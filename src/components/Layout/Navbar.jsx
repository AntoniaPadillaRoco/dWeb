import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import tickets from '../../assets/tickets.png'
import { EventContext } from '../../Context/Context'
import ticketera from '../../assets/ticketera.png'
const Navbar = () => {
  const {userData, setUserData } = useContext(EventContext)
  console.log(userData)
  return (
    <div className=' d-flex shadow align-items-center justify-content-between px-5 py-3 w-100' style={{backgroundColor:'#1B1744', zIndex:'999'}}>
        <div className='d-flex align-items-center gap-1 '>
          <Link to='/'>
          <img src={ticketera} style={{width:'150px'}}/>
          </Link>
        </div>
        {!userData.isLogged && (

        <div className='d-flex gap-5 '>
            <Link to='/login' className='text-decoration-none btn text-white' style={{backgroundColor:'#403896'}}><span className='fw-bold' >Iniciar sesión</span></Link>
            <Link to='/register' className='text-decoration-none btn'><span className='text-white'>Registrarse</span></Link>
        </div>
        )}
        {userData.isLogged && (

<div className='d-flex gap-5 align-items-center '>
    <Link to='/perfil' className='text-decoration-none'><span className='text-white fw-bold' >{userData.nombre}</span></Link>
    <button className='btn btn-light' onClick={() => setUserData({isLogged:false})}>Cerrar sesión</button>
</div>
)}
    </div>
  )
}

export default Navbar