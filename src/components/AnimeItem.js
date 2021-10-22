import React, {useContext} from 'react';
import {StyleSheet, Image, TouchableOpacity, Animated} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {SelectedAnimeContext} from '../context/SelectedAnimeContext';
import {AnimeDetailContext} from '../context/AnimeDetailContext';

function AnimeItem({anime, index, scrollY}) {
  const navigation = useNavigation();
  const {setSelectedAnime} = useContext(SelectedAnimeContext);
  const {getAnimeInfo} = useContext(AnimeDetailContext);
  const ITEM_SIZE = 65;
  const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 4)];
  const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)];
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0.5],
  });
  const opacity = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 1, 1, 0.5],
  });

  return (
    <Card
      onPress={() => {
        setSelectedAnime(anime);
        getAnimeInfo(anime.source);
        navigation.navigate('anime', {source: anime.source});
      }}>
      <CardWrapper style={{transform: [{scale}], opacity}}>
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
  margin: 10px 0;
`;

const CardText = styled.Text`
  font-size: 14px;
  color: #fff;
  width: 90px;
  font-weight: bold;
`;

const CardWrapper = styled(Animated.View)`
  flex: 1;
  background-color: ${props => props.theme.card.BG_COLOR};
  border: 1px solid ${props => props.theme.card.BORDER_COLOR};
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  elevation: 5;
`;

const CardContent = styled.View`
  padding: 10px 0;
  height: 55px;
`;

export default AnimeItem;
