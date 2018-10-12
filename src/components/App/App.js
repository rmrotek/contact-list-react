import React, { Component } from 'react';
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

  render() {
    return (
      <div>
        {
          this.state.contacts.map(
            contact => (
              <div key={contact.id}>
                {contact.name} {contact.surname}
              </div>
            )
          )
        }
      </div>
    );
  }
}

export default App;
