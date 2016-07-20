'use strict';

import React, {Component} from 'react'
import{
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  ToastAndroid,

}from 'react-native';

import PersonPage from '../../PersonPage';

class HomeScreenBottom extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style= {styles.container}>
            <View style= {{flexDirection:'row', height:90}}>
            <View style= {styles.inside_box}>
              <TouchableHighlight onPress={()=>this.goToPage('reservation')}>
                     <View >
                     <Image style ={styles.image} source = {require('../../icons/color/sliding_menu_reservation_icon.png')} ></Image>
                     <Text>Reservation</Text>
                     </View>
              </TouchableHighlight>
              </View>

              <View style= {styles.inside_box}>
              <TouchableHighlight onPress={()=>this.goToPage('rooms')}>
                     <View>
                     <Image style ={styles.image} source = {require('../../icons/color/sliding_menu_rooms_icon.png')} ></Image>
                     <Text>Rooms</Text>
                     </View>
              </TouchableHighlight>
              </View>
            </View>

             <View style= {{flexDirection:'row', height:90}}>
                  <View style= {styles.inside_box}>
                      <TouchableHighlight onPress={()=>this.goToPage('rates')}>
                      <View>
                      <Image style ={styles.image} source = {require('../../icons/color/sliding_menu_rates_icon.png')} ></Image>
                      <Text>Rates</Text>
                      </View>
                      </TouchableHighlight>
                  </View>

                  <View style= {styles.inside_box}>
                      <TouchableHighlight onPress={()=>this.goToPage('gallery')}>
                      <View>
                      <Image style ={styles.image} source = {require('../../icons/color/sliding_menu_gallery_icon.png')} ></Image>
                      <Text>Reservation</Text>
                      </View>
                      </TouchableHighlight>
                   </View>
            </View>

               <View style= {{flexDirection:'row', height:90}}>
                    <View style= {styles.inside_box}>
                        <TouchableHighlight onPress={()=>this.goToPage('facility')}>
                        <View>
                        <Image style ={styles.image} source = {require('../../icons/color/sliding_menu_facilities_icon.png')} ></Image>
                        <Text>Facilities</Text>
                        </View>
                        </TouchableHighlight>
                    </View>

                    <View style= {styles.inside_box}>
                      <TouchableHighlight onPress={()=>this.goToPage('location')}>
                      <View>
                      <Image style ={styles.image} source = {require('../../icons/color/sliding_menu_location_icon.png')} ></Image>
                      <Text>Locatiom</Text>
                      </View>
                      </TouchableHighlight>
                    </View>
              </View>
         </View>
    );
}

  goToPag(){
    this.props.navigator.push({
      id: 'PersonPage',
      name: 'ReactNative',
    });
  }

  goToPage(name){

    switch (name) {
      case 'reservation':

      this.props.navigator.push({
        id: 'reservation',
        name:'Booking'
      });
      break;

      case 'rooms':

      this.props.navigator.push({
        id: 'rooms',
        name:'Rooms'
      });
      break;

      case 'rates':

      this.props.navigator.push({
        id: 'rates',
        name:'Rates'
      });
      break;

      case 'gallery':

      this.props.navigator.push({
        id: 'gallery',
        name:'Gallery'
      });
      break;

      case 'facility':

      this.props.navigator.push({
        id: 'facility',
        name:'Facility'
      });
      break;

      case 'location':

      this.props.navigator.push({
        id: 'location',
        name:'Location'
      });
      break;

      default:
      break;

    }
}
}

var styles = StyleSheet.create({
viewpager: {
  flex: 1,
  padding:5,
},
container:{
  flex:1,
  padding:5,
},
inside_box:{
  borderColor: 'brown',
  borderWidth :1,
  flex:0.5,
  alignItems:'center',
},
image:{
  marginTop:10,
  width:40,
  height:40,
  alignItems:'center'
},
});
module.exports = HomeScreenBottom;
