import { Fragment } from "react";
import { Outlet } from "react-router-dom"

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
//import { UserContext } from "../../contexts/user.context";
import { signOutStart } from "../../components/store/user/user.action";
//import {signOutUser} from '../../utils/firebase.utils'
// import { CartContext } from "../../contexts/cart.context";
import { selectIsCartOpen } from "../../components/store/cart/cart.selector";
import CartIcon from '../../components/cart-icon/cart-icon.comp'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.comp";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../components/store/user/user.selector";

import { NavigationContainer,LogoContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx' //styles
//import Spinner from "../../components/spinner/spinner.comp";




const Navigation = () =>{

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
  
     return(
      <Fragment>
        
        <NavigationContainer >
          
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>

          <NavLinksContainer>
          <NavLink to='/p'>
             PLAY
            </NavLink>

            <NavLink to='/shop'>
              SHOP
            </NavLink>

            
            {currentUser ? (
                <NavLink as ='span' onClick={signOutUser}>
                  SignOut
                </NavLink>
            ):(
              <NavLink to='/auth'> Sign In</NavLink>
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