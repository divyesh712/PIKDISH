import { createStackNavigator, createAppContainer,withNavigation ,NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet,TextInput, Image ,TouchableOpacity,StatusBar } from 'react-native';
import Login from 'app/screens/Login';
import Home from 'app/screens/Home'; 
import PropTypes from 'prop-types';
import Forgot from 'app/screens/Forgot'; 
import Splash from 'app/screens/Splash';
import Signup from 'app/screens/Signup';
import RestaurantOffers from 'app/screens/RestaurantOffers';
import FoodWiseRestaurant from 'app/screens/FoodWiseRestaurant';
import CustomStatusBar from 'app/components/CustomStatusBar';
import React, { Component } from 'react'; 
import Verification from 'app/screens/Verification';
import SignedIn from './SignedIn';
import DefaultHome from 'app/screens/DefaultHome'; 
import AppStyles from 'app/config/styles';
import SearchHeader from 'react-native-search-header';

class LeftSide extends Component { 
  render() { 
    return ( 
      <View style={{flexDirection: 'row'}}> 
        <Text style={{marginLeft:15,marginTop:15,marginBottom:11,fontSize: 13,lineHeight: 18,color: 'rgb(29,33,38)',fontFamily: 'Nunito-SemiBold',}}>Location </Text>
        <Image
          source={require('../assets/images/icons/drop-down.png')}
          style={{ width: 9.5, height: 5.5, marginLeft: 2.4,marginTop:22.3}}
        /> 
      </View> 
    ); 
  }
}

class RightSide extends Component { 
    constructor(props) {
        super(props); 
    }  

    onOffersPage = () => {
        const navigateAction = NavigationActions.navigate({ routeName: 'RestaurantOffers' });
        this.props.navigation.dispatch(navigateAction); 
    };
  render() { 
    return ( 
    <TouchableOpacity onPress={this.onOffersPage} underlayColor="white">
      <View style={{flexDirection: 'row'}}> 
      <CustomStatusBar
                    backgroundColor={AppStyles.color.COLOR_WHITE}
                />
        <Image
          source={require('../assets/images/icons/discount.png')}
          style={{ width: 15, height: 15, marginTop: 15}}
        /> 
        <Text style={{marginRight:15,marginLeft:5,marginTop:15,marginBottom:11,fontSize: 13,lineHeight: 18,color: 'rgb(29,33,38)',fontFamily: 'Nunito-SemiBold', }}>Offer</Text>
      </View> 
      </TouchableOpacity>

    ); 
  }
}

class FoodRightSide extends Component { 
    constructor(props) {
        super(props); 
    }   
  render() { 
    return ( 
    
      <View style={{flexDirection: 'row'}}> 
      <CustomStatusBar
                    backgroundColor={AppStyles.color.COLOR_WHITE}
                />
                <SearchHeader
                    ref = {(searchHeader) => {
                        this.searchHeader = searchHeader;
                    }}
                    placeholder = 'Search...'
                    placeholderColor = 'gray'
                    pinnedSuggestions = {[ `react-native-search-header`, `react-native`, `javascript` ]}
                    onClear = {() => {
                        console.log(`Clearing input!`);
                    }}
                    onGetAutocompletions = {async (text) => {
                        if (text) {
                            const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                method: `get`
                            });
                            const data = await response.json();
                            return data[1];
                        } else {
                            return [];
                        }
                    }}
                >
                </SearchHeader>
                <TouchableOpacity onPress={() => this.searchHeader.show()} underlayColor="white">
        <Image
          source={require('../assets/images/icons/Group431.png')}
          style={{ width: 15, height: 15, marginTop: 13.9,marginRight:22.5}}
        /> 
         </TouchableOpacity>
       <Image
          source={require('../assets/images/icons/Icon_Search.png')}
          style={{ width: 15, height: 15, marginTop: 13.9,marginRight:27.5,}}
        /> 
      </View> 
     
      
    ); 
  }
}
const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null, gesturesEnabled: false }
        }, 
        SignedIn: {
        screen: SignedIn,
        navigationOptions: { headerLeft : <LeftSide />,headerRight : <RightSide />,headerStyle: {shadowOpacity: 0,height:44,elevation: 0,backgroundColor: 'rgb(255,255,255)',marginTop:StatusBar.currentHeight,}, gesturesEnabled: false }
    },
        Home: {
            screen: Home,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
         Forgot: {
            screen: Forgot,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Splash: {
            screen: Splash,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        DefaultHome: {
            screen: DefaultHome,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        FoodWiseRestaurant: {
         screen: FoodWiseRestaurant ,
         navigationOptions: { headerRight: <FoodRightSide/>,headerStyle: {shadowOpacity: 0,height:44,elevation: 0,backgroundColor: 'rgb(255,255,255)',marginTop:StatusBar.currentHeight,}, gesturesEnabled: false }
        },
        Verification: {
            screen: Verification,
            navigationOptions: { headerStyle: {
      backgroundColor: '#ffffff',shadowOpacity: 0,elevation: 0
    }, gesturesEnabled: false }
        },
        Signup: {
            screen: Signup,
            navigationOptions: {  headerTitle: 'Sign Up',headerTitleStyle: {
      fontWeight: 'bold',fontSize: 30,fontFamily: 'Nunito-Regular',}, gesturesEnabled: false ,
      headerStyle: {
      backgroundColor: '#ffffff',shadowOpacity: 0,elevation: 0,marginTop:19,
    },}
        },
    },
    {
        initialRouteName: 'Splash'
    }
);

export default createAppContainer(RNApp);
