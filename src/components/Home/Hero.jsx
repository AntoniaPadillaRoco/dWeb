import React from 'react'
import tickets from '../../assets/tickets.png'
import ticketera from '../../assets/ticketera.png'
import heroText from '../../assets/heroText.png'

const Hero = () => {
  return (
    <div className='w-100 h-100 d-flex flex-column gap-3 align-items-center justify-content-center ' style={{background:'linear-gradient(90deg, rgba(154,145,240,1) 0%, rgba(54,55,110,1) 100%)'}}>
        <div className='d-flex gap-2 align-items-center'>
          <img src={ticketera} style={{width:'350px'}}/>
        </div>
        <div>
          <img src={heroText}/>
        </div>
    </div>
  )
}

export default Hero