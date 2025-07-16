import { ReactNode } from "react";


interface SelectModel{
    option:string | number;
    value:string;
    icon?:ReactNode;
}

export default SelectModel;