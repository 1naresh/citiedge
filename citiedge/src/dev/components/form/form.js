import React from 'react';
import { FormGroup,FormControl,Button } from 'react-bootstrap';
import './form.css';

export default class FormComponent extends React.Component{
    state={
        name:"",
        phone:"",
        email:"",
        address:"",
        nameError:false,
        phoneError:false,
        emailError:false,
        addressError:false
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit = e =>{
        let { name,phone,email,address } = this.state
        if( name.length < 6 || phone.length < 10 || 
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
             address.length < 5
            ){
                if(name.length <6 ){
                    this.setState({nameError:true})
                }else{
                    this.setState({nameError:false})
                }
                if(phone.length < 10 ){
                    this.setState({phoneError:true})
                }else{
                    this.setState({phoneError:false})
                }
                if( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)  ){
                    this.setState({emailError:true})
                }else{
                    this.setState({emailError:false})
                }
                if(address.length < 5 ){
                    this.setState({addressError:true})
                }else{
                    this.setState({addressError:false})
                }
            }else{
                fetch("/users/update/5b337d161b807517b0c51c0b" ,{
                    method:"POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json', 
                      },
                    body:JSON.stringify({ name,phone,email,address })
                }).then(res=>res.json())
                .then(res=> console.log(res) )
            }
    }
    render() {
        let { name,phone,email,address,nameError,phoneError,emailError,addressError } = this.state
        return (
            <div>
                <h3> register </h3>
                <form className="citi-form" >
                    <FormGroup>
                    <FormControl
                        type="text"
                        value={name}
                        placeholder="Enter your name"
                        onChange={this.handleChange}
                        name="name"
                        maxLength={12}
                    />
                    { nameError && <p> name should be 6 letters </p> }
                    </FormGroup>
                    <FormGroup>
                    <FormControl
                        type="number"
                        value={phone}
                        placeholder="Enter your phone"
                        onChange={this.handleChange}
                        name="phone"
                        maxLength={12}
                    />
                    { phoneError && <p> phone number should be 10 digits </p> }
                    </FormGroup>
                    <FormGroup>
                    <FormControl
                        type="text"
                        value={email}
                        placeholder="Enter your email"
                        onChange={this.handleChange}
                        name="email"
                        maxLength={30}
                    />
                    { emailError && <p> Enter Valid email </p> }
                    </FormGroup>
                    <FormGroup>
                    <FormControl
                        type="text"
                        value={address}
                        placeholder="Enter your address"
                        onChange={this.handleChange}
                        name="address"
                    />
                    { addressError && <p> address should be 5 letters </p> }
                    </FormGroup>
                    <Button 
                        bsStyle="primary"
                        onClick={this.submit}
                    >
                        Primary
                    </Button>
                </form>
            </div>
        );
    }
}