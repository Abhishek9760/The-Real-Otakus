import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import styled from 'styled-components/native';

function Loader() {
  return (
    <Wrapper>
      <ActivityIndicator
        animating={true}
        size="large"
        color={Colors.purpleA700}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Loader;
