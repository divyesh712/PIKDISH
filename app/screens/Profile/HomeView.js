import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, Image ,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';
import { Button ,Alert,TouchableHighlight} from 'react-native';
import styles from './styles';


class HomeView extends Component {
    constructor(props) {
        super(props);
    }
        
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
                        <Text style={styles.paragraph2}>New User? Sign Up</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.paragraph2}>Forgot Password?</Text>
                    </View>
                </View>
 <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={() => navigate('Profile', {name: 'Jane'})} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </View>
        </TouchableHighlight>
        </View>
        <Text style={styles.buttonContainer}>
         -OR-
         </Text>
         <View style={{flexDirection:"row",borderWidth: 1, 
      borderColor: 'grey',borderRadius:5,margin:10,}}>
                    <View style={{flex:0.5}}>
                        <Text style={styles.paragraph4}>F</Text>
                    </View>
                    <View style={{flex:1.5}}>
                        <Text style={styles.paragraph4}>Sign In With Facebook</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",borderWidth: 1, 
      borderColor: 'grey',borderRadius:5,margin:10,}}>
                    <View style={{flex:0.5}}>
                        <Text style={styles.paragraph4}>G</Text>
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

export default HomeView;
