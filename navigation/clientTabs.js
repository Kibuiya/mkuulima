import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'
import Home from '../screens/Home'
import SearchScreen from '../screens/SearchScreen'
import { colors } from '../global/styles';
import TransactionsScreen from '../screens/Transactions'
import AccountScreen from '../screens/AccountScreen'
import { ClientStack } from './ClientStack'
import DrawerNavigator from './DrawerNavigation';



const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator
            tabBarOptions = {{
                activeTintColor: colors.primaryButton
            }}
          >
             <ClientTabs.Screen
            name= "HomeScreen"
            component= {Home}
            options = {
                {
                    tabBarLabel: "Home",
                    tabBarIcon: ({color,size})=>(
                        <Icon
                        name= "home"
                        type= 'material'
                        color={color}
                        // size={size}
                        />
                    ),
                    headerShown: false  
                }
            }
            /> 
            <ClientTabs.Screen
            name= "SearchScreen"
            component= {ClientStack}
            options = {
                {
                    tabBarLabel: "Search",
                    tabBarIcon: ({color,size})=>(
                        <Icon
                        name= "search"
                        type= 'material'
                        color={color}
                        size={size}
                        />
                    ),
                     headerShown: false 
                }
            }
            />
           <ClientTabs.Screen
            name= "Transactions"
            component= {TransactionsScreen}
            options = {
                {
                    tabBarLabel: "Transactions",
                    tabBarIcon: ({color,size})=>(
                        <Icon
                        name= "view-list"
                        type= 'material'
                        color={color}
                        size={size}
                        />
                    ),
                     headerShown: false 
                }
            }
            />
             <ClientTabs.Screen
            name= "My Account"
            component= {AccountScreen}
            options = {
                {
                    tabBarLabel: "My Account",
                    tabBarIcon: ({color,size})=>(
                        <Icon
                        name= "person"
                        type= 'material'
                        color={color}
                        size={size}
                        />
                    ),
                    headerShown: false 
                }
            }
            />
        </ClientTabs.Navigator>
    )
}