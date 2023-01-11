import { useSelector,useDispatch } from 'react-redux';

import { selectCartItems, selectCartTotal} from '../../components/store/cart/cart.selector'
import { removeItemFromCart, addItemToCart, clearItemFromCart } from '../store/cart/cart.action';

//styles
import  {   
    CheckoutItemContainer, 
    ImageContainer, 
    BasedSpan, 
    Quantity, 
    Arrow, 
    Value, 
    RemoveButton
 } from './checkout-item.styles.jsx'


const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price ,quantity } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

   // const { clearItemFromCart, removeItemToCart, addItemToCart } = useContext(CartContext);
   

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))

    return (
            <CheckoutItemContainer>

                
                <ImageContainer>
                    <img src={imageUrl} alt ={`${name}`}/>
                </ImageContainer>
                    <BasedSpan> {name} </BasedSpan>
                    <Quantity>

                        <Arrow onClick={removeItemHandler}>&#10094;
                        </Arrow>    
                        
                        <Value>{quantity}</Value>
                        <Arrow onClick={addItemHandler}>&#10095;</Arrow>  
                        
                    </Quantity>
                    
                    <BasedSpan> {price}</BasedSpan>
                    <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>

            </CheckoutItemContainer>
    )
}

export default CheckoutItem;