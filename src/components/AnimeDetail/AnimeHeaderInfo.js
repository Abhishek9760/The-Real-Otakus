import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {List} from 'react-native-paper';
import FavoritesButton from '../FavoritesButton';
import {SelectedAnimeContext} from '../../context/SelectedAnimeContext';

function AnimeHeaderInfo({animeInfo}) {
  // const {anime_info} = anime;
  const {selectedAnime} = useContext(SelectedAnimeContext);
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
      <FavoritesButton anime={selectedAnime} />
    </Wrapper>
  );
}

const AnimeImage = styled.Image`
  flex:1
  opacity: 0.9;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.759);
  margin-bottom: 10px;
`;

const InfoWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;

export default AnimeHeaderInfo;
