// Base
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Container from '../src/components/Container';
import AppBar from '../src/components/AppBar';
import PhonebookView from '../src/views/PhonebookView';
import HomeView from '../src/views/HomeView';
import RegisterView from '../src/views/RegisterView';
import LoginView from '../src/views/LoginView';

class App extends Component {
  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contatcs" component={PhonebookView} />
        </Switch>
      </Container>
    );
  }
}

export default App;
