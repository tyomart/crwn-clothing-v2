import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import CategoriesPreview from '../categories-preview/categories-preview.comp'
import Category from '../category/category.comp'
// import { getCategoriesAndDocuments } from '../../utils/firebase.utils'
// import { setCategories } from '../../components/store/categories/category.action'
import { fetchCategoriesStart } from '../../components/store/categories/category.action'
const Shop = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchCategoriesStart());
    }, []);
  
    return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    );
  };

export default Shop;