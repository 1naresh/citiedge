import React from 'react';
import { Table } from 'react-bootstrap';

export default class FinalComponent extends React.Component{
    state={
        isKitchen:false,
        isWordrobe:false,
        isFullInterior:false,
        kitchenShape:"",
        kitchenWallA:0,
        kitchenWallB:0,
        kitchenWallC:0,
        totalKitchenlength:0,
        wordrobesType:"",
        entertainment:false,
        study:false,
        crockery:false
    }
    componentDidMount(){
        fetch('/users/findByid/'+this.props.match.params.id,{
            method:'GET'
        }).then(res=>res.json())
        .then(res=> {
            let { isKitchen,isWordrobe,isFullInterior,kitchenShape,kitchenWallA,
                    kitchenWallB,kitchenWallC,totalKitchenlength,wordrobesType,
                    entertainment,study,crockery } = res.user
            this.setState({isKitchen,isWordrobe,isFullInterior,kitchenShape,
                            kitchenWallA,kitchenWallB,kitchenWallC,study,
                            totalKitchenlength,wordrobesType,entertainment,crockery})
        } ) 
    }
    render() {
        let { isKitchen,isWordrobe,isFullInterior,kitchenShape,kitchenWallA,
            kitchenWallB,kitchenWallC,totalKitchenlength,wordrobesType,
            entertainment,study,crockery } = this.state
        return (
            <div>
                your details
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Estimated Cost</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <td> Kitchen </td>    
                            {
                                isKitchen ?
                                <td>selectd</td>:
                                <td> not selectd </td>
                            }
                        </tr>
                        {
                            isKitchen &&
                            <tr>
                                <td> Kitchen Shape </td> 
                                <td>{kitchenShape} </td> 
                            </tr>    
                        }
                        {
                            isKitchen &&
                            <tr>
                                <td> Kitchen Length </td>
                                <td> {totalKitchenlength} </td>
                            </tr>    
                        }
                        <tr>
                            <td> Wordrobes </td>    
                            {
                                isWordrobe ?
                                <td> selectd </td> :
                                <td> not selectd </td>
                            }    
                        </tr> 
                        {
                            isWordrobe &&
                            <tr>
                                <td>wordrobe type</td>
                                <td> {wordrobesType} </td>
                            </tr>    
                        } 
                        {
                            entertainment &&
                            <tr> 
                                <td>Entertainment </td>
                                <td>selectd</td>
                            </tr>    
                        }
                        {
                            study &&
                            <tr> 
                                <td>Study </td>
                                <td>selectd</td>
                            </tr>    
                        }
                        {
                            crockery &&
                            <tr> 
                                <td> Crockery </td>
                                <td>selectd</td>
                            </tr>    
                        }
                    </tbody>        
                </Table>
            </div>
        );
    }
}