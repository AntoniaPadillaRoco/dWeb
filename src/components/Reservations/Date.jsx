import React from 'react'
import { Clock } from 'react-feather'
import { Link } from 'react-router-dom'

const Date = ({date, title, index}) => {
  return (
    <Link  to={`/reservation/${title}/${index}`}className='shadow-sm rounded p-3 d-flex align-items-center justify-content-center gap-2 text-decoration-none text-black '>
    <div>
      <Clock size={20}/>
    </div>
    <div>
      {date.fecha} {date.hora}
    </div>
    </Link>
  )
}

export default Date