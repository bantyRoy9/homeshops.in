import { useAppSelector } from "Redux/Store";
import { DrawerProps } from "Utils/Const";

export const useCommonState = () =>{
    const {drawer,modal} = useAppSelector(state=>state.common);
    // const drawer:DrawerProps ={
    //     headerName:"My Cart",
    //     isOpen:false,
    //     children:"",
    //     onClose:()=>{},
    //     position:"right"
    // };
    // const modal={

    // };
    return{drawer,modal}
}
