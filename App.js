import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors} from './global/styles';
import RootNavigator from './navigation/RootNavigator';

export default function App(){
  return(
      <View style={{flex: 1}}>
      <StatusBar
      barStyle="light-content"
      backgroundColor = {colors.statusBar}
      />

      <RootNavigator/>
    </View>
  )
};