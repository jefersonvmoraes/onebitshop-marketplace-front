import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { BtnImg, Container, EditBtn, EditBtnContainer } from './styled'
import FieldsDisabled from './FieldsDisabled'
import FieldsAbleds from './FieldsAbled'

const btnImg = require("../../../../assets/icons/edit.png");

const Form = () => {
  const [editable, setEditable] = useState(false);

  const handleToggleEditable = () => {
    setEditable(!editable)
  }

  return (
    <Container>
      <EditBtnContainer>
        <EditBtn onPress={handleToggleEditable}>
          <BtnImg source={btnImg}/>
        </EditBtn>
      </EditBtnContainer>

      {!editable ? <FieldsDisabled/> : <FieldsAbleds/>}

    </Container>
  )
}

export default Form