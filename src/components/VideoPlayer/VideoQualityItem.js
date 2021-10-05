import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';

function VideoQualityItem({text, icon, color, onPress}) {
  return (
    <Wrapper>
      <Button
        labelStyle={styles.labelStyle}
        contentStyle={{alignSelf: 'flex-start', marginLeft: '10%'}}
        color={color}
        icon={icon}
        mode="link"
        onPress={() => onPress()}>
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
    fontSize: 16,
  },
});

export default VideoQualityItem;
