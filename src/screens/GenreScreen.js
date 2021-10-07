import React, {useContext, useEffect} from 'react';
import {GenreContext} from '../context/GenreContext';
import styled from 'styled-components/native';
import GenreList from '../components/Genre/GenreList';
import Loader from '../components/utils/Loader';
import TryAgain from '../components/utils/TryAgain';

function GenreScreen() {
  const {genreList, getGenreList, genreListLoading, error} =
    useContext(GenreContext);

  useEffect(() => {
    getGenreList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {genreListLoading ? (
        <Loader />
      ) : error.length !== 0 ? (
        <TryAgain reload={getGenreList} loading={genreListLoading} />
      ) : (
        <GenreList genreList={genreList} />
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default GenreScreen;
