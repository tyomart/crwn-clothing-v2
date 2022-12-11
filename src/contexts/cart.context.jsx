import { createContext, useState} from "react"; //, useState, useEffect 
// import PRODUCTS from '../shop-data.json'
// //import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => {},
  });

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
 }


