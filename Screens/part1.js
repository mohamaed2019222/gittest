import {View,Text,Image} from 'react-native';
import React, {Component} from 'react';
import CarouselPager from 'react-native-carousel-pager';
 
export default class Pager extends Component {
  onClickSomething() {
    this.carousel.goToPage(2);
  }
 
  render() {
    return (
      <View style={{flex: 1,backgroundColor: 'black'}}>
        <CarouselPager ref={ref => this.carousel = ref} initialPage={0}
        blurredZoom={0.9}
        blurredOpacity={0.7}
        animationDuration={500}
        containerPadding={40}
       
        pageStyle={{backgroundColor: '#ede59a'}}>
          <View key={'page0'}>
            <Image source={require('./Images/Screenshot_1581324301.png')} style={{width:'100%',height:'100%'}}/>
          </View>
          <View key={'page1'}>
          <Text>tow</Text>
          </View>
          <View key={'page2'}>
          <Text>thre</Text>

          </View>
          <View key={'page3'}>
          <Text>four</Text>

          </View>
        </CarouselPager>
      </View>
    );
  }
}