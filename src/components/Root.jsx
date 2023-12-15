import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';

const RootView = ({children}) => {
  return <View style={styles.screen}>{children}</View>;
};

export default RootView;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
