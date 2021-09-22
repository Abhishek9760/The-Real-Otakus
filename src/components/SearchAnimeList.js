import React, {useContext} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {AnimeListContext} from '../context/AnimeListContext';
import {SearchContext} from '../context/SearchContext';
import AnimeList from './AnimeList';
import Loader from './utils/Loader';
import TryAgain from './utils/TryAgain';
import LottieView from 'lottie-react-native';
import {FAB} from 'react-native-paper';

function SearchAnimeList() {
  const {animeList, error, loading, setAnimeListModal} =
    useContext(AnimeListContext);
  const {submit} = useContext(SearchContext);
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
      <CloseButton
        small
        icon="close"
        onPress={() => setAnimeListModal(false)}
      />
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

const CloseButton = styled(FAB)`
  position: absolute;
  background-color: red;
  left: 45%;
  bottom: 5%;
`;

export default SearchAnimeList;
