import React, {useState, useRef} from 'react';
import {SafeAreaView, TouchableOpacity, TextInput, StyleSheet, View, Image,
  ScrollView, Text, StatusBar, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon, SocialIcon, Button } from 'react-native-elements';
import {ErrorMessage} from '../components/ErrorMessage'
import Header from '../components/header';
import {colors} from '../global/styles';

import {Formik} from 'formik';
import Firebase from '../firebaseConfig';

const auth = Firebase.auth();

export default function Login2({navigation}){
    const [textInput2Focussed, setTextInput2Focussed] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [loading, setLoading] = useState(false);
    const [icon, setIcon] = useState('visibility');
    const [loginError, setLoginError] = useState('');
  
    const textInput1 = useRef(1);
    const textInput2 = useRef(2);

    const handlePasswordVisibility =() =>{
      if (icon === 'visibility') {
        setIcon('visibility-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (icon === 'visibility-off'){
        setIcon('visibility');
        setPasswordVisibility(!passwordVisibility);
      }
    }
// function to handle login
        const handleLogin = async() => {
        setLoading(true);
        try {
          if (email !== '' && password !== '') {
              await auth.signInWithEmailAndPassword(email, password);
            }
          } catch (error) {
            setLoginError(error.message);       
          }
          setLoading(false);
          navigation.navigate("ClientTabs")
        }

    return(
  <ScrollView>
  <SafeAreaView style= {styles.container}>
    <StatusBar
      backgroundColor= {colors.statusBar}
      barStyle= "light-content"
    />
         
           <Header title="Welcome Back" type="arrow-left" navigation={navigation}/> 
           <View>
            <Image 
            style={{height:200, width: 200, marginBottom: 20, alignSelf: 'center'}}
            source={require('../assets/login.png')}
            />
           </View>
           <View>
             <Text style={styles.title}>Sign In</Text>
           </View>  

           <Formik 
          //  initialValues={{username: "", password: ''}}
          //   onSubmit={(values)=>{
          //           console.log(values)
          //   }}  
           >
             {   (props)=>
                <View style={{marginTop: 20}}>
              <View>
                <Text style={{marginLeft: 20, color:colors.primaryText}}>Enter E-mail</Text>
                <TextInput
                style={styles.textInput1}
                placeholder="Email"
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                rightIcon = {icon}
                // ref={textInput1}     
                // onChangeText={props.handleChange('username')}
                value={email}
                onChangeText={(text)=>setEmail(text)}
                // value = {props.values.username}   
                />
        
              </View> 
        
              <Text style={{marginLeft: 20, color:colors.primaryText}}>Enter Password</Text>
              <View style={styles.textInput2}>
                <TextInput
                style={{width:"80%"}}
                placeholder="Password"  
                ref={textInput2}
                autoCapitalize='none'
                secureTextEntry={passwordVisibility}
                autoCorrect={false}
                textContentType='password'
                onFocus={()=>{
                  setTextInput2Focussed(false)
                }}  
                onBlur={()=>{
                  setTextInput2Focussed(true)
                }} 
                // onChangeText={props.handleChange('password')}
                onChangeText={text => setPassword(text)}
                // value = {props.values.password}
                value= {password}
                handlePasswordVisibility={handlePasswordVisibility}
                />
                <Animatable.View animation= {textInput2Focussed?"":"fadeInLeft"} duration={600}>
                  <Icon
                  name="visibility-off"
                  iconStyle={{color:colors.primaryText}}
                  type="material"
                  style={{marginRight:10}}
                  />
                </Animatable.View>
                
              </View> 
              {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
        
              <View>
                <TouchableOpacity
                  style={styles.button}
                  // onPress={() => props.handleSubmit}
                  onPress={handleLogin}
                >
                  <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>      
                <ActivityIndicator animating={loading} size='large' color={colors.primaryButton}/>
              </View>
        
              </View>
            }
            </Formik>
    
          
          <View>
            <Text style={{color:colors.secondaryButtonText, fontSize: 16, textDecorationLine: "underline", textAlign: "center", marginTop: 20}}>Forgot Password?</Text>
          </View>
          <View style={{justifyContent:"center", alignItems: "center", marginTop:20, marginBottom: 10}}>
          <Text style={{fontWeight: "bold", fontSize: 20, color:colors.primaryText}}>OR</Text>
          </View>
      <View>
        <Text style={{color:colors.secondaryButtonText, fontSize: 16, textAlign: "left", marginTop: 20, marginLeft: 20}}>New to Mkuulima?</Text>
      </View>
      <View style={{alignItems: "flex-end", marginHorizontal:20 }}>
          <Button
          title="Create an Account"
          buttonStyle= {styles.createButton}
          titleStyle= {styles.createButtonTitle}
          onPress={() => {navigation.navigate('Register')}}
          />
      </View>
              
       </SafeAreaView>
      </ScrollView>
        
    );
    }
    
    const styles= StyleSheet.create({
      container: {
        flex: 1
      },
      title: {
        color: colors.primaryText,
        fontSize: 28,
        marginLeft: 20,
      }, 
      textInput1:{
        borderWidth: 1,
        height: 35,
        borderColor: 'lightgrey',
        marginHorizontal: 20,
        borderRadius: 8,
        marginBottom: 20,
        textAlign: 'center',
      },
      textInput2: {
        borderWidth: 1,
        height:35,
        borderColor: 'lightgrey',
        marginHorizontal: 20,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: 150,
      },
      button:{
        marginTop: 20,
            width: 250,
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            borderRadius: 5,
            backgroundColor: '#0BCE83',
            alignSelf: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',    
      },
      SocialIcon:{
        height:50,
        width: 50,
        borderRadius: 5,
      },
      icons:{
        display:"flex",
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      },
      createButton:{
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor:colors.primaryText,
        height: 50,
        paddingHorizontal: 20,
      },
      createButtonTitle:{
        color: colors.primaryText,
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        marginTop: 3,
      }
           
    });
  