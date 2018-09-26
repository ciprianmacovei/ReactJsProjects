import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Posts from './components/posts.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/:id_match' component={Posts} />
        </Switch>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
