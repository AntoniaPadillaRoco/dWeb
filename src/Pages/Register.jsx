import React from 'react'
import LoginCard from '../components/Login/LoginCard'
import RegisterForm from '../components/Login/RegisterForm'

const Register = () => {
  return (
    <div className='w-100 h-100 d-flex align-items-center'>

    <LoginCard>
      <RegisterForm/>
    </LoginCard>
    </div>
  )
}

export default Register