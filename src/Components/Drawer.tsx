import { IconClose } from "../Assests/Icons";
import React from "react";

type DrawerPosition = "top" | "right" | "bottom" | "left";

type DrawerProps = {
    position: DrawerPosition;
    isOpen: boolean;
    onClose: () => void;
    children: any
};

const Drawer: React.FC<DrawerProps> = ({ position, isOpen, onClose, children }) => {
    const drawerClasses = `fixed z-40 p-4 w-[20rem] overflow-y-auto transition-transform bg-white dark:bg-gray-800 
    ${position === "top" && !isOpen && "top-0 left-0 w-full h-80 translate-y-full"}
    ${position === "right" && !isOpen && "top-0 right-0 h-screen w-80 translate-x-full"}
    ${position === "bottom" && !isOpen && "bottom-0 left-0 w-full h-80 translate-y-full"}
    ${position === "left" && !isOpen && "top-0 left-0 h-screen w-80 -translate-x-full"}
    ${position === "top" && isOpen && "translate-y-0"}
    ${position === "right" && isOpen && "translate-x-0 right-0 h-full"}
    ${position === "bottom" && isOpen && "translate-y-0"}
    ${position === "left" && isOpen && "-translate-x-0"}`
    return (
        <div className={drawerClasses} role="dialog" aria-labelledby="drawer-label" aria-hidden={!isOpen} tabIndex={-1}>
            <h5 id="drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">My Cart</h5>
            <button type="button" onClick={onClose} className="absolute top-2.5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 dark:hover:bg-gray-600 dark:hover:text-white">
                <IconClose/>
            </button>
            <div>{children}</div>
        </div>
    );
};
export default Drawer