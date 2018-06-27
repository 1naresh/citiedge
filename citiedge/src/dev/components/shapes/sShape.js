import React from 'react';
import { Grid,Row,Col,Checkbox,Table,Button } from 'react-bootstrap';


export default class SShapeComponent extends React.Component{
    state={
        kitchenWallA:0,
        notSelectedError:false
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit = e =>{
        let { kitchenWallA } = this.state
        kitchenWallA = parseInt(kitchenWallA)
        let totalKitchenlength = kitchenWallA
        if( !kitchenWallA ){
            this.setState({notSelectedError:true})
        }else{
            this.setState({notSelectedError:false})
            fetch("/users/update/"+this.props.match.params.id  ,{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json', 
                  },
                body:JSON.stringify({ kitchenWallA,totalKitchenlength })
            }).then(res=>res.json())
            .then( res => {
                if(res.success){
                    if(res.success){
                        if(res.user.isWordrobe){
                            this.props.history.push('/wordrobes/'+res.user._id)
                        }else{
                            if(res.user.isFullInterior){
                                this.props.history.push('/fullInteriors/'+res.user._id)
                            }else{
                                this.props.history.push('/final/'+res.user._id)
                            }
                        }
                    }
                }
            })
        }
    }
    render(){
        let { kitchenWallA,notSelectedError } = this.state
        kitchenWallA = parseInt(kitchenWallA)
        return(
            <div>
                <h3> select sizes </h3>
                <Grid>
                    <Row className="show-grid">
                    <Col sm={6} md={4}>
                        <div>
                            <input 
                                type="range"
                                onChange={this.handleChange}
                                name="kitchenWallA"
                                min={0}
                                max={10}
                                value={kitchenWallA}
                                />
                        </div>
                        <div>
                            {
                                notSelectedError &&
                                <span>
                                    every wall should be selected
                                </span>    
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
                                <th>Shape</th>
                                <th> size  </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Kitchen</td>
                                <td>selected</td>    
                                <td>U Shape</td>    
                                <td>
                                    { 
                                      kitchenWallA 
                                    } 
                                </td>    
                                </tr>
                            </tbody>
                            </Table>
                        
                    </Col>
                    </Row>
                </Grid>
            </div>    
        )
    }
} 