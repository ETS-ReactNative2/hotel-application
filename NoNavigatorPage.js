'use strict';

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Toolbar from './components/android_toolbar';

//import ViewPager from 'react-native-viewpager';
import ViewPager from "react-native-pager";
var deviceWidth = Dimensions.get('window').width;

var IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
  'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
  'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
  'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

class NoNavigatorPage extends Component {

  render() {

    var pages = [];
    for (var i = 0; i < IMGS.length; i++) {
      pages.push(
        <View key={i}>
          <Image
            style={styles.page}
            source={{uri: IMGS[i]}}
          />
       </View>
      );
    }
      return (
<View>
<Toolbar title={this.props.title}>
</Toolbar>

           <ViewPager>
           {pages}
           </ViewPager>

             <View style ={{padding:5}}>
                 <View style= {{flexDirection:'row', height:150}}>
                      <View style= {{flex:0.5, backgroundColor: 'blue'}}></View>
                      <View style= {{flex:0.5, backgroundColor: 'red'}}></View>
                 </View>

                 <View style= {{flexDirection:'row', height:150}}>
                      <View style= {{flex:0.5, backgroundColor: 'red'}}></View>
                      <View style= {{flex:0.5, backgroundColor: 'blue'}}></View>
                 </View>
             </View>
             </View>
           );  }

}

var styles = StyleSheet.create({
  page: {
    width: deviceWidth,
    height:200,
  },
});


module.exports = NoNavigatorPage;
