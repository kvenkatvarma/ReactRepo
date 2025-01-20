import React,{Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default class ProductById extends Component{
    constructor(props)
    {
      super(props);     
      this.state={
        product:[]
      };
    }
   
    render() {
        const { product } = this.state;
    
        return (
            <div className="row">
  <div className="col-lg-6 mx-auto">
                <div className="card m-2">
                    <div className="card-body">
                        {product.length > 0 ? (
                            <div>
                                <div className="text-muted">
                                    # {product[0].id}
                                    <span
                                        className="pull-right hand-icon"
                                        onClick={() => {
                                            this.props.onDelete(product[0]);
                                        }}
                                    >
                                        <i className="fa fa-times"></i>
                                    </span>
                                </div>
                                <h5 className="pt-2 border-top">{product[0].name}</h5>
                                <div>${product[0].id}</div>
                            </div>
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                    <div className="card-footer">
                        <div className="float-left">
                            <span className="badge">{product.length > 0 ? product[0].id : ''}</span>
                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        this.props.onIncrement(product[0], 10);
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        this.props.onDecrement(product[0], 0);
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="float-right">
                            <Link to="/cart" className="btn btn-secondary">Back...</Link>
                            {this.props.children}
                            </div>
                    </div>
                </div>
            </div>
            </div>
        );
            
          
    }
     componentDidMount=async()=>{
        document.title = "Product - eCommerce"
       var id = this.props.match.params.id;
       var response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`,{method:"GET"});
       var body = await response.json(); 
       if(body)
       {
            this.setState({
                product:body
            });
            console.log(body);
       }
     }
}