'use strict';

import React, {Component} from 'react'
import{
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
}from 'react-native';

import ViewPager from 'react-native-viewpager';
var {height,width} = Dimensions.get('window');

var IMGS = [
  {image:require('../../icons/images/hotel.png')},
  {image:require('../../icons/images/conference.png')},
  {image:require('../../icons/images/double_room.png')},
  {image:require('../../icons/images/reception.png')},
  {image:require('../../icons/images/restaurant.png')},
  {image:require('../../icons/images/swim.png')},];

class HomeScreenTop extends Component{

  constructor(props){
    super(props);
    this.state = {
       dataSource: new ViewPager.DataSource({
            pageHasChanged : (p1,p2) => p1!=p2
        })
    };
  }

  render() {
    return(
      <View>
          <ViewPager
          layout={this.state.layout}
           style={this.props.style}
           dataSource={this.state.dataSource}
           renderPage={this._renderPage}
           isLoop={false}
           autoPlay={false}/>

      </View>
    );
  }

//  source={{uri: data}}
  _renderPage(data: Object,pageID: number | string) {
    return (
      <Image
        source={data.image}
        style={styles.page} />
    );
  }

  componentDidMount() {
      this.setState({
          dataSource: this.state.dataSource.cloneWithPages(IMGS)
      });
  }
}

  var styles = StyleSheet.create({
    page: {
      width: width,
      height:200,
    },
  });
module.exports = HomeScreenTop;
