import React from 'react';

export default class KitchenComponent extends React.Component{
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                KitchenComponent
            </div>
        );
    }
}