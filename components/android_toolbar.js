'use strict';

import React, {Component} from 'react';
import{
  ToolbarAndroid,
  View
}from 'react-native';

import ToolbarStyle from '../css/toolbarcss';

var toolbarActions = [{title:'Email', icon:require('../icons/color/ic_email_white.png'), show: 'always'}];

class Toolbar extends Component {

  static contextTypes = {
      onActionClicked: React.PropTypes.func.isRequired,
    };


  render(){
    return(
      <View style ={ToolbarStyle.container}>

      <ToolbarAndroid
        navIcon={this.props.menuIcon}
        style={ToolbarStyle.toolbar}
        onIconClicked={this.props.omPress}
        titleColor='white'
        title={this.props.title}/>
      </View>
    );
  }

  _onActionClicked(){
    this.props.navigator.push({
      id:'reservation'
    });

}
}

module.exports = Toolbar;
