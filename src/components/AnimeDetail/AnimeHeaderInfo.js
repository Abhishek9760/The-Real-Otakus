import React from 'react';
import styled from 'styled-components/native';
import {Colors, List} from 'react-native-paper';

function AnimeHeaderInfo({anime}) {
  const {anime_info} = anime;
  return (
    <>
      <AnimeTitle>{anime.name}</AnimeTitle>
      <Wrapper>
        <InfoWrapper>
          <AnimeImage resizeMode="cover" source={{uri: anime.image}} />
        </InfoWrapper>
        <InfoWrapper>
          <List.Item
            title="Released"
            description={anime_info.released || 'Not Found'}
          />
          <List.Item
            title="Status"
            description={anime_info.status || 'Not Found'}
          />
          <List.Item
            title="Genre"
            description={anime_info.genre || 'Not Found'}
          />
          <List.Item
            title="Other Names"
            description={anime_info.other_names || 'Not Found'}
          />
        </InfoWrapper>
      </Wrapper>
    </>
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

const AnimeTitle = styled.Text`
  font-family: 'Stentiga';
  padding: 10px 0;
  font-size: 20px;
  color: ${Colors.purple900};
  letter-spacing: 2px;
`;

export default AnimeHeaderInfo;
