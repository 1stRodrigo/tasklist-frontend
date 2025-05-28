import { View, StatusBar, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
})