import Navbar from './../Components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const DefaultContainer = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default DefaultContainer