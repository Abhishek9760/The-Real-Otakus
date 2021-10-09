import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from 'react-native-paper';

function GenreListItem({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('genreanimelist', {item: item})}>
      <Wrapper>
        <WrapperText numberOfLines={1} ellipsizeMode="tail">
          {item}
        </WrapperText>
      </Wrapper>
    </TouchableOpacity>
  );
}

const Wrapper = styled.View`
  padding: 8px;
  background-color: ${Colors.deepPurple600};
  border: 1px solid ${Colors.deepPurple100};
  margin: 1px;
  height: 80px;
  width: 85px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  elevation: 1;
`;

const WrapperText = styled.Text`
  color: #fff;
`;

export default GenreListItem;
