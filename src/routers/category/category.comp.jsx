
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
// import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/products-card.comp';
import Spinner from '../../components/spinner/spinner.comp';
import { CategoryContainer, Title } from './category.styles.jsx' // styles
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../components/store/categories/category.selector';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};


export default Category