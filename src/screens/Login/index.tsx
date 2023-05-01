import React from 'react';
import { Container, ForgetPassword, Input, InputContainer, Logo } from './styled';
import BackIcon from '../../components/common/BackIcon';
import DefaultButton from '../../components/common/DefaultButton';
import { Alert } from 'react-native';

const logo = require("../../../assets/images/logo.png")
const Login = () => {

  const handleLogin = () => {
    Alert.alert("Botao de login")
  }
  return (
    <Container>
      <BackIcon marginLeft={30}/>
      <Logo source={logo}/>
      <InputContainer>
        <Input placeholder='Email' placeholderTextColor="white"/>
      </InputContainer>

      <InputContainer>
        <Input placeholder='Senha' placeholderTextColor="white" secureTextEntry={true}/>
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
    </Container>
  )
}

export default Login;