import React, { Component } from "react";

export default class MainContent extends Component
{
    state ={pageTitle:"Customers",customersCount:5,
        customers:[
            {id:1,name:"Venkat",phone:"123456",address:{city:"Hyd"}},
            {id:2,name:"Durga",phone:"787878",address:{city:"Hyd"}},
            {id:3,name:"Nitya",phone:"567698",address:{city:"Hyd"}},
            {id:4,name:"ABC",phone:"87876",address:{city:"ABC"}},
            {id:5,name:"DEF",phone:"909989",address:{city:"Upl"}}       
         ]
    };
    render()
    {
        return (
        <div>
            <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
            <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.customers.map((cust)=>{
                         return(
                            <tr key={cust.id}>
                                <td>{cust.id}</td>
                                <td>{cust.name}</td>
                                <td>{cust.phone}</td>
                                <td>{cust.address.city}</td>
                            </tr>
                         )
                        })
                    }
                    
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
}