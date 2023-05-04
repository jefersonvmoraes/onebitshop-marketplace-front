import { Alert } from 'react-native'
import React, { useState } from 'react'
import { InputContainer } from '../styled'
import { AddressText, Input } from './styled'
import DefaultButton from '../../../common/DefaultButton'

const FieldsAbleds = () => {
  const [name, setName] = useState("Jeferson Moraes");
  const [email, setEmail] = useState("email@hotmail.com");
  const [phone, setPhone] = useState("(99) 99999-9999");
  return (
    <>
      <InputContainer>
        <Input 
          value={name}
          onChangeText={(value)=> {
            setName(value)
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input 
          value={email}
          onChangeText={(value)=> {
            setEmail(value)
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input 
          value={phone}
          onChangeText={(value)=> {
            setPhone(value)
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input 
          value="DROPDOWN"
        />
      </InputContainer>
      <InputContainer>
        <Input 
          placeholder='Senha'
          placeholderTextColor='#C0C0C1'
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input 
          placeholder='Nova Senha'
          placeholderTextColor='#C0C0C1'
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input 
          placeholder='Confirmar Nova Senha'
          placeholderTextColor='#C0C0C1'
          secureTextEntry
        />
      </InputContainer>
      <AddressText onPress={()=>{Alert.alert("Gerenciar Endereços")}}>Gerenciar Endereços</AddressText>
      
      <DefaultButton 
        buttonHandle={()=>{Alert.alert("Alterações salvas")}}
        buttonText="Salvar Alterações"
        buttonType="primary"
        marginVertical={10}
      />
    </>
  )
}

export default FieldsAbleds