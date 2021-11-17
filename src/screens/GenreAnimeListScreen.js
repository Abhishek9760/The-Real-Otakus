import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import TryAgain from '../components/utils/TryAgain';
import AnimeList from '../components/AnimeList';
import {Button} from 'react-native-paper';
import Loader from '../components/utils/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {
  animeGenreListAction,
  clearGenreAnimeList,
  getNextPage,
} from '../actions/animeGenreAction';

function GenreAnimeListScreen({route, navigation}) {
  const {item} = route.params;
  const dispatch = useDispatch();
  const animeGenre = useSelector(state => state.animeGenre);

  useEffect(() => {
    navigation.setOptions({title: item});
    return () => dispatch(clearGenreAnimeList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchGenreAnimeList = () =>
    dispatch(animeGenreListAction(item, animeGenre.currentPage));

  useEffect(() => {
    fetchGenreAnimeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, animeGenre.currentPage]);

  const loadMore = () => (
    <Button
      mode="text"
      onPress={() => dispatch(getNextPage())}
      icon="progress-download"
      loading={animeGenre.loading}
      disabled={animeGenre.loading || animeGenre.animeList.length < 20}>
      Load More
    </Button>
  );

  return (
    <Container>
      {animeGenre.loading && animeGenre.currentPage === 1 ? (
        <Loader />
      ) : animeGenre.error.length !== 0 ? (
        <TryAgain reload={fetchGenreAnimeList} loading={animeGenre.loading} />
      ) : (
        <AnimeList animeList={animeGenre.animeList} footer={loadMore()} />
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default GenreAnimeListScreen;
