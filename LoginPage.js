'use strict';

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  DrawerLayoutAndroid,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

/*import MenuDrawer from './components/menu_drawer';*/
import Toolbar from './components/android_toolbar';
import ViewPager from 'react-native-viewpager';

var deviceWidth = Dimensions.get('window').width;

var IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
  'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
  'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
  'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];


class LoginPage extends Component {

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

      <Toolbar title={this.props.title}>
      </Toolbar>

      <ViewPager
       style={this.props.style}
       dataSource={this.state.dataSource}
       renderPage={this._renderPage}
       isLoop={false}
       autoPlay={false}/>

      <Text style = {{fontSize:20, marginLeft:20}}>Hello</Text>
      </View>

    );
  }

  _renderPage(data: Object,pageID: number | string) {
    return (
      <Image
        source={{uri: data}}
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
    width: deviceWidth,
    height:200,
  },
});

module.exports = LoginPage;
