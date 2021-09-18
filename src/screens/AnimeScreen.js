import React, {useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import {AnimeDetailContext} from '../context/AnimeDetailContext';
import AnimeDetail from '../components/AnimeDetail/AnimeDetail';
import {SelectedAnimeContext} from '../context/SelectedAnimeContext';

function AnimeScreen({route}) {
  const {anime} = route.params;
  const {getAnimeInfo, setLoading} = useContext(AnimeDetailContext);

  const {setAnime} = useContext(SelectedAnimeContext);

  useEffect(() => {
    setAnime(anime);
    getAnimeInfo(anime.source);
    () => {
      setLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Backdrop>
        <AnimeDetail anime={anime} />
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
