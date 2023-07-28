import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { PropsStack } from '../../../routes';
import { Card, Container, Image, InfoContainer, InfoIconContainer, NoAds, Price, PriceTitleContainer, PublishedText, Title, TotalAds, IconButton, Icon } from './styled'

const trashIcon = require("../../../../assets/icons/trash.png");
const favoriteIcon = require("../../../../assets/icons/like.png");



interface Product {
  id: string;
  productImage: string;
  price: string;
  title: string;
  publishedData: string;
}

interface ProductProps {
  product: Product[];
  seller: boolean;
}

const UserAds = ({product, seller}: ProductProps) => {
  const navigation = useNavigation<PropsStack>()
  const handleEditProduct = () => {
    if(!seller) {
      navigation.navigate("AddProduct");
    } else {
      navigation.navigate("Product");
    }
  }
  return (
    <Container>
      <TotalAds>Você tem {product.length} anúncios</TotalAds>

      {product.length > 0 ? (
        product.map((product)=>(

          <Card key={product.id} activeOpacity={8.85} onPress={()=>{handleEditProduct()}}>
            <Image source={{uri: product.productImage}}/>
            <InfoContainer>
              <PriceTitleContainer>
                <Price>R$ {product.price}</Price>
                <Title numberOfLines={2}>{product.title}</Title>
              </PriceTitleContainer>
              {!seller ? (

                <InfoIconContainer>
                  <PublishedText>Publicado em {product.publishedData}</PublishedText>
                  <IconButton activeOpacity={8.85} onPress={()=>{}}>
                    <Icon source={trashIcon}/>
                  </IconButton>
                </InfoIconContainer>

              ) : (
                <InfoIconContainer>
                  <PublishedText>Publicado em {product.publishedData}</PublishedText>
                  <IconButton activeOpacity={8.85} onPress={()=>{}}>
                    <Icon source={favoriteIcon}/>
                  </IconButton>
                </InfoIconContainer>
              )}

            </InfoContainer>

          </Card>
        ))
      ) : (
        <NoAds>Você ainda não tem anúncios</NoAds>
      )}

    </Container>
  )
}

export default UserAds