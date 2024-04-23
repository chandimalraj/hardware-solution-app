/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './android/app/src/components/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './android/app/src/components/Home/Home';
import Categories from './android/app/src/components/Home/Categories/Categories';
import Dynamic from './android/app/src/components/Home/Categories/DynamicScreen/Dynamic';
import SelectCustomer from './android/app/src/components/NewOrder/SelectCustomer/SelectCustomer';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleAlign: 'center',
            headerShown: false, // Center-align the header title
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: 'center',
            headerShown: false, // Center-align the header title
          }}
        />
        <Stack.Screen
          name="Catogeries"
          component={Categories}
          options={{
            headerTitleAlign: 'center',
            headerShown: false, // Center-align the header title
          }}
        />
        <Stack.Screen
          name="Dynamic"
          component={Dynamic}
          options={{
            headerTitleAlign: 'center',
            headerShown: false, // Center-align the header title
          }}
        />
        <Stack.Screen
          name="SelectCustomer"
          component={SelectCustomer}
          options={{
            headerTitleAlign: 'center',
            headerShown: false, // Center-align the header title
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
