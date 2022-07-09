import React, {useState} from 'react';
import Modal from 'react-native-modal';

import {View, Image} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {changeProfilePic, changeUsername} from '../actions/userChatAction';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styled from 'styled-components/native';
import {showToast} from '../utils';

const ChangeNameModal = ({visible, handleClose, name, setName}) => {
  const dispatch = useDispatch();
  const userChat = useSelector(state => state.userChat);
  const [loading, setLoading] = useState(false);
  const [localImage, setLocalImage] = useState({
    uri: '',
    type: '',
    name: '',
  });

  const handleCameraAndGallery = async type => {
    try {
      const result =
        type === 'camera'
          ? await launchCamera({
              maxHeight: 500,
              maxWidth: 500,
              quality: 0.5,
              mediaType: 'photo',
              cameraType: 'front',
            })
          : await launchImageLibrary({mediaType: 'photo', includeBase64: true});
      if (result.errorMessage) {
        showToast('Some error occured with camera');
      } else {
        const image = result.assets[0].uri;
        const newImage = {
          uri: image,
          type: result.assets[0].type,
          name: result.assets[0].fileName,
        };
        setLocalImage(newImage);
        dispatch(changeProfilePic(image));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleCamera = () => handleCameraAndGallery('camera');
  const handleGallery = () => handleCameraAndGallery('gallery');

  const handleUpload = async () => {
    setLoading(true);
    const data = new FormData();
    data.append('file', localImage);
    data.append('upload_preset', 'the_real_otakus');

    fetch('https://api.cloudinary.com/v1_1/abhishek101/image/upload', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then(resData => {
        dispatch(changeProfilePic(resData.secure_url));
        setLoading(false);
        handleClose();
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        handleClose();
      });
  };

  const handleSave = () => {
    if (localImage) {
      handleUpload();
    }
    dispatch(changeUsername(name));
  };

  return (
    <View>
      <Modal
        isVisible={visible}
        onBackButtonPress={handleClose}
        hideModalContentWhileAnimating
        useNativeDriver
        useNativeDriverForBackdrop
        onBackdropPress={handleClose}>
        <Card>
          <Card.Title title="Chat Profile" />
          <Card.Content>
            <TextInput
              label="Name"
              value={name}
              onChangeText={setName}
              placeholder="Your name"
              maxLength={25}
            />
            <ImageContainer>
              <Row>
                <ImagePreview source={{uri: userChat.profilePic}} />
                <Button mode="text" onPress={handleCamera}>
                  Capture
                </Button>
                <Button mode="text" onPress={handleGallery}>
                  From Phone
                </Button>
              </Row>
            </ImageContainer>
            <Button
              disabled={loading}
              loading={loading}
              style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}
              mode="contained"
              onPress={handleSave}>
              Save
            </Button>
          </Card.Content>
        </Card>
      </Modal>
    </View>
  );
};

export default ChangeNameModal;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ImagePreview = styled(Image)`
  height: 50px;
  width: 50px;
  background-color: #eee;
  border-radius: 50px;
`;

const ImageContainer = styled.View`
  background-color: #eee;
  margin: 10px 0;
  padding: 10px 0;
`;
