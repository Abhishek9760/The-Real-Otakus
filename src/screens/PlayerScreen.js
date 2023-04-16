import React, {useEffect} from 'react';
import VideoQuality from '../components/VideoPlayer/VideoQuality';
import TryAgain from '../components/utils/TryAgain';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getPlayerUrls} from '../actions/playerAction';
import ShimmerVideoQuality from '../components/VideoPlayer/ShimmerVideoQuality';

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

  return playerData.loading ? (
    <ShimmerVideoQuality />
  ) : playerData.error.length !== 0 ? (
    <Container>
      <TryAgain reload={fetchUrls} loading={playerData.loading} />
    </Container>
  ) : (
    <VideoQuality />
  );
}

export default PlayerScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
