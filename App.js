import React, { Component } from "react";
import {View ,Text,Image,StyleSheet,Animated, TouchableWithoutFeedback} from 'react-native';


import * as Animatable from 'react-native-animatable';

export default class App extends Component{
    handleTextRef = ref => this.text = ref;

    render() {
      return (
        <Animatable.View style={{width:300,height:300,justifyContent:'center',alignItems:'center',
        backgroundColor:'green'}} animation="fadeInUp" onPress={() => this.text.transitionTo({ opacity: 0.2 })}>
          <Animatable.Text >Fade me!</Animatable.Text>
        </Animatable.View>



        
      );
    }
}