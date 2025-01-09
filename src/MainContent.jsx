import React, { Component } from "react";

export default class MainContent extends Component
{
    state ={pageTitle:"Customers",customersCount:5,
        customers:[
            {id:1,name:"Venkat",phone:"123456",address:{city:"Hyd"},photo:"https://picsum.photos/id/1010/60"},
            {id:2,name:"Durga",phone:"787878",address:{city:"Hyd"},photo:"https://picsum.photos/id/1011/60"},
            {id:3,name:"Nitya",phone:"567698",address:{city:"Hyd"},photo:"https://picsum.photos/id/1012/60"},
            {id:4,name:"ABC",phone:null,address:{city:"ABC"},photo:"https://picsum.photos/id/1013/60"},
            {id:5,name:"DEF",phone:null,address:{city:"Upl"},photo:"https://picsum.photos/id/1014/60"}       
         ]
    };
    render()
    {
        return (
        <div>
            <h4 className="m-1 p-1">{this.state.pageTitle}
            <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
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
    onRefreshClick=()=>{
        this.setState({
            customersCount:7
        });
    }
    getPhoneToRender=(phone)=>
    {
       return phone ? phone :<div className="bg-warning p-2 text-center">No Phone</div>
    }
    getCustomerRow=()=>{
        return  (
            this.state.customers.map((cust)=>{
             return(
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td><img src={cust.photo} alt="Customer"></img></td>
                    <td>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                </tr>
             )
            })
        )
    }
}