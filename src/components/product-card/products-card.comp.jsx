
import { useSelector, useDispatch  } from 'react-redux';

import { addItemToCart } from '../store/cart/cart.action.js';
import { selectCartItems } from '../store/cart/cart.selector.js';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.comp';
//styles
import { ProductCardContainer, Footer, Name, Price } from './products-card.styles.jsx'


console.log('PRODUCT CARD COMP FIRED')

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const addProductToCard = () => dispatch(addItemToCart(cartItems, product))


    //const addProductToCard = () => { addItemToCart(product)
    //}
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>

        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>Add to card</Button>


        </ProductCardContainer>
    )
}

export default ProductCard;





