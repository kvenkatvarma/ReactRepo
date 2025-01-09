import React,{ Component } from "react"
import NavBar from "./NavBar"
import Login from "./Login"
import ShoppingCart from "./ShoppingCart"

export default class App extends Component{
   render(){
    return(
        <React.Fragment>
            <NavBar/>
            <ShoppingCart></ShoppingCart>
        </React.Fragment>
      
    )
   }
}