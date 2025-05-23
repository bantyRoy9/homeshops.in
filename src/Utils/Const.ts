import { JSX } from "react";
import { IProduct } from "Redux/type";
export const FORMTOASTERRID = 'formtoastid';
export const OTP_COUNT=60;
export const OTP_COUNTER = 1;
export const imgurl = 'https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142'

/********DRAWER*********/
export type DrawerPosition = "top" | "right" | "bottom" | "left";
export type DrawerProps = {
    position: DrawerPosition;
    isOpen: boolean;
    onClose: () => void;
    headerName:string
    children?: React.ReactNode
};
export interface IProductCard {
  product: IProduct,
  width?:number,
  addProduct?:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,item:-1|1,product:IProduct)=>void,
  addtocard?: any,
  activecard?:number|null
}

export interface modalPropsTypes {
  modalSize: 'lgx' | 'lg' | 'md' | 'sm' | 'sm-x' | 'small';
  isOpen:boolean
  header?: String;
  secBtn?: string;
  onClick?: (isSecBtn?: boolean) => void;
  onSubmit?:(e:React.FormEvent) => void;
  children: JSX.Element;
  closeModal: (name?: string) => void;
  name?: string;
  subHeader?: string;
  btn?: string;
};

export interface DropModalTy{
  ModalTitle:string;
  child:JSX.Element;
  top:number;
  right:number;
}
export type modalPropsType = Omit<modalPropsTypes,"onSubmit">
export type FormModalPropsType = Omit<modalPropsTypes,"onClick">