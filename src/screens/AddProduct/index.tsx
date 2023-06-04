import React, {useState} from 'react'
import DefaultButton from '../../components/common/DefaultButton';
import DefaultTitle from '../../components/common/DefaultTitle'
import DropDownComponent from '../../components/common/DropDownComponent';
import { Container, Input, InputContainer, DescriptionContainer, Division } from './styled'

const Address = [
  { value: "Endereço 1" },
  { value: "Endereço 2" },
  { value: "Endereço 3" },
  { value: "Endereço 4" },
];

const Categorie = [
  { value: "Categoria 1" },
  { value: "Categoria 2" },
  { value: "Categoria 3" },
  { value: "Categoria 4" },
];

const AddProduct = () => {
  const [categorie, setCategorie] = useState("");
  const [address, setAddress] = useState("");
  return (
    <Container contentContainerStyle={{ paddingBottom: 120 }}>
      <DefaultTitle fontSize={20} title="CADASTRO DO ANÚNCIO"/>

      <InputContainer>
        <Input placeholder='Título'/>
      </InputContainer>

      <InputContainer>
        <Input placeholder='Preço' keyboardType='numeric'/>
      </InputContainer>

      <DescriptionContainer>
        <Input placeholder='Descrição'/>
      </DescriptionContainer>

      <InputContainer>
        <Input placeholder='IMAGEM (SIMBÓLICO)'/>
      </InputContainer>

      <DropDownComponent
        data={Categorie}
        placeholder='Selecione a categoria'
        setSelected={setCategorie}
      />
    
      <DropDownComponent
        data={Address}
        placeholder='Selecione um endereço'
        setSelected={setAddress}
      />

      <DefaultButton
        buttonHandle={()=>{}}
        buttonText='CADASTRAR E PUBLICAR'
        buttonType='primary'
        marginVertical={20}
      />

      <Division>Ou</Division>

      <DefaultButton
        buttonHandle={()=>{}}
        buttonText='SALVAR COMO RASCUNHO'
        buttonType='secondary'
        marginVertical={20}
      />
    </Container>
  )
}

export default AddProduct