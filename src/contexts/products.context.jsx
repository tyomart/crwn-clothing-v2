import { createContext, useState, useEffect} from "react"; //, useState, useEffect 
import SHOP_DATA from '../shop-data.js'
//import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

import { addCollectionandDocuments } from "../utils/firebase.utils.js";
export const ProductsContext = createContext({
    Products:[],

});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{ 
        addCollectionandDocuments ('categories', SHOP_DATA);
    }, []);
    
    const value = {products}
    return (
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    )
}

 
