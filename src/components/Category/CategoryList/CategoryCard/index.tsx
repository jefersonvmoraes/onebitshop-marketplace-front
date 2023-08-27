
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { PropsStack } from '../../../../routes';

import { Button, Container, Image, InfoContainer, LikeContainer, Price, PublishedText, Title } from './styled';
import { Product } from '../../../../entities/Product';
import getDate from '../../../../utils/getDate';
import Like from '../../../common/Like';

interface Props {
  product: Product;
  favorite: boolean;
}

const likeImg = require('../../../../../assets/icons/like.png')

const CategoryCard = (
  {product, favorite}: Props
) => {
  const navigation = useNavigation<PropsStack>()
  return (
    <Container activeOpacity={0.85} onPress={()=>{navigation.navigate("Product",{
      ...product,
    })}}>
      <Image source={{uri: product.images[0].url}}/>
      <InfoContainer>
        <Price>R$ {product.price}</Price>
        <Title numberOfLines={2}>{product.name}</Title>
        <LikeContainer>
          <PublishedText>Publicado em{'\n'}{getDate(product.createdAt)}</PublishedText>
          <Like favorites={favorite} productId={product._id}/>

        </LikeContainer>
      </InfoContainer>
    </Container>
  )
}

export default CategoryCard