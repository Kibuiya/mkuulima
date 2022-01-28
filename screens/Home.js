import React, {useState}from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Pressable, FlatList, Image, Dimensions} from 'react-native'
import {colors, parameters} from '../global/styles'
import { Icon , Card} from 'react-native-elements';
import HomeHeader from '../components/homeHeader';
import {filterData, productData, categoryData} from '../global/Data';
import ProductCard from '../components/productCard';
import CategoryCard from '../components/categoryCard';
import SearchComponent from '../components/SearchComponent';
import Search from '../components/Search'


const image = { uri: "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=842&q=80" };

const SCREEN_WIDTH = Dimensions.get('window').width

export default function Home({navigation}){
    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState("0")

    return(
    <View style={styles.container}>
        <HomeHeader navigation={navigation}/>       
    <ScrollView
    stickyHeaderIndices = {[0]}
    showsVerticalScrollIndicator= {true}
    >
    <View style={{backgroundColor: colors.cardBackground, paddingBottom: 5}}>
        <View style={{marginTop: 10, flexDirection: "row", justifyContent: "space-evenly"}}>
            <TouchableOpacity
               onPress={() => {
                setDelivery(true)
                 }} 
             >
                <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.primaryButton : "lightgrey"}}>
                    <Text style={styles.deliveryText}>Buy</Text>
                </View>
            </TouchableOpacity> 

            <TouchableOpacity
                 onPress={() => {
                    setDelivery(false)
                     }}
             >
                <View style={{...styles.pickupButton,backgroundColor:delivery?"lightgrey" : colors.primaryButton}}>
                    <Text style={styles.deliveryText}>Sell</Text>
                </View>
            </TouchableOpacity>       
        </View>
    </View>
    <View style={styles.filterView}>
    <View style={styles.addressView}>
        <View style={{flexDirection: "row", alignItems: "center", marginLeft: 10}}>
            <Icon
            type = "material-community"
            name= "map-marker"
            color= {colors.secondaryButtonText}
            size = {24}
            />
            <Text style={{marginLeft: 5}}>Rhino 19, Ngong</Text>
        </View>

        <View style={styles.clockView}>
            <Icon
            type = "material-community"
            name= "clock-time-eight"
            color= {colors.secondaryButtonText}
            size = {24}
            />
            <Text style={{marginLeft: 5}}>Now</Text>
        </View>
    </View>
        <View>
        <Icon
            type = "material-community"
            name= "tune"
            color= {colors.secondaryButtonText}
            size = {24}
            />
        </View>
    </View>

        
        <View style={styles.headerTextView}> 
            <Text style={styles.headerText}> Hot Categories</Text>
        </View>

        <View>
            <FlatList 
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            data = {filterData}
            keyExtractor = {(item)=>item.id}
            extraData = {indexCheck}
            renderItem = {({item, index})=>(
                <Pressable
                onPress={() => {
                    setIndexCheck(item.id)
                     }}
                >
                    <View style={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                    <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source = {item.image}
                    />
                    <View>
                    <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected}:{...styles.smallCardText}}>{item.name}</Text>
                    </View>
                    
                    </View>
                </Pressable>
            )}
            />
        </View>

        <View style={styles.headerTextView}> 
            <Text style={styles.headerText}> Hot Products</Text>
        </View>
        <View>
            <FlatList
            style={{marginTop:10, marginBottom: 10}}
            horizontal= {true}
            data = {productData}
            showsHorizontalScrollIndicator = {false}
            keyExtractor= {(item, index)=>index.toString()}

            renderItem = {({item})=>(
                <View style={{marginRight: 10}}>
                    <ProductCard
                    screenWidth = {SCREEN_WIDTH*0.8}
                    images = {item.image}
                    productName = {item.productName}
                    pricePerKg = {item.pricePerKg}
                    onPress={() => {navigation.navigate('ClientTabs')}}
                    />
                </View>
            )}
            
            />
        </View>
        <View style={styles.headerTextView}> 
            <Text style={styles.headerText}> All Categories</Text>
        </View>
        <View>
            <FlatList
            style={{marginTop:10, marginBottom: 10}}
            data = {categoryData}
            keyExtractor= {(item, index)=>index.toString()}

            renderItem = {({item})=>(
                <View style={{marginRight: 10}}>
                    <CategoryCard
                    screenWidth = {SCREEN_WIDTH}
                    images = {item.image}
                    categoryName = {item.categoryName}
                    onPress ={()=>{navigation.navigate("SearchResultScreen",{item:item.categoryName})}}
                    />
                </View>
            )}
            
            />
        </View>

        </ScrollView>
    </View>
        
    );
};

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    deliveryButton:{
        width: 75,
        borderRadius: 8,
        marginLeft: 100,        
    },
    deliveryText:{
        fontSize: 20,
        color: colors.cardBackground,
        marginLeft: 20,
        justifyContent: "center",
        textAlign: "auto",
    }, 
    pickupButton: {
        width: 75,
        borderRadius: 8,
        marginLeft: 40,
        marginRight: 75,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height: 125,
      },
      text: {
        color: "white",
        fontSize: 24,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      },
      filterView:{
        flexDirection: 'row', 
        alignItems: "center", 
        justifyContent: "space-evenly",
        marginHorizontal: 10,
        marginVertical:10 
      },
      clockView:{
          flexDirection: "row",
           alignItems:"center", 
           marginLeft: 20, 
           backgroundColor: colors.cardBackground,
           borderRadius: 15,
           paddingHorizontal: 5,
           marginRight: 20,
        },
        addressView:{
            flexDirection: 'row',
             backgroundColor: "lightgrey",
             height: 35,
             marginTop: 10,
             borderRadius: 15, 
             justifyContent: "space-between",           
            },
        headerText:{
                 color: colors.primaryText, 
                 fontSize: 24, 
                 fontWeight: "bold", 
                 marginLeft: 10,
                },
        headerTextView:{
          backgroundColor: "lightgrey"  
        },
        smallCard :{
            borderRadius: 30,
            backgroundColor: colors.cardBackground,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            width: 80,
            margin: 10,
            height: 100,
        },
        smallCardSelected:{
            borderRadius: 30,
            backgroundColor: colors.primaryButton,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            width: 80,
            margin: 10,
            height: 100
        },
        smallCardTextSelected:{
            fontWeight: "bold",
            color: colors.cardBackground
        },
        smallCardText:{
            fontWeight: "bold",
            color: colors.primaryText
        }
            
    
});