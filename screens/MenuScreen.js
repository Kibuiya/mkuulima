import React, {useState, useEffect} from 'react'
import { View, Text,StyleSheet,TouchableOpacity, FlatList, Image} from 'react-native'
import {colors} from '../global/styles'
import { veggieMenu, categoryData} from '../global/Data';


export default function MenuScreen({navigation, route, onPress}) {
    const [list, setList] = useState([])

    // console.log('caterog9ies', categoryData)
    useEffect(()=>{
        // map cat data to list
         categoryData.map((item)=>{
            //  get ited data from list
            setList(item.itemData)
        });
    },[]);

    // console.log('EACH ITTEM IN ARRAY', list)
    return (
       <View style= {styles.container}>
           <View style = {{marginTop:20}}>
               {veggieMenu.map((items)=>
               <View key= {items.id} style={styles.view1}>
                   <TouchableOpacity onPress={onPress}>
                       <View style ={styles.view2} >
                           <Text style = {styles.text1}>{items.name}</Text>
                       </View>
                   </TouchableOpacity>
               </View>
               )}
           </View>

        {/* // <View style={{paddingVertical: 75}}>
        //     <FlatList
        //     data={list}
        //     extraData={list}
        //     keyExtractor={(list) => list.id.toString()}
        //     renderItem={({ item }) => (
        //       <View style={styles.menu}>
        //         <TouchableOpacity onPress={onPress}>
        //             <View>
        //             <Image
        //             source= {{uri: item.image}}
        //             />
        //             <Text style = {styles.text1}> {item.itemName} </Text>
        //             <Text style= {styles.text2}>{item.pricePerKg}</Text>
        //             </View>
               
        //         </TouchableOpacity>
                  
            
        //       </View>
            )}
            /> */}
        </View>
        
      // </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50
    },
      view1:{
           paddingHorizontal:10,
         },
    
      view2:{flexDirection:"row",
            alignItems:"center",
            borderBottomWidth:1,
            padding:10,
            borderBottomColor: "lightgrey"
           },
        
        text1:{
            color: colors.primaryText,
            fontSize:18,
            fontWeight:"bold"
        },
        text2:{
            color: colors.secondaryButtonText,
            fontSize:18,
            marginTop: 15,
            marginBottom: 15,
        },
        menu:{
            marginLeft: 20,
            marginRight: 20,
        }
    
})
