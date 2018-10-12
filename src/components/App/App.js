import React, { Component } from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';
import './App.css';

class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]')
  }

  addContact = (name, surname) => {
    this.setState({
      contacts: this.state.contacts.concat({
        id: Date.now(),
        name: name,
        surname: surname
      })
    })
  }

  removeContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contactId !== contact.id
      )
    })
  }

  componentDidUpdate(){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  render() {
    return (
      <div>
        <h1>Contact List App</h1>
        <AddContactForm addContactFunction={this.addContact}/>
        <div>
          <h3>Contact List</h3>
          {
            this.state.contacts.map(
              contact => (
                <div key={contact.id}>
                  {contact.name} {contact.surname}
                  <button onClick={() => this.removeContact(contact.id)}>Remove</button>
                </div>
              )
            )
          }
        </div>

      </div>
    );
  }
}

export default App;
