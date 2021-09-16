import React, {useContext} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Colors, Badge} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {AnimeListContext} from '../context/AnimeListContext';

function AnimeItem({anime}) {
  const navigation = useNavigation();
  const {setAnimeListModal} = useContext(AnimeListContext);

  return (
    <Card
      onPress={() => {
        navigation.navigate('anime', {
          anime: anime,
        });
        setAnimeListModal(false);
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
          <CardText>{anime.name}</CardText>
        </CardContent>
        <EpisodesBadge>{anime.total_episodes}</EpisodesBadge>
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
  background-color: ${Colors.deepPurple400};
  align-items: center;
  border-radius: 10px;
`;

const EpisodesBadge = styled(Badge).attrs({
  size: 20,
})`
  position: absolute;
  top: -5%;
  right: -5%;
`;

const CardContent = styled.View`
  padding: 10px 0;
`;

export default AnimeItem;
