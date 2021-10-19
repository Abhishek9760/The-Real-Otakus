import React from 'react';
import SearchAnimeList from '../components/SearchAnimeList';
import styled from 'styled-components/native';

function SearchScreen() {
  return (
    <Container>
      <SearchAnimeList />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

export default SearchScreen;
