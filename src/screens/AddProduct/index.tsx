import { ImagePickerAsset } from 'expo-image-picker';
import React, {useEffect, useState} from 'react'
import UploadInput from '../../components/AddProduct/UploadInput';
import DefaultButton from '../../components/common/DefaultButton';
import DefaultTitle from '../../components/common/DefaultTitle'
import DropDownComponent from '../../components/common/DropDownComponent';
import { Container, Input, InputContainer, DescriptionContainer, Division } from './styled'
import addressService from '../../services/addressService';
import { Address } from '../../entities/User';
import { Alert } from 'react-native';
import productService from '../../services/productService';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes';



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

const AddProduct = () => {
  const [categorie, setCategorie] = useState("");
  const [address, setAddress] = useState([]);
  const [addressId, setAddressId] = useState("");
  const [images, setImages] = useState<ImagePickerAsset[]>([]);
  const [fields, setFields] = useState({
    name: "",
    price: "",
    description: "",
    images: [{}],
    category: "",
    addressId: "",
  });

  const navigation = useNavigation<PropsStack>();

  const handleGetAddress = async ()=> {
    const res = await addressService.getAddress();

    if(res.status === 401) return;

    const value = res.data.map((address: Address)=>{
      return {
        key: address._id,
        value: `${address.street} Nº ${address.number}`,
      }
    })

    setAddress(value)
  }
  
  const handleSubmitProduct = async (post: string) => {
    if(Object.values(fields).some((value)=> !value || !fields.images.length)){
      Alert.alert("Um dos seus campos está vazio");
      return;
    }
    const params = {
      ...fields,
      images: images.map(({uri})=>({
        filename: uri.substring(uri.lastIndexOf("/") + 1),
        uri,
        url: "",
        type: `image/${uri.split(".").slice(-1).toString()}`,
      })),
      published: post,
    };

    const {status} = await productService.addProduct(params);

    if(status===201){
      Alert.alert("Seu produto foi cadastrado com sucesso!");
      navigation.navigate("Home");
    }
  };

  
  useEffect(() => {
    setFields({
      ...fields,
      images: images,
      category: categorie,
      addressId: addressId,
    });
  }, [images, categorie, addressId]);

  useEffect(()=>{
    handleGetAddress()
  },[])

  return (
    <Container contentContainerStyle={{ paddingBottom: 140 }}>
      <DefaultTitle fontSize={20} title="CADASTRO DO ANÚNCIO"/>

      <InputContainer>
        <Input 
          placeholder='Título'
          value={fields.name}
          onChangeText={(val)=> {
            setFields({
              ...fields,
              name: val,
            });
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input 
          placeholder='Preço' 
          keyboardType='numeric'
          value={fields.price}
          onChangeText={(val)=> {
            setFields({
              ...fields,
              price: val,
            });
          }}
        />
      </InputContainer>

      <DescriptionContainer>
        <Input 
          placeholder='Descrição'
          value={fields.description}
          onChangeText={(val)=> {
            setFields({
              ...fields,
              description: val,
            });
          }}
        />
      </DescriptionContainer>

      <UploadInput images={images} setImages={setImages}/>

      <DropDownComponent
        data={Categorie}
        placeholder='Selecione a categoria'
        setSelected={setCategorie}
        saveMethod='value'
      />
    
      <DropDownComponent
        data={address}
        placeholder='Selecione um endereço'
        setSelected={setAddressId}
        saveMethod='key'
      />

      <DefaultButton
        buttonHandle={()=>{
          handleSubmitProduct("true")
        }}
        buttonText='CADASTRAR E PUBLICAR'
        buttonType='primary'
        marginVertical={20}
      />

      <Division>Ou</Division>

      <DefaultButton
        buttonHandle={()=>{
          handleSubmitProduct("false")
        }}
        buttonText='SALVAR COMO RASCUNHO'
        buttonType='secondary'
        marginVertical={20}
      />
    </Container>
  )
}

export default AddProduct