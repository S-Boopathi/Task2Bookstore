import { createContext, useContext, useState } from "react";


const AppContext =createContext(null)
export const useAppcontext =()=>{
    const context =useContext(AppContext);
    if (context===undefined) {
        throw new Error('Appcontext must be with in appcontextprovider')
    }
    

    return context
}

const AppContextProvider = ({children})=>{
    const [favorites,setFavorites]=useState([])
    const addToCart=(book)=>{
        const oldcart=[...favorites];
        const newcart =oldcart.concat(book)
        setFavorites(newcart);
    }
    const removeFromCart=(id)=>{
       const oldcart =[...favorites]
       const newcart =oldcart.filter((book)=>book.id !==id);
       setFavorites(newcart)
    }
    return(
        <AppContext.Provider value={{favorites,addToCart,removeFromCart}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;