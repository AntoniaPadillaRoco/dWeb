import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='d-flex flex-column  w-100 vh-100 align-items-center'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout