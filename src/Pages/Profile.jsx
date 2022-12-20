import React, {useContext, useEffect, useState} from 'react'
import { EventContext } from '../Context/Context'
import ticket from '../assets/tickets.png'

const Profile = () => {
    const {userData} = useContext(EventContext)
    const [reservations, setReservations] = useState([])
    const [loading, setLoading] = useState(true)
    const getUserData = async() => {
        setLoading(true)
        const response = await fetch(`http://23.23.204.103:27017/api/usuarios/${userData._id}`)
        const result = await response.json()
        console.log(result)
        setReservations(result.asientosReservados)
        setLoading(false)
    }
    useEffect(() => {
        if(userData._id) {
            getUserData()
        }
    }, [])
  return (
    <div className='w-100 h-100  d-flex align-items-center justify-content-center'>
        {!userData.isLogged && <h5>No has iniciado sesión.</h5>}
        {(userData.isLogged && !loading) && (
            <div className='d-flex flex-column gap-4 w-100 align-items-center '>
                <div className='shadow-sm rounded p-4 d-flex flex-column gap-2'>
                    <div className='d-flex justify-content-center mb-1'>
                        <div className='bg-primary rounded-circle d-flex justify-content-center align-items-center' style={{width:'100px', height:'100px'}}>
                            <img src={ticket} className='img-fluid' width={60}/>
                        </div>
                    </div>
                    <h5>Hola, <strong>{userData.nombre} {userData.apellido}!</strong></h5>
                    <small>Nombre de usuario: <strong> {userData.nombreUsuario}</strong></small>
                    <small>Correo electrónico: <strong> {userData.correoElectronico}</strong></small>

                </div>
                <h3>Tus reservas</h3>
               <div className='w-50'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Evento</th>
                            <th scope='col'>Asientos</th>
                            <th scope='col'>Fecha</th>
                            <th scope='col'>Horario</th>
                        </tr>
                    </thead>
                    <tbody>
                       {reservations.map((reservation, index) => (

                        <tr key={index}>
                            <td >{reservation.evento}</td>
                            <td>{reservation.asientos.map(asiento => <span>{asiento} </span>)}</td>
                            <td>{reservation.fecha}</td>
                            <td>{reservation.hora}</td>

                        </tr>
                       ))} 
                    </tbody>
                </table>
               </div>
            </div>
        )}
    </div>
  )
}

export default Profile