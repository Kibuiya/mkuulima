import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,ImageBackground,Animated } from 'react-native'
import {categoryData} from '../global/Data'
import {colors} from "../global/styles"

import {Icon} from 'react-native-elements'

export default function CategoryHeader({navigation,id}) {
      return (
        <View style ={styles.container}>
            <ImageBackground
                style = {styles.container}
                source ={{uri:categoryData[id].image}}                
                >

                <View style ={styles.view1}>
                    <View style ={styles.view2}>
                        <Icon 
                            name ="arrow-left"
                            type = "material-community"
                            color = {colors.primaryText}
                            size = {25}
                            onPress ={()=>navigation.goBack()}
                        />
                    </View>
                    
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

container:{height:150,
    },


view1: {flexDirection:"row",
        alignItems:"baseline",
       justifyContent:"space-between"
      },

view2:{margin:10,
       width:40,
       height:40,
       backgroundColor:colors.cardBackground,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:20,
      },
})