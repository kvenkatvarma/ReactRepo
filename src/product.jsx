import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class Product extends Component{
    constructor(props)
    {
      super(props);   
      this.state={product:this.props.product};
    }
   
     render(){        
        return (
           
            <div className="col-lg-6">
                <div className="card m-2">
                <div className="card-body">
                        <div className="text-muted"># {this.state.product.id}
                            <span className="pull-right hand-icon" onClick={()=>{
                                this.props.onDelete(this.state.product);
                            }}>
                                <i className="fa fa-times"></i>
                            </span>
                        </div>
                        <h5 className="pt-2 border-top">{this.state.product.title}</h5>
                        <div>$ {this.state.product.id}</div>
                </div>
                <div className="card-footer">
                    <div className="float-left">
                        <span className="badge">{this.state.product.id}</span>
                        <div className="btn-group">
                            <button className="btn btn-outline-success" onClick={()=>{this.props.onIncrement(this.state.product,10);}}>+</button>
                            <button className="btn btn-outline-success" onClick={()=>{this.props.onDecrement(this.state.product,0);}}>-</button>
                        </div>
                    </div>
                    <div className="float-right">
                        <Link to={`product/${this.state.product.id}`} className="mr-2" >Details</Link>
                        {this.props.children}
                        </div>                    
                </div>
                </div>            
            </div>
        );
     }   
}