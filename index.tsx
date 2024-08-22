
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Internals

export default function App() {
  return <RN.Text>{'Olá Morfos 1!!!'}</RN.Text>;
}

RN.AppRegistry.registerComponent('App', () => App);

RN.AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});

