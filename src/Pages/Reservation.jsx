import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Date from '../components/Reservations/Date'
const Reservation = () => {
    const {title} = useParams()
    const [eventInfo, setEventInfo] = useState()
    const [loading, setLoading] = useState(true)
    const fetchEventData = async() => {
        setLoading(true)
        const response = await fetch(`http://localhost:27017/api/eventos/${title}`)
        const result = await response.json()
        setEventInfo(result[0])
        console.log(result[0])
        setLoading(false)
      
    }   
    useEffect(() => {
        fetchEventData()
    }, [])
  return (
   
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