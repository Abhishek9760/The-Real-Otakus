import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import AnimeList from './AnimeList';
import {useNavigation} from '@react-navigation/native';

function SearchAnimeList({searchData}) {
  const navigation = useNavigation();

  useEffect(() => {
    if (searchData.query) {
      navigation.setOptions({title: `Search for ${searchData.query}`});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData.query]);

  return (
    <Container>
      <AnimeList title="Search Results" animeList={searchData.results} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

export default SearchAnimeList;
