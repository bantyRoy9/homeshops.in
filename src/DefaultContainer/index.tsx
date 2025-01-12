import Navbar from './Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

type Props = {}

const DefaultContainer = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default DefaultContainer