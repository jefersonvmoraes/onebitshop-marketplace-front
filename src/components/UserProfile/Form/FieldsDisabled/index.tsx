import React from 'react';
import DropDownComponent from '../../../common/DropDownComponent';
import { InputDisabled, PlaceholderDisabled } from './styled';

const FieldsDisabled = () => {
  return (
    <>
      <InputDisabled>
        <PlaceholderDisabled>Jeferson Moraes</PlaceholderDisabled>
      </InputDisabled>

      <InputDisabled>
        <PlaceholderDisabled>email@hotmail.com</PlaceholderDisabled>
      </InputDisabled>

      <InputDisabled>
        <PlaceholderDisabled>(99) 99999-9999</PlaceholderDisabled>
      </InputDisabled>

      {/* <DropDownComponent/> */}

      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  )
}

export default FieldsDisabled