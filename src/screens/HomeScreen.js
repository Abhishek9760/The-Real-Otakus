import React, {useContext} from 'react';
import styled from 'styled-components/native';
import AnimeList from '../components/AnimeList';
import {AnimeListContext} from '../context/AnimeListContext';
import {Modal} from 'react-native';
import TryAgain from '../components/utils/TryAgain';
import {SearchContext} from '../context/SearchContext';
import {FAB} from 'react-native-paper';

function HomeScreen() {
  const {
    animeList,
    animeListModal,
    setAnimeListModal,
    popular,
    getPopular,
    reset,
  } = useContext(AnimeListContext);
  const {submit} = useContext(SearchContext);

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
              <AnimeList animeList={animeList} title="Search Results">
                <Wrapper>
                  <TryAgain reload={submit} />

                  <CloseButton
                    small
                    icon="close"
                    onPress={() => setAnimeListModal(false)}
                  />
                </Wrapper>
              </AnimeList>
            </Backdrop>
          </Container>
        </Modal>
        <AnimeList animeList={popular}>
          <Wrapper>
            <TryAgain reload={getPopular} />
          </Wrapper>
        </AnimeList>
      </Backdrop>
    </Container>
  );
}

const CloseButton = styled(FAB)`
  position: absolute;
  bottom: 10%;
  background-color: red;
`;
const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

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
