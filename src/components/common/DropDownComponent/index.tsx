import React, { SetStateAction } from 'react'
import { ArrowIcon, DropDown, DropDownContainer } from './styled'

const arrowDownIcon = require("../../../../assets/icons/arrow-down.png");


interface DropDownProps {
  data: Object[];
  placeholder: string;
  setSelected: React.Dispatch<SetStateAction<string>>;
  saveMethod: string;
}

const DropDownComponent = ({data, placeholder, setSelected, saveMethod,}: DropDownProps) => {
  const noAddress = [{value: 'Sem endereços no momento', disabled: true}];
  const checkedData = data?.length <= 0 ? noAddress : data;
  return (
    <DropDownContainer>
      <DropDown
        data={checkedData}
        setSelected={setSelected}
        placeholder={placeholder}
        save={saveMethod === 'value' ? "value" : "key"}
        search={false}
        arrowicon={<ArrowIcon source={arrowDownIcon}/>}
      />
    </DropDownContainer>
  )
}

export default DropDownComponent