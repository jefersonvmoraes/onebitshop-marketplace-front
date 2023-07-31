
import React from 'react'
import { Container, FeedbackText } from './styled'
import DefaultTitle from '../../components/common/DefaultTitle'
import ProfileInfo from '../../components/common/ProfileInfo'
import NavBar from '../../components/common/NavBar'
import { AirbnbRating } from 'react-native-ratings'
import DefaultButton from '../../components/common/DefaultButton'

const Feedback = () => {
  return (
    <Container>
      <DefaultTitle fontSize={20} title="AVALIAR"/>

      <ProfileInfo/>

      <FeedbackText>
        Dê uma nota de 1 a 5, sendo{'\n'}1 estrela sendo ruim e 5 excelente.
      </FeedbackText>

      <AirbnbRating
        selectedColor='#5f96ed'
        showRating={false}
        size={40}
        defaultRating={0}
      />

      <DefaultButton
        buttonText='ENVIAR AVALIAÇÃO'
        buttonHandle={()=>{}}
        buttonType='primary'
        marginVertical={80}
      />

      <NavBar/>
    </Container>
  )
}

export default Feedback