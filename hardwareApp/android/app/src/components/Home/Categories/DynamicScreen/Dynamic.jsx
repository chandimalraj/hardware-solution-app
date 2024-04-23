import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Dynamic() {
  const route = useRoute();
  const {category} = route.params;
  return (
    <View style={styles.maincontainer}>
      <Text>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    // paddingBottom: 40,
    backgroundColor: '#9db3ee',
  },
});
