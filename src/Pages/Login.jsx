import React from 'react'
import LoginCard from '../components/Login/LoginCard'
import LoginForm from '../components/Login/LoginForm'

const Login = () => {
  return (
    <div className='w-100 h-100 d-flex align-items-center' style={{background:'linear-gradient(90deg, rgba(154,145,240,1) 0%, rgba(54,55,110,1) 100%)'}}>

    <LoginCard>
      <LoginForm/>
    </LoginCard>
    </div>
 )
}

export default Login