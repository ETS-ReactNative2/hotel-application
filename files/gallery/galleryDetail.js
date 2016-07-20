'use-strict';

import React, {Component} from 'react'
import{
  View,
  Image,
  Text,
  StyleSheet,
}from 'react-native';

import Toolbar from '../../components/android_toolbar';
import ViewPager from "react-native-pager";

class GalleryDetail extends Component{

  constructor(props){
    super(props);
  }

  _onClick(item){
    if(item == 'no'){
    this.context.openDrawer()
  }else{
    this.props.navigator.pop();
  }
  }

  render(){
    var pages = [];
    for (var i = 0; i < this.props.list_items.length; i++) {
      pages.push(
        <View key={i}>

        <Image source ={this.props.list_items[i].image} style ={styles.page}></Image>

       </View>
      );
    }

    return(

      <View style ={{flex:1}}>
      <View>
        <Toolbar title={this.props.title} navigator={navigator} menuIcon={this.props.menuIcon} omPress={()=>this._onClick(this.props.back)} back={'yes'}>
        </Toolbar>
      </View>
      <ViewPager index={this.props.itemID - 1}>
         {pages}
      </ViewPager>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  page: {
    flex:1,
    height:200,
  },
});

module.exports = GalleryDetail;
