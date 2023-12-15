import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';

const RootView = ({children}) => {
  return <ScrollView style={styles.screen}>{children}</ScrollView>;
};

export default RootView;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
