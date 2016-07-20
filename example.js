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
      layout:{
         height:200,
         width:width,
       },

       dataSource: new ViewPager.DataSource({
            pageHasChanged : (p1,p2) => p1!=p2
        })
    };
  }

  _onLayout(event){

     console.log('--------------------layout----------------------------' + JSON.stringify(event.nativeEvent.layout));

     this.setState({
       layout:{
         height:event.nativeEvent.layout.height,
         width:event.nativeEvent.layout.width,

       }
     });
   }

  render() {
     console.log('------------------------render------------------------' + JSON.stringify(this.state.layout));
    return(
      <View onLayout={(event)=>this._onLayout(event)}>
          <ViewPager
          layout={this.state.layout}
           style={this.props.style}
           dataSource={this.state.dataSource}
           renderPage={this._renderPage.bind(this)}
           isLoop={false}
           autoPlay={false}/>

      </View>
    );
  }

//  source={{uri: data}}
  _renderPage(data: Object,pageID: number | string) {
   console.log('------------------------_renderPage------------------------' + JSON.stringify(this.state.layout));
    return (
      <Image
        source={data.image}
        style={{width:this.state.layout.width, height:200}} />
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
