import React from 'react';
import {View} from 'react-native';
import AnimeList from '../components/AnimeList';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {Paragraph} from 'react-native-paper';
import CloseButton from '../components/utils/CloseButton';
import {useSelector} from 'react-redux';

function FavouritesScreen() {
  const favourites = useSelector(state => state.favouritesAnime.favourites);
  return (
    <Container>
      {Object.keys(favourites).length ? (
        <>
          <AnimeList
            title={`Your Favourites (${Object.keys(favourites).length})`}
            animeList={Object.values(favourites)}
          />
          <CloseButton />
        </>
      ) : (
        <Wrapper>
          <WrapperText>No favourites found!</WrapperText>
          <LottieView
            source={require('../../assets/lottie/nofav.json')}
            autoPlay
            loop
          />
          <View>
            <Paragraph>Bookmark your animes for faster access</Paragraph>
          </View>
          <CloseButton />
        </Wrapper>
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
  justify-content: space-around;
`;

const WrapperText = styled.Text`
  font-size: 20px;
  font-family: 'Stentiga';
  z-index: 100;
  background-color: rgba(204, 204, 204, 0.8);
  padding: 10px;
  color: #fff;
  border: 1px solid #ccc;
`;

export default FavouritesScreen;
