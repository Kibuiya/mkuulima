import React, {useState} from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, TextInput, View, StyleSheet,
  ActivityIndicator, StatusBar, Text, Image} from 'react-native';
import Header from '../components/header';
import {colors} from '../global/styles';
import Firebase from '../firebaseConfig';
import { getFirestore, query, collection, addDoc } from 'firebase/firestore';

import ErrorMessage from '../components/ErrorMessage'

const auth = Firebase.auth();
const storage = Firebase.storage();

export default function Register({navigation}){
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState('visibility');
  const [signupError, setSignupError] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handlePasswordVisibility =() =>{
    if (icon === 'visibility') {
      setIcon('visibility-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (icon === 'visibility-off'){
      setIcon('visibility');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    setLoading(true);
    try {
        if (email !== '' && password !== '') {
            await auth.createUserWithEmailAndPassword(email, password);
            // update name in firebase
            await firebase.auth().currentUser.updateProfile({
                displayName: name,
            });
        }
        // add user to user collection
        await addDoc(collection(getFirestore(), 'users'), {
            name,
            email,
            createdAt: serverTimestamp(),
        });
    } catch (error) {
        setSignupError(error.message);
    }
    setLoading(false);
};
return(
  <ScrollView>
  <SafeAreaView>
     <StatusBar
       backgroundColor= {colors.statusBar}
       barStyle= "light-content"
      />
      <Header title="Create Account" type="arrow-left" navigation={navigation} />
      <View>
        <Image 
        style={{height:100, width: 200, marginBottom: 20, alignSelf: 'center'}}
        source={require('../assets/signup.png')}
        />
       </View>
      <View>
         <Text style={styles.title}>Sign Up</Text>
       </View>  

      <View style={{marginTop: 20}}>
      <View>
        <Text style={{marginLeft: 20, color:colors.primaryText}}>Enter Full Name</Text>
         <TextInput
         style={styles.textInput1}
         placeholder="Full Name" 
         autoCapitalize= 'words'
         keyboardType='default'
         textContentType='name'
         value={name}
         onChangeText={text => setName(text)}
         />
       </View> 

       <View>
        <Text style={{marginLeft: 20, color:colors.primaryText}}>Enter Email</Text>
         <TextInput
         style={styles.textInput1}
         placeholder="Email"
         autoCapitalize='none'
         keyboardType='email-address'
         textContentType='emailAddress'
         value={email}
         onChangeText={text => setEmail(text)}       
         />
       </View> 

       <View>
        <Text style={{marginLeft: 20, color:colors.primaryText}}>Enter Password</Text>
         <TextInput
         style={styles.textInput2}
         placeholder="Password" 
         autoCapitalize='none'
         autoCorrect={false}
         secureTextEntry={passwordVisibility}
         textContentType='password'
         value={password}
         onChangeText={text => setPassword(text)}
         handlePasswordVisibility={handlePasswordVisibility}    
         />
       </View> 
       {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}

       <View>
         <TouchableOpacity
          style={styles.button}
          onPress={onHandleSignup}
          >
           <Text style={styles.buttonText}>{ 
            loading ? 'Signing up...' : 'Sign up'
            }
            </Text>
         </TouchableOpacity>
         <ActivityIndicator animating={loading} size='large' color={colors.primaryButton}/>  
       </View>
      </View>

          <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Login')}
          >
            <Text style={{color: colors.cardBackground, fontSize: 18, fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity> 
  </SafeAreaView>
  </ScrollView>
);
};

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
  },
  button:{
    marginTop: 20,
        width: 250,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 5,
        backgroundColor: colors.secondaryButton,
        alignSelf: 'center',
  },
  button2:{
    marginTop: 10,
        width: 250,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 5,
        backgroundColor: colors.primaryButton,
        alignSelf: 'center',
  },
  buttonText: {
    color: colors.secondaryButtonText,
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
  }

     
})