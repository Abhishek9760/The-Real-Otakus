import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {PopularAnimeContext} from '../context/PopularAnimeContext';
import AnimeList from './AnimeList';
import Loader from './utils/Loader';
import TryAgain from './utils/TryAgain';

function PopularAnimeList() {
  const {getPopular, popular, error, loading} = useContext(PopularAnimeContext);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error.length !== 0 ? (
        <Wrapper>
          <TryAgain reload={getPopular} loading={loading} />
        </Wrapper>
      ) : (
        <AnimeList title="Popular 🔥" animeList={popular} />
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default PopularAnimeList;
