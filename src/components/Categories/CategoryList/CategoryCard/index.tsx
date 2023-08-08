
import React from 'react'
import { Container, Image, LikeButton, LikeImage, Price, SellerLikeContainer, SellerName, TextContainer, Title } from './styled'

import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../../../routes';
import { Product } from '../../../../entities/Product';

const likeIcon = require('../../../../../assets/icons/like.png')

interface ProductProps {
  product: Product;
}

const CategoryCard = ({product}: ProductProps) => {
  const navigation = useNavigation<PropsStack>();
  return (
    <Container onPress={()=>{ navigation.navigate("Product");}}>
      <Image source={{ uri: product.images[0].url}}/>
      <TextContainer>
        <Title>{product.name}</Title>
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

export default CategoryCard