import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import GenreListItem from './GenreListItem';

function GenreList({genreList}) {
  return (
    <Container>
      <FlatList
        data={genreList}
        renderItem={({item}) => <GenreListItem item={item} />}
        numColumns={4}
        contentContainerStyle={styles.container}
        keyExtractor={item => item}
        columnWrapperStyle={styles.column}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  column: {
    flex: 1,
  },
});

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 5px;
`;

export default GenreList;
