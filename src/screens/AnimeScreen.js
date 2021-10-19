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
      {loading ? (
        <TryAgain reload={() => getAnimeInfo(source)} loading={loading} />
      ) : (
        <AnimeDetail />
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default AnimeScreen;
