'use-strict';

import React, {Component} from 'react'
import{
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  Picker,
  ScrollView,
  TouchableOpacity
}from 'react-native';

import {
  Select,
  Option,
  OptionList,
  updatePosition
} from 'react-native-dropdown';

import Toolbar from '../components/android_toolbar';
import DatePicker from 'react-native-datepicker';
import Communications from 'react-native-communications';
var {width,height} = Dimensions.get('window');
var {GiftedForm, GiftedFormManager} = require('react-native-gifted-form');

class Booking extends Component{

  static contextTypes = {
      openDrawer: React.PropTypes.func.isRequired,
    };

  constructor(props) {
   super(props);
   this.state = {
     room_no: '',
     room_type:'',
     adult:'',
     kid:'',
     date_in: '2016-05-01',
     date_out: '2016-05-01',
     layout:{
        height:height,
        width:width,

      }
   };
 }

 componentDidMount() {
   updatePosition(this.refs['SELECT1']);
   updatePosition(this.refs['OPTIONLIST1']);
   updatePosition(this.refs['SELECT2']);
   updatePosition(this.refs['OPTIONLIST2']);
   updatePosition(this.refs['SELECT3']);
   updatePosition(this.refs['OPTIONLIST3']);
   updatePosition(this.refs['SELECT4']);
   updatePosition(this.refs['OPTIONLIST4']);
 }


 _getOptionList1() {
   return this.refs['OPTIONLIST1'];
 }

 _getOptionList2() {
   return this.refs['OPTIONLIST2'];
 }

 _getOptionList3() {
   return this.refs['OPTIONLIST3'];
 }

 _getOptionList4() {
   return this.refs['OPTIONLIST4'];
 }

 _room_no(province) {

   this.setState({
     ...this.state,
     room_no: province,
   });
 }

 _room_type(province) {

   this.setState({
     ...this.state,
     room_type: province,
   });
 }

 _adult_no(province) {

   this.setState({
     ...this.state,
     adult: province,
   });
 }

 _kid_no(province) {

   this.setState({
     ...this.state,
     kid: province,
   });
 }


 _onLayout = event => {

    this.setState({
      layout:{
        height:event.nativeEvent.layout.height,
        width:event.nativeEvent.layout.width,

      }
    });
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
      <View style={{flex:1}} onLayout={this._onLayout}>

      <View>

      <Toolbar title={this.props.title} navigator ={navigator} menuIcon={this.props.menuIcon} omPress={()=>this._onClick(this.props.back)}></Toolbar>

      </View>

      <ScrollView>

      <Text style={{fontSize:18, marginLeft:10, marginTop:10}}>Arrival/Departure:</Text>
      <Text style={{marginLeft:10}}>CheckIn Date:</Text>

      <DatePicker
          style ={{width:this.state.layout.width, padding:10}}
          date={this.state.date_in}
          mode="date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          showIcon={false}
          customStyles={{
           dateInput: {
              alignItems : 'flex-start',
              padding:5
          },
         }}
        onDateChange={(date_in) => {this.setState( {date_in: date_in});}}/>

        <Text>CheckOut Date:</Text>
        <DatePicker
            style ={{width:this.state.layout.width, padding:10}}
            date={this.state.date_out}
            mode="date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            showIcon={false}
            customStyles={{
             dateInput: {
                alignItems : 'flex-start',
                padding:5
            },
           }}
          onDateChange={(date_out) => {this.setState({date_out: date_out});}}/>

          <Text style={{fontSize:18, marginLeft:10, marginTop:10}}>Room Details:</Text>
          <Text style={{marginLeft:10}}>Number of Room(s)</Text>

          <View style={{marginLeft:10, marginTop:10, marginRight:10}}>
              <Select
                ref="SELECT1"
                width ={width}
                optionListRef={this._getOptionList1.bind(this)}
                defaultValue="a"
                onSelect={this._room_no.bind(this)}>
                <Option>Alberta</Option>
                <Option>British Columbia</Option>
                <Option>Manitoba</Option>
                <Option>New Brunswick</Option>
                <Option>Newfoundland and Labrador</Option>
                <Option>Northwest Territories</Option>
                <Option>Nova Scotia</Option>
              </Select>

              <OptionList style ={{width:150, backgroundColor:'#000'}} ref="OPTIONLIST1"/>
          </View>

          <Text style={{marginLeft:10}}>Room Type</Text>
          <View style={{marginLeft:10, marginTop:10, marginRight:10}}>
              <Select
                ref="SELECT2"
                width ={width}
                optionListRef={this._getOptionList2.bind(this)}
                defaultValue="b"
                onSelect={this._room_type.bind(this)}>
                <Option>Alberta</Option>
                <Option>British Columbia</Option>
                <Option>Manitoba</Option>
                <Option>New Brunswick</Option>
                <Option>Newfoundland and Labrador</Option>
                <Option>Northwest Territories</Option>
                <Option>Nova Scotia</Option>
              </Select>

              <OptionList style ={{backgroundColor:'#000'}} ref="OPTIONLIST2"/>
          </View>

          <Text style={{marginLeft:10}}>Adult(s)</Text>
          <View style={{marginLeft:10, marginTop:10, marginRight:10}}>
              <Select
                ref="SELECT3"
                width ={width}
                optionListRef={this._getOptionList3.bind(this)}
                defaultValue="c"
                onSelect={this._adult_no.bind(this)}>
                <Option>Alberta</Option>
                <Option>British Columbia</Option>
                <Option>Manitoba</Option>
                <Option>New Brunswick</Option>
                <Option>Newfoundland and Labrador</Option>
                <Option>Northwest Territories</Option>
                <Option>Nova Scotia</Option>
              </Select>

              <OptionList style ={{width:150, backgroundColor:'#000'}} ref="OPTIONLIST3"/>
          </View>

          <Text style={{marginLeft:10}}>Kid(s)</Text>
          <View style={{marginLeft:10, marginTop:10, marginRight:10}}>
              <Select
                ref="SELECT4"
                width ={width}
                optionListRef={this._getOptionList4.bind(this)}
                defaultValue="d"
                onSelect={this._kid_no.bind(this)}>
                <Option>Alberta</Option>
                <Option>British Columbia</Option>
                <Option>Manitoba</Option>
                <Option>New Brunswick</Option>
                <Option>Newfoundland and Labrador</Option>
                <Option>Northwest Territories</Option>
                <Option>Nova Scotia</Option>
              </Select>

              <OptionList style ={{width:150, backgroundColor:'#000'}} ref="OPTIONLIST4"/>
          </View>

       <Text style={{fontSize:18, marginLeft:10, marginTop:10}}>Personal Info:</Text>
       <Text style={{marginLeft:10}}>FirstName</Text>
       <TextInput style ={styles.textEdit} onChangeText={(text) => this.setState({text})}
                  placeholder="What you gotta say?"></TextInput>

      <Text style={{marginLeft:10}}>LastName</Text>
      <TextInput style ={styles.textEdit} onChangeText={(text) => this.setState({text})}
                             placeholder="What you gotta say?"></TextInput>

      <Text style={{marginLeft:10}}>Email</Text>
      <TextInput style ={styles.textEdit} onChangeText={(text) => this.setState({text})}
                                        placeholder="What you gotta say?"></TextInput>

      <Text style={{marginLeft:10}}>Contact Number</Text>
      <TextInput style ={styles.textEdit} onChangeText={(text) => this.setState({text})}
                                                   placeholder="What you gotta say?"></TextInput>


       <View style={{flex:1, margin:10}}>
       <TouchableOpacity onPress={() => Communications.email(['ritendra.shakya@javra.com'],null,null,'Room Booking','Booking Details here send from the user')}>
       <View style ={{height:50, backgroundColor:'brown', justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:18}}>Book Now</Text></View>

       </TouchableOpacity>
       </View>
      </ScrollView>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  textEdit: {
    height: 40,
    margin:10,
    borderColor: '#BDBDC1',
    backgroundColor: 'white',
    borderWidth: 1
  },
  picker: {
   width: 100,
 },
});

module.exports = Booking;
