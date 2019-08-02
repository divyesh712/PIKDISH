import React, { Component } from 'react';
import { Text,Modal, Dimensions,SafeAreaView ,View, StyleSheet,TextInput, Image ,ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
 import { BackHandler, FlatList } from 'react-native';
import { Button ,Alert,TouchableHighlight} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from 'app/components/Toolbar'; 
import { Icon ,Card} from 'react-native-elements' ; 
 import {CardView,  CardTitle} from 'react-native-cardview';
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const heightes = screenHeight/2;
class InvalidQRView extends Component {
    constructor(props) {
        super(props); 
    } 
    onScanQRPage = () => {
        this.props.navigation.navigate('ScanQR')
        // this.props.navigation.navigate('Bank')
    };
changeScrollValue(value) {
    this.scrollView.setNativeProps({ scrollEnabled: value });
    // this.setState({ isScroll : value});
  }
    render() {  
        return (
            <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}> 
        <ScrollView
        ref={c => {
          this.scrollView = c;
        }}
        style={{ flex: 1, backgroundColor: 'rgb(245,245,247)' }}
      >
         <Image
          style={styles.logo}
          source={require('../assets/gallery.png')}
        />
        <View style={{height:311,backgroundColor:'#9e9e9f',alignItems:'center',justifyContent:'center',flex:1,}}>
        <View style={{backgroundColor:'white',alignSelf:'center',height:226,width:252}}>

        </View>
         </View>
         <View style={{height:85,backgroundColor:'#F5F5F7' ,flex:1,}}>
         <TouchableOpacity onPress={this.onScanQRPage} underlayColor="white">
         <Text style={styles.normalText}>Invalid QR-Code !!</Text>
         </TouchableOpacity>
         <Text style={styles.paragraph}>Explore Menu</Text>
         </View>
         </ScrollView>
        </View>
        </SafeAreaView>
        );
    }
} 
InvalidQRView.propTypes = {
    onLogin: PropTypes.func,
    isLoading: PropTypes.bool
};

export default InvalidQRView;
