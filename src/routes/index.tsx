import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Search from "../screens/Search";
import UserProfile from "../screens/UserProfile";
import SellerProfile from "../screens/SellerProfile";
import AllAddress from "../screens/AllAddress";
import AddAddress from "../screens/AddAddress";
import AddProduct from "../screens/AddProduct";
import Categories from "../screens/Categories";



export type PropsNavigationStack = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    Search: {
        query: string;
    };
    UserProfile: undefined;
    SellerProfile: undefined;
    AllAddress: undefined;
    AddAddress: undefined;
    AddProduct: undefined;
    Categories: undefined;
};

const Stack = createNativeStackNavigator<PropsNavigationStack>();

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                        headerShown: false,
                    }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Search" component={Search}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="UserProfile" component={UserProfile}/>
                <Stack.Screen name="SellerProfile" component={SellerProfile}/>
                <Stack.Screen name="AllAddress" component={AllAddress}/>
                <Stack.Screen name="AddAddress" component={AddAddress}/>
                <Stack.Screen name="AddProduct" component={AddProduct}/>
                <Stack.Screen name="Categories" component={Categories}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
