import React, {useContext, useEffect, useState} from 'react';
import {IconButton, Colors} from 'react-native-paper';
import styled from 'styled-components/native';
import {FavouritesContext} from '../context/FavouritesContext';

function FavoritesButton({anime}) {
  const {addToFavourites, removeFromFavourites, checkFavourite} =
    useContext(FavouritesContext);

  const isFav = checkFavourite(anime);
  return (
    <LikeButton
      icon={isFav ? 'heart' : 'heart-outline'}
      color={Colors.redA400}
      size={25}
      onPress={
        isFav ? () => removeFromFavourites(anime) : () => addToFavourites(anime)
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
