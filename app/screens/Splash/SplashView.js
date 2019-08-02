import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, Image ,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';
import { Button ,Alert,TouchableHighlight} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
  index:0,
  actions: [
  NavigationActions.navigate({ routeName: 'Login'})]
})
class SplashView extends Component {
   
    componentDidMount ()
    {
      setTimeout(
          () => {
            this.props.navigation.dispatch(resetAction)
          },
          1*1000
        );
    } 
    render() {
        return (
            <View style={styles.container}>   
      <Image source={require('../assets/PIKDISH.png')} />  
      </View>

        );
    }
} 

export default SplashView;
