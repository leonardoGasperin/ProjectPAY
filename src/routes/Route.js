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
import { Home } from '../screens/Home/Home';
import { Bills } from '../screens/Bills/Bills';
import { Scanner } from '../screens/Scanner/Scanner';
import { DetailsBill } from '../screens/DetailsBill/DetailsBill';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackRoute(){
    return(
        <Stack.Navigator initialRouteName="Initial">
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="Initial" 
                component={Initial}
                
            />
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="Login" 
                component={Login}
            />
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="RegisterRoute" 
                component={RegisterRoute}
            />
        </Stack.Navigator>
    );
}

function TabRoute(){
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                options={{ 
                        headerShown: false,
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="home" color="#f90" selectionColor="#f90" size={26}/>
                        ),
                    }} 
                name="Home" 
                component={Home} 
            />
            <Tab.Screen 
                options={{ 
                        headerShown: false,
                        tabBarLabel: 'Bills',
                        tabBarIcon: () => (
                            <Entypo name="text-document" color="#f90" size={26}/>
                        ),
                    }} 
                name="Bills" 
                component={Bills}
            />
            <Tab.Screen 
                options={{ 
                        headerShown: false,
                        tabBarLabel: 'Scanner',
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="qrcode-scan" color="#f90" size={26}/>
                        ),
                    }} 
                name="Scanner" 
                component={Scanner}
            />
        </Tab.Navigator>
    );
}

function RegisterRoute(){
    return(
        <Stack.Navigator initialRouteName="Register">
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="Register" 
                component={Register}
            />
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="AddressInf" 
                component={AddressInf}
            />
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="DateBill" 
                component={DateBill}
            />
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="Tos" 
                component={Tos}
            />
        </Stack.Navigator> 
    );  
}

export default function Route() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="StackRoutes">
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="StackRoutes" 
                component={StackRoute} 
            />
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="TabRoute" 
                component={TabRoute} 
            />
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="DetailsBill" 
                component={DetailsBill} 
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}