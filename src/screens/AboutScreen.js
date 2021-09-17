import React from 'react';
import {Linking} from 'react-native';
import {Paragraph, Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {showToast} from '../utils';

const INFO = {
  facebook_page_uri: 'https://www.facebook.com/theRealOtakus',
  facebook_group_uri: 'https://www.facebook.com/groups/521357288405317',
};

function AboutScreen() {
  return (
    <BackgroundImage>
      <Wrapper>
        <WrapperImage
          resizeMode="cover"
          source={require('../../assets/images/logo.jpg')}
        />
        <DescriptionText>Enjoy watching for free</DescriptionText>
        <Button
          mode="contained"
          onPress={() => showToast("We're working on it :)")}>
          Share App
        </Button>
      </Wrapper>
      <Wrapper>
        <DescriptionText>Contact Us</DescriptionText>
        <Social>
          <Button
            icon="facebook"
            mode="text"
            onPress={() => Linking.openURL(INFO.facebook_page_uri)}>
            Follow
          </Button>
          <VerticalLine />
          <Button
            icon="facebook-messenger"
            mode="text"
            onPress={() => Linking.openURL(INFO.facebook_group_uri)}>
            Join Group
          </Button>
        </Social>
      </Wrapper>
    </BackgroundImage>
  );
}

const BackgroundImage = styled.ImageBackground.attrs({
  source: require('../../assets/images/drawer.jpg'),
})`
  flex: 1;
`;

const VerticalLine = styled.View`
  background-color: #aa00ff;
  height: 20px;
  width: 1px;
  margin-top: 10px;
`;

const Social = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.View`
  padding: 5px;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.896);
  align-items: center;
  width: 100%;
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
