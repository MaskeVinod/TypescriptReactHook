import { createContext } from "react";
import { StyleObj } from "./Style";



export const styleobjContext = createContext(StyleObj)
interface styleobjContextType {
    children: React.ReactNode
}

export const styleobjContextProvider = ({ children }: styleobjContextType) => {
    return <styleobjContext.Provider value={StyleObj}>{children}</styleobjContext.Provider>
}