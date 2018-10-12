import React, { Component } from 'react';


class AddContactForm extends Component {

  state = {
    contactName:'',
    contactSurname:'',
    needNameError: null,
    needSurnameError: null

  }
  
  preventSubmit = event => {
    event.preventDefault();
    
  }

  handleNameChange= event => {
    this.setState({
      contactName: event.target.value
    })
  }

  handleSurnameChange= event => {
    this.setState({
      contactSurname: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.preventSubmit}>
        <p>Name
        <input value={this.state.contactName} onChange={this.handleNameChange}/>

        </p>
        <p>Surname
        <input value={this.state.contactSurname} onChange={this.handleSurnameChange}/>

        </p>


        <button>ADD</button>
      </form>
    )
  }
}

export default AddContactForm