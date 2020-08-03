import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import FormContainer from '../components/FormContainer';
import Title from '../components/Title';
import Button from '../components/Button';
import '../styles/Login.scss';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <FormContainer>
        <Title text={'Sign in'} />
        <form
          className="Login__form"
          noValidate
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <input
            className="Login__input"
            type="email"
            name="email"
            placeholder="Email *"
            value={email}
            onChange={this.handleChange}
          />
          <input
            className="Login__input"
            type="password"
            name="password"
            placeholder="Password *"
            value={password}
            onChange={this.handleChange}
          />
          <Button type="submit" text={'Sign in'}></Button>
        </form>
      </FormContainer>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
