import { AddToCardDrawer, Login } from "../../Components/ChildComponents";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import { toggleDrawer, toggleModal } from "../../Redux/Store.Reducers";
import { DrawerProps, modalPropsTypes } from "../Const";
export const useCommonState = () => {
    const dispatch = useAppDispatch();
    const { drawer: drawerReducers, modal:modalReducer } = useAppSelector((state) => state.common);
    const drawer: DrawerProps = {
      ...drawerReducers,
      headerName:"My Cart",
      children: <AddToCardDrawer/>,
      onClose: () => dispatch(toggleDrawer()),
    };
    const modal:modalPropsTypes={
     ...modalReducer,
      children:<Login/>,
     closeModal:()=>dispatch(toggleModal()),
     modalSize:"md",
     
    }
    return { drawer, modal };
  };
