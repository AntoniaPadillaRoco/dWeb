import React, {useEffect, useState, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Seat from '../components/Reservations/Seat'
import { EventContext } from '../Context/Context'
import { toast} from 'react-hot-toast'

const SeatsReservation = () => {
    const navigate = useNavigate()
    const {title, date} = useParams()
    console.log(title, date)
    const [loading, setLoading] = useState(true)
    const [canClick, setCanClick] = useState(false)
    const [eventInfo, setEventInfo] = useState()
    const [bookedSeats, setBookedSeats] = useState([])
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
    const handleReserveClick = async() => {
        const prevSeats = eventInfo.fechas[date].asientos
        for (let i = 0; i < bookedSeats.length; i ++) {
            let found = prevSeats.indexOf(prevSeats.find(({id}) => id == bookedSeats[i]))
            prevSeats[found] = {...prevSeats[found], inUse:true}
        }
        console.log(prevSeats)
        
        const data = {
            idUsuario: userData.data._id,
            asientosUsuario: bookedSeats,
            tituloEvento:title,
            fechaEvento:eventInfo.fechas[date].fecha,
            horaEvento:eventInfo.fechas[date].hora,
            asientosEvento: prevSeats
        }
        console.log(data)
        const response = await fetch('http://23.23.204.103/API/reservas', {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result, 'responseFromAPi')
        setBookedSeats([])
        toast.success('Asientos reservados correctamente, revísalos en tu perfil!')
        navigate('/')
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

    useEffect(() =>{
        console.log(bookedSeats)
        if(bookedSeats.length > 0) {
            setCanClick(true)
        }
        else{
            setCanClick(false)
        }
    }, [bookedSeats])
  return (
    cookiesChecked && <div className='w-50 h-100  d-flex flex-column align-items-center justify-content-center gap-5'>
        {loading && <div className='spinner-border text-primary'/>}
        {!loading && (
            <> 
        <div>
            <h5>Escoge tus asientos para: <strong>{title}</strong> </h5>
            <p className='text-center'> {eventInfo.fechas[date].fecha} {eventInfo.fechas[date].hora}</p>
        </div>
        <div className='w-100 bg-primary d-flex justify-content-center align-items-center rounded' style={{height:'35px'}}>
            <h5 className='text-white m-0 '>Escenario</h5>
        </div>
        <div className='container'>
            <div className='' style={{display:'grid', gridTemplateColumns:'repeat(10, 1fr)', gridGap:'20px'}}>
                
            {eventInfo.fechas[date].asientos.map((seat) => (
                <div className='col'>
                <Seat seat={seat} bookedSeats={bookedSeats} setBookedSeats={setBookedSeats}/>
                </div>
                ))}
            </div>
        </div>
            </>
        )}
        <div>
            <button className={`btn btn-primary mt-3 ${!canClick && 'disabled'}`} onClick={() => handleReserveClick()}>Reservar asientos</button>
        </div>
    </div>
  )
}

export default SeatsReservation