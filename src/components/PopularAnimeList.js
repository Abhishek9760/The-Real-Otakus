import React, {useContext} from 'react';
import {View} from 'react-native';
import {Colors, FAB} from 'react-native-paper';
import styled from 'styled-components/native';
import {PopularAnimeContext} from '../context/PopularAnimeContext';
import AnimeList from './AnimeList';
import Loader from './utils/Loader';
import TryAgain from './utils/TryAgain';

function PopularAnimeList() {
  const {getPopular, popular, error, loading} = useContext(PopularAnimeContext);
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : error.length !== 0 ? (
        <Wrapper>
          <TryAgain reload={getPopular} loading={loading} />
        </Wrapper>
      ) : (
        <AnimeList animeList={popular} />
      )}
    </View>
  );
}

const FabView = styled.View``;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default PopularAnimeList;
