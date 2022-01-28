import React,{useLayoutEffect}from 'react'
import { createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import CategoryHomeScreen from '../screens/CategoryHomeScreen';
import MenuProductScreen from '../screens/MenuProductScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';


const ClientSearch = createStackNavigator()

export  function ClientStack({navigation, route}) {

    useLayoutEffect(()=>{
        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName === "CategoryHomeScreen" || "MenuProductScreen"){
            navigation.setOptions({tabBarVisible: false})
        }else{
            navigation.setOptions({tabBarVisible: true}) 
        }
    },[navigation, route])

    return (
       <ClientSearch.Navigator>

            <ClientSearch.Screen 
                name ="SearchScreen"
                component ={SearchScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <ClientSearch.Screen 
                name ="SearchResultScreen"
                component ={SearchResultScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <ClientSearch.Screen 
                name ="CategoryHomeScreen"
                component ={CategoryHomeScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />
            <ClientSearch.Screen 
                    name ="MenuProductScreen"
                    component ={MenuProductScreen}
                    options = {
                        ()=>({
                            headerShown:false
                        })
                    }
                />


       </ClientSearch.Navigator>
    )
}

