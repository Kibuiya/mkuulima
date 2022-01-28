import React, {useState}from 'react'
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
import CategoryHeader from '../components/CategoryHeader'
import {categoryData} from '../global/Data'
import {colors} from '../global/styles';
import MenuScreen from './MenuScreen';

export default function CategoryHomeScreen({navigation, route}){
    const {id, category} = route.params
    const [modalVisible, setModalVisible] = useState(0)
    const menuPressed =()=>{
        navigation.navigate("MenuProductScreen")
    }
    return(
        <View style={styles.container}>
            
           <View>
           <CategoryHeader id={id} navigation ={navigation} />
           <View style ={styles.view1}>
               <View style={styles.view2}>
                    <Text style={styles.text1}>{categoryData[id].categoryName}</Text>
                    <Text style={styles.text2}>{categoryData[id].foodType}</Text>
               </View >
               <View style={styles.view2}>
                    <Text style={styles.text3}>{categoryData[id].categoryDescription}</Text>
               </View>
           </View>
           
           </View>
           <MenuScreen style={{marginTop: 25}} onPress = {menuPressed}/>

            <TouchableOpacity>
                <View style={styles.view4}>
                    <View style={styles.view5}>
                        <Text style={styles.text4}>Cart</Text>
                        <View style={styles.view6}>
                            <Text style={styles.text4}>0</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <Modal visible = {modalVisible} animationType='slide'>
                <Icon 
                 name ="arrow-left"
                type = "material-community"
                color = {colors.primaryText}
                size = {25}
                onPress ={()=>setModalVisible(false)}
                 />

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 20
    },
    view1:{ 
    flexDirection:"row",
    flex:1,
    marginBottom:5,
    marginHorizontal:10,
    justifyContent:"space-between",
    },
    view2:{
        flex:8,
    },
    text1:{
        fontSize:20,
        fontWeight:"bold",  
        color: colors.primaryText,
      },
      text2:{
        fontSize:15,
        color: colors.secondaryButtonText
     },
     view3:{
     flexDirection:'row',
     alignItems:"center",
     marginTop:5
     
     },
     text3:{
        fontSize:15,
        color: colors.secondaryButtonText,
        marginLeft:2,
        },

        view4:{
            backgroundColor:colors.primaryButton,
            height:50,
            alignContent:"center",
            marginBottom:0,
            justifyContent:"center",
           marginTop: 120,
    },
    
    view5:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
        },
    text4:{
        paddingHorizontal:3,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardBackground,
        },
    view6:{
         borderWidth:1,
         marginRight:10,
         borderColor:colors.cardBackground,
         borderRadius:6,
         paddingBottom:2
          },

})