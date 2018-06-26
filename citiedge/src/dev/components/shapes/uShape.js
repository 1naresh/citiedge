import React from 'react';

export default class UShapeComponent extends React.Component{
    
    render(){
        return(
            <div>
                UShapeComponent

                <div>
                    <input type='range' />
                </div>    
                {/* <button onClick={this.next} >
                    next
                </button>     */}
            </div>    
        )
    }
} 