import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

function GenreListItem({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('genreanimelist', {item: item})}>
      <Wrapper>
        <WrapperText>{item}</WrapperText>
      </Wrapper>
    </TouchableOpacity>
  );
}

const Wrapper = styled.View`
  padding: 8px;
  background-color: #db386e;
  margin: 1px;
  width: 85px;
  height: 85px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

const WrapperText = styled.Text`
  color: #fff;
`;

export default GenreListItem;
