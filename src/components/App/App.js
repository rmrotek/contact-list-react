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

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  render() {
    return (
      <div className='main-container'>
        <h1 className='main-header'>Contact List App</h1>
        <AddContactForm addContactFunction={this.addContact} />
        <div className='contact-list-container'>
          <h3 className='contact-list-header'>Contact List</h3>
          <div className='contact-list'>
            {
              this.state.contacts.map(
                contact => (
                  <div key={contact.id} className='contact-item'>
                    <div className='contact-item-data'>
                      <p>{`Name: ${contact.name}`}</p>
                      <p>{`Surname: ${contact.surname}`}</p>
                    </div>

                    <button className='contact-item-button' onClick={() => this.removeContact(contact.id)}>Remove this contact</button>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
