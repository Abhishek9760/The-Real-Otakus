import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
  background-color: transparent;
`;

export default SafeArea;
