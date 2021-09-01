import React from 'react';
import { Text } from 'react-native';

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStylex.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;