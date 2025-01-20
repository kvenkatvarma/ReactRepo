import React,{Component} from "react";
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",password:"",fullName:"",dateOfBirth:"",
            controls:["email","password","fullName","dateOfBirth"],
            errors:{
                email:[],
                password:[],
                fullName:[],
                dateOfBirth:[],
            },
        };
    }
    render(){
        return(
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h1>Register</h1>
                    <div className="form-group form-row">
                      <label className="col-lg-4 col-form-label" htmlFor="email">Email</label>
                      <div className="col-lg-8">
                        <input type="text" className="form-control" id="email" value={this.state.email} onChange={(event)=>{
                            this.setState({email:event.target.value},this.validate);
                           
                        }}/>
                      </div>
                    </div>

                    <div className="form-group form-row">
                      <label className="col-lg-4 col-form-label" htmlFor="password">Password</label>
                      <div className="col-lg-8">
                        <input type="password" className="form-control" id="password" value={this.state.password} onChange={(event)=>{
                            this.setState({password:event.target.value},this.validate);
                           
                        }}/>
                      </div>
                    </div>

                    <div className="form-group form-row">
                      <label className="col-lg-4 col-form-label" htmlFor="fullname">Full Name</label>
                      <div className="col-lg-8">
                        <input type="text" className="form-control" id="fullname" value={this.state.fullName} onChange={(event)=>{
                            this.setState({fullName:event.target.value},this.validate);
                          
                        }}/>
                      </div>
                    </div>

                    <div className="form-group form-row">
                      <label className="col-lg-4 col-form-label" htmlFor="dateOfBirth">Date of Birth</label>
                      <div className="col-lg-8">
                        <input type="date" className="form-control" id="dateOfBirth" value={this.state.dateOfBirth} onChange={(event)=>{
                            this.setState({dateOfBirth:event.target.value},this.validate);
                           
                        }}/>
                      </div>
                    </div>

                   <div className="row">
                       <div className="col-lg-12">
                          <div className="text-right">
                            <button className="btn btn-success m-2" onClick={this.onRegisterClick}>Register</button>
                          </div>
                          <ul className="text-danger">
                            {Object.keys(this.state.errors).map((control)=>{
                                     return this.state.errors[control].map((err)=>{
                                       return <li key={err}>{err}</li>
                                     })
                            })}
                          </ul>
                       </div>
                   </div>
                </div>
            </div>
        );
    }
    validate=()=>{
        let errors = {};
        this.state.controls.forEach((control)=>{       
            errors[control]=[];
           switch(control)
           {
            case "email":
              if(!this.state[control])
                {
                 errors[control].push("Email cannot be blank");
                } 
            break;
           case "password":
            if(!this.state[control])
                {
                 errors[control].push("Password cannot be blank");
                } 
            break;
            case "fullName":
                if(!this.state[control])
                    {
                     errors[control].push("fullName cannot be blank");
                    } 
                break;

                case "dateOfBirth":
                    if(!this.state[control])
                        {
                         errors[control].push("Date of Birth cannot be blank");
                        } 
                    break;
            default:

             break;
           }
        });
        this.setState({errors})
    };
}

export default Register;