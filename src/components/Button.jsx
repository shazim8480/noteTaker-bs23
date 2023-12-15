import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({title, onPress, variant = 'primary'}) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      style={
        variant === 'delete' ? styles.button_delete : styles.button_primary
      }
    />
  );
};

export default Button;

const styles = StyleSheet.create({
  button_primary: {
    backgroundColor: '#87CEEB',
    borderRadius: 4,
  },
  button_delete: {
    backgroundColor: 'crimson',
    borderRadius: 4,
  },
});
