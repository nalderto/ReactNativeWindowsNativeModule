import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Alert,
  Text,
  View,
} from 'react-native';

import { NativeModules } from 'react-native';

class App extends Component {

  _onPressHandler() {
    // Calling NativeMath.add method
    NativeModules.NativeMath.add(
      /* arg a */ NativeModules.NativeMath.Pi,
      /* arg b */ NativeModules.NativeMath.E,
      /* callback */ function (result) {
        Alert.alert(
          'NativeMath',
          `NativeMath says ${NativeModules.NativeMath.Pi} + ${NativeModules.NativeMath.E} = ${result}`,
          [{ text: 'OK' }],
          {cancelable: false});
      });
  }

  render() {
    return (
      <View>
         <Text>NativeMath says Pi = {NativeModules.NativeMath.Pi}</Text>
         <Text>NativeMath says E = {NativeModules.NativeMath.E}</Text>
         <Button onPress={this._onPressHandler} title="Click me!"/>
      </View>);
  }
}

export default App;