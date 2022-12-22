import React, {useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Reservation from '../Pages/Reservation'
import SeatsReservation from '../Pages/SeatsReservation'
import Profile from '../Pages/Profile'
import ErrorPage from '../Pages/ErrorPage'
import { EventContext } from '../Context/Context'

const Router = () => {
  const {userData} = useContext(EventContext)
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/reservation/:title' element={<Reservation/>}/>
            <Route path='/reservation/:title/:date' element={<SeatsReservation/>}/>
            <Route path='/perfil' element={<Profile/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    </Routes>
  )
}

export default Router