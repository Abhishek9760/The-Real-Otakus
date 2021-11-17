import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import GenreList from '../components/Genre/GenreList';
import Loader from '../components/utils/Loader';
import TryAgain from '../components/utils/TryAgain';
import {useDispatch, useSelector} from 'react-redux';
import {getAnimeGenre} from '../actions/animeGenreAction';

function GenreScreen() {
  const dispatch = useDispatch();
  const genre = useSelector(state => state.genre);

  const loadGenre = () => dispatch(getAnimeGenre());

  useEffect(() => {
    loadGenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {genre.loading ? (
        <Loader />
      ) : genre.error.length !== 0 ? (
        <TryAgain reload={loadGenre} loading={genre.loading} />
      ) : (
        <GenreList genreList={genre.genreList} />
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default GenreScreen;
