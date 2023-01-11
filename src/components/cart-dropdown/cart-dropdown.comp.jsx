import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import Button from '../button/button.comp'
import CartItem from '../cart-item/cart-item.comp'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout')
        


    }
    

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {/* //shows products on cart */}
                {cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))} 
                
            </div>
            <Button onClick ={goToCheckOutHandler}> Add Items and Checkout</Button>


        </div>
         
    )
}

export default CartDropdown;


