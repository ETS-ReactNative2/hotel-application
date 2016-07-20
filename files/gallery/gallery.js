'use-strict'

import React ,{Component} from 'react'
import{
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  ToastAndroid,
  TouchableHighlight,
  Navigator,
} from 'react-native';

import Toolbar from '../../components/android_toolbar';
import GalleryDetail from './galleryDetail';

import GridView from 'react-native-easy-grid-view';


var list_items = [
            {title:'1', image:require('../../icons/images/hotel.png')},
            {title:'2', image:require('../../icons/images/conference.png')},
            {title:'3', image:require('../../icons/images/canoeing.png')},
            {title:'4', image:require('../../icons/images/evening.png')},
            {title:'5', image:require('../../icons/images/fitness.png')},
            {title:'6', image:require('../../icons/images/garden.png')},
            {title:'7', image:require('../../icons/images/lobby.png')},
            {title:'8', image:require('../../icons/images/pool.png')},
            {title:'9', image:require('../../icons/images/reception.png')},
            {title:'10', image:require('../../icons/images/rest.png')},
            {title:'11', image:require('../../icons/images/restaurant.png')},
            {title:'12', image:require('../../icons/images/safari.png')},
            {title:'13', image:require('../../icons/images/spa.png')},
            {title:'14', image:require('../../icons/images/swim.png')},
            {title:'15', image:require('../../icons/images/view.png')},
            {title:'16', image:require('../../icons/images/conference.png')},
            {title:'17', image:require('../../icons/images/fitness.png')},
            {title:'18', image:require('../../icons/images/view.png')},
            {title:'19', image:require('../../icons/images/about.jpg')},
            {title:'20', image:require('../../icons/images/club.png')},
            {title:'21', image:require('../../icons/images/triple_room.png')},];

class ImageGallery extends Component{

  constructor(props){
    super(props);
    this.state = {
      dataSource : new GridView.DataSource({
           rowHasChanged : (row1,row2) => row1!=row2
       })
    };
  }

  static contextTypes = {
      openDrawer: React.PropTypes.func.isRequired,
    };

    _onClick(item){
      console.log("property"+ item);
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
            <Toolbar title={this.props.title} menuIcon={this.props.menuIcon} omPress={()=>this._onClick(this.props.back)}>
            </Toolbar>
          </View>
          <ScrollView>
          <GridView dataSource={this.state.dataSource}
                      spacing={2}
                      style={{}}
                      renderCell={(item) => this._renderCell(item)}/>
          </ScrollView>
      </View>
    );
  }

  _renderCell(item, navigator, rowID) {
        return <View onLayout={event => {
         var  width = event.nativeEvent.layout.width;
         if(this.state.cellWidth!=width){
         this.setState({cellWidth:width})
         }
         if(this.state.cellHeight!=width){
         this.setState({cellHeight:width})
         }
        }}>
        <TouchableHighlight onPress={() => this._navigateToDetail(item)}>
          <View style={{width:this.state.cellWidth,height:this.state.cellHeight,justifyContent:'center'}}
                       resizeMode={Image.resizeMode.stretch}>

                       <Image style ={{flex:1}} source={item.image}></Image>
          </View>
        </TouchableHighlight>

        </View>
    }

  _onPress(item){
    ToastAndroid.show(item.title, ToastAndroid.SHORT);
  }

componentDidMount() {
    this.setState({
        dataSource: this.state.dataSource.cloneWithCells(list_items,3)
    });
}

_navigateToDetail(item){
  this.props.navigator.push({
    id: 'GalleryDetail',
    passProps:{
      itemID : item.title
    }
  });
}
}

class Gallery extends Component{

  render(){
    return(

      <Navigator
          initialRoute={{id: 'ImageGallery', name: 'ImageGallery'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FadeAndroid;
          }} />
    );
  }

  renderScene(route, navigator) {
    var routeID = route.id;
    if(routeID == 'ImageGallery'){
    return(
      <ImageGallery navigator ={navigator} title = {this.props.title}  menuIcon={this.props.menuIcon} back={this.props.back}/>
    );
  }else if(routeID == 'GalleryDetail'){
    return(
      <GalleryDetail navigator = {navigator} title= {'Detail'} list_items = {list_items} {...route.passProps} menuIcon={this.props.menuIcon} back={'yes'}/>
    );
  }
  }

}

var styles = StyleSheet.create({
  page: {
    height:200,
  },
});

module.exports = Gallery;
