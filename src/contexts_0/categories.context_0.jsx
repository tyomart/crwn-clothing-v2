import { createContext, useState, useEffect} from "react"; //, useState, useEffect 
//import SHOP_DATA from '../shop-data.js'
//import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

import { getCategoriesAndDocuments } from "../utils/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
  });
  
  export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
  
    useEffect(() => {
        
        const getcategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('collections');
      console.log(categoryMap);
      setCategoriesMap(categoryMap);}

      getcategoryMap();

      
    }, []);
  
    const value = { categoriesMap };
    return (
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    );
  };

 
