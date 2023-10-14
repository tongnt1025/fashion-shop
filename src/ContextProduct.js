import { createContext, useContext, useEffect, useState } from 'react';
const ContextProduct = createContext();
function ContextProvider({children}) {
    const [value,setValue]=useState("");
    function handleClick(){
        setValue("something");
    }
    return (
        <ContextProduct.Provider value={{value,handleClick}}>
           {children}
        </ContextProduct.Provider>
    );
}

export {ContextProvider,ContextProduct};
