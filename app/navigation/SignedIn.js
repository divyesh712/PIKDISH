import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator, createAppContainer,TabNavigator } from 'react-navigation';
import Home from 'app/screens/Home';
import Orders from 'app/screens/Signup';
import Offers from 'app/screens/Offers';
import Restaurant_Offers from 'app/screens/Restaurant_Offers';
 import Explore from 'app/screens/Verification';
import Profile from 'app/screens/Profile';
import TabIcon from 'app/components/TabIcon';
import AppStyles from 'app/config/styles';
import DefaultHome from 'app/screens/DefaultHome';
import DefaultHome1 from 'app/screens/DefaultHome1';
import DefaultHome2 from 'app/screens/DefaultHome2';
import DefaultHome3 from 'app/screens/DefaultHome3';
import Terms from 'app/screens/Terms';
import ScanQR from 'app/screens/ScanQR';
import InvalidQR from 'app/screens/InvalidQR';
import RestaurantOffers from 'app/screens/RestaurantOffers';
import WelcomeRestaurant from 'app/screens/WelcomeRestaurant';
import FoodWiseRestaurant from 'app/screens/FoodWiseRestaurant';
import PropTypes from 'prop-types';

const HomeTabIcon = ({ tintColor }) => (
    <TabIcon name="home" tintColor={tintColor} />
);

HomeTabIcon.propTypes = {
    tintColor: PropTypes.number
};

const OrdersTabIcon = ({ tintColor }) => (
    <TabIcon name="search" tintColor={tintColor} />
);

OrdersTabIcon.propTypes = {
    tintColor: PropTypes.number
};

const ExploreTabIcon = ({ tintColor }) => (
    <TabIcon name="shopping-cart" tintColor={tintColor} />
);

ExploreTabIcon.propTypes = {
    tintColor: PropTypes.number
};

const ProfileTabIcon = ({ tintColor }) => (
    <TabIcon name="people" tintColor={tintColor} />
);

ProfileTabIcon.propTypes = {
    tintColor: PropTypes.number
};
 

const HomeStack = createStackNavigator({
  Home: { screen: Home ,navigationOptions: { header: null, gesturesEnabled: false }},
  ScanQR: { screen: ScanQR ,navigationOptions: { header: null, gesturesEnabled: false }},
  FoodWiseRestaurant: { screen: FoodWiseRestaurant ,navigationOptions: { header: null, gesturesEnabled: false }},
  Restaurant_Offers: { screen: Restaurant_Offers ,navigationOptions: { header: null, gesturesEnabled: false }},
  RestaurantOffers: { screen: RestaurantOffers ,navigationOptions: { header: null, gesturesEnabled: false }},
  InvalidQR: { screen: InvalidQR ,navigationOptions: { header: null, gesturesEnabled: false }},
  DefaultHome: { screen: DefaultHome ,navigationOptions: { header: null, gesturesEnabled: false }},
  DefaultHome1: { screen: DefaultHome1 ,navigationOptions: { header: null, gesturesEnabled: false }},
  DefaultHome2: { screen: DefaultHome2 ,navigationOptions: { header: null, gesturesEnabled: false }},
  DefaultHome3: { screen: DefaultHome3 ,navigationOptions: { header: null, gesturesEnabled: false }},
  Offers: { screen: Offers ,navigationOptions: {  headerStyle: {
      backgroundColor: 'white',height:44,shadowOpacity: 0,marginTop:20,elevation: 0
    },headerTitle:'Offers',headerTitleStyle: {marginLeft:-5.1,fontFamily:'Nunito-SemiBold',fontSize:13,lineHeight:18,color:'rgb(29,33,38)' },gesturesEnabled: false }},  
  Terms: { screen: Terms ,navigationOptions: { header: null, gesturesEnabled: false }},  
  WelcomeRestaurant: { screen: WelcomeRestaurant ,navigationOptions: { header: null, gesturesEnabled: false }},  
});


const SignedInNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
               headerStyle: {backgroundColor: '#FFFFFF' },
                tabBarIcon: HomeTabIcon
            }
        },
        Orders: {
            screen: Orders,
            navigationOptions: {
                header: null,
                tabBarIcon: ExploreTabIcon, 
            }
        },
        Explore: {
            screen: Explore,
            navigationOptions: {
                header: null,
                tabBarIcon: OrdersTabIcon
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                header: null,
                tabBarIcon: ProfileTabIcon
            }
        }
    },
    {
        labeled: true,
        activeTintColor: AppStyles.color.COLOR_RED,
        inactiveTintColor: AppStyles.color.COLOR_GREY,
        pressColor: 'red',
        barStyle: { backgroundColor: 'white' }
    }
); 0
export default SignedInNavigator;
