import React from 'react';
import styled from 'styled-components/native';
import PopularAnimeList from '../components/PopularAnimeList';
import BannerInfo from '../components/utils/BannerInfo';

function HomeScreen() {
  return (
    <Container>
      <BannerInfo />
      <PopularAnimeList />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;
