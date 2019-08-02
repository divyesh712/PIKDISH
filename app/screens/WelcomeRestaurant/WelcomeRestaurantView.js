import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, Image ,ImageBackground,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';
import { BackHandler, FlatList ,TouchableWithoutFeedback} from 'react-native';
import { Button ,Alert} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from 'app/components/Toolbar';
import { SliderBox } from 'react-native-image-slider-box';
import { FlatGrid } from 'react-native-super-grid';
import _ from 'lodash';

class WelcomeRestaurantView extends Component {
    constructor(props) {
        super(props);
        this.state = {
images: [
'https://source.unsplash.com/1024x768/?nature',
'https://source.unsplash.com/1024x768/?water',
'https://source.unsplash.com/1024x768/?girl',
'https://source.unsplash.com/1024x768/?tree'
]
};
    } 
    onRegisterPage = () => {
        this.props.navigation.navigate('Terms')
        // this.props.navigation.navigate('Bank')
    };
 onOfferPage = () => {
        this.props.navigation.navigate('Restaurant_Offers')
        // this.props.navigation.navigate('Bank')
    };
onScanQRPage = () => {
        this.props.navigation.navigate('InvalidQR')
        // this.props.navigation.navigate('Bank')
    };

    render() {
      const items = [
      { image: require('../assets/black-layer.png'), name: 'Table Order/Dine In' }, { name: 'Pre-Order/Table Booking', image: require('../assets/black-layer1.png')},
      { name: 'Take Away',image: require('../assets/black-layer.png') }, { name: 'Delivery By Restaurant', image: require('../assets/black-layer3.png') },
      { name: 'Event', image: require('../assets/black-layer4.png') },  
       
    ];
        return (
            <View style={styles.container}>  
              <ImageBackground source={require('../assets/welcomebg.png')} style={{width: '100%', height: '100%'}}>  
   
         <View style={styles.buttonContainer}>
         <TouchableOpacity onPress={this.onScanQRPage} underlayColor="white"> 
            <Text style={styles.buttonText}>You are on Table No. 5</Text>
            </TouchableOpacity>
            <View
  style={{
    borderBottomColor: 'rgba(0,0,0,0.16)',
    borderBottomWidth: 1,
    marginTop:11.8, 
    justifyContent:'center',
    marginLeft:27.3,
    marginRight:27.9, 
  }}
/> 
        </View>
        <View style={styles.circle}> 
            <Image
          style={styles.logo}
          source={require('../assets/jd-icon-app-storelisting.png')}
        />
        </View>
        <View style={styles.buttonContainer1}> 
        <TouchableWithoutFeedback onPress={this.onOfferPage} >
            <Text style={styles.buttonText1}>Welcome to 
Lakshmi Restaurant</Text>  
</TouchableWithoutFeedback>
        </View>
        
<View
  style={{ 
    marginTop:84.6,width:243.7, alignSelf: 'center', 
    justifyContent:'center',marginLeft:27.8,marginRight:27.9, 
  }}>
  <TouchableWithoutFeedback onPress={this.onRegisterPage} >
  <Text style={styles.text}>Disappear in 10 Seconds</Text>
  </TouchableWithoutFeedback>
  </View>
          </ImageBackground>
      </View>

        );
    }
} 

export default WelcomeRestaurantView;
