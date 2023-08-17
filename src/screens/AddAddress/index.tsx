import React, {useState} from 'react'
import { Container, Input, InputContainer, InputMask } from './styled'
import DefaultTitle from '../../components/common/DefaultTitle'
import DefaultButton from '../../components/common/DefaultButton'
import axios from 'axios'
import { Alert } from 'react-native'
import addressService from '../../services/addressService'
import { useNavigation } from '@react-navigation/native'
import { PropsStack } from '../../routes'

const AddAddress = () => {

  const navigation = useNavigation<PropsStack>();
  const [fields, setFields] = useState({
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
    cep: "",
  });

  const hendleGetAddress = async () => {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${fields.cep}/json/`
    );

    setFields({
      ...fields,
      street: data.logradouro,
      state: data.uf,
      city: data.localidade,
      district: data.bairro,
    });
  };

  const handleAddAddres = async () => {
    if(fields.cep.length < 8){
      Alert.alert("Você precisa preencher o seu CEP!");

      return;
    } else if (
      !fields.city ||
      !fields.district ||
      !fields.number ||
      !fields.state ||
      !fields.street
    ){
      Alert.alert("Algum de seus campos obrigatórios está vazio!");
      return;
    }

    const params = fields;
    const data = await addressService.addAddress(params);

    if(data.status === 201){
      navigation.navigate("AllAddress",{ newAddress: true });
    }
  }

  return (
    <Container contentContainerStyle={{paddingBottom: 400}}>
      <DefaultTitle title='CADASTRAR ENDEREÇOS' fontSize={20}/>

      <InputContainer>
        <InputMask
          type="zip-code"
          placeholder='Cep'
          placeholderTextColor="#c0c0c1"
          value={fields.cep}
          onChangeText={(value)=>{
            setFields({...fields, cep: value.replace(/[^0-9]/g, "")});
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder='Rua'
          placeholderTextColor="#c0c0c1"
          value={fields.street}
          onChangeText={(value)=>{
            setFields({...fields, street: value});
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder='Número da casa/prédio'
          placeholderTextColor="#c0c0c1"
          keyboardType='number-pad'
          value={fields.number}
          onChangeText={(value)=>{
            setFields({...fields, number: value});
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder='Complemento'
          placeholderTextColor="#c0c0c1"
          value={fields.complement}
          onChangeText={(value)=>{
            setFields({...fields, complement: value});
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder='Bairro'
          placeholderTextColor="#c0c0c1"
          value={fields.district}
          onChangeText={(value)=>{
            setFields({...fields, district: value});
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder='Cidade'
          placeholderTextColor="#c0c0c1"
          value={fields.city}
          onChangeText={(value)=>{
            setFields({...fields, city: value});
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder='Estado'
          placeholderTextColor="#c0c0c1"
          maxLength={2}
          value={fields.state}
          onChangeText={(value)=>{
            setFields({...fields, state: value});
          }}
        />
      </InputContainer>

      <DefaultButton 
        buttonHandle={handleAddAddres}
        buttonText="Cadastrar Endereço"
        buttonType='primary'
        marginVertical={30}
      />
      
    </Container>
  )
}

export default AddAddress