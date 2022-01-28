import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image }from 'react-native';

export default function Landing ({navigation}) {
    return(
      <SafeAreaView style={styles.container}>

      <View>
        <Image
        style={{height:300, width: 390, marginBottom: 20}}
         source={require('../assets/landing.png')}
         />
      </View>
      <View>
        <Text style={styles.ptext}>Welcome to Mkuulima</Text>
      </View>
      <TouchableOpacity 
      style={styles.primaryButton}
      onPress={() => {
        navigation.navigate("Login")
        }}   
      >
      <Text
       style={{fontWeight: 'bold', fontSize: 18, color:'#ffff' }}> Log In </Text>
      </TouchableOpacity> 
      <View>
      <Text style={styles.ptext}>First Time? </Text>
      </View>       
      <TouchableOpacity
       style={styles.secondaryButton}
       onPress={() => {
        navigation.navigate("Register")
        }}
       >
      <Text style={{fontWeight: 'bold', fontSize: 18, color:'#115C21' }}> Sign Up  </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryButton: {
        marginTop: 20,
        width: 250,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#0BCE83',      
    },
    secondaryButton:{
        marginTop: 20,
        width: 170,
        height: 55,
        backgroundColor: '#ACFF86',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',

    },
    ptext:{
      marginTop: 30,
      fontSize: 30,
      fontWeight: 'bold',
      color: '#418D3F',
    },
   
  });