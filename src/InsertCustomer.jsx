import { event } from "jquery";
import React,{Component} from "react";

export default class createCustomer extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:"",title:"",body:""
        };
    }
    render(){
        return (
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <form>
                    <h4 className="p-2 border-bottom">New Customer</h4>
                  <div className="form-group form-row">
                      <label className="col-lg-4">Customer Title</label>
                      <div className="col-lg-8">
                        <input type="text" className="form-control" value={this.state.title} onChange={(event)=>{this.setState({
                            title:event.target.value
                        })}}></input>
                      </div>
                  </div>

                  <div className="form-group form-row">
                      <label className="col-lg-4">Body</label>
                      <div className="col-lg-8">
                        <input type="text" className="form-control" value={this.state.body} onChange={(event)=>{this.setState({
                            body:event.target.value
                        })}}></input>
                      </div>
                  </div>
                 
                 <div className="row border-top p-2">
                    <button className="btn btn-success" onClick={this.onSaveClick}>Save</button>
                 </div>
                 </form>
              </div>
            </div>
        );
    }
    onSaveClick=async(event)=>{
        event.preventDefault();
        var customer={title:this.state.title,body:this.state.body}
   var response = await fetch('https://jsonplaceholder.typicode.com/posts',{method:"POST",body:JSON.stringify(customer),headers:{
    "Content-type":"application/json",
   },});

   var body = await response.json();
   if(body)
   {
    this.props.history.replace("/customers");
   }
    }
}