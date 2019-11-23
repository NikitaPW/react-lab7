import React from 'react'

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isPhoneNumber(number) {
    var num = /^([0-9]{9})+$/;
    return num.test(number);
}

class Form extends React.Component{
    constructor(props)
    {
    super(props);
    this.state = {
        age:"",
        name:"",
        email:"",
        phone:"",
        isSaving:false
      };
      this.onChange=this.onChange.bind(this);
    }

    onChange(event){
        this.setState({ [event.target.name] : event.target.value }, ()=>(console.log("The value was changed")));
    }

    render()
    {
    return(
        <div>
            <div style={{border: '1px solid black', borderRadius:'5px', backgroundColor:'lightYellow', padding:'10px', margin:'10px'}}>
                {this.state.isSaving ? <label>Saving...</label>:
                <div>
                <label>Age: </label>
                <input name="age" type="number" min="0" defaultValue="0"
                    onChange={this.onChange}>
                </input>
                <br/><br/>
                    {this.state.age > 18 ? <div>
                <label>Name: </label>
                <input name="name"  onChange={this.onChange}></input>
                <br/><br/>
                <label>Email: </label>
                <input name="email" onChange={this.onChange}></input>
                    {(isEmail(this.state.email) || (this.state.email == "")) ? "" : <label style={{color:'red', marginLeft:'10px'}}>The Email is not valid!</label>}
                </div>
                 :
                <div>
                <label>Parent Name: </label>
                <input name="name" onChange={this.onChange}></input>
                    <br/><br/>
                <label>Parent Phone Number: </label>
                <input name="phone" onChange={this.onChange}></input>
                    {(isPhoneNumber(this.state.phone) || (this.state.phone == "")) ? "" :
                    <label style={{color:'red', marginLeft:'10px'}}>The phone number is not valid! Provide 9 digits of your phone number.</label> }
                </div>}
            </div>}
            </div>
        </div>
        )
    }
}
export default Form