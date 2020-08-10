import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import FormContainer from '../components/FormContainer';
import Title from '../components/Title';
import Button from '../components/Button';
import { Formik, ErrorMessage } from 'formik';
import BasicFormSchema from '../helpers/validation';
import '../styles/Login.scss';

class LoginView extends Component {
  render() {
    return (
      <FormContainer>
        <Title text={'Sign in'} />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={data => {
            console.log(data);
            this.props.onLogin(data);
          }}
          validationSchema={BasicFormSchema}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form
              className="Login__form"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <input
                className="Login__input"
                type="email"
                name="email"
                placeholder="Email *"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage name="email">
                {msg => <div className="Login__error">{msg}</div>}
              </ErrorMessage>
              <input
                className="Login__input"
                type="password"
                name="password"
                placeholder="Password *"
                value={values.password}
                onChange={handleChange}
              />
              <ErrorMessage name="password">
                {msg => <div className="Login__error">{msg}</div>}
              </ErrorMessage>
              <Button type="submit" text={'Sign in'}></Button>
            </form>
          )}
        </Formik>
      </FormContainer>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
