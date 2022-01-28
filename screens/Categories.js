import React from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList, Dimensions} from 'react-native'
import { categoryData } from '../global/Data'
import CategoryCard from '../components/categoryCard'

const SCREEN_WIDTH = Dimensions.get('window').width

export default function Categories (){
    return(
    <ScrollView>
        <View>
            <Text>Categories</Text>
        </View>
       <View>
            <FlatList
            data = {categoryData}
            keyExtractor= {(item, index)=>index.toString()}

            renderItem = {({item})=>(
                <View style={{marginRight: 10}}>
                    <CategoryCard
                    screenWidth = {SCREEN_WIDTH}
                    images = {item.image}
                    categoryName = {item.categoryName}
                    categoryDescription= {item.categoryDescription}
                    />
                </View>
            )}
            />
        </View>
    </ScrollView>
        
    )
}

const styles = StyleSheet.create({

})