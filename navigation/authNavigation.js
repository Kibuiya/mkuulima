import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../screens/Landing';
import Login2 from '../screens/Login2';
import Register from '../screens/Register';
import ClientTabs from './clientTabs'
const AuthStack = createNativeStackNavigator();

export default function Auth() {
  return (
      <AuthStack.Navigator>
        <AuthStack.Screen
        name= "Splash"
        component= {Landing}
         // Hiding header for Splash Screen
         options={{headerShown: false}}
         
        />
        <AuthStack.Screen
        name= "Login"
        component= {Login2}
         // Hiding header for Splash Screen
         options={{headerShown: false}}
        />
        <AuthStack.Screen
        name= "Register"
        component= {Register}
         // Hiding header for Splash Screen
         options={{headerShown: false}}
        />
        <AuthStack.Screen
        name= "ClientTabs"
        component= {ClientTabs}
         // Hiding header for Splash Screen
         options={{headerShown: false}}
        /> 

        </AuthStack.Navigator>


);    
    
};



