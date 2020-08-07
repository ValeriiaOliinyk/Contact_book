import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import FormContainer from '../components/FormContainer';
import Title from '../components/Title';
import Button from '../components/Button';
import Error from '../components/Error';
import { authSelectors } from '../redux/auth';
import '../styles/Register.scss';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    errorMessage: '',
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
    const { error } = this.props;

    return (
      <FormContainer>
        <Title text={'Sign up'} />
        {error && (
          <Error text="Something went wrong please try again or use another name or email" />
        )}
        <form
          className="Register__form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <input
            className="Register__input"
            type="text"
            name="name"
            required
            minLength="4"
            maxLength="9"
            value={name}
            placeholder="Login *"
            onChange={this.handleChange}
          />

          <input
            className="Register__input"
            type="email"
            name="email"
            required
            value={email}
            placeholder="Email *"
            onChange={this.handleChange}
          />

          <input
            className="Register__input"
            type="password"
            name="password"
            required
            minLength="9"
            maxLength="10"
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

const mapStateToProps = state => ({
  error: authSelectors.getError(state),
});

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
