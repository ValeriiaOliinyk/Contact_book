// Base
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLoading } from '../redux/phonebook/phonebook-selectors';

// Components
import Container from '../components/Container';
import Section from '../components/Section';
import Filter from '../components/Filter';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Total from '../components/Total';
import MainLoder from '../components/MainLoader';
import { contactsOperations } from '../redux/phonebook';

class PhonebookViews extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;
    const { isLoadingContacts } = this.props;
    console.log(isLoadingContacts);
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          {contacts.length >= 1 && <Filter />}
          {isLoadingContacts && <MainLoder />}
          <ContactList />
          {contacts && contacts.length >= 1 && (
            <Total total={contacts.length} />
          )}
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

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookViews);
