import React, {useState, useRef} from 'react'
import {View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Modal, FlatList, Keyboard, TouchableOpacity} from 'react-native'
import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import { filterData } from '../global/Data'
import filter from 'lodash/filter'

 

export default function SearchComponent() {

    const navigation = useNavigation();
    
    const [data, setData] = useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false);
    const [textInputFocussed, setTextInputFocussed] = useState(true)
    const textInput = useRef(0)


    const contains = ({name}, query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    };

    const handleSearch = text =>{
        const dataS = filter(filterData, user =>{
            return contains(user, text)
        })

        setData([...dataS])
    }

    return (
        <View style= {{alignItems: "center"}}>
            <TouchableWithoutFeedback            
            onPress={()=>{
                setModalVisible(true)
            }}>
                <View style={styles.searchArea}>
                    <Icon                   
                    name="search"
                    type= "material"
                    size= {28}
                    style={{marginLeft: 5}}  
                    />
                    <Text style={{fontSize: 18}}>Search</Text>
                </View>                
            </TouchableWithoutFeedback>
            <Modal
            animationType = "fade"
            transparent = {false}
            visible = {modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.textInput}>
                            <Animatable.View
                            animation = {textInputFocussed ? "fadeInRight" : "fadeInLeft"}
                            duration = {400}
                            >
                               <Icon name = {textInputFocussed ? "arrow-back" : "search"}
                              onPress={()=>{
                               if(textInputFocussed)
                               setModalVisible(false)
                               setTextInputFocussed(true)
                                }}
                                style = {styles.icon2}
                                type = "material"
                                iconStyle ={{marginRight: 5}}
                               /> 
                            </Animatable.View>

                            <TextInput
                            style={{width: "90%",height: 40 }}
                            placeholder = ""
                            autoFocus = {false}
                            ref = {textInput}
                            onFocus = {()=>{
                                setTextInputFocussed(true)
                            }}
                            onBlur = {()=>{
                                setTextInputFocussed(false)
                            }}
                            onChangeText = {handleSearch}
                            />

                            <Animatable.View
                             animation = {textInputFocussed ? "fadeInLeft" : ""}
                             duration = {400}
                            >
                               <Icon name = {textInputFocussed ? "cancel" : null}
                                onPress={()=>{
                                textInput.current.clear()
                                //handleSearch()
                                }}
                                style = {styles.icon2}
                                type = "material"
                                iconStyle ={{color: "#e5e4e2"}}
                               /> 
                            </Animatable.View>
                        </View>
                    </View>
                     <FlatList
                     data = {data}
                     renderItem = {({item}) =>(
                         <TouchableOpacity
                         onPress={()=>{
                            Keyboard.dismiss
                            navigation.navigate("ProductSearchScreen", {item:item.name})
                            setModalVisible(false)
                            setTextInputFocussed(true)
                             }}>
                             <View style={styles.view2}>
                                 <Text style={{color: colors.primaryText}}>{item.name}</Text>
                             </View>
                         </TouchableOpacity>
                     )}
                     keyExtractor = {item => item.id}
                     />   
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text1:{
        color: "#e5e4e2",
        fontSize: 26
    },
    searchArea:{
        width: "95%",
        height: 50,
        backgroundColor: "#e5e4e2",
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput:{
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 0,
        borderColor: "#e5e4e2",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 30,
        flexDirection: "row"
    },
    searchIcon:{
        fontSize: 24,
        padding: 5,
        color: "#e5e4e2",
    },
    view1:{
        height: 20,
        justifyContent: "center",
        paddingHorizontal: 10,
        marginTop: 25
    },
    view2:{
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    }, 
    icon2:{
        fontSize: 24,
        padding: 5,
        color: "#e5e4e2" 
    },
    modal:{
        flex: 1
    }
})