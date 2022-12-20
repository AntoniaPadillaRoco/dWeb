import React, {useContext} from 'react'
import { Clock } from 'react-feather'
import { Link } from 'react-router-dom'
import ev1 from '../../assets/ev1.jpeg'
import { EventContext } from '../../Context/Context'

const FunctionCard = ({id, image, title, description, img}) => {
  const {userData} = useContext(EventContext)
  return (
   <div className=' p-3 shadow rounded d-flex flex-column gap-2 ' style={{width:'300px', height:'auto'}}>
    <img className='h-75 w-100 rounded' src={img} style={{objectFit:'cover'}}/>
    <h5>{title}</h5>
    <p>{description}</p>
    <Link to={userData.isLogged? `/reservation/${title}`: '/login'} className='btn text-white' style={{backgroundColor:'#362E7B'}}>Reservar asientos</Link>
   </div>
   )
}

export default FunctionCard