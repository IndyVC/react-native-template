import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const CInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={'INDY'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'center',
  },
});

export default CInput;
