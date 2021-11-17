import React, {useEffect} from 'react';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import AnimeList from './AnimeList';
import {getNextPage, getPopularAnimeList} from '../actions/animeListAction';
import Loader from './utils/Loader';
import TryAgain from './utils/TryAgain';

function PopularAnimeList() {
  const dispatch = useDispatch();
  const selectedData = useSelector(state => state.anime);
  const getAnimeList = () => dispatch(getPopularAnimeList());

  useEffect(() => {
    getAnimeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedData.currentPage]);

  const loadMore = () => (
    <Button
      mode="text"
      onPress={() => dispatch(getNextPage())}
      icon="progress-download"
      loading={selectedData.loading}
      disabled={selectedData.loading}>
      Load More
    </Button>
  );
  return (
    <Container>
      {selectedData.loading && selectedData.currentPage === 1 ? (
        <Loader />
      ) : selectedData.error.length !== 0 ? (
        <Wrapper>
          <TryAgain reload={getAnimeList} loading={selectedData.loading} />
        </Wrapper>
      ) : (
        <AnimeList
          title="Popular 🔥"
          animeList={selectedData.popularAnimeList}
          footer={loadMore()}
        />
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
