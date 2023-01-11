import { Routes, Route} from "react-router-dom";
// import './App.css';
import Home from "./routers/home/home.component";

import Navigation from "./routers/navigation/navigation.component"
import Authent from './components/authentication/auth.comp'
import Shop from "./routers/shop/shop.comp";
import CheckOut from "./routers/checkout/checkout.comp";


const App = () => {

return ( 

<Routes>
  <Route path='/' element = {<Navigation />}>
    <Route index element = {<Home />}/>
    <Route path='shop' element = {<Shop />}/>
    <Route path='auth' element = {<Authent />}/>
    <Route path="checkout" element = {<CheckOut />} />
  </Route>
</Routes>
)


}

export default App;
