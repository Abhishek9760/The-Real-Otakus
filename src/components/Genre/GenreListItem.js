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
        <WrapperText numberOfLines={1} ellipsizeMode="tail">
          {item}
        </WrapperText>
      </Wrapper>
    </TouchableOpacity>
  );
}

const Wrapper = styled.View`
  padding: 8px;
  background-color: ${props => props.theme.card.BG_COLOR};
  border: 1px solid ${props => props.theme.card.BORDER_COLOR};
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
