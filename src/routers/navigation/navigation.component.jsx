import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import {signOutUser} from '../../utils/firebase.utils'
import { CartContext } from "../../contexts/cart.context";
import CartIcon from '../../components/cart-icon/cart-icon.comp'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.comp";




const Navigation = () =>{
  const { currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
     return(
      <Fragment>
        
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <div><CrwnLogo/></div>
          </Link>
          <div className="nav-link-container">
            <Link className="nav-link" to='/shop'>
            
              SHOP
            </Link>
            <div className="nav-links-container">
            {currentUser ? (
                <span className="nav-link" onClick={signOutUser}>{' '} SignOut {' '}</span>
            ):(
              <Link className="'nav-link" to='\auth'> Sign In</Link>
            )}
            </div>
            
          </div>
          <CartIcon />

        </div>
        {isCartOpen && <CartDropdown />
      }

        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;