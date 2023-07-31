import React from 'react';
import { Button, Container, DefaultText, Hr, Name, NamePhoneContainer, Phone, PrincipalInfoContainer } from './styled';
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../../routes';

const ProfileInfo = () => {
  const navigation = useNavigation<PropsStack>();
  const Rate = 2;
  return (
    <>
      <Container>
        <PrincipalInfoContainer>
          <NamePhoneContainer>
            <Name>Jeferson Moraes</Name>
            <Phone>(51) 99999-9999</Phone>
          </NamePhoneContainer>
          {!Rate ? (
            <DefaultText onPress={()=>{ navigation.navigate("Feedback")}}>
              Sem Avaliações{'\n'}Clique e avalie!
            </DefaultText>
            ) : (
              <Button onPress={()=>{ navigation.navigate("Feedback")}}>
                <AirbnbRating
                  selectedColor='#5f96ed'
                  showRating={false}
                  isDisabled={true}
                  size={16}
                  defaultRating={Rate}
                  starContainerStyle={{
                    paddingTop: 4,
                  }}
                />
              </Button>
          )}
        </PrincipalInfoContainer>

        <DefaultText>Usuário desde 20/04/23</DefaultText>
        <DefaultText>04 anúncios ativos</DefaultText>

      </Container>
      <Hr/>
    </>
  )
}

export default ProfileInfo