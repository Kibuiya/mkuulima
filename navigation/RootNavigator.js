import React, {useContext, useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator, Text } from 'react-native';

import Auth from './authNavigation';
import ClientTabs from './clientTabs';

// now we get the state of user auth from CONTEXT API
import { AuthContext, AuthProvider } from '../AuthContext/AuthenticationProvider';
import firebase from '../firebaseConfig';

const auth = firebase.auth();

export default function RootNavigator(){
const { user, setUser } = useContext(AuthContext);
const [isLoading, setIsLoading] = useState(true);

// console.log('THIS IS THE AUTH OBJECT', auth);

useEffect(() => {
    // onAuthStateChanged is a listener that fires when the user is signed in or out
    const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
        try {
            await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    });

    // unsubscribeAuth is a function that will remove the listener when the component unmounts
    return unsubscribeAuth;
}, []);

if (isLoading) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' />
        </View>
    );
}

    return(
            <NavigationContainer>
       <AuthProvider>

            {
                user ? <ClientTabs /> : <Auth />
            }
       </AuthProvider>
        </NavigationContainer>
    );
};
