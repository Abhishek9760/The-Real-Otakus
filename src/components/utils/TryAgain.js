import React from 'react';
import {FAB, withTheme} from 'react-native-paper';
import styled from 'styled-components/native';

function TryAgain({reload, loading, theme}) {
  return (
    <Wrapper>
      <FAB
        animated
        loading={loading}
        disabled={loading}
        icon="cached"
        color={theme.colors.primary}
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

export default withTheme(TryAgain);
