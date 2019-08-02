import React, { Component } from 'react';
import { Text,Modal, Dimensions,SafeAreaView ,View, StyleSheet,TextInput, Image ,ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
 import { BackHandler, FlatList } from 'react-native';
import {Alert,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Toolbar from 'app/components/Toolbar'; 
import Offers from 'app/screens/Offers';
import FoodWiseRestaurant from 'app/screens/FoodWiseRestaurant';
import { Button , Icon ,Card} from 'react-native-elements' ; 
 import {CardView,  CardTitle} from 'react-native-cardview';
 import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const heightes = screenHeight/2;
import Dialog, { 
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton, 
} from 'react-native-popup-dialog';
  
class RestaurantOffersView extends Component {
    constructor(props) {
        super(props);
        this.showDetails = this.showDetails.bind(this); 
         this.state = {  
         defaultAnimationDialog: false,
    };
    }  
    showDetails = (_id) => {
    this.props.navigation.navigate('FoodWiseRestaurant');
}
changeScrollValue(value) {
    this.scrollView.setNativeProps({ scrollEnabled: value });
    // this.setState({ isScroll : value});
  }
setModalVisible(visible) {
    this.setState({defaultAnimationDialog: true});
  }

    renderReferalCode() {
    return (
      <Dialog
          onDismiss={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          onTouchOutside={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          onHardwareBackPress={() => {
            console.log('onHardwareBackPress');
            this.setState({ defaultAnimationDialog: false });
            return true;
          }}
            containerStyle={{ justifyContent: 'flex-end' }}
          width={1}
          height={0.5}
          visible={this.state.defaultAnimationDialog} 
          actionsBordered 
          dialogTitle={
          <View>   
            <Text style={{marginTop:20,marginLeft:33,marginBottom:10}}>
                <Text style={styles.text}>Suggested Item</Text><Text style={{ marginLeft:146 }}></Text> </Text>
               
              <Image style={{width:12,height:12,marginTop:-27,marginLeft:324}} source={require('../assets/Icon_Cancel.png')}/>
               
              <Text style={{borderBottomWidth:1,borderBottomColor:'rgb(171,171,171)'}}></Text>
              </View>
          } 
        >

          <DialogContent
            style={{
              backgroundColor: 'rgb(255,255,255)',
              marginBottom:73
            }}
          > 
<FlatList
          data={[
            {key: 'Kaju Kari Panjabi'},
            {key: 'Paneer Butter Masala'},
            {key: 'Rajwadi Undiyu'},
            {key: 'Paneer Tikka Masala'},  
          ]}
          renderItem={({item}) => 
          <View  style={{flex:1,marginTop:20,}}> 
       <View style={{marginTop:20.5,marginLeft:16,marginRight:20,flexDirection:"row",}}> 
                <View style={{flex:0.5,width:80.5,height:53.5,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/images_6.png')}/>
                    </View>
                    <View style={{flex:1,width:110,height:73,marginLeft:33.5,marginTop:8}}>
                        <Text style={styles.dialogboldText}>{item.key}</Text>
                        <View style={{flexDirection:'row',marginTop:3.4,}}>
                        <Image style={{width:11,height:11,alignSelf:'center',marginTop:-3.4,}} source={require('../assets/rupee.png')}/>
                        <Text style={styles.dialogsmallText}>200</Text>
                        <TouchableOpacity onPress={this.navigate} underlayColor="white">
             <Text style={styles.dialogbuttontext}>ADD</Text> 
        </TouchableOpacity>
                         </View>
                    </View>
                    </View>
                    <View
  style={{
    borderBottomColor: 'rgba(0,0,0,0.16)',
    borderBottomWidth: 1, 
    marginTop:-5, 
    marginLeft:40.5,
    marginRight:43.5, 
  }}
/>     
              </View> 
               }
        />  
          </DialogContent>
        </Dialog>
    );
  }

    render() {  
        return (
             <View style={[styles.container, {marginTop: 0}]}>
          <FlatList
          data={[
            {key: 'Hotel Tulsi'},
            {key: 'Bismillah-Station'},
            {key: 'Laxmi Restaurant'},
            {key: 'Jodhpur Dabbawala'},
            {key: 'Hotel Laxmi'},
            {key: 'Jodhpur Restaurant'}, 
          ]}
          renderItem={({item}) =>    
       <View style={{marginTop:12,marginLeft:16,marginRight:20,flexDirection:"row",}}> 
                <View style={{flex:0.5,width:81,height:73,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/images_6.png')}/>
                    </View>
                    <View style={{flex:1,width:177,height:73,marginLeft:16,marginRight:16,marginTop:11,marginBotom:11,}}>
                        <TouchableWithoutFeedback onPress={this.showDetails}>
                        <Text style={styles.boldText}>{item.key}</Text>
                        </TouchableWithoutFeedback>
                        <Text style={styles.normalText}>Use Coupon PIKDISH</Text>
                        <View style={{flexDirection:"row",}}>
                        <Image style={{width:8,height:8,alignSelf:'center',marginRight:5,}} source={require('../assets/star.png')}/>
                        <Text style={styles.smallText}>4.4</Text>
                        <Text style={styles.arrowText}>|</Text>
                        <Text style={styles.smallText}>30 mins</Text>
                        <Text style={styles.arrowText}>|</Text>
                        <Text style={styles.smallText}>On All Order</Text>
                        </View>
                    </View>  
                    
                    <View style={{flex:0.5,width:81,height:73,marginTop:28.5,marginBotom:28.5,marginLeft:10,}}>
                       <View style={{flexDirection:"row",}}>
                        <Image style={{width:17,height:17,alignSelf:'center',marginRight:6,}} source={require('../assets/discount.png')}/>
                        <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
                        <Text style={styles.percentoffText}>24% off</Text>
                        </TouchableOpacity> 
                        </View>
                    </View> 
              </View> 
               }
        />
        {this.renderReferalCode()}
        </View>
        );
    }
}  

export default withNavigation(RestaurantOffersView);
