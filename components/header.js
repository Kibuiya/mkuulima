import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {colors, parameters} from '../global/styles';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function Header({title, type, navigation}){
    return(
        <View style= {styles.header}>
            <View style={styles.icon}>
                <Icon
                    type= "material-community"
                    name= {type}
                    color= {colors.headerText}
                    size= {28}
                    onPress = {()=>{navigation.goBack(null)}}
                />               
            </View>
            <View>
                <Text style= {styles.headerText}>{title}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: parameters.headerHeight,
        backgroundColor: colors.primaryButton,
        alignItems: 'flex-end',
    },
    headerText:{
        color: colors.headerText,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 30,
        marginBottom: 15,
    },
    icon: {
        marginLeft: 20,
        marginBottom: 15,
    } 
})
