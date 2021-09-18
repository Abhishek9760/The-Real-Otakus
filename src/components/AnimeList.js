import React, {useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {AnimeListContext} from '../context/AnimeListContext';
import AnimeItem from './AnimeItem';
import Loader from './utils/Loader';
import LottieView from 'lottie-react-native';
import {Colors} from 'react-native-paper';

function AnimeList({animeList, title, children}) {
  const {loading, error} = useContext(AnimeListContext);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : animeList.length !== 0 ? (
        <FlatList
          data={animeList}
          renderItem={({item}) => <AnimeItem anime={item} />}
          numColumns={3}
          contentContainerStyle={FlatListStyles.container}
          keyExtractor={item => item.name}
          ListHeaderComponent={<ListTitle>{title || 'Popular 🔥'}</ListTitle>}
          columnWrapperStyle={FlatListStyles.column}
        />
      ) : error.length !== 0 ? (
        children
      ) : (
        <LottieView
          source={require('../../assets/lottie/404.json')}
          autoPlay
          loop
        />
      )}
    </Container>
  );
}

const FlatListStyles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  column: {
    flex: 1,
  },
});

const Container = styled.View`
  flex: 1;
`;

const ListTitle = styled.Text`
  font-size: 30px;
  margin-left: 2px;
  padding: 10px 0;
  font-family: 'Landmark';
  letter-spacing: 3px;
  color: ${Colors.purple800};
`;

export default AnimeList;
