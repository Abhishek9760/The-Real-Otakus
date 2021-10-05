import React, {useEffect, useContext, useState} from 'react';
import {GenreContext} from '../context/GenreContext';
import styled from 'styled-components/native';
import TryAgain from '../components/utils/TryAgain';
import AnimeList from '../components/AnimeList';
import {Button} from 'react-native-paper';
import Loader from '../components/utils/Loader';

function GenreAnimeListScreen({route, navigation}) {
  const {item} = route.params;
  const [page, setPage] = useState(1);

  const {
    getGenreAnimeList,
    genreAnimeList,
    genreAnimeListLoading,
    reset,
    error,
  } = useContext(GenreContext);

  useEffect(() => {
    navigation.setOptions({title: item});
    return () => {
      reset();
      setPage(1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getGenreAnimeList(item, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, page]);

  const loadMore = () => (
    <Button
      mode="text"
      onPress={() => setPage(page + 1)}
      icon="progress-download"
      loading={genreAnimeListLoading}
      disabled={genreAnimeListLoading}>
      Load More
    </Button>
  );

  return (
    <Container>
      {genreAnimeListLoading && page === 1 ? (
        <Loader />
      ) : error.length !== 0 ? (
        <TryAgain
          reload={() => getGenreAnimeList(item)}
          loading={genreAnimeListLoading}
        />
      ) : (
        <AnimeList animeList={genreAnimeList} footer={loadMore()} />
      )}
    </Container>
  );
}

const Container = styled.View`
  background-color: #eee;
  flex: 1;
  justify-content: center;
`;

export default GenreAnimeListScreen;
