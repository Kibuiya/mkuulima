import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, ImageBackground, Dimensions, SafeAreaView} from 'react-native';
import { categoryData, miscData } from '../global/Data';
import { colors } from '../global/styles';
import Search from '../components/Search'

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SearchScreen({navigation}){
    return(
        <SafeAreaView style ={{flex:1,marginBottom:10,paddingTop:20}}  >            
            
            <Search style={{marginTop: 20}} />
            <View style={{marginTop: 30}}>
            

                <FlatList
                style= {{marginBottom: 1}}
                data = {categoryData}
                keyExtractor = {item => item.id}
                renderItem = {({item, index})=> (
                    <TouchableWithoutFeedback
                    onPress ={()=>{
                        navigation.navigate("SearchResultScreen",{item:item.categoryName})
                    }}
                    >
                        <View style={styles.imageView}>
                            <ImageBackground
                            style = {styles.image} 
                            source = {{uri:item.image}}
                            >                               
                            <View style={styles.textView}>
                              <Text style={{color: colors.cardBackground, fontSize: 24, fontWeight: "bold"}}>{item.categoryName}</Text>  
                            </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}
                horizontal = {false}
                showsVerticalScrollIndicator = {false}
                numColumns = {2}
                ListHeaderComponent = { <Text style={styles.listHeader}>Categories</Text>}
                ListFooterComponent = {<Footer/>}
                />
            </View>
            
        </SafeAreaView>
    )
}

const Footer = ()=>{
    return(
    <SafeAreaView style ={{marginTop:20,marginBottom:30 }}>
        <View style={{marginTop: 10}}>
                <FlatList
                style= {{marginBottom: 10}}
                data = {miscData}
                keyExtractor = {item => item.id}
                renderItem = {({item, index})=> (
                    <TouchableWithoutFeedback>
                        <View style={styles.imageView}>
                            <ImageBackground
                            style = {styles.image} 
                            source = {{uri:item.image}}
                            >                               
                            <View style={styles.textView}>
                              <Text style={{color: colors.cardBackground, fontSize: 24, fontWeight: "bold"}}>{item.itemName}</Text>  
                            </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}
                horizontal = {false}
                showsVerticalScrollIndicator = {false}
                numColumns = {2}
                ListHeaderComponent = { <Text style={styles.listHeader}>Hot Products</Text>}
                />
            </View>
            
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
imageView :{
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH*0.4475,
    height: SCREEN_WIDTH*0.4475,
    marginLeft: SCREEN_WIDTH*0.035,
    marginBottom: SCREEN_WIDTH*0.035,
},
image:{
    height: SCREEN_WIDTH*0.4475,
    width: SCREEN_WIDTH*0.4475,
    borderRadius: 10
},
listHeader:{
    fontSize: 25,
    fontWeight: "bold",
    color: colors.secondaryButtonText,
    paddingBottom: 10,
    marginLeft: 12,
},
textView:{
    height: SCREEN_WIDTH*0.4475,
    width: SCREEN_WIDTH*0.4475,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(52,52,52,0.3)'
}
})