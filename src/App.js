import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserList from './Pages/UserList';
import UserForm from './Pages/UserForm';
import {Button, Icon} from 'react-native-elements';
import {UsersProvider} from './context/UsersContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'Lista De Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type="clear"
                    icon={<Icon name="add" size={25} color="#FFF" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{title: 'Formulário de Usuários'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#F3511E',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
