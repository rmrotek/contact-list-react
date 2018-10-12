import React, { Component } from 'react';


class AddContactForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input />
        <button>ADD</button>
      </form>
    )
  }
}

export default AddContactForm