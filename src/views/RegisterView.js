import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import FormContainer from '../components/FormContainer';
import Title from '../components/Title';
import Button from '../components/Button';
import '../styles/Register.scss';

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
            value={name}
            placeholder="Login *"
            onChange={this.handleChange}
          />

          <input
            className="Register__input"
            type="email"
            name="email"
            value={email}
            placeholder="Email *"
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
          <Button type="submit" text={'Sign up'}></Button>
        </form>
      </FormContainer>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
