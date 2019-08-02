import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, Image ,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';
import { Button ,Alert,TouchableHighlight} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class ForgotView extends Component {
    constructor(props) {
        super(props);
    } 
    onRegisterPage = () => {
        this.props.navigation.navigate('Home')
        // this.props.navigation.navigate('Bank')
    };
    render() {
        return (
            <View style={styles.container}> 
      <View> 
      <Text style={styles.paragraph}>
         Forgot Password?
         </Text>
      <Image
          style={styles.logo}
          source={require('../assets/boy.png')}
        /> 
         <Text style={styles.paragraph1}>
         Enter the Mobile No associated with your account
         </Text>
         <Reinput style={styles.textinput} label='Enter Your Mobile No.' keyboardType='numeric' onChangeText = {this.handleEmail}/> 
       
 <View style={styles.buttonContainer}>
          <TouchableOpacity  onPress={this.onRegisterPage} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </View>
        </TouchableOpacity>
        </View> 
      </View>
      </View>

        );
    }
} 

export default ForgotView;
