import React, { Component } from 'react';
import { Text,Modal,Dimensions, SafeAreaView ,View, StyleSheet,TextInput, Image ,ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
 import { BackHandler, FlatList } from 'react-native';
import { Button ,Alert,TouchableHighlight} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from 'app/components/Toolbar'; 
import { Icon ,Card} from 'react-native-elements' ; 
 import {CardView,  CardTitle} from 'react-native-cardview';
import Offers from 'app/screens/Offers';
 import RestaurantOffers from 'app/screens/RestaurantOffers';
 import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
const Page = ({label}) => (
    <RestaurantOffers />
);

const Offer = ({label}) => (
    <Offers />
);

class Restaurant_OffersView extends Component {
    constructor(props) {
        super(props); 
    } 
    onRegisterPage = () => {
        this.props.navigation.navigate('Login')
        // this.props.navigation.navigate('Bank')
    };
changeScrollValue(value) {
    this.scrollView.setNativeProps({ scrollEnabled: value });
    // this.setState({ isScroll : value});
  }
    render() {  
        return (
             <View style={[styles.container, {paddingTop: 1}]}>
          <ScrollableTabView 
              tabBarActiveTextColor={'#272727'} 
              contentStyle='center'
              renderTabBar={() => <TabBar 
              tabBarTextStyle={styles.normalText}
                underlineColor="#D63932" />}>
                 
            <Page  tabLabel={{label: "Restaurant Offers"}} label="Page #1"/>
            <Offer tabStyle={{backgroundColor: 'red'}} tabLabel={{label: "Coupons", badge: 3}}  />
              
          </ScrollableTabView>

        </View>
        );
    }
} 
Restaurant_OffersView.propTypes = {
    onLogin: PropTypes.func,
    isLoading: PropTypes.bool
};

export default Restaurant_OffersView;
