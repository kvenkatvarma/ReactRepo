import React,{ Component } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import history from "./history"

class NavBar extends Component{
render(){
    return (
        <React.Fragment>
          <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
  <div className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
    <a className="navbar-brand" href="/#">eCommerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      {!this.props.isLoggedIn ? ( <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/">Login</NavLink>
        </li>  ) :"" }
        
        {!this.props.isLoggedIn ? ( <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/register">Register</NavLink>
        </li>  ) :"" }
        

        {this.props.isLoggedIn ? ( <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active"  to="/dashboard">Dashboard</NavLink>
        </li> ):"" }
        
        {this.props.isLoggedIn ? ( <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active"  to="/customers">Customers</NavLink>
        </li>):""}
       
        {this.props.isLoggedIn ? (  <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/cart">Shopping Cart</NavLink>
        </li>  ):""}    
                 
        {this.props.isLoggedIn ? (  <li className="nav-item">
          <a href="/#" className="nav-link" onClick={this.onLogoutClick}>Logout</a>
        </li>  ):""}    
       
      </ul>     
    </div>
  </div>
</nav>
        </React.Fragment>
    );
}
onLogoutClick=(event)=>{
  event.preventDefault();
  this.props.updateIsLoggedInStatus(false);
   //navigate to login
   document.location.hash = "/";
   //history.replace("/");
}
}
export default NavBar;