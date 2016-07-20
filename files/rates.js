'use strict';

import React, {Component} from 'react'
import{
  StyleSheet,
  Image,
  Navigator,
  Text,
  View,
  ListView,
  ScrollView
}from 'react-native';

import Toolbar from '../components/android_toolbar';

var menu_drawer_list_item = [{title:'Single Room', description:'Double bed, TV, AC, Wi-Fi...', image:require('../icons/images/room.png'), price:'50$'},
                            {title:'Deluxe Room', description:'Double bed, TV, AC, Wi-Fi...', price:'80$', image:require('../icons/images/single_room.png')},
                            {title:'Double Room', description:'Double bed, TV, AC, Wi-Fi...', price:'100$', image:require('../icons/images/double_room.png')},
                            {title:'Suite Room', description:'Double bed, TV, AC, Wi-Fi...', price:'150$', image:require('../icons/images/quadruple_room.png')},
                            {title:'Premier Room', description:'Double bed, TV, AC, Wi-Fi...', price:'200$', image:require('../icons/images/triple_room.png')},];

class Rates extends Component{

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
      <View style ={{flex:1}}>
      <View>
      <Toolbar title={this.props.title}  menuIcon={this.props.menuIcon} omPress={()=>this._onClick(this.props.back)}></Toolbar>
      </View>
      <ScrollView>
      <ListView
            dataSource={this.state.dataSource}
            renderRow={(item, sectionID, rowID) => this._renderMenuItem(item, rowID)} />
      </ScrollView>
      </View>
    );
  }

  componentDidMount() {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(menu_drawer_list_item)
      });
  }

  _renderMenuItem(item, rowID) {
    console.log("Row Id....."+rowID);
        if(rowID % 2 == 0){
          return(
            <View style ={{flexDirection:'row', height:150, backgroundColor:'white', alignItems:'center'}}>
               <View style={{padding:2.5}}>
                 <Image style={{width:150, height:110, borderRadius:5}} source ={item.image}></Image>
               </View>
               <View style={{marginTop:15, marginLeft:10}}>
                <Text style={{fontSize:20}}>{item.title}</Text>
                <Text style={{fontSize:20}}>{item.description}</Text>
                <View style={{backgroundColor:'green', width:50, marginTop:10, height:25, alignItems:'center'}}>
                  <Text style={{fontSize:18, color:'white', margin:2}}>{item.price}</Text>
                </View>
               </View>
            </View>

          );
        }else{
          return(
            <View style ={{flexDirection:'row', height:150, backgroundColor:'aliceblue', alignItems:'center'}}>
               <View style={{padding:2.5}}>
                 <Image style={{width:150, height:110, borderRadius:5}} source ={item.image}></Image>
               </View>
               <View style={{marginTop:15, marginLeft:10}}>
                <Text style={{fontSize:20}}>{item.title}</Text>
                <Text style={{fontSize:20}}>{item.description}</Text>
                <View style={{backgroundColor:'green', width:50, marginTop:10, height:25, alignItems:'center'}}>
                  <Text style={{fontSize:18, color:'white', margin:2}}>{item.price}</Text>
                </View>
               </View>
            </View>

        );
      }
  }

}

module.exports = Rates;
