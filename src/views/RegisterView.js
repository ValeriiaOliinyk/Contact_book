import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import '../styles/Register.scss';
import FormContainer from '../components/FormContainer';
import Title from '../components/Title';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <FormContainer>
        <Title text={'Sign up'} />
        <form
          className="Register__form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <input
            className="Register__input"
            type="text"
            name="name"
            placeholder="Login *"
            value={name}
            onChange={this.handleChange}
          />

          <input
            className="Register__input"
            type="email"
            name="email"
            placeholder="Email *"
            value={email}
            onChange={this.handleChange}
          />

          <input
            className="Register__input"
            type="password"
            name="password"
            placeholder="Password *"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit" className="Register__btn">
            Sign up
          </button>
        </form>
      </FormContainer>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
