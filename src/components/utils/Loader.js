import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import styled from 'styled-components/native';
import {ThemeContext} from '../../context/ThemeContext';

function Loader() {
  const {theme} = useContext(ThemeContext);
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
