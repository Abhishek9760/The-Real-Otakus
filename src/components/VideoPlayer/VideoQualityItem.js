import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';

function VideoQualityItem({text, url}) {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Button
        labelStyle={styles.labelStyle}
        contentStyle={styles.contentStyle}
        icon="video"
        mode="outlined"
        onPress={() => {
          navigation.navigate('video', {url: url});
        }}>
        {text}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  margin-bottom: 10px;
`;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 24,
  },
  contentStyle: {
    marginBottom: 5,
  },
});

export default VideoQualityItem;