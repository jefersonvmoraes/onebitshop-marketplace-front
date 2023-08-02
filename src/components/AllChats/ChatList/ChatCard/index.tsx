
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { PropsStack } from '../../../../routes'
import { Container, Image, InfoContainer, Title, Price, SellerTrashContainer, SellerContainer, PublishedText, SellerName, TrashButton, TrashImage } from './styled'

const trashIcon = require("../../../../../assets/icons/trash.png")

const ChatCard = ({item}: any) => {
  const navigation = useNavigation<PropsStack>();
  return (
    <Container onPress={()=>{navigation.navigate("Chat", {chatInfo: item})}}>
      <Image source={{uri: item.product.images[0].url}}/>
      <InfoContainer>
        <Price>R$ {item.product.price}</Price>
        <Title numberOfLines={2}>{item.product.name}</Title>
        <SellerTrashContainer>
          <SellerContainer>
            <PublishedText>Publicado em {item.product.createdAt} por:</PublishedText>
            <SellerName>{item.seller}</SellerName>
          </SellerContainer>
          <TrashButton onPress={()=>{}}>
            <TrashImage source={trashIcon}/>
          </TrashButton>
        </SellerTrashContainer>
      </InfoContainer>
    </Container>
  )
}

export default ChatCard