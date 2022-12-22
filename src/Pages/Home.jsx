import React, {useState, useEffect, useContext} from 'react'
import Footer from '../components/Home/Footer'
import FunctionsGrid from '../components/Home/FunctionsGrid'
import Hero from '../components/Home/Hero'
import { EventContext } from '../Context/Context'
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const {setEventsData, eventsData} = useContext(EventContext)
  const [loading, setLoading] = useState()
  const {setUserData, userData} = useContext(EventContext)
  const [cookiesChecked, setCookiesChecked] = useState(false)

  const fetchEventsData = async() => {
    setLoading(true)
      const response = await fetch('http://23.23.204.103/API/eventos')
      const result = await response.json()
      console.log(result)
      setEventsData(result)
      setLoading(false)
  }
  useEffect(() => {
    fetchEventsData()
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
    <div className='h-100 w-100'>
      {(!loading && eventsData && cookiesChecked) && (
        <>
          <div className='w-100 h-50'>
            <Hero/>
          </div>
          <div className=' w-100'>
            <FunctionsGrid eventsData = {eventsData} />
          </div>
          <div className='w-100'>
            <Footer/>
          </div>
        </>
      )}
      {loading && (
        <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
            <div className='spinner-border text-primary'/>
        </div>
      )}
    </div>
  )
}

export default Home