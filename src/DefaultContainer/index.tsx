import { Drawer, Modal } from './../Components'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Header'
import { useCommonState } from './../Utils/customHooks/useCommonState'

type Props = {}

const DefaultContainer = (props: Props) => {
  const {drawer,modal} = useCommonState();
  return (
    <>
      <Drawer headerName={drawer.headerName} position={drawer.position} isOpen={drawer.isOpen} onClose={drawer.onClose} children={drawer.children}/>
      <Modal isOpen={modal.isOpen} btn={modal.btn} children={modal.children} closeModal={modal.closeModal} header={modal.header} modalSize={modal.modalSize} onSubmit={() => { }} />
      <Navbar />
      <div className='home-container'>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default DefaultContainer