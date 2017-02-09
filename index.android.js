import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import MainScreen from './components/MainScreen'

export default class ChatNow extends Component {
  render() {
    return (
      <MainScreen />
    );
  }
}

AppRegistry.registerComponent('ChatNow', () => ChatNow);
