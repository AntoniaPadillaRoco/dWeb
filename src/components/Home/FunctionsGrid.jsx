import React from 'react'
import FunctionCard from './FunctionCard'

const FunctionsGrid = ({eventsData}) => {
  return (
    <div className='p-5' style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(350px, 1fr) )', rowGap:'30px'}}>
      {eventsData.map(event => <FunctionCard key={event._id} id={event._id} title={event.titulo} description={event.descripcion} img={event.imagen}/> )}
     
    </div>
  )
}

export default FunctionsGrid