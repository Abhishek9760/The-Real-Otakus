import React, {forwardRef} from 'react';
import {Searchbar} from 'react-native-paper';

import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSearch, setQuery} from '../actions/searchAction';

const Search = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.searchData);

  const navigation = useNavigation();

  const submit = () => {
    if (searchData.query.trim().length !== 0) {
      Keyboard.dismiss();
      props.setShowSearch(false);
      dispatch(getSearch(searchData.query));
    }
  };
  return (
    <Container>
      <Searchbar
        ref={ref}
        placeholder="SEARCH"
        value={searchData.query}
        onChangeText={val => dispatch(setQuery(val))}
        onSubmitEditing={() => {
          submit();
          navigation.navigate('search');
        }}
      />
    </Container>
  );
});

export default Search;

const Container = styled.View`
  flex: 1;
`;
