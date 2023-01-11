import { createContext, useEffect, useState} from "react"; //, useState, useEffect 
// import PRODUCTS from '../shop-data.json'
// //import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

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


export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    removeItemToCart: () => {},
    addItemToCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
  });



export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]); 
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => { 
        const newCartCount = cartItems.reduce((total,cartItem) => total + cartItem.quantity, 0)
            setCartCount(newCartCount);
            console.log('cart items', newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
      };
    
   // TOTAL useEffect
   useEffect(() => { 
    const newCartTotal = cartItems.reduce((total,cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal);
        console.log('cart items', newCartTotal)
}, [cartItems])

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


