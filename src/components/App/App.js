import React, { Component } from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';
import './App.css';

class App extends Component {
  state = {
    contacts:
      [
        {
          id: 1,
          name: 'bob1',
          surname: 'surnamebob1',

        },
        {
          id: 2,
          name: 'bob2',
          surname: 'surnamebob2',

        },
        {
          id: 3,
          name: 'bob3',
          surname: 'surnamebob3',

        }
      ]
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
