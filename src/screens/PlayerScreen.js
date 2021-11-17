import React, {useEffect} from 'react';
import Loader from '../components/utils/Loader';
import VideoQuality from '../components/VideoPlayer/VideoQuality';
import TryAgain from '../components/utils/TryAgain';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getPlayerUrls} from '../actions/playerAction';

function PlayerScreen({route}) {
  const {link} = route.params;
  const dispatch = useDispatch();
  const playerData = useSelector(state => state.playerData);

  const fetchUrls = () => dispatch(getPlayerUrls(link));

  useEffect(() => {
    if (link) {
      fetchUrls();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link]);

  return (
    <Container>
      {playerData.loading ? (
        <Loader />
      ) : playerData.error.length !== 0 ? (
        <TryAgain reload={fetchUrls} loading={playerData.loading} />
      ) : (
        <VideoQuality />
      )}
    </Container>
  );
}

export default PlayerScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
