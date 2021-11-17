import React from 'react';
import styled from 'styled-components/native';
import {List} from 'react-native-paper';
import FavouritesButton from '../FavouritesButton';

function AnimeHeaderInfo({animeInfo, selectedAnime}) {
  return (
    <Wrapper>
      <InfoWrapper>
        <AnimeImage resizeMode="cover" source={{uri: selectedAnime.image}} />
      </InfoWrapper>
      <InfoWrapper>
        <List.Item
          title="Released"
          description={animeInfo.released || 'Not Found'}
        />
        <List.Item
          title="Status"
          description={animeInfo.status || 'Not Found'}
        />
        <List.Item title="Genre" description={animeInfo.genre || 'Not Found'} />
        <List.Item
          title="Other Names"
          description={animeInfo.other_names || 'Not Found'}
        />
      </InfoWrapper>
      <FavouritesButton anime={selectedAnime} />
    </Wrapper>
  );
}

const AnimeImage = styled.Image`
  flex: 1;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

const InfoWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;

export default AnimeHeaderInfo;
