import React from 'react';
import { ArrowIconDisabled, DropDownDisabledContainer, DropDrownDisabled, InputDisabled, PlaceholderDisabled } from './styled';

const arrowIcon = require("../../../../../assets/icons/arrow-down.png");

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

      <DropDownDisabledContainer>
        <DropDrownDisabled
          setSelected={()=>{}}
          data={[]}
          placeholder="Seus endereços"
          arrowicon={<ArrowIconDisabled source={arrowIcon}/>}
        />
      </DropDownDisabledContainer>

      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  )
}

export default FieldsDisabled