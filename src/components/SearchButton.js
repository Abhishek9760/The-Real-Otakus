import React, {useContext} from 'react';
import {IconButton} from 'react-native-paper';
import Modal from 'react-native-modal';
import Search from './Search';
import styled from 'styled-components/native';
import {SearchContext} from '../context/SearchContext';

function SearchButton() {
  const {showSearch, setShowSearch} = useContext(SearchContext);

  const hideModal = () => setShowSearch(false);
  return (
    <>
      <Modal
        hideModalContentWhileAnimating
        useNativeDriver
        isVisible={showSearch}
        onBackButtonPress={hideModal}
        onBackdropPress={hideModal}>
        <ModalContentView>
          <Search />
        </ModalContentView>
      </Modal>
      <IconButton
        icon="magnify"
        color="#fff"
        onPress={() => setShowSearch(true)}
      />
    </>
  );
}

const ModalContentView = styled.View`
  flex: 1;
`;

export default SearchButton;
