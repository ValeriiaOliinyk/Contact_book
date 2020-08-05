// Base
import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

// Components
import Container from '../src/components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import MainLoader from '../src/components/MainLoader';

const HomeView = lazy(() =>
  import('../src/views/HomeView' /* webpackChunkName: "home-view" */),
);
const PhonebookView = lazy(() =>
  import('../src/views/PhonebookView' /* webpackChunkName: "phonebook-view" */),
);
const RegisterView = lazy(() =>
  import('../src/views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('../src/views/LoginView' /* webpackChunkName: "login-view" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<MainLoader />}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              component={RegisterView}
              redirectTo="/"
            />
            <PublicRoute
              path="/login"
              restricted
              component={LoginView}
              redirectTo="/contatcs"
            />
            <PrivateRoute
              path="/contatcs"
              component={PhonebookView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
