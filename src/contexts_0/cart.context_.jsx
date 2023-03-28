import { createContext, useReducer} from "react"; //, useState, useEffect 
// import PRODUCTS from '../shop-data.json'
// //import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";
import { createAction } from "../utils/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems have productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id)
        // if CartOpen then map throw CartItems, 

    //increment if found -- if true then add 1
    if(existingCartItem) {
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
        );
    }
    //new cartItem if not found newCartitem = [...cartItems, newCartItem]
    return [...cartItems, {...productToAdd, quantity: 1 }]
}

//helper for Remove
const removeCartItem = (cartItems, cartItemToRemove) => {
    
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id)
                   
        if (existingCartItem.quantity === 1) {
            return   cartItems.filter (cartItem => cartItem.id !== cartItemToRemove.id)
           
        }
        return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
        );

}

//remove from checkout
const clearCartItem = (cartItems, cartItemToClear) =>    
    cartItems.filter ((cartItem) => cartItem.id !== cartItemToClear.id)

const CART_ACTION_TYPES = {
    SET_CART_ITEMS:'SET_CART_ITEMS',
    SET_IS_CART_OPEN:'SET_IS_CART_OPEN',

}

const INITIAL_STATE = {
        isCartOpen: false,
        cartItems: [],
        cartCount: 0,
        cartTotal: 0
    }
const cartReducer = (state,action) => {
    const { type, payload } = action;
    switch(type) {

        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
                }
        default: 
        throw new Error(`unhadled type of ${type} in cartReducer`)
    }
}



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    removeItemToCart: () => {},
    addItemToCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
  });



export const CartProvider = ({ children }) => {
    //const [isCartOpen, setIsCartOpen] = useState(false);
  
    const [ { cartItems, isCartOpen, cartCount, cartTotal }, dispatch ] = useReducer(cartReducer, INITIAL_STATE)
   
    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total,cartItem) => 
                    total + cartItem.quantity, 0)
        const newCartTotal = newCartItems.reduce((total,cartItem) => 
                    total + cartItem.quantity * cartItem.price, 0)

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, 
            { 
                cartItems: newCartItems, 
                cartTotal: newCartTotal, 
                cartCount: newCartCount  
            }))
    };

    const addItemToCart = (productToAdd) => {
        const newCartItems = (addCartItem(cartItems, productToAdd))
        updateCartItemReducer(newCartItems);
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = (removeCartItem(cartItems, cartItemToRemove))
        updateCartItemReducer(newCartItems);
    }
    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = (clearCartItem(cartItems, cartItemToClear));
        updateCartItemReducer(newCartItems);
      };
    
const setIsCartOpen = (bool) => {
dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool ))

}

    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemToCart,
        clearItemFromCart, 
        cartItems, 
        cartCount,
        cartTotal };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
 }


