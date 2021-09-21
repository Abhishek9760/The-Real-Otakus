import React from 'react';
import {Colors, FAB} from 'react-native-paper';
import styled from 'styled-components/native';

function TryAgain({reload, loading}) {
  return (
    <Wrapper>
      <FAB
        animated
        loading={loading}
        disabled={loading}
        icon="cached"
        color={Colors.purpleA700}
        style={{backgroundColor: Colors.purple100}}
        onPress={reload}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TryAgain;
