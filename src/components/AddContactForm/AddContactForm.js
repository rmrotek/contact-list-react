import React, { Component } from 'react';
import './AddContactForm.css'


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
    this.setState({ contactName: '', contactSurname: '', error: null });
  }

  handleNameChange = event => {
    if(event.target.value.match(/^[a-ząśżźćęółń]+$/i)) {
      this.setState({
        contactName: event.target.value
      })
    } else {
      return this.setState({error: new Error('Can only enter letters')})
    }
    
  }

  handleSurnameChange = event => {
    if(event.target.value.match(/^[a-ząśżźćęółń]+$/i)) {
      this.setState({
        contactSurname: event.target.value
      })
    } else {
      return this.setState({error: new Error('Can only enter letters')})
    }

    
  }

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.preventSubmit} >
          <p className='form-error'>
            {
              this.state.error && <span>{this.state.error.message}</span>
            }
          </p>
          <p>
            <input type='text' placeholder='Enter name here' value={this.state.contactName} onChange={this.handleNameChange} />

          </p>
          <p>
            <input placeholder='Enter surname here' value={this.state.contactSurname} onChange={this.handleSurnameChange} />

          </p>
          <button>ADD</button>


        </form>
      </div>
    )
  }
}

export default AddContactForm