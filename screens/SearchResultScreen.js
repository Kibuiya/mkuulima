import React from 'react'
import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native'
import SearchResultCard from '../components/SearchResultCard'
import { categoryData } from '../global/Data';
import {colors} from "../global/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;


const SearchResultScreen = ({navigation,route}) => {
    return (
        <View style ={styles.container}>

           

            <View>
                <FlatList 
                     style ={{backgroundColor:colors.cardBackground}}
                    data = {categoryData}
                    keyExtractor ={(item,index)=>index.toString()}
                    renderItem ={({item,index})=> (

                        <SearchResultCard
                            screenWidth = {SCREEN_WIDTH}
                            images = {item.image}
                            categoryName ={item.categoryName}
                            categoryDescription ={item.categoryDescription}
                            itemData ={item.itemData}
                            OnPressCategoryCard ={()=>{navigation.navigate("CategoryHomeScreen",{id:index,category:item.categoryName})}}
                        />
                                    
                          )}

                     ListHeaderComponent ={
                        <View>
                            <Text style ={styles.listHeader}>{categoryData.length} Results for {route.params.item}</Text>
                        </View>
                     }   

                     showsVerticalScrollIndicator ={false}
                />
            </View>
           
        </View>
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
      paddingTop:20
    },

    listHeader:{color :colors.grey1,
        fontSize:20,
        color: colors.primaryText,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
}
})