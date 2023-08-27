import { Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { InputContainer } from '../styled'
import { Input } from './styled'
import DefaultButton from '../../../common/DefaultButton'
import DropDownComponent from '../../../common/DropDownComponent'
import { Address, User } from '../../../../entities/User'
import addressService from '../../../../services/addressService'
import Loader from '../../../../screens/Loader'
import profileService from '../../../../services/profileService'
import useAuth from '../../../../hook/useAuth'
import { useNavigation } from '@react-navigation/native'
import { PropsStack } from '../../../../routes'

interface Props {
  userInfo: User;
};

const FieldsAbleds = ({userInfo}: Props) => {
  const navigation = useNavigation<PropsStack>();
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  const [address, setAddress] = useState([]);
  const [selectd, setSelected] = useState("");
  const [loading, setLoading] = useState(true);

  const {logout} = useAuth();

  const handleSetInfos = async () => {
    const res = await addressService.getAddress();

    const value = res.data.map((address: Address)=> {
      return {value: `${address.street} Nº ${address.number}`, disabled: true};
    })
    setAddress(value);
    setFields({
      ...fields,
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
    })
    setLoading(false);
  }

  const handleUpdateInfo = async () =>{
    const res = await profileService.updateUserProfile(fields);
    
    if(res.status === 400){
      Alert.alert("Esse email pertence a outra conta!");
      return;
    }
    if(fields.email != userInfo.email){
      logout();
    }
    navigation.navigate("Home");
    Alert.alert("Informações atualizadas com sucesso!");
  }

  useEffect(()=>{
    handleSetInfos();
  },[])

  if(loading){
    return <Loader/>
  }

  return (
    <>
      <InputContainer>
        <Input 
          value={fields.name}
          onChangeText={(value)=> {
            setFields({
              ...fields,
              name: value
            })
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input 
          value={fields.email}
          onChangeText={(value)=> {
            setFields({
              ...fields,
              email: value
            })
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input 
          value={fields.phone}
          onChangeText={(value)=> {
            setFields({
              ...fields,
              phone: value
            })
          }}
        />
      </InputContainer>
      
      <DropDownComponent
        data={address}
        placeholder="Seus endereços"
        setSelected={setSelected}
        saveMethod='value'
      />
      <InputContainer>
        <Input 
          placeholder='Senha'
          placeholderTextColor='#C0C0C1'
          secureTextEntry
          onChangeText={(value)=>{
            setFields({
              ...fields,
              currentPassword: value,
            })
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input 
          placeholder='Nova Senha'
          placeholderTextColor='#C0C0C1'
          secureTextEntry
          onChangeText={(value)=>{
            setFields({
              ...fields,
              newPassword: value,
            })
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input 
          placeholder='Confirmar Nova Senha'
          placeholderTextColor='#C0C0C1'
          secureTextEntry
          onChangeText={(value)=>{
            setFields({
              ...fields,
              confirmNewPassword: value,
            })
          }}
        />
      </InputContainer>
      
      <DefaultButton 
        buttonHandle={handleUpdateInfo}
        buttonText="Salvar Alterações"
        buttonType="primary"
        marginVertical={10}
      />
    </>
  )
}

export default FieldsAbleds