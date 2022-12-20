import React from 'react'
import { AlertTriangle } from 'react-feather'
import tickets from '../../assets/tickets.png'

const LoginCard = ({children}) => {
  return (
    <div className=' shadow rounded container h-75 bg-white'>
        <div className='row h-100 w-100'>
            <div className='col d-flex align-items-center justify-content-center ' style={{backgroundColor:"#EEEEEE"}}>
                <img src={tickets} className='img-fluid w-50 '/>
            </div>
            <div className='col d-flex justify-content-center align-items-center '>
                {children}
                
            </div>

        </div>
    </div>
  )
}

export default LoginCard