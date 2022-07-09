import React, {useState} from 'react';
import {View} from 'react-native';
import {Menu, IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import ChangeNameModal from '../ChangeNameModel';

const MenuButton = () => {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const userChat = useSelector(state => state.userChat);
  const [name, setName] = useState(userChat.username);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleClose = () => setModalVisible(false);

  return (
    <View>
      <Menu
        visible={visible}
        statusBarHeight={40}
        onDismiss={closeMenu}
        anchor={
          <IconButton icon="dots-vertical" color="#fff" onPress={openMenu} />
        }>
        <Menu.Item
          icon="pencil-outline"
          onPress={() => {
            closeMenu();
            setModalVisible(true);
          }}
          title="Change Name"
        />
      </Menu>
      <ChangeNameModal
        visible={modalVisible}
        handleClose={handleClose}
        name={name}
        setName={setName}
      />
    </View>
  );
};

export default MenuButton;
