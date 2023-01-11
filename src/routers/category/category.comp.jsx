
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
// import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/products-card.comp';

import { CategoryContainer, CategoryTitle } from './category.styles.jsx' // styles
import { selectCategoriesMap } from '../../components/store/categories/category.selector';

const Category = () => {
    const { category } = useParams();
    console.log('rerendering - rendering category');
    const  categoriesMap  = useSelector(selectCategoriesMap)
   

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect (() => {
        console.log('category comp FX fired')
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
            {products && products.map((product) => (<ProductCard key ={product.id} product={product} /> ))}
            </CategoryContainer>
        </Fragment>
    )
}

export default Category