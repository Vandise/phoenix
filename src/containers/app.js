import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Phoenix from './phoenix';
import AppStore from '../store/appStore';

const store = AppStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Phoenix />
      </Provider>
    );
  }
}