import React, {useState, useContext} from 'react';
import {Keyboard} from 'react-native';
import {Searchbar} from 'react-native-paper';

import styled from 'styled-components/native';
import {AnimeListContext} from '../context/AnimeListContext';
import {SearchContext} from '../context/SearchContext';

function Search() {
  const [query, setQuery] = useState('');
  const {getAnime, setAnimeListModal} = useContext(AnimeListContext);
  const {setShowSearch} = useContext(SearchContext);

  const submit = () => {
    if (query.trim().length !== 0) {
      Keyboard.dismiss();
      setShowSearch(false);
      setAnimeListModal(true);
      getAnime(query);
    }
  };

  return (
    <Container>
      <Searchbar
        autoFocus
        placeholder="SEARCH"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={submit}
      />
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
`;

export default Search;
