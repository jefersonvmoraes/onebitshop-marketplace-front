import React from 'react';
import { Bold, CompanyLogo, Container, ForgetPassword, Input, InputContainer, Logo, RegisterText } from './styled';
import BackIcon from '../../components/common/BackIcon';
import DefaultButton from '../../components/common/DefaultButton';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes';

const logo = require("../../../assets/images/logo.png");
const companyLogo = require("../../../assets/images/logo-obc.png");

const Login = () => {
  const navigation = useNavigation<PropsStack>();

  const handleLogin = () => {
    Alert.alert("Botao de login")
  }
  return (
    <Container>
      <BackIcon marginLeft={20}/>
      <Logo source={logo}/>
      <InputContainer>
        <Input placeholder='Email' placeholderTextColor="#C0C0C1"/>
      </InputContainer>

      <InputContainer>
        <Input placeholder='Senha' placeholderTextColor="#C0C0C1" secureTextEntry={true}/>
      </InputContainer>
      <ForgetPassword>Esqueceu sua senha?</ForgetPassword>
      <DefaultButton 
        buttonType='primary' 
        marginVertical={40} 
        buttonText="Fazer Login"
        buttonHandle={()=>{
          handleLogin();
        }}
      />
      <RegisterText onPress={()=>{
        navigation.navigate("Register");
      }}>
        Você ainda não tem conta? <Bold>Registre-se aqui!</Bold> 
      </RegisterText>
      <CompanyLogo source={companyLogo}/>
    </Container>
  )
}

export default Login;