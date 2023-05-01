import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { PropsStack } from '../../../routes';
import { Back, BackContainer } from './styled';

const back = require("../../../../assets/icons/arrow-left.png");
type props = {
  marginLeft: number;
};

const BackIcon = ({marginLeft}: props) => {
  const navigation = useNavigation<PropsStack>();
  return (
    <BackContainer onPress={()=> {
      navigation.goBack();
    }}>
      <Back source={back} marginLeft={marginLeft}/>
    </BackContainer>
  )
}

export default BackIcon;