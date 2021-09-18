import React, {useContext, forwardRef} from 'react';
import {Searchbar} from 'react-native-paper';

import styled from 'styled-components/native';
import {SearchContext} from '../context/SearchContext';

const Search = forwardRef((props, ref) => {
  const {query, setQuery, submit} = useContext(SearchContext);

  return (
    <Container>
      <Searchbar
        ref={ref}
        placeholder="SEARCH"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={submit}
      />
    </Container>
  );
});
const Container = styled.View`
  flex: 1;
`;

export default Search;
