import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products.context'
import SHOP_DATA from '../../shop-data.json'
import './shop.styles.scss'
import ProductCard from '../../components/product-card/products-card.comp'


const Shop = () => {
    const { products } = useContext(ProductsContext)

return (
    <div className='products-container'>
        {products.map((product)=> (
           <ProductCard key={product.id} product = {product}/>

        ))}
    </div>
)
}

export default Shop;