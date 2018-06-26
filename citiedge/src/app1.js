import React from 'react';
import { typography } from 'material-ui/styles';

export default class App extends React.Component{
    state={
            myimg:""
        }
    
    componentDidMount(){
        fetch('/managers/getimg',{
            method: 'GET'
        }).then(res=>res.json())
        .then(res=> this.setState({ myimg :res.img }) )
    }
    added = e =>{
        var fReader = new FileReader();
        fReader.readAsDataURL(e.target.files[0]);
        const scope = this
        fReader.onloadend = function(event){
            fetch('/managers/addimg', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({  img:event.target.result})
            }).then(res=>res.json())
            .then(res=> scope.setState( console.log(res) ) )
        }
    }
    render() { 
        return (
            <div>
                <input type="file" onChange={this.added} />
                {
                     this.state.myimg &&  
                <a href={this.state.myimg} download>download</a>
                     
                 }
              
                 
            </div>
        );
    }
}