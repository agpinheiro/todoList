import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/Routes/Stack';

const App = () => {
  return (
  <>
    <Routes />
    <StatusBar backgroundColor="#333" style="light" />
  </>
  );
}

export default App;
