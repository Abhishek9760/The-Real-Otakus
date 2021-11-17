import React from 'react';
import {IconButton, Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {
  addToFavourites,
  removeFromFavourites,
} from '../actions/favouritesAction';

function FavoritesButton({anime}) {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favouritesAnime.favourites);

  const isFav = favourites.hasOwnProperty(anime.name);

  return (
    <LikeButton
      icon={isFav ? 'heart' : 'heart-outline'}
      color={Colors.redA400}
      size={25}
      onPress={
        isFav
          ? () => dispatch(removeFromFavourites(anime.name))
          : () => dispatch(addToFavourites(anime))
      }
    />
  );
}
const LikeButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
`;
export default FavoritesButton;
