import React, {useContext, useEffect, useState} from 'react'
import { EventContext } from '../Context/Context'
import ticket from '../assets/tickets.png'

const Profile = () => {
    const {userData, setUserData} = useContext(EventContext)
    const [reservations, setReservations] = useState([])
    const [cookiesChecked, setCookiesChecked] = useState(false)

    const getSeats = async () => {
        const response = await fetch(`http://23.23.204.103/API/usuarios/${userData.data._id}`)
        const result = await response.json()
        console.log(result)
        setReservations(result.asientosReservados)
        setCookiesChecked(true)
    }

    useEffect(() => {
        if (!userData.isLogged) {
            fetch('http://23.23.204.103/API/', {
                method: "POST",
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result.asientosReservados)
                    if (result.message !== "Token no encontrado") {
                        setUserData({isLogged: true, data: result})
                        setReservations(result.asientosReservados)
                        setCookiesChecked(true)
                    }
                })
        }
        else {
            getSeats();
        }
    }, [])
    return (
        cookiesChecked && <div className='w-100 h-100  d-flex align-items-center justify-content-center'>
            {!userData.isLogged && <h5>No has iniciado sesión.</h5>}
            {(userData.isLogged) && (
                <div className='d-flex flex-column gap-4 w-100 align-items-center '>
                    <div className='shadow-sm rounded p-4 d-flex flex-column gap-2'>
                        <div className='d-flex justify-content-center mb-1'>
                            <div className='bg-primary rounded-circle d-flex justify-content-center align-items-center' style={{width:'100px', height:'100px'}}>
                                <img src={ticket} className='img-fluid' width={60}/>
                            </div>
                        </div>
                        <h5>Hola, <strong>{userData.data.nombre} {userData.data.apellido}!</strong></h5>
                        <small>Nombre de usuario: <strong> {userData.data.nombreUsuario}</strong></small>
                        <small>Correo electrónico: <strong> {userData.data.correoElectronico}</strong></small>
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