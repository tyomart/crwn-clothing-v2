
// import {  useContext} from 'react'

//import { CartContext } from '../../contexts/cart.context'

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../components/store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.comp';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, CheckoutTotal } from './checkout.styles.jsx' // styles

const CheckOut = () => {
    // addItemToCart, removeItemToCart, clearItemFromCart -> const below?
    //const { cartItems, cartTotal } = useContext(CartContext);
    const cartTotal = useSelector(selectCartTotal);
    const cartItems = useSelector(selectCartItems)


    return(
        <CheckoutContainer>
              
            <CheckoutHeader>

                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span> Remove </span>
                </HeaderBlock>

            </CheckoutHeader>
        
            {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
             <CheckoutTotal>Total: {cartTotal} USD</CheckoutTotal>

        </CheckoutContainer>
    )
}

export default CheckOut;
