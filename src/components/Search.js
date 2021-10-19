import React, {useContext, forwardRef} from 'react';
import {Searchbar} from 'react-native-paper';

import styled from 'styled-components/native';
import {SearchContext} from '../context/SearchContext';
import {useNavigation} from '@react-navigation/native';

const Search = forwardRef((props, ref) => {
  const {query, setQuery, submit} = useContext(SearchContext);
  const navigation = useNavigation();

  return (
    <Container>
      <Searchbar
        ref={ref}
        placeholder="SEARCH"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={() => {
          submit();
          navigation.navigate('search');
        }}
      />
    </Container>
  );
});
const Container = styled.View`
  flex: 1;
`;

export default Search;
