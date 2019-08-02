import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, Image ,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';
import { BackHandler, FlatList } from 'react-native';
import { Button ,Alert,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from 'app/components/Toolbar';
import { FlatGrid } from 'react-native-super-grid';
import _ from 'lodash';

class HomeView extends Component {
    constructor(props) {
        super(props);
    } 
    onRegisterPage = () => {
        this.props.navigation.navigate('DefaultHome')
        // this.props.navigation.navigate('Bank')
    };
    onWelcomePage = () => {
        this.props.navigation.navigate('WelcomeRestaurant')
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
       <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer,]}>
          <TouchableWithoutFeedback onPress={this.onWelcomePage} >
          <Image style={{height:100,}}
          source={item.image}
        />  
        </TouchableWithoutFeedback> 
          <TouchableWithoutFeedback onPress={this.onRegisterPage} >
          <View style={styles.button}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        </TouchableWithoutFeedback> 
          </View>
        )}
      />
      </View>

        );
    }
} 

export default HomeView;
