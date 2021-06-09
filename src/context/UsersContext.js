import React, {createContext, useReducer} from 'react';
import users from '../service/user';

const UsersContext = createContext({});
const initialState = {users};

const actions = {
  createUser(state, action) {
    const user = action.payload;
    user.id = Math.random();
    return {
      ...state,
      users: [...state.users, user],
    };
  },
  updateUser(state, action) {
    const updated = action.payload;
    return {
      ...state,
      users: state.users.map(user => (user.id === updated.id ? updated : user)),
    };
  },
  deleteUser(state, action) {
    const user = action.payload;
    return {
      ...state,
      users: state.users.filter(user => user.id !== user.id),
    };
  },
};
export const UsersProvider = props => {
  function reducer(state, action) {
    const functionAction = actions[action.type];
    return functionAction ? functionAction(state, action) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{state, dispatch}}>
      {props.children}
    </UsersContext.Provider>
  );
};
export default UsersContext;
