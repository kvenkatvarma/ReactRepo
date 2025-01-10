import React,{ Component } from "react"
import NavBar from "./NavBar"
import Login from "./Login"
import ShoppingCart from "./ShoppingCart"
import Dashboard from "./Dashboard"
import { Route, Switch,BrowserRouter } from "react-router-dom"; 
import CustomersList from "./CustomersList"
export default class App extends Component{
   render(){
    return(
      
      <BrowserRouter>
      <NavBar />
      <Switch>  {/* Use Switch to wrap your Route components */}
        <Route path="/" exact component={Login} />  {/* Use the `component` prop in React Router v5 */}
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/customers" exact component={CustomersList} />
        <Route path="/cart" exact component={ShoppingCart} />       
      </Switch>
    </BrowserRouter>
    )
   }
}