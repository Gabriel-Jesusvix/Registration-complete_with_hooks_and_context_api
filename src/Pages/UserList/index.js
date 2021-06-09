import React, {useContext} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ListItem, Avatar, Button, Icon} from 'react-native-elements';

import UsersContext from '../../context/UsersContext';

export default function UserList() {
  const {navigate} = useNavigation();
  const {state, dispatch} = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuario', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }
  function renderItemUser({item: user}) {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => navigate('UserForm', user)}
        rightElement={getActions(user)}>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        data={state.users}
        keyExtractor={user => user.id.toString()}
        renderItem={renderItemUser}
      />
    </View>
  );
}
