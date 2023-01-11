import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom"

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
//import { UserContext } from "../../contexts/user.context";
import {signOutUser} from '../../utils/firebase.utils'
// import { CartContext } from "../../contexts/cart.context";
import { selectIsCartOpen } from "../../components/store/cart/cart.selector";
import CartIcon from '../../components/cart-icon/cart-icon.comp'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.comp";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../components/store/user/user.selector";

import { NavigationContainer,LogoContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx' //styles




const Navigation = () =>{
  //const { currentUser} = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser)
  //const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen)
  
     return(
      <Fragment>
        
        <NavigationContainer >
          
          <LogoContainer to='/'>
            <CrwnLogo/>
          </LogoContainer>

          <NavLinksContainer>
            <NavLink to='/shop'>
              SHOP
            </NavLink>
            
            {currentUser ? (
                <NavLink as ='span' onClick={signOutUser}>{' '} SignOut {' '}</NavLink>
            ):(
              <NavLink className="'nav-link" to='/auth'> Sign In</NavLink>
            )}
            
            
          </NavLinksContainer>
          <CartIcon />

        </NavigationContainer >
        {isCartOpen && <CartDropdown />
      }

        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;