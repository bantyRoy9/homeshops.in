import { JSX } from "react";

export interface modalPropsTypes {
    headerTitle: String;
    modalSize: 'lgx' | 'lg' | 'md' | 'sm' | 'sm-x' | 'small';
    btnTitle: string;
    secBtnTitle?: string;
    onClick: (isSecBtn?: boolean) => void;
    onSubmit:(e:React.FormEvent) => void;
    children: JSX.Element;
    fontWeight?: string;
    closeModal: (name?: string) => void;
    name?: string;
    subHeaderTitle?: string;
    className?: string;
    overflow?:boolean
    btnVisible?:boolean
};

export interface DropModalTy{
  ModalTitle:string;
  child:JSX.Element;
  top:number;
  right:number;
}
export type modalPropsType = Omit<modalPropsTypes,"onSubmit">
export type FormModalPropsType = Omit<modalPropsTypes,"onClick">