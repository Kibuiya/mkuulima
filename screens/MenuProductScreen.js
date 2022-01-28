import React ,{useState}from 'react'
import { StyleSheet, Text, View,Dimensions} from 'react-native'
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles'
import {TabView,TabBar } from 'react-native-tab-view';
import {veggieMenu} from '../global/Data';
import {Route1, Route2, Route3, Route4, Route5, Route6} from './MenuTabs'

const SCREEN_WIDTH = Dimensions.get('window').width


const MenuProductScreen = ({navigation, route}) => {
    const [routes]= useState(veggieMenu)
    const [index,setIndex] = useState(0)

    const renderTabBar = props =>(
        <TabBar 
            {...props}
            indicatorStyle = {{backgroundColor:colors.cardBackground}}
            tabStyle = {styles.tabStyle}
            scrollEnabled = {true}
            style ={styles.tab}
            labelStyle = {styles.tabLabel}
            contentContainerStyle = {styles.tabContainer}
        />
    )

    const renderScene = ({route})=>{

        switch(route.id){
            case 1: 
                return <Route1 navigation = {navigation} />
            case 2: 
                return <Route2 navigation = {navigation} /> 
            case 3: 
                return <Route3 name = {navigation} />  
            case 4: 
                return <Route4 name = {navigation} />
            case 5: 
                return <Route5 name = {navigation} />
            case 6: 
                return <Route6 name = {navigation} />               
            default:
                return null
        }
    }

    return (
        <View style={styles.container}>
            <View style ={styles.view1}>
            <Icon 
                name ="arrow-left"
                type = "material-community"
                color = {colors.cardBackground}
                size = {25}
                onPress ={()=>navigation.goBack()}
                 />
                 <Text>Menu</Text>
            </View>

            <TabView 
                navigationState ={{index,routes}}
                renderScene = {renderScene}
                onIndexChange = {setIndex}
                initialLayout = {SCREEN_WIDTH}
                renderTabBar = {renderTabBar}
                tabBarPosition = 'top'
                navigation ={navigation}
                route = {route}
            />
          
        </View>
    )
}
export default MenuProductScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        top:0,
        left:0,
        right:0
}, 
view1:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor:colors.primaryButton,
    top:0,
    left:0,
    right:0,
    paddingTop:35
    },
    tab:{ paddingTop :0,
        backgroundColor:colors.primaryButton,
        justifyContent:"space-between",
       // alignItems:"center"
        },
  
  tabContainer:{ alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        },
  
  tabLabel:{fontWeight:'bold',
        color: "white"
        },
    
  tabStyle:{width:SCREEN_WIDTH/4,
            maxHeight:45,
          },
})