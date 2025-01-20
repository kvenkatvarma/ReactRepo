import React,{Component} from "react";
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",password:"",fullName:"",dateOfBirth:""
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
                            this.setState({email:event.target.value})
                        }}/>
                      </div>
                    </div>

                    <div className="form-group form-row">
                      <label className="col-lg-4 col-form-label" htmlFor="password">Password</label>
                      <div className="col-lg-8">
                        <input type="password" className="form-control" id="password" value={this.state.password} onChange={(event)=>{
                            this.setState({password:event.target.value})
                        }}/>
                      </div>
                    </div>

                    <div className="form-group form-row">
                      <label className="col-lg-4 col-form-label" htmlFor="fullname">Full Name</label>
                      <div className="col-lg-8">
                        <input type="text" className="form-control" id="fullname" value={this.state.fullName} onChange={(event)=>{
                            this.setState({fullName:event.target.value})
                        }}/>
                      </div>
                    </div>

                    <div className="form-group form-row">
                      <label className="col-lg-4 col-form-label" htmlFor="dateOfBirth">Date of Birth</label>
                      <div className="col-lg-8">
                        <input type="date" className="form-control" id="dateOfBirth" value={this.state.dateOfBirth} onChange={(event)=>{
                            this.setState({dateOfBirth:event.target.value})
                        }}/>
                      </div>
                    </div>

                   <div className="row">
                       <div className="col-lg-12">
                          <div className="text-right">
                            <button className="btn btn-success m-2" onClick={this.onRegisterClick}>Register</button>
                          </div>
                       </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Register;