import React from 'react';
import { Grid,Row,Col,Checkbox,Table,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class KitchenComponent extends React.Component{
    state ={
        kitchenShape:'',
        notSelectedError:false
    }
    componentDidMount(){
        console.log(this.props.match.params.id) 
        // fetch('/users/findByid/'+this.props.match.params.id,{
        //     method:'GET'
        // }).then(res=>res.json())
        // .then(res=> console.log(res) ) 
    }
    handleChange = value =>{
        this.setState({kitchenShape:value})
    }
    submit = e =>{
        const { kitchenShape } = this.state 
        if(kitchenShape){
            fetch("/users/update/"+this.props.match.params.id,{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                body:JSON.stringify({kitchenShape})
            }).then(res=>res.json())
            .then(res=> {
                if(res.success){
                    this.props.history.push('/uShape/'+res.user._id)
                }
            })
        }else{
            this.setState({notSelectedError:true})
        }
    }
    render() {
        let { kitchenShape,notSelectedError } = this.state 
        return (
            <div>
                <h3>What is the shape of your kitchen?</h3>
                <Grid>
                    <Row className="show-grid">
                    <Col sm={6} md={4}>
                        <div>
                            <Button 
                                onClick={()=> this.handleChange("lShape")}
                                bsStyle="primary" 
                                >
                                lShape
                            </Button>    
                        </div> 
                        <div>
                            <Button 
                                onClick={()=> this.handleChange("uShape")} 
                                bsStyle="primary"
                                >
                                uShape
                            </Button>    
                        </div>  
                        <div>
                            <Button 
                                onClick={()=> this.handleChange("pShape")} 
                                bsStyle="primary"
                                >
                                pShape
                            </Button>    
                        </div>  
                        <div>
                            <Button 
                                onClick={()=> this.handleChange("sShape")} 
                                bsStyle="primary"
                                >
                                sShape
                            </Button>    
                        </div>   
                        <div>
                            { notSelectedError &&
                              <span>please select any product</span>  
                            }
                        </div>      
                        <div>
                            <Button onClick={this.submit} >
                                Next
                            </Button>    
                        </div>    
                    </Col>
                    <Col sm={6} md={4}>
                        
                    </Col>
                    <Col sm={6} md={4}>
                        <h2>Estimate</h2>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>Product</th>
                                <th>Selected</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Kitchen</td>
                                <td>
                                    {
                                        kitchenShape &&
                                        <span>
                                            {kitchenShape}
                                        </span>    
                                    }
                                </td>    
                                </tr>
                            </tbody>
                            </Table>
                        
                    </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}