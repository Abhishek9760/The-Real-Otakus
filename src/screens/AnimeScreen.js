import React, {useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import {AnimeDetailContext} from '../context/AnimeDetailContext';
import AnimeDetail from '../components/AnimeDetail/AnimeDetail';

function AnimeScreen() {
  const {setLoading} = useContext(AnimeDetailContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setLoading(false), []);

  return (
    <Container>
      <Backdrop>
        <AnimeDetail />
      </Backdrop>
    </Container>
  );
}

const Backdrop = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.9);
`;

const Container = styled.ImageBackground.attrs({
  source: require('../../assets/images/naruto.jpg'),
  resizeMode: 'cover',
})`
  flex: 1;
`;

export default AnimeScreen;
