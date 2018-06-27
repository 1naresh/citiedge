import React from 'react';
import { Grid,Row,Col,Checkbox,Table,Button } from 'react-bootstrap';

export default class ProductsComponent extends React.Component{
    state={
        isKitchen:false,
        isWordrobe:false,
        isFullInterior:false,
        notSelectedError:false
    } 
    componentDidMount(){
        // console.log(this.props.foo)
    }
    handleChange = value =>{
        this.setState(state=>{
            if(value==="kicthen"){
                state.isKitchen=!state.isKitchen
            }
            if(value==="wordrobes"){
                state.isWordrobe=!state.isWordrobe
            }
            if(value==="fullInteriors"){
                state.isFullInterior=!state.isFullInterior
            }
        })
    }
    submit = e =>{
        let { isKitchen,isWordrobe,isFullInterior } = this.state
        if( isKitchen || isWordrobe || isFullInterior ){
            fetch("/users/create",{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json', 
                  },
                body:JSON.stringify({isKitchen,isWordrobe,isFullInterior})
            }).then(res=>res.json()) 
            .then(res=> {
                if(res.success){
                    if(isKitchen){
                        this.props.history.push("/kitchen/"+ res.data._id )
                    }else{
                        if(isWordrobe){
                            this.props.history.push("/wordrobes/"+ res.data._id )
                        }else{
                            if(isFullInterior){
                                this.props.history.push("/fullInteriors/"+ res.data._id )   
                            }
                        }
                    }
                }
            })
        }else{
            this.setState({notSelectedError:true})
        }
    }
    render() {
        let { isKitchen,isWordrobe,isFullInterior,notSelectedError } = this.state
        return (
            <div>
                <h3>i need following interior products</h3>
                <Grid>
                    <Row className="show-grid">
                    <Col sm={6} md={4}>
                        <div>
                            <input 
                                type="checkbox"
                                onChange={ ()=> this.handleChange("kicthen")} 
                                />
                            Kitchen
                        </div>   
                        <div>
                            <input 
                                type="checkbox"
                                onChange={ ()=> this.handleChange("wordrobes")}
                                />
                                Wordrobe
                        </div>   
                        <div>
                            <input 
                                type="checkbox"
                                onChange={ ()=> this.handleChange("fullInteriors")}
                                />
                            Full Interiors
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
                                        isKitchen &&
                                        <span>
                                            Selected
                                        </span>    
                                    }
                                </td>    
                                </tr>
                                <tr>
                                <td>Wordrobe</td>
                                <td>
                                    {
                                        isWordrobe &&
                                        <span>
                                            Selected
                                        </span>    
                                    }
                                </td>
                                </tr>
                                <tr>
                                <td>Full Interiors</td>
                                <td>
                                    {
                                        isFullInterior &&
                                        <span>
                                            Selected
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