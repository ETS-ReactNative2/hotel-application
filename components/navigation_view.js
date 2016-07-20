'use strict';

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';


class Navigations extends Component {

  render() {
    return(
          <Navigator
              renderScene={this.renderScene.bind(this)}
              navigationBar={
                <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                    routeMapper={NavigationBarRouteMapper} />
              }/>
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
            onPress={this.gotoNext.bind(this)}>
          <Text style={{color: 'red'}}>First Page (Click here...)</Text>
        </TouchableHighlight>
      </View>
    );
  }

  gotoNext() {

    this.navigator.push({
      id: 'MainPage',
      name: 'ReactNative',
    });
  }

  back(){
    this.props.navigator.pop();
  }
}



var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return(
    <TouchableOpacity style={{flex: 1, justifyContent:'center'}} onPress={navigator.pop()}>
      <Text style={{color:'white', margin: 10, fontSize:16}}>
       React
      </Text>

    </TouchableOpacity>
  );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
         ReactNative
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = Navigations;
