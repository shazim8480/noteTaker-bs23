import React from 'react';

import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// screens
import NotesList from './src/screens/NotesList';
import CreateNote from './src/screens/CreateNote';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="NotesList"
            component={NotesList}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="CreateNote"
            component={CreateNote}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Text>Hi</Text>
    </>
  );
};

export default App;
