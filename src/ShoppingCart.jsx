import React,{Component} from "react";
import Product from "./product";
export default class ShoppingCart extends Component{
    //Executed when constructor is mounted(means execution started)
    constructor(props){
        console.log('constructor of shopping cart')
        super(props);//Calling the parent class comstructor which is Component
    //initialisation of state
    this.state={
        products:[
            {id:1,productName:"iPhone",price:8900,quantity:0},
            {id:2,productName:"Sony Camera",price:4500,quantity:0},
            {id:3,productName:"Samsung QLED TV",price:8900,quantity:0},
            {id:4,productName:"iPad Pro",price:7745,quantity:0},
            {id:5,productName:"Xbox",price:12400,quantity:0},
            {id:6,productName:"Dell Monitor",price:900,quantity:0}
        ],
    };
    };

   
    render(){
        console.log('render method of shopping cart')
        return (
        <div className="container-fluid">
            <h4>Shopping Cart</h4>
            <div className="row">
                {
                    this.state.products.map((prod)=>{
                     return <Product key={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} 
                      onDelete={this.handleDelete}
                     >
                        <button className="btn btn-primary">Buy Now</button>
                     </Product>
                    })
                }
            </div>
        </div>
        );
    }
    //Executes after constructor and render() including the life cycle of child components if any
    componentDidMount()
    {
        console.log('componentDidMount of shopping cart');
        
    }
    componentDidUpdate(prevProps,prevState)
    {
        console.log('componentDidUpdate of shopping cart',prevProps,prevState,this.props,this.state);
    }
    handleIncrement=(product,maxValue)=>{
     let allProducts = [...this.state.products];
     let index = allProducts.indexOf(product);
     if(allProducts[index].quantity < maxValue)
     {
        allProducts[index].quantity++;
        this.setState({
           products:allProducts
        })
     }
    
    };
    handleDecrement=(product,minVaue)=>{
     let allProducts = [...this.state.products];
     let index = allProducts.indexOf(product);

     if(allProducts[index].quantity > minVaue)
     {
        allProducts[index].quantity--;
        this.setState({
           products:allProducts
        })
     }    
    };
    handleDelete=(product)=>{
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if(window.confirm("Are you sure to delete"))
        {
            allProducts.splice(index,1);
            this.setState({
                products:allProducts
             });
        }       
    }
}