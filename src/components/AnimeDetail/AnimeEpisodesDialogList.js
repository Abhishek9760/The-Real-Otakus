import React, {useState, useMemo, useEffect} from 'react';
import styled from 'styled-components/native';
import {
  Button,
  Divider,
  TextInput,
  Title,
  RadioButton,
  Dialog,
  Card,
  Badge,
  Text,
} from 'react-native-paper';
import {Dimensions, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {inRange, findLink} from '../../utils';
function AnimeEpisodesDialogList({totalEp, animeEpisodes}) {
  const [ep, setEp] = useState(''); // List state
  const [singleEp, setSingleEp] = useState(''); // Text input state

  const [disabled, setDisabled] = useState(false);

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

  useEffect(() => {
    if (animeEpisodes.length) {
      let firstEp = Object.keys(animeEpisodes[0])[0];
      setSingleEp(firstEp);
    }
  }, [animeEpisodes]);

  return (
    <>
      <RowView>
        <Title>Watch</Title>
        <EpisodesNum size={22}>{totalEp}</EpisodesNum>
      </RowView>
      <Divider />
      <Wrapper>
        {animeEpisodes.length === 0 ? (
          <Text>No Episodes found!</Text>
        ) : (
          <>
            <Button mode="text" onPress={() => setShowListModal(true)}>
              All Episodes
            </Button>
            <Button mode="contained" onPress={() => setShowSingleEpModal(true)}>
              Watch Single Episode
            </Button>
          </>
        )}
      </Wrapper>
      <Modal
        animationIn="slideInRight"
        animationOut="slideOutLeft"
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
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        propagateSwipe
        useNativeDriver
        hideModalContentWhileAnimating={true}
        isVisible={showListModal}
        onBackButtonPress={() => setShowListModal(false)}
        onBackdropPress={() => setShowListModal(false)}>
        <Card style={{maxHeight: Dimensions.get('window').height * 0.8}}>
          <Card.Title title="Select Episode" />
          <Dialog.ScrollArea>
            <RadioButton.Group onValueChange={value => setEp(value)} value={ep}>
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

const RowView = styled.View`
  flex-direction: row;
`;

const EpisodesNum = styled(Badge)`
  margin: 5px;
  margin-left: 10px;
`;

export default AnimeEpisodesDialogList;
