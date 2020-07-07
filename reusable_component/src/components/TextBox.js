import React, {Component} from 'react';

export default class TextBox extends Component{
    render(){

        return(
            <div>
            <label>{this.props.title}</label>
            <input type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.passedfunction}/>
            </div>
        )
    }
}