import React, { useState } from 'react'
import asiento from '../../assets/seat.jpeg'

const Seat = ({seat, setBookedSeats, bookedSeats}) => {
    const [color, setColor] = useState('')
    const handleSeatClick = () => {
        if(seat.inUse) return
        if(bookedSeats.includes(seat.id)) {
            setColor('')
            return setBookedSeats(bookedSeats.filter(s => s !== seat.id))
        }
        setColor('bg-primary')
        return setBookedSeats(prevState => ([...prevState, seat.id]))
    }
  return (
    <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
        <img src={asiento} style={{width:'30px'}}/>
        <div style={{width:'15px', height:'15px'}} className={`${seat.inUse ? 'bg-secondary ': color } border  `} onClick={() => handleSeatClick()}/>
        <small>{seat.id}</small>
    </div>
  )
}

export default Seat