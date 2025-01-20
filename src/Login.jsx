import React,{Component} from "react";

export default class Login extends Component{
    constructor(props)
    {
     super(props);
     this.state={
        email:"",password:"",message:""
     }
    }
render(){
    return (
        <div className="row">            
    <div className="col-lg-6 mx-auto" >
        <h4 className="my-1 py-2 border-bottom">Login</h4>

       <div className="form-group form-row">
            <label className="col-lg-4">Email:</label>
            <input type="text" className="form-control" value={this.state.email} onChange={(event)=>{
            this.setState({ email:event.target.value});
            }}/>
       </div>

       <div className="form-group form-row">
            <label className="col-lg-4">Password:</label>
            <input type="password" className="form-control" value={this.state.password} onChange={(event)=>{
            this.setState({ password:event.target.value});
            }}/>
       </div>
       <div className="text-right">
        {this.state.message}
        <button className="btn btn-primary m-1" onClick={this.onLoginClick}>Login</button>
       
       </div>
    </div>
    </div>
    );
}
componentDidMount(){
    document.title = "Login-eCommerce"
}
onLoginClick=async ()=>
{
    var response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${this.state.email}&name=${this.state.password}`,{method:"GET"});

    var body =await response.json();
    if(body.length > 0)
    {
        this.setState({
            message : <span className="text-success">Successfully Logged in</span>
        }) 
        //Call the App component updateIsLoggedInStatus method
        this.props.updateIsLoggedInStatus(true);
        //navigate to dashboard
        this.props.history.replace("/dashboard");
    }
    else
    {
        //error message
        this.setState({
            message : <span className="text-danger">Invalid Login, Please try again</span>
        })
    }
}
}