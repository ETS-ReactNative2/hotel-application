'use-strict'

import React, {Component} from 'react'
import{
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
}from 'react-native';

import Toolbar from '../components/android_toolbar'

class About extends Component{

  static contextTypes = {
      openDrawer: React.PropTypes.func.isRequired,
    };

  render(){

    return(
      <View style={{flex:1}}>

      <View>

         <Toolbar title={this.props.title} menuIcon={require('../icons/color/ic_menu_white.png')} omPress={()=>this.context.openDrawer()}></Toolbar>

      </View>

        <ScrollView style={styles.container}>
          <Text style={{fontSize:16, marginTop:10}}>Welcome to Orchard Park hotel bar and grill. Orchard Park is a small independent family run hotel in Giffnock, Glasgow.</Text>
          <Text style ={{fontSize:16, marginTop:15}}>We aim to offer you comfortable surroundings, great food and excellent service to make your stay truly enjoyable.</Text>
          <Image style={styles.image} source={require('../icons/images/about.jpg')}/>
          <Text style={{fontSize:16, marginTop:10}}>Please take a look through our application
           where you will find most of the information you need. Call us to discuss your hotel reservation, dining plans or function requirements.</Text>
          <Text style={{fontSize:16, marginTop:10}}>We look forward to welcoming you soon.</Text>
          <Text style={{fontSize:16, marginTop:10, fontStyle:'italic', fontWeight:'bold'}}>Ritendra Raj Shakya</Text>
          <Text style={{fontSize:16, fontStyle:'italic', fontWeight:'bold'}}>Proprietors</Text>

        </ScrollView>

      </View>

    );
  }
}

var styles = StyleSheet.create({

  container:{
    margin :10,
    flex:1,
  },
  image:{
    flex:1,
    height:250,
    marginTop:10,
    marginRight:10
  },
});

module.exports = About;
