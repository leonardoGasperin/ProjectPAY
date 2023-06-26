import React from 'react';
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Initial } from "../screens/Initial/Initial"
import { Login } from "../screens/Login/Login"
import { Register } from "../screens/Register/Register"
import { AddressInf } from '../screens/Register/AddressInf';
import { DateBill } from '../screens/Register/DateBill';
import { Tos } from '../screens/Register/Tos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackRoutes(){
    return(
        <Stack.Navigator initialRouteName="Initial">
            <Stack.Screen options={{ headerShown: false }} name="Initial" component={Initial}/>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}/>
            <Stack.Screen options={{ headerShown: false }} name="RegisterRoute" component={RegisterRoute}/>
        </Stack.Navigator>
    );
}

function RegisterRoute(){
    return(
        <Stack.Navigator initialRouteName="Register">
            <Stack.Screen options={{ headerShown: false }} name="Register" component={Register}/>
            <Stack.Screen options={{ headerShown: false }} name="AddressInf" component={AddressInf}/>
            <Stack.Screen options={{ headerShown: false }} name="DateBill" component={DateBill}/>
            <Stack.Screen options={{ headerShown: false }} name="Tos" component={Tos}/>
        </Stack.Navigator> 
    );  
}

export default function Route() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="StackRoutes">
            <Stack.Screen options={{ headerShown: false }} name="StackRoutes" component={StackRoutes} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}