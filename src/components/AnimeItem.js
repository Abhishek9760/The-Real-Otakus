import React, {useContext} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {SelectedAnimeContext} from '../context/SelectedAnimeContext';
import {AnimeDetailContext} from '../context/AnimeDetailContext';

function AnimeItem({anime}) {
  const navigation = useNavigation();
  const {setSelectedAnime} = useContext(SelectedAnimeContext);
  const {getAnimeInfo} = useContext(AnimeDetailContext);

  return (
    <Card
      onPress={() => {
        setSelectedAnime(anime);
        getAnimeInfo(anime.source);
        navigation.navigate('anime', {source: anime.source});
      }}>
      <CardWrapper>
        <Image
          style={styles.image}
          source={{
            uri: anime.image,
          }}
          resizeMode="cover"
        />
        <CardContent>
          <CardText numberOfLines={2} ellipsizeMode="tail">
            {anime.name}
          </CardText>
        </CardContent>
      </CardWrapper>
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 110,
    width: 110,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

const Card = styled(TouchableOpacity)`
  flex: 0.33;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 10px 0;
`;

const CardText = styled.Text`
  flex-shrink: 1;
  font-size: 14px;
  color: #fff;
  width: 90px;
`;

const CardWrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.card.BG_COLOR};
  border: 1px solid ${props => props.theme.card.BORDER_COLOR};
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  elevation: 5;
`;

// const EpisodesBadge = styled(Badge).attrs({
//   size: 20,
// })`
//   position: absolute;
//   top: -5%;
//   right: -5%;
// `;

const CardContent = styled.View`
  padding: 10px 0;
`;

export default AnimeItem;
