import { createContext, useState} from "react"; //, useState, useEffect 
import PRODUCTS from '../shop-data.json'
//import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

export const ProductsContext = createContext({
    products:[],

});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS)
    const value = {products}
    return (
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    )
}


