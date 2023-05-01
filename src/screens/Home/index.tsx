import React from "react";
import {View, Text} from "react-native";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import { Container } from "./styled";

const Home = () => {
    return (
        <Container>
            <Header/>
            <NavBar/>
        </Container>
    )
}

export default Home;