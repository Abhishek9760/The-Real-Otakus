import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';

function Loader() {
  const theme = useSelector(state => state.appTheme.theme);
  return (
    <Wrapper>
      <ActivityIndicator
        animating={true}
        size="large"
        color={theme.SECONDARY_TEXT_COLOR}
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
