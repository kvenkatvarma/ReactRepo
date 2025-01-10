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
         
        ],
    };
    };

   
    render(){
        console.log('render method of shopping cart')
        return (
        <div >
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
     componentDidMount=async ()=>
    {
       var response = await fetch('https://jsonplaceholder.typicode.com/posts',{method:"GET"});   
       var prods = await response.json();   
       this.setState({
        products:prods
       })
    }
    componentDidUpdate(prevProps,prevState)
    {
       
    }
    componentWillUnmount()
    {
      
    }
    componentDidCatch(error,info)
    {
       
    }
    handleIncrement=(product,maxValue)=>{
     let allProducts = [...this.state.products];
     let index = allProducts.indexOf(product);
     if(allProducts[index].id < maxValue)
     {
        allProducts[index].id++;
        this.setState({
           products:allProducts
        })
     }
    
    };
    handleDecrement=(product,minVaue)=>{
     let allProducts = [...this.state.products];
     let index = allProducts.indexOf(product);

     if(allProducts[index].id > minVaue)
     {
        allProducts[index].id--;
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