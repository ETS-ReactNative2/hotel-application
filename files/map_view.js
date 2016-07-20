'use-strict';

import React, {Component} from 'react'
import{
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ToastAndroid,
}from 'react-native';

import MapView from 'react-native-maps';
import Toolbar from '../components/android_toolbar'

var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 27.6700933;
const LONGITUDE = 85.3208958;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class LocationView extends Component{

  static contextTypes = {
      openDrawer: React.PropTypes.func.isRequired,
    };

  constructor(props){
    super(props);
    this.state = {
      region :{
       latitude: LATITUDE,
       longitude: LONGITUDE,
       latitudeDelta: LATITUDE_DELTA,
       longitudeDelta: LONGITUDE_DELTA,
     },

     };
  }

  _onClick(item){
    if(item == 'no'){
    this.context.openDrawer()
  }else{
    this.props.navigator.pop();
  }
  }

  render(){
    return(
      <View style={{flex:1}}>
      <Toolbar title={this.props.title} menuIcon={this.props.menuIcon} omPress={()=>this._onClick(this.props.back)}></Toolbar>
      <View style={styles.container}>


        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          loadingEnabled={true}
          loadingIndicatorColor={"#666666"}
          loadingBackgroundColor={"#eeeeee"}>
          <MapView.Marker
            ref="m"
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE,
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}>

            <MapView.Callout>
              <View>
                <Text>Javra Building, Lagankhel Satdobato Rd, Patan 44600</Text>
              </View>

            </MapView.Callout>
            </MapView.Marker>
            </MapView>
        </View>
        </View>
  );

  }
}

var styles = StyleSheet.create({
container: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'flex-end',
  alignItems: 'center',
},
map: {
  position: 'absolute',
  top: 60,
  left: 0,
  right: 0,
  bottom: 0,
},
bubble: {
  backgroundColor: 'rgba(255,255,255,0.7)',
  paddingHorizontal: 18,
  paddingVertical: 12,
  borderRadius: 20,
},
buttonContainer: {
  flexDirection: 'row',
  marginVertical: 20,
  backgroundColor: 'transparent',
},
});

module.exports = LocationView;
