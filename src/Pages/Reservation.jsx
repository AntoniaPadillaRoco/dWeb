import React, {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Date from '../components/Reservations/Date'
import {EventContext} from "../Context/Context.jsx";
const Reservation = () => {
    const navigate = useNavigate()
    const {title} = useParams()
    const [eventInfo, setEventInfo] = useState()
    const [loading, setLoading] = useState(true)
    const {setUserData, userData} = useContext(EventContext)
    const [cookiesChecked, setCookiesChecked] = useState(false)
    const fetchEventData = async() => {
        setLoading(true)
        const response = await fetch(`http://23.23.204.103/API/eventos/${title}`)
        const result = await response.json()
        setEventInfo(result[0])
        console.log(result[0])
        setLoading(false)
      
    }   
    useEffect(() => {
        fetchEventData()
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
                    console.log(result)
                    if (result.message !== "Token no encontrado") {
                        setUserData({isLogged: true, data: result})
                        setCookiesChecked(true)
                    }
                    else navigate('/login')
                })
        }
        else setCookiesChecked(true)
    }, [])
  return (
   cookiesChecked &&
    <div className='d-flex flex-column gap-4 mt-5 w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
       {loading && (
        <div className='spinner-border text-primary'/>
       )}
       {(!loading ) && (
        <div className='w-100 h-100 gap-3 d-flex flex-column justify-content-center align-items-center '>
            <h1>{eventInfo.titulo}</h1>
            <div className='d-flex gap-3'>
            <img src={eventInfo.imagen} className='rounded ' height={350}/>
            
            </div>
            <h5>Horarios disponibles:</h5>
            <div className='d-flex gap-3'>
                {eventInfo.fechas.map((fecha, index) => <Date date={fecha} title={title} index={index}/>)}
            </div>
        </div>
       ) }
       
    </div>
  )
}

export default Reservation