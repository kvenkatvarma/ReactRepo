import React,{Component} from "react";
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",password:"",fullName:"",dateOfBirth:"",gender:"",country:"",receiveNewsLetters:false,
            controls:["email","password","fullName","dateOfBirth","gender","country","receiveNewsLetters"],
            errors:{
                email:[],
                password:[],
                fullName:[],
                dateOfBirth:[],
                gender:[],country:[],receiveNewsLetters:[]
            },
            message:"",
            dirty:{
                email:false,
                password:false,
                fullName:false,
                dateOfBirth:false,gender:false,country:false,receiveNewsLetters:false
            }
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
                        <input type="text" autoFocus className="form-control" onBlur={(event)=>{
                            let dirty = this.state.dirty;
                            dirty.email = true;
                            this.setState({dirty:dirty},this.validate)
                        }} id="email" value={this.state.email} onChange={(event)=>{
                            let dirty = this.state.dirty;
                            dirty.email =true;
                            this.setState({email:event.target.value,dirty:dirty},this.validate);
                           
                        }}/>
                      </div>
                    </div>

                    <div className="form-group form-row">
                      <label className="col-lg-4 col-form-label" htmlFor="password">Password</label>
                      <div className="col-lg-8">
                        <input type="password" className="form-control" id="password" onBlur={(event)=>{
                            let dirty = this.state.dirty;
                            dirty.password = true;
                            this.setState({dirty:dirty},this.validate)
                        }} value={this.state.password} onChange={(event)=>{
                               let dirty = this.state.dirty;
                               dirty.email =true;
                            this.setState({password:event.target.value,dirty:dirty},this.validate);
                           
                        }}/>
                      </div>
                    </div>

                    <div className="form-group form-row">
                      <label className="col-lg-4 col-form-label" htmlFor="fullname">Full Name</label>
                      <div className="col-lg-8">
                        <input type="text" className="form-control" id="fullname" onBlur={(event)=>{
                            let dirty = this.state.dirty;
                            dirty.fullName = true;
                            this.setState({dirty:dirty},this.validate)
                        }} value={this.state.fullName} onChange={(event)=>{
                               let dirty = this.state.dirty;
                               dirty.email =true;
                            this.setState({fullName:event.target.value,dirty:dirty},this.validate);
                          
                        }}/>
                      </div>
                    </div>

                    <div className="form-group form-row">
                      <label className="col-lg-4 col-form-label" htmlFor="dateOfBirth">Date of Birth</label>
                      <div className="col-lg-8">
                        <input type="date" className="form-control" id="dateOfBirth" onBlur={(event)=>{
                            let dirty = this.state.dirty;
                            dirty.dateOfBirth = true;
                            this.setState({dirty:dirty},this.validate)
                        }} value={this.state.dateOfBirth} onChange={(event)=>{
                               let dirty = this.state.dirty;
                               dirty.email =true;
                            this.setState({dateOfBirth:event.target.value,dirty:dirty},this.validate);
                           
                        }}/>
                      </div>
                    </div>

                    <div className="form-group form-row">
                    <label className="col-lg-4" >Gender</label>
                    <div className="col-lg-8">
                        <div className="form-check">
                          <input type="radio" id="male" name="gender" className="form-check-input" value="male" onBlur={(event)=>{ 
                            let dirty = this.state.dirty;dirty.gender = true;
                            this.setState({gender:event.target.value,dirty:dirty})}} onChange={(event)=>{ 
                            let dirty = this.state.dirty;dirty.gender = true;
                            this.setState({gender:event.target.value,dirty:dirty})}} checked={this.state.gender === 'male' ?true:false}></input>
                        <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                       
                        <div className="form-check">
                          <input type="radio" id="female" name="gender" className="form-check-input" value="female" onBlur={(event)=>{   let dirty = this.state.dirty;dirty.gender = true;this.setState({gender:event.target.value,dirty:dirty})}} onChange={(event)=>{   let dirty = this.state.dirty;dirty.gender = true;this.setState({gender:event.target.value,dirty:dirty})}} checked={this.state.gender === 'female' ?true:false}></input>
                          <label className="form-check-label" htmlFor="female">FeMale</label>
                        </div>
                       
                    </div>
                    
                    </div>
                    <div className="form-group form-row">
                    <label className="col-lg-4 col-form-label" htmlFor="country" >Country</label>
                    <div className="col-lg-8">
                         <select className="form-control" value={this.state.country} onChange={(event)=>{
                            let dirty = this.state.dirty;
                            dirty.country = true;
                            this.setState({country:event.target.value,dirty:dirty},this.validate)
                         }} onBlur={(event)=>{
                            let dirty = this.state.dirty;
                            dirty.country = true;
                            this.setState({dirty:dirty})
                         }}>
                            <option value="">Please Select</option>
                            <option value="India">India</option>
                            <option value="Aus">Australia</option>
                            <option value="NZ">New zealand</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                         </select>

                    </div>
                    </div>

                    <div className="form-group form-row">
                        <label className="col-lg-4" htmlFor="country" ></label>
                        <div className="col-lg-8">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="receivedNewsLetters" value="true" checked={this.state.receiveNewsLetters} onChange={(event)=>{
                                    let dirty = this.state.dirty;
                                    dirty.receiveNewsLetters = true;
                                    this.setState({receiveNewsLetters:event.target.checked,dirty:dirty},this.validate)
                                }} onBlur={(event)=>{
                                    let dirty = this.state.dirty;
                                    dirty.receiveNewsLetters = true;
                                    this.setState({dirty:dirty})
                                }}></input>
                                <label className="form-check-label" htmlFor="receivedNewsLetters">Receive News Letters</label>
                            </div>
                        </div>
                    </div>

                   <div className="row">
                       <div className="col-lg-12">
                        <div className="text-right">{this.state.message}</div>
                          <div className="text-right">
                            <button className="btn btn-success m-2" onClick={this.onRegisterClick}>Register</button>
                          </div>
                          <ul className="text-danger">
                            {Object.keys(this.state.errors).map((control)=>{
                                if(this.state.dirty[control])
                                {
                                     return this.state.errors[control].map((err)=>{
                                       return <li key={err}>{err}</li>
                                     })
                                }
                                else
                                {
                                    return "";
                                }
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
                    case "gender":
                        if(!this.state[control])
                            {
                             errors[control].push("Gender cannot be blank");
                            } 
                        break;
                        case "country":
                            if(!this.state[control])
                                {
                                 errors[control].push("Country cannot be blank");
                                } 
                            break;
            default:

             break;
           }
        });
        this.setState({errors})
    };
    onRegisterClick=()=>
    {
        var dirty = this.state.dirty;
        Object.keys(dirty).forEach((control)=>{
            dirty[control] = true;
        });
        this.setState({dirty})
        this.validate();
        if(this.isValid())
        {
              this.setState({message:"Valid"});
        }
        else{
            this.setState({message:"InValid"});
        }
    }
    isValid=()=>{
        let valid = true;
       for(let control in this.state.errors)
       {
        if(control.length > 0){
            valid = false;
        }
       }
        return valid;
    }
}

export default Register;