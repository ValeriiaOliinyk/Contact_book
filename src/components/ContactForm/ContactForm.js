import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';
import './Contact.scss';

class ContactForm extends Component {
  state = { name: '', number: '' };

  updateContacts = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  getSameName = name => {
    const { contacts } = this.props;
    return contacts.some(contact => contact.name === name.trim());
  };

  handleSubmit = e => {
    const { number, name } = this.state;
    e.preventDefault();

    if (name === '') {
      alert(`Add name please!`);
      this.reset();
      return;
    }

    if (this.getSameName(name)) {
      alert(`${name.trim()} is already in contacts`);
      this.reset();
      return;
    }
    this.props.onSubmit(name, number);
    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="Form__label">
        <label className="Contacts__data">
          Name <br />
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.updateContacts}
            className="Form__input"
            placeholder="Type name... "
          />
        </label>
        <label className="Contacts__data">
          Number <br />
          <input
            type="text"
            value={number}
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            onChange={this.updateContacts}
            className="Form__input"
            placeholder="Type number 289-48-27"
          />
        </label>
        <br />
        <button type="submit" className="Form__btn">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ contacts: { contacts } }) => ({
  contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
