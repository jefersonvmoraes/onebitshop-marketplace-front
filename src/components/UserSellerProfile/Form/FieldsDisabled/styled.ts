import styled from "styled-components/native";
import { DropDownContainer, DropDown, ArrowIcon } from "../../../common/DropDownComponent/styled";
import { InputContainer } from "../styled";

export const InputDisabled = styled(InputContainer)`
  background-color: transparent;
`;

export const PlaceholderDisabled = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme})=> theme.colors.secondaryText};
`;

export const DropDownDisabledContainer = styled(DropDownContainer).attrs({
  pointerEvents: 'none',
})``;

export const DropDrownDisabled = styled(DropDown).attrs({
  boxStyles: {
    minWidth: '100%',
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingLeft: 10,
  },
  inputStyles: {
    color: '#c0c0c1',
    fontWeight: 'bold',
    fontSize: 18,
  }
})``;

export const ArrowIconDisabled = styled(ArrowIcon)``;