import React, {useContext} from 'react';
import {GenreContext} from '../context/GenreContext';
import styled from 'styled-components/native';
import GenreList from '../components/Genre/GenreList';

function GenreScreen() {
  const {genreList} = useContext(GenreContext);
  return (
    <Container>
      <GenreList genreList={genreList} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

export default GenreScreen;
