'use strict';

import React, {Component} from 'react'
import {
  View,
  ListView,
  propTypes,
  Text,
  Image,
  ScrollView,
  ToastAndroid,
  Navigator,
  TouchableHighlight,
  DrawerLayoutAndroid
}from 'react-native';

import Navigations from './navigation_view';


import LoginPage from '../LoginPage';
import HomeScreen from '../files/home/home_screen';
import GiftedFormPage from '../GiftedFormPage';
import NoNavigatorPage from '../NoNavigatorPage';
import Room from '../files/room';
import Facility from '../files/facility';
import Rates from '../files/rates';
import About from '../files/about';
import LocationView from '../files/map_view';
import Gallery from '../files/gallery/gallery';
import MenuDrop from '../files/dropdown';
import Booking from '../files/booking';

var menu_drawer_list_item = [{id:'Home', title:'Home', icon:require('../icons/color/sliding_menu_home_icon.png')},
                            {id:'Rooms', title:'Rooms', icon:require('../icons/color/sliding_menu_rooms_icon.png')},
                            {id:'Rates', title:'Rates', icon:require('../icons/color/sliding_menu_rates_icon.png')},
                            {id:'Facility', title:'Facility', icon:require('../icons/color/sliding_menu_facilities_icon.png')},
                            {id:'Gallery', title:'Gallery', icon:require('../icons/color/sliding_menu_gallery_icon.png')},
                            {id:'Location', title:'Location', icon:require('../icons/color/sliding_menu_location_icon.png')},
                            {id:'Booking', title:'Booking', icon:require('../icons/color/sliding_menu_reservation_icon.png')},
                            {id:'About', title:'About', icon:require('../icons/color/contact_card.png')}];

class MenuDrawer extends Component{

  constructor(props){
    super(props);
    this.state = {
       selectedMenuOption: 'Home',
       dataSource: new ListView.DataSource({
            rowHasChanged : (row1,row2) => row1!=row2
        })
    };
    this._openDrawer  = this._openDrawer.bind(this);
  }

  static childContextTypes={
    openDrawer: React.PropTypes.func.isRequired,
    onActionClicked: React.PropTypes.func.isRequired,
    onItemSelected: React.PropTypes.func.isRequired,
    renderMenuItem: React.PropTypes.func.isRequired,
  };

  getChildContext(){
    return{
    openDrawer: () => (this._openDrawer()),
    onActionClicked: () => (this._onActionClicked()),
    onItemSelected: () => (this._onItemSelected()),
    renderMenuItem: () => (this._renderMenuItem())
  };
  }

  render(){

    var navigationView = (
      <ScrollView>
      <View style = {{height:140, backgroundColor:'blue', justifyContent:'center'}}>
         <Text style = {{height:25, color:'white', fontSize:25, marginLeft:20}}>Welcome To ReactNative</Text>
      </View>
      <ListView
            dataSource={this.state.dataSource}
            renderRow={(item) => this._renderMenuItem(item)}
            renderSeparator={() => this.renderSeparator()} />
      </ScrollView>
    );

    var mainView = null;
    if (this.state.selectedMenuOption == 'Home') {
        mainView =  <HomeScreen title={this.state.selectedMenuOption} />
    }
    else if (this.state.selectedMenuOption == 'Rooms') {
        mainView =  <Room title={this.state.selectedMenuOption} menuIcon={require('../icons/color/ic_menu_white.png')} back={'no'}/>
    }else if(this.state.selectedMenuOption == 'About'){
        mainView =  <About title={this.state.selectedMenuOption} menuIcon={require('../icons/color/ic_menu_white.png')} back={'no'}/>
    }else if(this.state.selectedMenuOption == 'Facility'){
        mainView =  <Facility title={this.state.selectedMenuOption} menuIcon={require('../icons/color/ic_menu_white.png')} back={'no'}/>
    }else if(this.state.selectedMenuOption == 'Rates'){
        mainView =  <Rates title={this.state.selectedMenuOption} menuIcon={require('../icons/color/ic_menu_white.png')} back={'no'}/>
    }else if(this.state.selectedMenuOption == 'Location'){
        mainView =  <LocationView title={this.state.selectedMenuOption} menuIcon={require('../icons/color/ic_menu_white.png')} back={'no'}/>
    }else if(this.state.selectedMenuOption == 'Gallery'){
        mainView =  <Gallery title={this.state.selectedMenuOption} menuIcon={require('../icons/color/ic_menu_white.png')} back={'no'}/>
    }else if(this.state.selectedMenuOption == 'Booking'){
        mainView =  <Booking title={this.state.selectedMenuOption} menuIcon={require('../icons/color/ic_menu_white.png')} back={'no'}/>
    }else{
        mainView =  <MenuDrop title={this.state.selectedMenuOption}/>
    }


    return(

      <DrawerLayoutAndroid
        ref={'navDrawer'}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        {mainView}
      </DrawerLayoutAndroid>

    );
  }

  _openDrawer(){
    this.refs.navDrawer.openDrawer();
  }

  _onActionClicked(){
    this.props.navigator.push({
      id:'reservation'
    });

  }

  _closeDrawer(){
    this.refs.navDrawer.closeDrawer();
  }

  componentDidMount() {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(menu_drawer_list_item)
      });
  }

  renderSeparator() {
   return (
     <View
       style={{height:1, backgroundColor:'gray', marginLeft:20}}
       />
   );
 }

  _renderMenuItem(item) {
      return(

        <TouchableHighlight onPress= {()=> this._change(item)} style={{backgroundColor:'white'}} underlayColor="white">
            <View style = {{height:30, margin:15, flexDirection:'row'}}>
            <Image style = {{width:25, height:25}} source ={item.icon}></Image>
            <Text style = {{fontSize:20, marginLeft:20, color:'brown'}}>{item.title}</Text>
            </View>
            </TouchableHighlight>
      );
  }

 _change(item){
   this.setState({
     selectedMenuOption:item.id,
   });
   this._closeDrawer();

 }

}

module.exports = MenuDrawer;
