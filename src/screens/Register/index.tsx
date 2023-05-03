import React from 'react';
import { AcceptTerms, CompanyLogo, Container, Title } from './styled';
import BackIcon from '../../components/common/BackIcon';
import Form from '../../components/Register/Form';
import DefaultButton from '../../components/common/DefaultButton';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes';

const companyLogo = require("../../../assets/images/logo-obc.png");

const Register = () => {
  const navigation = useNavigation<PropsStack>();
  return (
    <Container contentContainerStyle={{paddingBottom: 60}}>
      <BackIcon marginLeft={20}/>
      <Title>CRIAR UMA CONTA</Title>
      <Form/>
      <DefaultButton 
        marginVertical={30}
        buttonText='FAZER REGISTRO'
        buttonType='primary'
        buttonHandle={()=>{}}
      />
      <AcceptTerms>Ao fazer o registro aceito{'\n'}os termos de política de privacidade</AcceptTerms>
      <DefaultButton 
        marginVertical={30}
        buttonText='FAZER LOGIN'
        buttonType='secondary'
        buttonHandle={()=>{navigation.navigate('Login')}}
      />
      <CompanyLogo source={companyLogo}/>
    </Container>
  )
}

export default Register