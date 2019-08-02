import React, { Component } from 'react';
import { Text,Modal, View, StyleSheet,TextInput, Image ,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';
import { Snackbar } from 'react-native-paper';
import FoodWiseRestaurant from 'app/screens/FoodWiseRestaurant';
import { Button ,Alert,TouchableHighlight,TouchableWithoutFeedback} from 'react-native'; 
import styles from './styles';
import PropTypes from 'prop-types';
    
class LoginView extends Component {
  state = {
        email: '',
        password: '',
        visible: false, 
        modalVisible: false,
    };
    setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
    onPress = () => {
        this.dismissKeyboard();
        const { email, password } = this.state;
        if (email.length > 0 && password.length > 0) {
            this.props.onLogin(email, password);
        } else {
            this.setState({
                visible: true,
                snack: 'Missing Credentials'
            });
        }
    };
    navigate = () => {
        this.props.onLogin('username', 'password');
    };

onForgotPage = () => {
        this.props.navigation.navigate('Forgot')
        // this.props.navigation.navigate('Bank')
    };
    onFoodPage = () => {
        this.props.navigation.navigate('FoodWiseRestaurant')
        // this.props.navigation.navigate('Bank')
    };
    onVerificationPage = () => {
        this.props.navigation.navigate('Verification')
        // this.props.navigation.navigate('Bank')
    };
    onSignupPage = () => {
        this.props.navigation.navigate('Signup')
        // this.props.navigation.navigate('Bank')
    };
    render() {
        return (
            <View style={styles.container}> 
      <View> 
      <Image
          style={styles.logo}
          source={require('../assets/PIKDISH.png')}
        />
         <Text style={styles.paragraph}>
         Welcome,
         </Text>
         <Text style={styles.paragraph1}>
         Sign in to Continue
         </Text>
         <Reinput style={styles.textinput} label='Mobile No' keyboardType='numeric' onChangeText = {this.handleEmail}/>
         <Reinput style={styles.textinput} label='Password' secureTextEntry={true} onChangeText = {this.handleEmail}/>
      <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <TouchableWithoutFeedback onPress={this.onSignupPage} >
                        <Text style={styles.paragraph2}>New User? Sign Up</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{flex:1}}>
                    <TouchableWithoutFeedback onPress={this.onForgotPage} >
                        <Text style={styles.paragraph2}>Forgot Password?</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
 <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={this.navigate} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </View>
        </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback onPress={this.onFoodPage} >
        <Text style={styles.buttonContainer}>
         -OR-
         </Text>
         </TouchableWithoutFeedback>
         <View style={{flexDirection:"row",borderWidth: 1, 
      borderColor: 'rgb(221,221,221)',borderRadius:5,marginTop:26,marginLeft:16,marginRight:15,}}>
                    <View style={{flex:0.5}}>
                        <Image style={{width:20,height:20, marginTop:15,marginLeft:30,marginBottom:15,}} source={require('../assets/Icon_Facebook.png')}/>
                    </View>
                    <View style={{flex:1.5}}>
                        <Text style={styles.paragraph4}>Sign In With Facebook</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",borderWidth: 1, 
      borderColor: 'rgb(221,221,221)',borderRadius:5,marginTop:20,marginBottom:48,marginLeft:16,marginRight:15,}}>
                    <View style={{flex:0.5}}>
                       <Image style={{width:20,height:20, marginTop:15,marginLeft:30,marginBottom:15,}} source={require('../assets/icons8_Google_2.png')}/>
                    </View>
                    <View style={{flex:1.5}}>
                        <Text style={styles.paragraph4}>Sign In With Google</Text>
                    </View>
                </View>
      </View>
      </View>
        );
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func,
    isLoading: PropTypes.bool
};

export default LoginView;
