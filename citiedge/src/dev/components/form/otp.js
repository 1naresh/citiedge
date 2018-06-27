import React from 'react';
import { FormGroup,FormControl,Button } from 'react-bootstrap';


export default class OtpComponent extends React.Component{
    state={
        otp:"",
        otpError:""
    }
    componentDidMount(){
        fetch('users/getOtp/5b337d161b807517b0c51c0b',{
            method:"GET",
        }).then(res=>res.json())
        .then( res =>console.log(res) )
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        let { otp } = this.state
        return (
            <div>
                <h3>otp </h3>
                <form className="citi-form" >
                    <FormGroup>
                    <FormControl
                        type="text"
                        value={otp}
                        placeholder="Enter otp here"
                        onChange={this.handleChange}
                        maxLength={6}
                        name="otp"
                    />
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