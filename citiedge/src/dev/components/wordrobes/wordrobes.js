import React from 'react';
import { Grid,Row,Col,Checkbox,Table,Button } from 'react-bootstrap';

export default class WordrobesComponent extends React.Component{
    state={
        isKitchen:false,
        totalKitchenlength:0,
        kitchenShape:"",
        wordrobesType:"",
        notSelectedError:false
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        fetch('/users/findByid/'+this.props.match.params.id,{
            method:'GET'
        }).then(res=>res.json())
        .then(res=> {
            let { isKitchen,totalKitchenlength,kitchenShape } = res.user
            this.setState({isKitchen,totalKitchenlength,kitchenShape})
        } ) 
    }
    handleChange = value =>{
        this.setState({
            wordrobesType:value
        })
    }
    submit = e =>{
        let { wordrobesType } = this.state
        if(!wordrobesType){
            this.setState({notSelectedError:true})
        }else{
            fetch("/users/update/"+this.props.match.params.id  ,{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json', 
                  },
                body:JSON.stringify({ wordrobesType })
            }).then(res=>res.json())
            .then(res=> {
                if(res.success){
                    if(res.user.isFullInterior){
                        this.props.history.push('/fullInteriors/'+res.user._id)
                    }else{
                        this.props.history.push('/final/'+res.user._id)
                    }
                }else{
                    console.log("some thing went wrong")
                }
            } )

        }
    }
    render() {
        let { isKitchen,totalKitchenlength,kitchenShape,wordrobesType,notSelectedError } =this.state
        return (
            <div>
                <h3> select wordrobes </h3>
                <Grid>
                    <Row className="show-grid">
                    <Col sm={6} md={4}>
                        <div>
                            <Button 
                                onClick={()=> this.handleChange("twoDoors")}
                                bsStyle="primary" 
                                >
                                Two Doors
                            </Button>   
                        </div>
                        <div>
                            <Button 
                                onClick={()=> this.handleChange("aboveTwo")}
                                bsStyle="primary" 
                                >
                                Two Above
                            </Button>   
                        </div>
                        <div>
                            <Button 
                                onClick={()=> this.handleChange("sliding")}
                                bsStyle="primary" 
                                >
                                sliding
                            </Button>   
                        </div>    
                        {
                            notSelectedError &&
                            <span>
                                please select any wordrobe
                            </span>    
                        }
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
                                <th>Shape</th>
                                <th> size  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    isKitchen &&
                                    <tr>
                                        <td>Kitchen</td>
                                        <td> {kitchenShape} </td>
                                        <td>{totalKitchenlength} </td>
                                    </tr>    
                                }
                                <tr>
                                    <td>Wordrobes</td>
                                    <td> {wordrobesType} </td>
                                    <td></td>
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