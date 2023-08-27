
import React, { useEffect, useState } from 'react'
import { LikeButton, LikeImage } from './styled';
import favoriteService from '../../../services/favoriteService';

interface Props {
  favorites: boolean;
  productId: string;
}

const likeIcon = require("../../../../assets/icons/like.png");
const likedIcon = require("../../../../assets/icons/liked.png");

const Like = ({favorites, productId}: Props) => {

  const [isFavorited, setIsFavorited] = useState(false);
  
  const favoriteToogle  = (favorited: boolean) => {
    if(favorited === true){
      favoriteService.delFavorite(productId);
      setIsFavorited(false);
    } else {
      favoriteService.setFavorite(productId);
      setIsFavorited(true);
    }
  }

  useEffect(()=> {
    setIsFavorited(favorites);
  },[favorites])

  return (
    <>
      {
        !isFavorited ? (
          <LikeButton onPress={()=>{
            favoriteToogle(isFavorited);
          }}>
            <LikeImage source={likeIcon}/>
          </LikeButton>
        ):(
          <LikeButton onPress={()=>{
            favoriteToogle(isFavorited);
          }}>
            <LikeImage source={likedIcon}/>
          </LikeButton>          
        )
      }
    </>

  )
}

export default Like