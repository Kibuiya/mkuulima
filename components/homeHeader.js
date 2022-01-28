import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Icon, withBadge } from 'react-native-elements'
import {colors, parameters} from '../global/styles'

export default function HomeHeader({navigation}){

    const BadgeIcon= withBadge(0)(Icon)
    return(
        <View style={styles.header}>
            
            <View style={{flexDirection: 'column', display: 'flex', justifyContent: "space-between", marginRight: 325}}>
            <Icon
                type = "material-community"
                name= "menu"
                color= {colors.cardBackground}
                size= {32}
                style={styles.icon}
                />     
                <Icon
                type = "material-community"
                name= "menu"
                color= {colors.cardBackground}
                size= {32}
                style={styles.icon}
                onPress={()=>{
                 navigation.toggleDrawer()   
                }}
                />           
            </View>
            <View style={{alignItems: "center", justifyContent: "center", marginVertical: -25}}>
                <Text style={{color:colors.cardBackground, fontSize: 25, fontWeight:"bold"}}>Mkuulima</Text>
            </View> 
            <View style={{alignItems: "center", justifyContent: "center", marginLeft: 325, marginVertical: -10}}>
                <BadgeIcon
                type= "material-community"
                name="cart"
                size= {30}
                color={colors.cardBackground}
                />
            </View>
            
                          
        </View>

       
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primaryButton,
        height: parameters.headerHeight,
    },
    icon: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 20,
        
    }
})
