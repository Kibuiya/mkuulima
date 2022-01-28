import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './clientTabs';
import { Icon} from 'react-native-elements';
import {colors} from '../global/styles'
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import Categories from '../screens/Categories'
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator
        drawerContent = {props => <DrawerContent {...props}/> } 
        >
        <Drawer.Screen
        name = "RootClientTabs"
        component = {RootClientTabs}

        options = {{
            headerShown: false,
            title:"Home",
            drawerIcon: ({focussed, size})=>{
                <Icon
                type= "material-community"
                name = "home"
                color = {focussed ? colors.primaryButton : "lightgrey"}
                size = {size}
                />
            } 
         }}
        />    

        <Drawer.Screen
            name = "Categories"
            component = {Categories}
            
            options = {{
                headerShown: false,
                title:"Categories",
                drawerIcon: ({focussed, size})=>{
                    <Icon
                    type= "material-community"
                    name = "card-text"
                    color = {focussed ? colors.primaryButton : "lightgrey"}
                    size = {size}
                    />
                } 
            }}
          />    

        <Drawer.Screen
            name = "Business Console Screen"
            component = {BusinessConsoleScreen}
            
            options = {{
                headerShown: false,
                title:"Business Console",
                drawerIcon: ({focussed, size})=>{
                    <Icon
                    type= "material-community"
                    name = "cash-fast"
                    color = {focussed ? colors.primaryButton : "lightgrey"}
                    size = {size}
                    />
                } 
            }}
          />    


        </Drawer.Navigator>
    )
}