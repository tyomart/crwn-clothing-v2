import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import CategoriesPreview from '../categories-preview/categories-preview.comp'
import Category from '../category/category.comp'
import { getCategoriesAndDocuments } from '../../utils/firebase.utils'
import { setCategories } from '../../components/store/categories/category.action'

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments('collections');
      console.log('categories',categories);
      //console.log('SHOP worked');
      //console.log('SHOP worked');
      dispatch(setCategories(categories));
    }

      getCategoriesMap();

      
    }, []);



return (
   <Routes>
    {/* {console.log('routes ok')} */}
        <Route index element={<CategoriesPreview />}></Route>
        <Route path=':category' element={<Category />} />

   </Routes>
)
}

export default Shop;