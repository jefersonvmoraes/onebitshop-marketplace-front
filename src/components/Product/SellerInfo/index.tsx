
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { AirbnbRating } from 'react-native-ratings'
import { PropsStack } from '../../../routes'
import { Button, Container, Name, NoRate, SeeProfile, SellerContainer } from './styled'
import useAuth from '../../../hook/useAuth'
import { Product } from '../../../entities/Product'

interface Props {
  product: Product;
}
const SellerInfo = ({ product }: Props) => {
  const navigation = useNavigation<PropsStack>()
  const { token } = useAuth();

  const Rate = parseInt(product.seller.rating);

  return (
    <Container>
      <SellerContainer>
        <Name>{product.seller.name}</Name>
        <Button onPress={()=>{ 
          !token 
            ? navigation.navigate("Login")
            : navigation.navigate("Feedback")
          }}>
          {
            !Rate ? (
              <NoRate>Sem avaliação{'\n'}Clique e avalie!</NoRate> 
            ) : (
              <AirbnbRating
              selectedColor='#5f96ed'
              showRating={false}
              isDisabled={true}
              size={16}
              defaultRating={Rate}
            />
            )
          }

        </Button>
      </SellerContainer>

      <SeeProfile onPress={()=>{ navigation.navigate("SellerProfile",{
        sellerId: product.seller._id,
      })}}>Ver Perfil</SeeProfile>
    </Container>
  )
}

export default SellerInfo