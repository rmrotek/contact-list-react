import React, { Component } from 'react';


class AddContactForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name
        <input />

        </p>
        <p>Surname
        <input />

        </p>


        <button>ADD</button>
      </form>
    )
  }
}

export default AddContactForm