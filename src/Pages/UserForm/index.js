import React, {useState, useContext} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import UsersContext from '../../context/UsersContext';
import styles from './styles';

export default function UserForm({route, navigation}) {
  const [user, setUser] = useState(route.params ? route.params : {});
  const {dispatch} = useContext(UsersContext);

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o Nome"
        value={user.name}
      />
      <Text style={styles.title}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={email => setUser({...user, email})}
        placeholder="Informe o Email"
        value={user.email}
      />
      <Text style={styles.title}>URL do Avatar:</Text>
      <TextInput
        style={styles.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe a URL do Avatar"
        value={user.avatarUrl}
      />
      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
}
