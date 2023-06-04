import { Alert } from 'react-native'
import React, { useState } from 'react'
import { InputContainer } from '../styled'
import { Input } from './styled'
import DefaultButton from '../../../common/DefaultButton'
import DropDownComponent from '../../../common/DropDownComponent'

const FieldsAbleds = () => {
  const [name, setName] = useState("Jeferson Moraes");
  const [email, setEmail] = useState("email@hotmail.com");
  const [phone, setPhone] = useState("(99) 99999-9999");

  const [select, setSelect] = useState("");

  const Data = [
    {value: 'Endereço de teste', disabled: true},
    {value: 'Endereço de teste', disabled: true},
  ];
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
      
      <DropDownComponent
        data={Data}
        placeholder="Seus endereços"
        setSelected={setSelect}
      />
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