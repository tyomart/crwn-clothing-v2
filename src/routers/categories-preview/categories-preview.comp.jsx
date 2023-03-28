import { useContext, Fragment } from 'react'
//import { CategoriesContext } from '../../contexts/categories.context'
import { useSelector } from 'react-redux'

//import './categories-preview.styles.scss'
import CategoryPreview from '../../components/category-preview/category-preview.comp'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../components/store/categories/category.selector.js'

import Spinner from '../../components/spinner/spinner.comp'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};


export default CategoriesPreview;