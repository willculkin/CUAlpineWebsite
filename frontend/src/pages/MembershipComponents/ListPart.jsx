import React, {Component} from 'react';

class ListPart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<li>{this.props.value.name}:{this.props.value.age}</li>);
    }
}
export default ListPart;