
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { AirbnbRating } from 'react-native-ratings'
import { PropsStack } from '../../../routes'
import { Button, Container, Name, NoRate, SeeProfile, SellerContainer } from './styled'
import useAuth from '../../../hook/useAuth'

const SellerInfo = () => {
  const navigation = useNavigation<PropsStack>()
  const { token } = useAuth();

  const Rate = null;

  return (
    <Container>
      <SellerContainer>
        <Name>Jeferson Moraes</Name>
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
              starContainerStyle={{
                marginLeft: -20,
              }}
            />
            )
          }

        </Button>
      </SellerContainer>

      <SeeProfile onPress={()=>{ navigation.navigate("SellerProfile")}}>Ver Perfil</SeeProfile>
    </Container>
  )
}

export default SellerInfo