import React from 'react';
import {FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

function CloseButton() {
  const navigation = useNavigation();
  return <Button small icon="close" onPress={() => navigation.goBack()} />;
}

export default CloseButton;

const Button = styled(FAB)`
  position: absolute;
  background-color: red;
  left: 45%;
  bottom: 5%;
`;
