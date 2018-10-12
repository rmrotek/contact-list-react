import React, { Component } from 'react';


class AddContactForm extends Component {

  state = {
    contactName: '',
    contactSurname: '',
    error: null,

  }

  preventSubmit = event => {
    event.preventDefault();
    if (this.state.contactName === '' || this.state.contactSurname === '') {
      this.setState({
        error: new Error('Fields cant be empty')
      })
      return;
    }
    this.props.addContactFunction(this.state.contactName, this.state.contactSurname);
    this.setState({ contactName: '', contactSurname: '', error: null});
  }

  handleNameChange = event => {
    this.setState({
      contactName: event.target.value
    })
  }

  handleSurnameChange = event => {
    this.setState({
      contactSurname: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.preventSubmit}>
        <p>Name
        <input value={this.state.contactName} onChange={this.handleNameChange} />

        </p>
        <p>Surname
        <input value={this.state.contactSurname} onChange={this.handleSurnameChange} />

        </p>
        <button>ADD</button>
        {
          this.state.error && <span>{this.state.error.message}</span>
        }
      </form>
    )
  }
}

export default AddContactForm