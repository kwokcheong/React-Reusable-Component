import React, {Component, useState} from 'react'; 
import TextBox from './TextBox.js';

export default class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            contact: {
            name: '',
            email: ''
         }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) =>{
        let contactVal = this.state.contact;
        contactVal[e.target.name] = e.target.value;
        this.setState({
            contact : contactVal
        })
    }

    render(){
        return(
            <form>
                <TextBox title="Name:" type="text" name="name" value={this.state.contact.name} passedfunction={this.handleChange} />
                <TextBox title="Email:" type="text" name="email" value={this.state.contact.email} passedfunction={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}