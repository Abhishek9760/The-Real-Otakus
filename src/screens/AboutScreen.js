import React from 'react';
import {Linking, Share} from 'react-native';
import {Paragraph, Button} from 'react-native-paper';
import styled from 'styled-components/native';

const INFO = {
  facebook_page_uri: 'https://www.facebook.com/theRealOtakus',
  facebook_group_uri: 'https://www.facebook.com/groups/521357288405317',
  instagram_url: 'https://www.instagram.com/the.real.otakus/',
  site_url: 'https://www.therealotakus.live',
};

const shareMessage = {
  title: 'The Real Otakus Offical App',
  message: `Konnichiwa otakus 😃😃The Real Otakus is a free app for you to watch anime anywhere, anytime with an ease 🤩🤩.
Just download and install our app and start watching now🤗
You can watch anime in English Subtitled 😎 and English Dubbed  😏.

Visit ${INFO.site_url} for download.`,
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
          onPress={async () =>
            await Share.share(
              {
                title: shareMessage.title,
                message: shareMessage.message,
                url: INFO.site_url,
              },
              {dialogTitle: 'Share The Real Otakus Offical App'},
            )
          }>
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
          <VerticalLine />
          <Button
            icon="instagram"
            mode="text"
            onPress={() => Linking.openURL(INFO.instagram_url)}>
            Follow
          </Button>
        </Social>
      </Wrapper>
    </BackgroundImage>
  );
}

// const VersionText = styled.Text`
//   font-size: 20px;
//   font-weight: 400;
//   margin-bottom: 50px;
// `;

const BackgroundImage = styled.ImageBackground.attrs({
  source: require('../../assets/images/drawer.jpg'),
})`
  flex: 1;
`;

const VerticalLine = styled.View`
  background-color: #aa00ff;
  height: 1px;
  width: 25px;
  align-self: center;
`;

const Social = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
