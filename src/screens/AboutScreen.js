import React from 'react';
import {Paragraph, Button} from 'react-native-paper';
import styled from 'styled-components/native';

function AboutScreen() {
  return (
    <BackgroundImage>
      <Wrapper>
        <WrapperImage
          resizeMode="cover"
          source={require('../../assets/images/logo.jpg')}
        />
        <DescriptionText>Enjoy watching for free</DescriptionText>
        <Button mode="contained" onPress={() => console.log('shared')}>
          Share App
        </Button>
      </Wrapper>
    </BackgroundImage>
  );
}

const BackgroundImage = styled.ImageBackground.attrs({
  source: require('../../assets/images/drawer.jpg'),
})`
  flex: 1;
`;

const Wrapper = styled.View`
  padding: 5px;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.8);
  align-items: center;
`;

const DescriptionText = styled(Paragraph)`
  font-size: 18px;
  font-family: 'Stentiga';
  letter-spacing: 1px;
  color: #161616;
  padding: 10px 0;
`;

const WrapperImage = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;

export default AboutScreen;
