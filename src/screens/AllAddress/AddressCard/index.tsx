import React from 'react'
import { Alert } from 'react-native'

import { Container, ContentTxt, DeleteBtn, DeleteIcon } from './styled'
import { Address } from '../../../entities/User'

const deleteIcon = require("../../../../assets/icons/trash.png")

interface ItemProps {
  item: Address
}

const AddressCard = ({item}: ItemProps) => {
  return (
    <Container>
      <ContentTxt>{`Rua: ${item.street} - Nº ${item.number}\nUF: ${item.state}\nCEP: ${item.cep}`}</ContentTxt>
      <DeleteBtn onPress={()=>{Alert.alert("Clicado")}}>
        <DeleteIcon source={deleteIcon}/>
      </DeleteBtn>
    </Container>
  )
}

export default AddressCard