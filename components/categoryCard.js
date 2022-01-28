import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image }from 'react-native';
import { Icon} from 'react-native-elements';
import {colors, parameters} from '../global/styles'

export default function CategoryCard({
    OnPressCategoryCard,
    categoryName,
    images,
    categoryDescription,
    screenWidth
}){
    return(
        <TouchableOpacity>
            <View style={{...styles.cardView, width: screenWidth}}>
                <Image
                style ={{...styles.image, width: screenWidth}}
                source ={{uri:images}}
                />
                   <View>
                <View>
                    <Text style={styles.categoryName}>{categoryName}</Text>
                </View>
                <View>
                    <Text style={styles.categoryDescription}>{categoryDescription}</Text>
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
    categoryName:{
        fontSize: 17,
        fontWeight: "bold",
        color: colors.primaryText,
        marginTop: 5,
        marginLeft: 20,
    },
    categoryDescription:{
        fontSize: 17,
        color: colors.secondaryButtonText,
        marginTop: 5,
        marginLeft: 20,
    }
}) 
