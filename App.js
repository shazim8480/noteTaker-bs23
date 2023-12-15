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

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const App = () => {
  return (
    // <SafeAreaView>
    //   <StatusBar
    //   // backgroundColor={backgroundStyle.backgroundColor}
    //   />
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
  );
};

const styles = StyleSheet.create({});

export default App;
