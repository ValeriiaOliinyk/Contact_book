// Base
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Container from '../components/Container';
import Section from '../components/Section';
import Filter from '../components/Filter';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Total from '../components/Total';
import { contactsOperations } from '../redux/phonebook';

class PhonebookViews extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          {contacts.length >= 2 && <Filter />}
          <ContactList />
          {contacts.length >= 1 && <Total total={contacts.length} />}
        </Section>
      </Container>
    );
  }
}

PhonebookViews.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = ({ contacts: { contacts } }) => ({
  contacts: contacts,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookViews);
