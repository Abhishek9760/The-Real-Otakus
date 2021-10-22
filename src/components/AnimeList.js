import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import styled from 'styled-components';
import AnimeItem from './AnimeItem';

function AnimeList({animeList, title, footer}) {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <Container>
      <Animated.FlatList
        data={animeList}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => (
          <AnimeItem anime={item} index={index} scrollY={scrollY} />
        )}
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
  color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`;

export default AnimeList;
