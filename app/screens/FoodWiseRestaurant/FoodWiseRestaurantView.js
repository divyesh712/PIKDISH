import React, { Component } from 'react';
import { Text,Modal, Dimensions,SafeAreaView ,View, StyleSheet,TextInput, Image ,ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
 import { BackHandler, FlatList } from 'react-native';
import { Button ,Alert,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from 'app/components/Toolbar'; 
import Carousel from 'react-native-snap-carousel';
import { Icon ,Card} from 'react-native-elements' ; 
import Switch from 'react-native-switch-pro'
 import {CardView,  CardTitle} from 'react-native-cardview';
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const heightes = screenHeight/2;
class FoodWiseRestaurantView extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          dataSource : [
          {image:'https://source.unsplash.com/1024x768/?nature'},
          {image:'https://source.unsplash.com/1024x768/?water'},
          {image:'https://source.unsplash.com/1024x768/?girl'},
          {image:'https://source.unsplash.com/1024x768/?tree'},
          ]}
} 
    renderItem = ({item, index}) => { 
        return (
            <View style={{flex:1,}}> 
            <Image style={{width:245,height:183.3,borderRadius:10,}}
                source={require('../assets/jio_food_court.png')}
                /> 
        </View>
        )
    };
    onRestaurantOfferPage = () => {
        this.props.navigation.navigate('Restaurant_Offers')
        // this.props.navigation.navigate('Bank')
    };
changeScrollValue(value) {
    this.scrollView.setNativeProps({ scrollEnabled: value });
    // this.setState({ isScroll : value});
  }



    render() {  
      return (
            <SafeAreaView style={styles.safeAreaView}>
            <View style={{ height:50,marginBottom:5,alignItems:'center',justifyContent:'center'}}>
            <View>
            <Text style={styles.paragraph4}>Jio Food Court</Text>  
        </View>
         <View style={{flexDirection:"row",}}>
                        <Image style={{width:8,height:8,alignSelf:'center',marginRight:5,}} source={require('../assets/star.png')}/>
                        <Text style={styles.smallText}>4.4</Text>
                        <Text style={styles.arrowText}>|</Text>
                        <Text style={styles.smallText}>12 Outlets</Text>
                         </View>
        </View>
        <View style={styles.container}> 
        <ScrollView
        ref={c => {
          this.scrollView = c;
        }}
        style={{ flex: 1, backgroundColor: 'rgb(245,245,247)' }}
      >
          <View style={{height:184,marginTop:30.9,flex:1,marginLeft:-25}}>
          <Carousel 
                data={this.state.dataSource}
                renderItem={this.renderItem}
                sliderWidth={screenWidth}
                 itemWidth={246}
                ref={ref => this.carousel = ref}
            />
          </View>
          <View style={{marginTop:14.8,flex:1,flexDirection:'row', marginLeft:28}}>
           <View style={{flex:1.4,height:20,flexDirection:'row'}}>
           <Text style={styles.paragraph}>VEG :</Text>
           <Switch 
          backgroundActive='#E03C34'
          />
          </View>
          <View style={{flex:0.6,height:20,flexDirection:'row',}}>
          <Image style={{width:10,height:10,alignSelf:'center',marginRight:9.5,}}
                source={require('../assets/settings.png')}
                /> 
                <Text style={styles.paragraph1}>SORT | FILTER</Text>
          </View>
          </View>
          <View style={[styles.container, {marginTop: 13,marginBottom:10 }]}>
          <FlatList
              data={[
                {key: 'Hotel Tulsi'},
                {key: 'Bismillah-Station'},
                {key: 'Laxmi Restaurant'},
                {key: 'Jodhpur Dabbawala'},
                {key: 'Hotel Laxmi'},
                {key: 'Jodhpur Restaurant'}, 
              ]}
          renderItem={({item}) =>
           <Card containerStyle={{borderRadius: 6,elevation:0,marginTop:20,}}>    
       <View style={{flexDirection:"row", }}> 
      
                <View style={{flex:0.4,width:54,height:54,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../assets/jd-icon-app-storelisting.png')}/>
                    </View>
                    <View style={{flex:1.1,height:54 }}>
                        <View style={{flexDirection:"row",flex:1, }}>
                        <View style={{ height:9.28,marginLeft:10.5, width:9.28,borderWidth:1,borderColor:'#2B7D21',marginRight:7.2,alignSelf:'center' }}>
                        <Image style={{width:6.7,height:6.7,alignSelf:'center',}} source={require('../assets/veg.png')}/> 
                        </View>
                        <View >
                        <TouchableWithoutFeedback onPress={this.showDetails}>
                        <Text style={styles.boldText}>{item.key}</Text>
                        </TouchableWithoutFeedback>
                        </View> 
                        </View>
                        <View style={{flexDirection:"row",marginLeft:27,}}>
                        <Text style={styles.normalText}>Mexican, Italian...</Text>
                        </View>
                        <View style={{flexDirection:"row",marginLeft:27,}}>
                        <Image style={{width:8,height:8,alignSelf:'center',marginRight:5,}} source={require('../assets/star.png')}/>
                        <Text style={styles.smallText}>4.4</Text>
                        <Image style={{width:2,height:2,alignSelf:'center',marginLeft:3,marginRight:3}} source={require('../assets/star.png')}/>
                        <Text style={styles.smallText}>30 mins</Text> 
                        </View>
                    </View>  
                    
                    <View style={{flex:0.5, height:54,alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                       <View style={{flexDirection:"row",}}>
                        <Image style={{width:13,height:13,alignSelf:'center',marginRight:6,}} source={require('../assets/discount.png')}/>
                        <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
                        <Text style={styles.percentoffText}>24% off</Text>
                        </TouchableOpacity> 
                        </View>
                        <View style={styles.shadowbox}>
                        <Image style={{width:11,height:11,marginTop:2}} source={require('../assets/like.png')}/>
                         
                        </View>
                    </View> 
                    
              </View> 
              </Card>
               }
        /> 
        </View>
         </ScrollView>
        </View>

        </SafeAreaView>
        );
    }
} 
FoodWiseRestaurantView.propTypes = {
    onLogin: PropTypes.func,
    isLoading: PropTypes.bool
};

export default FoodWiseRestaurantView;
