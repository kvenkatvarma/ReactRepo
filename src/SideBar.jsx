import React,{Component} from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
export default class SideBar extends Component{
    render(){
        return (
        <div className="mt-2">
            <h4 className="p-1 border-bottom">Sidebar</h4>
            <div className="list-group mt-2">
               <NavLink to="/dashboard" activeClassName="active" className="list-group-item list-group-item-action">Dashboard</NavLink>
               <NavLink to="/customers" activeClassName="active"  className="list-group-item list-group-item-action">Customers</NavLink>
               <NavLink to="/cart"  activeClassName="active" className="list-group-item list-group-item-action">Shopping Cart</NavLink>
            </div>
        </div>
        );
    }
}