'use strict';

import React, {Component} from 'react'
import{
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  Navigator,
}from 'react-native';

import HomeScreenTop from './home_screen_top';
import HomeScreenBottom from './home_screen_bottom';
import Toolbar from '../../components/android_toolbar';
import Booking from '../../files/booking';
import Facility from '../../files/facility';
import Room from '../../files/room';
import Rates from '../../files/rates';
import LocationView from '../../files/map_view';
import Gallery from '../../files/gallery/gallery';

class HomeScreen extends Component{

  static contextTypes = {
      openDrawer: React.PropTypes.func.isRequired,
    };

  render() {
    return(

      <Navigator
          initialRoute={{id: 'HomeScreen', name: 'Home'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FadeAndroid;
          }} />
    );
  }

  renderScene(route, navigator) {
    var routeID = route.id;
    var routeName = route.name;

    if(routeID == 'HomeScreen'){
    return(
      <View style={{flex:1}}>
         <View>
            <Toolbar title={this.props.title} navigator ={navigator} menuIcon={require('../../icons/color/ic_menu_white.png')} omPress={()=>this.context.openDrawer()}>
            </Toolbar>
         </View>

        <ScrollView>
          <HomeScreenTop />
          <HomeScreenBottom navigator={navigator}/>
        </ScrollView>

      </View>
    );
  }else if(routeID == 'reservation'){
    return(
      <Booking navigator ={navigator} title={routeName} menuIcon={require('../../icons/color/ic_arrow_back_white.png')} back={'yes'} />
    );
  }else if(routeID == 'rooms'){
    return(
      <Room navigator ={navigator} title={routeName} menuIcon={require('../../icons/color/ic_arrow_back_white.png')} back={'yes'}/>
    );
  }else if(routeID == 'rates'){
    return(
      <Rates navigator ={navigator} title={routeName} menuIcon={require('../../icons/color/ic_arrow_back_white.png')} back={'yes'}/>
    );
  }else if(routeID == 'gallery'){
    return(
      <Gallery navigator ={navigator} title={routeName} menuIcon={require('../../icons/color/ic_arrow_back_white.png')} back={'yes'}/>
    );
  }else if(routeID == 'facility'){
    return(
      <Facility navigator ={navigator} title={routeName} menuIcon={require('../../icons/color/ic_arrow_back_white.png')} back={'yes'}/>
    );
  }else if(routeID == 'location'){
    return(
      <LocationView navigator ={navigator} title={routeName} menuIcon={require('../../icons/color/ic_arrow_back_white.png')} back={'yes'}/>
    );
  }
  }
}

  var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  viewpager: {
    height:100,
  },
  botttomView:{
    flex:1
  },
});
module.exports = HomeScreen;
