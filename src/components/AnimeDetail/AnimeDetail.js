import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import AnimeHeaderInfo from './AnimeHeaderInfo';
import {Title, Divider, Paragraph} from 'react-native-paper';
import AnimeEpisodesDialogList from './AnimeEpisodesDialogList';

function AnimeDetail({anime}) {
  return (
    <Wrapper contentContainerStyle={styles.listContainerStyle}>
      <AnimeHeaderInfo anime={anime} />
      <AnimeEpisodesDialogList totalEp={anime.total_episodes} />
      <Title>Plot Summary</Title>
      <Divider />
      <Paragraph>{anime.anime_info.plot_summary}</Paragraph>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  listContainerStyle: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
});

const Wrapper = styled.ScrollView`
  background-color: rgba(255, 255, 255, 0.7);
`;

export default AnimeDetail;
