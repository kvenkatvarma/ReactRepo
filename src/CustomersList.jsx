import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class CustomersList extends Component
{
    constructor(props){
        super(props);
        this.state ={pageTitle:"Customers",customersCount:5,
            customers:[]
        };
    }   

    render()
    {
        return (
        <div>
            <h4 className="m-1 p-1">{this.state.pageTitle}
            <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
            <Link to="/new-customer" className="btn btn-primary">New Customer</Link>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <td>Image</td>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                      {this.getCustomerRow()}                 
                </tbody>
            </table>
        </div>
        )
    }

    componentDidMount=async ()=>{
        document.title = "Customers-eCommerce";
       let response = await fetch('https://jsonplaceholder.typicode.com/posts',{method:"GET"});
       let body = await response.json();
       
       this.setState({
        customers:body
       })
    }
  
    getPhoneToRender=(phone)=>
    {
       return phone ? phone :<div className="bg-warning p-2 text-center">No Phone</div>
    }
    getCustomerRow=()=>{
        return  (
            this.state.customers.map((cust,index)=>{
             return(
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                        <img src={cust.photo} alt="Customer"></img>
                        <div>
                            <button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust,index);}}>Change Picture</button>
                        </div>
                    </td>
                    <td>{cust.body}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.title}</td>
                </tr>
             )
            })
        )
    }
    onChangePictureClick=(cust,index)=>{
        var custArr=this.state.customers;
        custArr[index].photo ="https://picsum.photos/id/104/60";
        this.setState({
            customers:custArr
        });
        }
}