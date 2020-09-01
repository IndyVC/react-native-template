import React, {useContext, useReducer} from 'react';
import {Text, View, Button} from 'react-native';
import AuthContext from '../context/AuthContext';

const SignedIn = () => {
  const value = useContext(AuthContext);
  return (
    <View>
      <Text>{value}</Text>
      <Button title="sign in" onPress={() => console.log('LOL')} />
    </View>
  );
};

export default SignedIn;
/