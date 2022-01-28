import React from 'react'
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image }from 'react-native';
import {colors, parameters} from '../global/styles'

export default function ProductCard({
    OnPressProductCard,
    productName,
    images,
    screenWidth,
    pricePerKg, 
    type,
}){
    return(
        <TouchableOpacity onPress={OnPressProductCard}>
            <View style={{...styles.cardView, width: screenWidth}}>
                <Image
                style ={{...styles.image, width: screenWidth}}
                source ={{uri:images}}
                />
                   <View>
                <View>
                    <Text style={styles.productName}>{productName}</Text>
                </View>
                <View style={{flex: 1, flexDirection: "row"}}>
                   <Text style={styles.price}>{pricePerKg}</Text>
                </View>
                <View style={{flex: 1, flexDirection: "row"}}>
                   <Text style={styles.price}>{type}</Text>
                </View>
            </View> 
            </View> 
     

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    image:{
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 150,
    },
    productName:{
        fontSize: 20,
        fontWeight: "bold",
        color: colors.primaryText,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        
    },
   price:{
    fontSize: 17,
    color: colors.secondaryButtonText,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
   }
}) 
