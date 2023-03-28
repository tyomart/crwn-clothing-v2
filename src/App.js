import { Routes, Route} from "react-router-dom";
// import './App.css';
import Home from "./routers/home/home.component";
import { useDispatch } from "react-redux";

import Navigation from "./routers/navigation/navigation.component"
import Authent from './components/authentication/auth.comp'
import Shop from "./routers/shop/shop.comp";
import CheckOut from "./routers/checkout/checkout.comp";
import ScssPlay from "./comps_2/scss-use.jsx/scss-use-comp";
import { useEffect } from "react";
import { createUserDocumentFromAuth, getCurrentUser, onAuthStateChangedListener } from "./utils/firebase.utils";
import { setCurrentUser } from "./components/store/user/user.action";
//import Spinner from "./components/spinner/spinner.comp";
import { checkUserSession } from "./components/store/user/user.action";


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
}, []) // []

return ( 

<Routes>
  <Route path='/' element = {<Navigation />}>
    <Route index element = {<Home />}/>
    <Route path='shop/*' element = {<Shop />}/>
    <Route path='auth' element = {<Authent />}/>
    <Route path="checkout" element = {<CheckOut />} />
    <Route path='p' element = {<ScssPlay />} />
  </Route>
  
</Routes>

)


}

export default App;
