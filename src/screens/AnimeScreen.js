import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import AnimeDetail from '../components/AnimeDetail/AnimeDetail';
import TryAgain from '../components/utils/TryAgain';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearAnimeInfo,
  getAnimeInfo,
  setAnimeDetailsLoading,
} from '../actions/animeDetailAction';

function AnimeScreen({route}) {
  const {source} = route.params;
  const dispatch = useDispatch();
  const animeDetails = useSelector(state => state.animeDetails);

  const fetchAnime = () => dispatch(getAnimeInfo(source));

  useEffect(() => {
    fetchAnime();
    return () => {
      dispatch(clearAnimeInfo());
      dispatch(setAnimeDetailsLoading(true));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {animeDetails.loading || animeDetails.error.length > 0 ? (
        <TryAgain reload={fetchAnime} loading={animeDetails.loading} />
      ) : (
        <AnimeDetail />
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default AnimeScreen;
