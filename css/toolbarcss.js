'use strict';

import React from 'react'
import{
  StyleSheet,
}from 'react-native';

//#F5FCFF  246dd5
var ToolbarStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 19,
    marginBottom: 5,

  },
  toolbar: {
   	height: 56,
    backgroundColor: 'brown',
  }
});

module.exports = ToolbarStyle;
