import { View, Text } from 'react-native'
import React, { SetStateAction, useContext, useState } from 'react'
import { ButtonText, ButtonsContainer, CleanButton, Container, Input, LocationInputContainer, PriceContainer, PriceInputContainer, Title, AplyButton } from './styled'
import DropDownComponent from '../../../common/DropDownComponent'
import { QueryContext } from '../../../../contexts/QueryContext';


const Categorie = [
  { value: "Eletrônicos" },
  { value: "Eletrodomésticos" },
  { value: "Moda e Acessórios" },
  { value: "Pets" },
  { value: "Brinquedos e Jogos" },
  { value: "Casa e Jardim" },
  { value: "Esporte e Lazer" },
  { value: "Automóveis e Veículos" },
];

interface Props {
  setShowFilters: React.Dispatch<SetStateAction<boolean>>;
}

const ComplementFilters = ({setShowFilters}: Props) => {

  const [categorie, setCategorie] = useState("");
  const queryContext = useContext(QueryContext);
  const [fields, setFields] = useState({
    minPrice: "",
    maxPrice: "",
    address: "",
  });

  const handleMinPrice = () => {
    queryContext.addFilters(`minPrice=${fields.minPrice}`);
  };

  const handleMaxPrice = () => {
    queryContext.addFilters(`maxPrice=${fields.maxPrice}`);
  };

  const handleAddress = () => {
    queryContext.addFilters(`location=${fields.address}`);
  };

  const handleCategory = () => {
    queryContext.addFilters(`category=${categorie}`);
  };


  const handleSearchFiltered = () => {
    if(fields.minPrice){
      handleMinPrice();
    }
    if(fields.maxPrice){
      handleMaxPrice();
    }
    if(fields.address){
      handleAddress();
    }
    if(categorie){
      handleCategory();
    }
    setShowFilters(false);
  };

  return (
    <Container>
      <Title>VALOR</Title>
      <PriceContainer>
        <PriceInputContainer>
          <Input
            placeholder="Mínimo"
            placeholderTextColor="white"
            keyboardType="numeric"
            value={fields.minPrice}
            onChangeText={(val)=>{
              setFields({
                ...fields,
                minPrice: val,
              });
            }}
            style={{textAlign: 'center'}}
          />
        </PriceInputContainer>

        <PriceInputContainer>
          <Input
            placeholder="Máximo"
            placeholderTextColor="white"
            keyboardType="numeric"
            value={fields.maxPrice}
            onChangeText={(val)=>{
              setFields({
                ...fields,
                maxPrice: val,
              });
            }}
            style={{textAlign: 'center'}}
          />
        </PriceInputContainer>
      </PriceContainer>

      <Title>Localização</Title>
      <LocationInputContainer>
        <Input
          placeholder="Bairro, Cidade e/ou Estado (Um por  vez)"
          placeholderTextColor="white"
          value={fields.address}
          onChangeText={(val)=>{
            setFields({
              ...fields,
              address: val,
            });
          }}
        />
      </LocationInputContainer>

      <Title>Categoria</Title>
      <DropDownComponent
        data={Categorie}
        placeholder='Selecione a categoria'
        setSelected={setCategorie}
        saveMethod='value'
      />

      <ButtonsContainer>
        <CleanButton onPress={()=>{}}>
          <ButtonText>Limpar</ButtonText>
        </CleanButton>
        <AplyButton onPress={handleSearchFiltered}>
          <ButtonText>Aplicar</ButtonText>
        </AplyButton>
      </ButtonsContainer>
    </Container>
  )
}

export default ComplementFilters