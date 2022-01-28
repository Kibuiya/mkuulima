import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function BusinessConsoleScreen(){
    return(
        <View style={styles.container}>
            <Text>Business Console</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})