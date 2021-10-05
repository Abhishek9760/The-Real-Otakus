import React, {useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import AnimeHeaderInfo from './AnimeHeaderInfo';
import {Title, Divider, Paragraph} from 'react-native-paper';
import AnimeEpisodesDialogList from './AnimeEpisodesDialogList';
import {useNavigation} from '@react-navigation/native';
import {AnimeDetailContext} from '../../context/AnimeDetailContext';
import {SelectedAnimeContext} from '../../context/SelectedAnimeContext';

function AnimeDetail() {
  const navigation = useNavigation();
  const {anime, reset} = useContext(AnimeDetailContext);
  const {selectedAnime} = useContext(SelectedAnimeContext);

  useEffect(() => {
    navigation.setOptions({headerTitle: selectedAnime.name});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anime]);

  useEffect(
    () => () => reset(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Wrapper contentContainerStyle={styles.listContainerStyle}>
      <AnimeHeaderInfo animeInfo={anime.anime_info} />
      <AnimeEpisodesDialogList
        animeEpisodes={anime.episodes}
        totalEp={anime.total_episodes}
      />
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
