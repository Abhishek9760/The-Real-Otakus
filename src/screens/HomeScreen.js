import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {AnimeListContext} from '../context/AnimeListContext';
import {Modal} from 'react-native';
import PopularAnimeList from '../components/PopularAnimeList';
import SearchAnimeList from '../components/SearchAnimeList';
import BannerInfo from '../components/utils/BannerInfo';

function HomeScreen() {
  const {animeListModal, setAnimeListModal, reset} =
    useContext(AnimeListContext);

  return (
    <Container>
      <Backdrop>
        <Modal
          animationType="slide"
          visible={animeListModal}
          onRequestClose={() => {
            setAnimeListModal(false);
            reset();
          }}>
          <Container>
            <Backdrop>
              <SearchAnimeList />
            </Backdrop>
          </Container>
        </Modal>
        <BannerInfo />
        <PopularAnimeList />
      </Backdrop>
    </Container>
  );
}

const Backdrop = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;
