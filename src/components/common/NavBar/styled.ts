import styled from "styled-components/native";
import Constants from "expo-constants";

const plataform = Constants.platform;
console.log(!plataform?.ios)


export const Container = styled.View`
    width: 100%;
    height: ${plataform?.ios ? 80 : 60}px;
    background-color: ${({theme})=> theme.colors.background};
    position: absolute;
    bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    padding-bottom: ${plataform?.ios ? 20 : 0}px;
`;

export const IconButton = styled.TouchableOpacity``;

export const Icon = styled.Image.attrs({
    resizeMode: "contain",
})`
    width: 30px;
`;