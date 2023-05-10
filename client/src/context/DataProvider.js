import { createContext, useState } from "react";

export const DataContext=createContext(null);

const DataProvider=({children})=>{
       
    const [Account,setAccount]= useState('');
    return(
        <DataContext.Provider value={{ 
           Account,setAccount
        }} >
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider;