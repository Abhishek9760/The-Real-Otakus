import React, {useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import {AnimeDetailContext} from '../context/AnimeDetailContext';
import AnimeDetail from '../components/AnimeDetail/AnimeDetail';
import TryAgain from '../components/utils/TryAgain';

function AnimeScreen({route}) {
  const {source} = route.params;
  const {setLoading, getAnimeInfo, loading} = useContext(AnimeDetailContext);

  useEffect(() => {
    getAnimeInfo(source);
    () => setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Backdrop>
        {loading ? (
          <TryAgain reload={() => getAnimeInfo(source)} loading={loading} />
        ) : (
          <AnimeDetail />
        )}
      </Backdrop>
    </Container>
  );
}

const Backdrop = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.9);
  justify-content: center;
`;

const Container = styled.ImageBackground.attrs({
  source: require('../../assets/images/naruto.jpg'),
  resizeMode: 'cover',
})`
  flex: 1;
`;

export default AnimeScreen;
