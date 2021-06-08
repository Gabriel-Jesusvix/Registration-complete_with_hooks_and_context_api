import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ListItem, Avatar} from 'react-native-elements';

import users from '../../service/user';

export default function UserList() {
  const {navigate} = useNavigation();

  function renderItemUser({item: user}) {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => navigate('UserForm')}>
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
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={renderItemUser}
      />
    </View>
  );
}
