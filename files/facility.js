'use strict';

import React ,{Component} from 'react'
import{
  StyleSheet,
  ListView,
  View,
  Text,
  Image,
  MapView,
  ScrollView
}from 'react-native';

import Toolbar from '../components/android_toolbar';

var list_item = [{description:'24-hour Room Service', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'Express Check in and Check out', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'House Doctor on Call', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'Laundry and Valet Service', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'Postal or Courier Service', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'Internet Access Centre', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'Non-smoking Rooms', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'Parking Facilities', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'Wireless Internet in Public Areas and Rooms', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'Helipad for emergency use', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'Airport transfers and Car or Jeep rentals', image:require('../icons/color/facilities_icon_check.png')},
                            {description:'and many more...', image:require('../icons/color/facilities_icon_check.png')},];

class Facility extends Component{

  static contextTypes = {
      openDrawer: React.PropTypes.func.isRequired,
    };

  constructor(props){
    super(props);
    this.state = {
       dataSource: new ListView.DataSource({
            rowHasChanged : (row1,row2) => row1!=row2
        })
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
      <View>
      <Toolbar title={this.props.title} menuIcon={this.props.menuIcon} omPress={()=>this._onClick(this.props.back)}></Toolbar>
      </View>

      <ScrollView>

      <ListView
            dataSource={this.state.dataSource}
            renderRow={(item) => this._renderMenuItem(item)}
            renderSeparator={() => this.renderSeparator()} />
       </ScrollView>
      </View>
    );
  }

  componentDidMount() {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(list_item)
      });
  }

  _renderMenuItem(item) {

          return(
            <View style ={{flexDirection:'row', height:50, backgroundColor:'white', alignItems:'center'}}>
                 <Image style={{width:30, height:30}} source ={item.image}></Image>
                 <Text style={{color:'gray', fontSize:20, marginLeft:10}}>{item.description}</Text>
            </View>

          );
      }

      renderSeparator() {
       return (
         <View
           style={{height:1, backgroundColor:'lightgrey'}}
           />
       );
     }

}
module.exports = Facility;
