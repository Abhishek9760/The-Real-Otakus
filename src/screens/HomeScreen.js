import React, {useContext} from 'react';
import styled from 'styled-components/native';
import AnimeList from '../components/AnimeList';
import {AnimeListContext} from '../context/AnimeListContext';
import {Modal} from 'react-native';

function HomeScreen() {
  const {animeList, animeListModal, setAnimeListModal, popular} =
    useContext(AnimeListContext);

  return (
    <Container>
      <Backdrop>
        <Modal
          animationType="slide"
          visible={animeListModal}
          onRequestClose={() => {
            setAnimeListModal(false);
          }}>
          <Container>
            <Backdrop>
              <AnimeList animeList={animeList} title="Search Results" />
            </Backdrop>
          </Container>
        </Modal>
        <AnimeList animeList={popular} />
      </Backdrop>
    </Container>
  );
}

const Backdrop = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Container = styled.ImageBackground.attrs({
  source: require('../../assets/images/home-bg.jpg'),
  resizeMode: 'cover',
  blurRadius: 3,
})`
  flex: 1;
`;

export default HomeScreen;
