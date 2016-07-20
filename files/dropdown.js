'use-strict';

import React, {Component} from 'react'
import {
  AppRegistry,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import {
  Select,
  Option,
  OptionList,
  updatePosition
} from 'react-native-dropdown';

import Communications from 'react-native-communications';

var {width,height} = Dimensions.get('window');

//<Text>Selected provicne of Canada: {this.state.canada}</Text>


class MenuDrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canada: ''
    };
  }

  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['OPTIONLIST']);
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }


  _canada(province) {

    this.setState({
      ...this.state,
      canada: province
    });
  }

  render() {
    return (

      <View>
      <View style={{margin:5}}>
          <Select
            ref="SELECT1"
            width ={width}
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Pravident..."
            onSelect={this._canada.bind(this)}>
            <Option>Alberta</Option>
            <Option>British Columbia</Option>
            <Option>Manitoba</Option>
            <Option>New Brunswick</Option>
            <Option>Newfoundland and Labrador</Option>
            <Option>Northwest Territories</Option>
            <Option>Nova Scotia</Option>
          </Select>

          <OptionList style ={{width:150, backgroundColor:'#000'}} ref="OPTIONLIST"/>
      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
          <View style={styles.holder}>
            <Text style={styles.text}>Make phonecall</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.email(['emailAddress1', 'emailAddress2'],null,null,'My Subject','My body text')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Send an email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.text('0123456789')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Send a text/iMessage</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.web('https://github.com/facebook/react-native')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Open react-native repo on Github</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(253,253,253)',
  },
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
});

module.exports = MenuDrop;
