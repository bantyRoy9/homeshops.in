import Navbar from './Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Drawer, Modal } from 'Components'
import { Login } from 'Components/ChildComponents'
import { useCommonState } from 'Utils/customHooks/useCommonState'

type Props = {}

const DefaultContainer = (props: Props) => {
  const {drawer} = useCommonState();
  return (
    <>
      <Drawer headerName={drawer.headerName} position={drawer.position} isOpen={drawer.isOpen} onClose={() => drawer.onClose(false)} children={drawer.children}/>
      {/* <Modal btnTitle="" children={<Login />} closeModal={handleModal} headerTitle={""} modalSize="lg" onSubmit={() => { }} />} */}
      <Navbar />
      <div className='home-container'>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default DefaultContainer