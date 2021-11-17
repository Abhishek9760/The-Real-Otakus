import React, {useRef, useState} from 'react';
import {IconButton} from 'react-native-paper';
import Modal from 'react-native-modal';
import Search from './Search';
import styled from 'styled-components/native';

function SearchButton() {
  const [showSearch, setShowSearch] = useState(false);
  const inpRef = useRef();

  const hideModal = () => setShowSearch(false);
  return (
    <>
      <Modal
        hideModalContentWhileAnimating
        useNativeDriver
        isVisible={showSearch}
        onBackButtonPress={hideModal}
        onBackdropPress={hideModal}
        onModalShow={() => {
          inpRef.current.blur();
          inpRef.current.focus();
        }}>
        <ModalContentView>
          <Search
            ref={inpRef}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
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
