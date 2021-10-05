import React, {useContext, useState, useEffect} from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {PopularAnimeContext} from '../context/PopularAnimeContext';
import AnimeList from './AnimeList';
import Loader from './utils/Loader';
import TryAgain from './utils/TryAgain';

function PopularAnimeList() {
  const {getPopular, popular, error, loading} = useContext(PopularAnimeContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPopular(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadMore = () => (
    <Button
      mode="text"
      onPress={() => setPage(page + 1)}
      icon="progress-download"
      loading={loading}
      disabled={loading}>
      Load More
    </Button>
  );
  return (
    <Container>
      {loading && page === 1 ? (
        <Loader />
      ) : error.length !== 0 ? (
        <Wrapper>
          <TryAgain reload={() => getPopular(1)} loading={loading} />
        </Wrapper>
      ) : (
        <AnimeList title="Popular 🔥" animeList={popular} footer={loadMore()} />
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
