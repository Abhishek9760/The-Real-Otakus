import React from 'react';
import SearchAnimeList from '../components/SearchAnimeList';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/utils/Loader';
import LottieView from 'lottie-react-native';
import TryAgain from '../components/utils/TryAgain';
import {getSearch} from '../actions/searchAction';

function SearchScreen() {
  const searchData = useSelector(state => state.searchData);
  const dispatch = useDispatch();
  return (
    <Container>
      {searchData.loading ? (
        <Loader />
      ) : searchData.error.length !== 0 ? (
        <Wrapper>
          <TryAgain
            reload={() => dispatch(getSearch(searchData.query))}
            loading={searchData.loading}
          />
        </Wrapper>
      ) : searchData.results.length > 0 ? (
        <SearchAnimeList searchData={searchData} />
      ) : (
        <LottieView
          source={require('../../assets/lottie/404.json')}
          autoPlay
          loop
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
export default SearchScreen;
