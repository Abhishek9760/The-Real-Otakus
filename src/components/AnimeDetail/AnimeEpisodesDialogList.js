import React, {useState, useContext, useMemo} from 'react';
import styled from 'styled-components/native';
import {AnimeDetailContext} from '../../context/AnimeDetailContext';
import {
  Button,
  Divider,
  TextInput,
  Title,
  RadioButton,
  Dialog,
  Card,
} from 'react-native-paper';
import {Dimensions, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {inRange, findLink} from '../../utils';

function AnimeEpisodesDialogList({totalEp}) {
  const {animeEpisodes, loading} = useContext(AnimeDetailContext);
  const [ep, setEp] = useState(''); // List state
  const [singleEp, setSingleEp] = useState(''); // Text input state

  const [disabled, setDisabled] = useState(true);

  const [showSingleEpModal, setShowSingleEpModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);

  const navigation = useNavigation();

  const maxLength = 8;

  const renderItem = ({item}) => {
    const epName = Object.keys(item)[0];
    const epVal = Object.values(item)[0];
    return <RadioButton.Item label={epName} value={epVal} />;
  };

  const memotizedRenderItem = useMemo(() => renderItem, []);

  return (
    <>
      <Title>Watch</Title>
      <Divider />
      <Wrapper>
        <Button
          mode="text"
          disabled={loading}
          onPress={() => setShowListModal(true)}>
          All Episodes
        </Button>
        <Button
          mode="contained"
          disabled={loading}
          onPress={() => setShowSingleEpModal(true)}>
          Watch Single Episode
        </Button>
        <Modal
          hideModalContentWhileAnimating
          useNativeDriver
          isVisible={showSingleEpModal}
          onBackButtonPress={() => setShowSingleEpModal(false)}
          onBackdropPress={() => setShowSingleEpModal(false)}>
          <Card>
            <Card.Title title="Select single episode" />
            <Card.Content>
              <EpInput
                keyboardType="decimal-pad"
                value={singleEp}
                onChangeText={val => {
                  setDisabled(!inRange(animeEpisodes, val));
                  setSingleEp(val);
                }}
                selection={{start: singleEp.length, end: singleEp.length}}
                maxLength={maxLength}
                placeholder="Enter episode no."
                right={<TextInput.Affix text={`/${totalEp}`} />}
              />
              <Button
                disabled={disabled}
                mode="contained"
                onPress={() => {
                  setShowSingleEpModal(false);
                  navigation.navigate('player', {
                    link: findLink(animeEpisodes, singleEp),
                  });
                }}>
                Watch
              </Button>
            </Card.Content>
          </Card>
        </Modal>
        <Modal
          propagateSwipe
          useNativeDriver
          hideModalContentWhileAnimating={true}
          isVisible={showListModal}
          onBackButtonPress={() => setShowListModal(false)}
          onBackdropPress={() => setShowListModal(false)}>
          <Card style={{maxHeight: Dimensions.get('window').height * 0.8}}>
            <Card.Title title="Select Episode" />
            <Dialog.ScrollArea>
              <RadioButton.Group
                onValueChange={value => setEp(value)}
                value={ep}>
                <FlatList
                  data={animeEpisodes}
                  keyExtractor={item => Object.keys(item)[0]}
                  renderItem={memotizedRenderItem}
                  initialNumToRender={10}
                  maxToRenderPerBatch={5}
                  updateCellsBatchingPeriod={10}
                  windowSize={8}
                />
              </RadioButton.Group>
            </Dialog.ScrollArea>
            <Card.Actions>
              <Button
                disabled={true ? ep === '' : false}
                onPress={() => {
                  setShowListModal(false);
                  navigation.navigate('player', {link: ep});
                }}>
                Watch
              </Button>
            </Card.Actions>
          </Card>
        </Modal>
      </Wrapper>
    </>
  );
}

const EpInput = styled(TextInput)`
  margin-bottom: 10px;
`;

const Wrapper = styled.View`
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default AnimeEpisodesDialogList;
