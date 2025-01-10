import React,{ Component } from "react"
import NavBar from "./NavBar"
import Login from "./Login"
import ShoppingCart from "./ShoppingCart"
import Dashboard from "./Dashboard"
import { Route, Switch,BrowserRouter } from "react-router-dom"; 
import CustomersList from "./CustomersList"
import NoMatchPage from "./NoMatchPage"
import history from "./history"
import { Router } from "react-router-dom/cjs/react-router-dom.min"
export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoggedIn:false
    };
  }
   render(){
    return(
      
      <Router history={history}>
      <NavBar isLoggedIn = {this.state.isLoggedIn} updateIsLoggedInStatus={this.updateIsLoggedInStatus}/>
      <div className="container-fluid">
      <Switch>  {/* Use Switch to wrap your Route components */}       
        <Route path="/" exact render={(props)=><Login {...props} updateIsLoggedInStatus={this.updateIsLoggedInStatus}/>} />  {/* Use the `component` prop in React Router v5 */}
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/customers" exact component={CustomersList} />
        <Route path="/cart" exact component={ShoppingCart} />    
        <Route path="*"  component={NoMatchPage} />
      </Switch>
      </div>
    </Router>
    )
   }
   updateIsLoggedInStatus=(status)=>{
   this.setState({
    isLoggedIn:status
   });
   }
}