import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import FormContainer from '../components/FormContainer';
import Title from '../components/Title';
import Button from '../components/Button';
import { authSelectors } from '../redux/auth';
import Error from '../components/Error';
import '../styles/Login.scss';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: false,
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
    const { error } = this.props;

    return (
      <FormContainer>
        <Title text={'Sign in'} />
        {error && <Error text="Invalid email or password" />}
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
            required
            value={email}
            onChange={this.handleChange}
          />
          <input
            className="Login__input"
            type="password"
            name="password"
            required
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

const mapStateToProps = state => ({
  error: authSelectors.getError(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
