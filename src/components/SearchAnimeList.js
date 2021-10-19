import React, {useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import {AnimeListContext} from '../context/AnimeListContext';
import {SearchContext} from '../context/SearchContext';
import AnimeList from './AnimeList';
import Loader from './utils/Loader';
import TryAgain from './utils/TryAgain';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

function SearchAnimeList() {
  const {animeList, error, loading} = useContext(AnimeListContext);
  const {submit, query} = useContext(SearchContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (query) {
      navigation.setOptions({title: `Search for ${query}`});
    }
  }, [navigation, query]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error.length !== 0 ? (
        <Wrapper>
          <TryAgain reload={submit} loading={loading} />
        </Wrapper>
      ) : animeList.length > 0 ? (
        <AnimeList title="Search Results" animeList={animeList} />
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

export default SearchAnimeList;
