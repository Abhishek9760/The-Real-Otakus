import React, {useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import {AnimeDetailContext} from '../context/AnimeDetailContext';
import AnimeDetail from '../components/AnimeDetail/AnimeDetail';

function AnimeScreen({route}) {
  const {anime} = route.params;
  const {getAnimeInfo, setLoading, setAnimeEpisodes} =
    useContext(AnimeDetailContext);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    getAnimeInfo(anime.source)
      .then(data => {
        if (!isCancelled) {
          setAnimeEpisodes(data);
          setLoading(false);
        }
      })
      .catch(err => console.log(err));
    () => {
      isCancelled = true;
      setLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anime.source]);

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
