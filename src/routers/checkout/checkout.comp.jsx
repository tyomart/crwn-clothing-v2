import './checkout.styles.scss'
import {  useContext} from 'react'

import { CartContext } from '../../contexts/cart.context'
//import { SnapshotMetadata } from 'firebase/firestore';
//import CartItem from '../../components/cart-item/cart-item.comp';
import CheckoutItem from '../../components/checkout-item/checkout-item.comp';


const CheckOut = () => {
    // addItemToCart, removeItemToCart, clearItemFromCart -> const below?
    const { cartItems, cartTotal } = useContext(CartContext);

    return(
        <div className="checkout-container">
              
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span> Remove </span>
                </div>
            </div>
        
            {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
             <span className='total'>Total: {cartTotal} USD</span>
        </div>
    )
}

export default CheckOut;
