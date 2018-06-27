import React from 'react';
import { Grid,Row,Col,Checkbox,Table,Button } from 'react-bootstrap';

export default class FullInteriorsComponent extends React.Component{
    state={
        isKitchen:false,
        totalKitchenlength:0,
        kitchenShape:"" ,
        isWordrobe:false ,
        wordrobesType:"",
        entertainment:false,
        study:false,
        crockery:false

    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        fetch('/users/findByid/'+this.props.match.params.id,{
            method:'GET'
        }).then(res=>res.json())
        .then(res=> {
            let { isKitchen,totalKitchenlength,kitchenShape,isWordrobe,wordrobesType } = res.user
            this.setState({isKitchen,totalKitchenlength,kitchenShape,isWordrobe,wordrobesType})
        } ) 
    }
    handleChange = value =>{
        this.setState(state=>{
            if(value==="entertainment"){
                state.entertainment=!state.entertainment
            }
            if(value==="study"){
                state.study=!state.study
            }
            if(value==="crockery"){
                state.crockery=!state.crockery
            }
        })
    } 
    submit = e =>{
        let { entertainment,study,crockery } = this.state
        fetch("/users/update/"+this.props.match.params.id  ,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
              },
            body:JSON.stringify({ entertainment,study,crockery })
        }).then(res=>res.json())
        .then(res=> {
            if(res.success){
                this.props.history.push('/final/'+res.user._id)
            }
        } )
    }
    render() {
        let { isKitchen,totalKitchenlength,kitchenShape,isWordrobe,wordrobesType,
                entertainment,study,crockery } = this.state
        return (
            <div>
                <h3> Full Interiors </h3>
                <Grid>
                    <Row className="show-grid">
                    <Col sm={6} md={4}>
                        <div>
                            <input 
                                type="checkbox"
                                onChange={ ()=> this.handleChange("entertainment")} 
                                />
                            Entertainment Unit (optipnal)
                        </div>   
                        <div>
                            <input 
                                type="checkbox"
                                onChange={ ()=> this.handleChange("study")}
                                />
                                Study (optipnal)
                        </div>   
                        <div>
                            <input 
                                type="checkbox"
                                onChange={ ()=> this.handleChange("crockery")}
                                />
                            Crockery (optipnal)
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
                                <th> Selected </th>
                                <th>Shape</th>
                                <th> size  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    isKitchen &&
                                    <tr>
                                        <td>Kitchen</td>
                                        <td> yes </td>
                                        <td> {kitchenShape} </td>
                                        <td>{totalKitchenlength} </td>
                                    </tr>    
                                }
                                {
                                    isWordrobe &&
                                    <tr>
                                        <td>Wordrobes </td>    
                                        <td> yes </td>    
                                        <td> {wordrobesType} </td>
                                        <td> - </td>
                                    </tr>    
                                }
                                <tr>
                                    <td>Entertainment Unit </td>
                                    <td>
                                        {
                                            entertainment &&
                                            <span>
                                                yes
                                            </span>    
                                        }
                                    </td>
                                    <td> - </td>
                                    <td> - </td>
                                </tr>   
                                <tr>
                                    <td>Study Unit </td>
                                    <td>
                                        {
                                            study &&
                                            <span>
                                                yes
                                            </span>    
                                        }
                                    </td>
                                    <td> - </td>
                                    <td> - </td>
                                </tr>   
                                <tr>
                                    <td>Crockery Unit </td>
                                    <td>
                                        {
                                            crockery &&
                                            <span>
                                                yes
                                            </span>    
                                        }
                                    </td>
                                    <td> - </td>
                                    <td> - </td>
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