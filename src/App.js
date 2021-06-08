import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserList from './Pages/UserList';
import UserForm from './Pages/UserForm';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserForm " component={UserForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
