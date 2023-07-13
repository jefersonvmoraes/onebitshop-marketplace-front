import { View, Text } from 'react-native'
import React from 'react'
import { Container, Image, LikeButton, LikeImage, Price, SellerLikeContainer, SellerName, TextContainer, Title } from './styled'
import { Product } from '../../../../screens/Categories';

const likeIcon = require('../../../../../assets/icons/like.png')

interface ProductProps {
  product: Product;
}

const CategorieCard = ({product}: ProductProps) => {
  return (
    <Container>
      <Image source={{ uri: product.productImage}}/>
      <TextContainer>
        <Title>{product.title}</Title>
        <Price>R$ {product.price}</Price>

        <SellerLikeContainer>
          <SellerName>jeferson Moraes</SellerName>

          <LikeButton>
            <LikeImage source={likeIcon}/>
          </LikeButton>
        </SellerLikeContainer>
      </TextContainer>
    </Container>
  )
}

export default CategorieCard