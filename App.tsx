import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from './src/HomeScreen';
import {PlayGroundScren} from './src/Playground';
import 'react-native-gesture-handler';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Playground" component={PlayGroundScren} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
