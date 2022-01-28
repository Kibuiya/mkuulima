import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image }from 'react-native';
import { Icon} from 'react-native-elements';
import {colors, parameters} from '../global/styles'

export default function ProductCard({
    OnPressProductCard,
    productName,
    farmerAddress,
    images,
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
                    <Text style={styles.productName}>{productName}</Text>
                </View>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <View style = {styles.location}>
                        <Icon
                        name="place"
                        type="material"
                        color={colors.primaryButton}
                        size= {18}
                        iconStyle ={{
                            marginTop: 3
                        }}
                        />
                        <Text style={styles.farmerAddress}>{farmerAddress}</Text>
                    </View>
                </View>
            </View> 
            </View> 
     

        </TouchableOpacity>
    )
}