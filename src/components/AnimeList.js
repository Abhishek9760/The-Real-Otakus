import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import styled from 'styled-components';
import AnimeItem from './AnimeItem';
import {Colors} from 'react-native-paper';

function AnimeList({animeList, title, footer}) {
  return (
    <Container>
      <FlatList
        data={animeList}
        renderItem={({item}) => <AnimeItem anime={item} />}
        numColumns={3}
        contentContainerStyle={FlatListStyles.container}
        keyExtractor={item => item.name}
        ListHeaderComponent={title ? <ListTitle>{title}</ListTitle> : null}
        columnWrapperStyle={FlatListStyles.column}
        ListFooterComponentStyle={FlatListStyles.footer}
        ListFooterComponent={footer}
      />
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
  footer: {
    alignSelf: 'center',
  },
});

const Container = styled.View`
  flex: 1;
`;

const ListTitle = styled.Text`
  font-size: 30px;
  margin-left: 2px;
  padding: 10px 0;
  font-family: 'Paladise Script';
  letter-spacing: 3px;
  color: ${Colors.purple800};
`;

export default AnimeList;
