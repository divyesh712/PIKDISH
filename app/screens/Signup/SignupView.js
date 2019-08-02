import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, Image ,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';
import { Modal,Alert,TouchableHighlight} from 'react-native'; 
import { Button } from 'react-native-elements';
import styles from './styles';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import PropTypes from 'prop-types'; 
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton, 
} from 'react-native-popup-dialog';
console.disableYellowBox = true;
class SignupView extends Component {

    constructor(props) { 
    super(props); 
    this.state = {  
         defaultAnimationDialog: false,
    }; 
  } 
  Show_Custom_Alert(visible) { 
    this.setState({ defaultAnimationDialog: false}); 
  } 
onSignInPage = () => {
        this.props.navigation.navigate('Login')
        // this.props.navigation.navigate('Bank')
    }; 
    onSignInPage = () => {
        this.props.navigation.navigate('Login')
        // this.props.navigation.navigate('Bank')
    };

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
          visible={this.state.defaultAnimationDialog}
          rounded
          actionsBordered 
          dialogTitle={
            <DialogTitle
              title="Apply Referral Code"
              style={styles.dialogtitle}
              hasTitleBar={false}
              align="center"
            />
          } 
        >
          <DialogContent
            style={{
              backgroundColor: 'rgb(255,255,255)',
            }}
          >
          <View
  style={{
    borderBottomColor: 'rgba(0,0,0,0.16)',
    borderBottomWidth: 1,  
    justifyContent:'center',
    marginLeft:17.5,
    marginRight:17.5, 
  }} 
/>  
<TextInput style={styles.dialogtextbox} placeholder={'Referral Code'} />
            <Button
            title="Proceed"
            type="solid" 
            buttonStyle={styles.dialogbutton}
            containerStyle={styles.dialogbuttoncontainer}
            onPress={() => {this.setState({defaultAnimationDialog: false,});}}
          /> 
          </DialogContent>
        </Dialog>
    );
  }
    render() {
        return (
            <View style={styles.container}> 
      <View>  

         <Reinput style={styles.textinput} label='Name' onChangeText = {this.handleEmail}/>
         <Reinput style={styles.textinput1} label='Mobile' keyboardType='numeric' onChangeText = {this.handleEmail}/>
         <Reinput style={styles.textinput1} label='Email' onChangeText = {this.handleEmail}/>
         <Reinput style={styles.textinput1} label='Password' secureTextEntry={true} onChangeText = {this.handleEmail}/>
         <Reinput style={styles.textinput1} label='Confirm Password' secureTextEntry={true} onChangeText = {this.handleEmail}/>
      <View style={{flexDirection:'row'}}>
                    
                    <View style={{flex:0.5}}>
                    <Button
            title="Sign In"
            type="clear"
            titleStyle={styles.paragraph5}
            onPress={this.onSignInPage}
          />
           </View>
                    <View style={{flex:1.5,flexDirection: 'row',}}>
                    <Button
            title="Have a referral code ?"
            type="clear"
            titleStyle={styles.paragraph2}
            onPress={() => {this.setState({defaultAnimationDialog: true,});}}
          /> 
                        <Button
            title="Apply Code"
            type="clear"
            titleStyle={styles.applycode}
            onPress={() => {this.setState({defaultAnimationDialog: true,});}}
          /> 
                    </View>
                </View>
                {this.renderReferalCode()}
 <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onSignInPage} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.text1}>
         By Continuing , you agree to our  
         </Text> 
         <Text style={styles.text2}> <Text style={styles.tc}>Terms & Condition</Text> and <Text style={styles.policy}>Privacy Policy</Text></Text> 
         </View>
      </View>
      </View>
        );
    }
}

SignupView.propTypes = {
    onLogin: PropTypes.func
};

export default SignupView;
