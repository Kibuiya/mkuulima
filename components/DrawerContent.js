import React, {useState, useContext, useEffect} from 'react';
import{
    View,
    Text,
    Linking,
    Pressable,
    Alert,
    Switch, 
    StyleSheet
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';

import {Avatar, Button, Icon} from 'react-native-elements';
import {colors} from '../global/styles';

export default function DrawerContent(props){
    return(
    <View style={styles.container}>
        <DrawerContentScrollView {...props}>
        <View style={{flexDirection: "row", alignItems: "center", backgroundColor: colors.primaryButton, paddingLeft: 15, paddingVertical: 10}}>
            <Avatar
            rounded
            avatarStyle = {styles.avatar}
            size = {75}
            source = {{uri:"https://image.freepik.com/free-photo/cabbage-burlap-background_1401-415.jpg"}}
            />
            <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: "bold", color:colors.cardBackground, fontSize: 18}}>Quincy Kibuiya</Text>
                <Text style={{color:colors.cardBackground, fontSize: 15}}>quincy@mkuulima.com</Text>
            </View>
        </View>  

        <DrawerItemList {...props} />

        <DrawerItem
        label = "Payment"
        icon = {({color, size})=>(
            <Icon
            type = "material-community"
            name = "credit-card-outline"
            color = {color}
            size = {size}
            />
        )}
        />
         <DrawerItem
        label = "Promos"
        icon = {({color, size})=>(
            <Icon
            type = "material-community"
            name = "tag-heart"
            color = {color}
            size = {size}
            />
        )}
        />
         <DrawerItem
        label = "Settings"
        icon = {({color, size})=>(
            <Icon
            type = "material-community"
            name = "cog-outline"
            color = {color}
            size = {size}
            />
        )}
        />


        
        </DrawerContentScrollView>
        <DrawerItem
        label = "Sign Out"
        icon = {({color, size})=>(
            <Icon
            type = "material-community"
            name = "logout-variant"
            color = {color}
            size = {size}
            />
        )}
         />

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    avatar:{
       borderWidth: 4,
       borderColor: colors.cardBackground 
    }
})