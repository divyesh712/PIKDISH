import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, Image ,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';
import { BackHandler, FlatList } from 'react-native';
import { Button ,Alert,TouchableHighlight} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from 'app/components/Toolbar';
import { SliderBox } from 'react-native-image-slider-box';
import { FlatGrid } from 'react-native-super-grid';
import _ from 'lodash';

class DefaultHomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
images: [
'https://source.unsplash.com/1024x768/?nature',
'https://source.unsplash.com/1024x768/?water',
'https://source.unsplash.com/1024x768/?girl',
'https://source.unsplash.com/1024x768/?tree'
]
};
    } 
    onRegisterPage = () => {
        this.props.navigation.navigate('DefaultHome1')
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
<SliderBox
images={this.state.images}
sliderBoxHeight={227.7}
onCurrentImagePressed={index =>
console.warn(`image ${index} pressed`)
}
dotColor="#FFEE58"
inactiveDotColor="#90A4AE"
paginationBoxVerticalPadding={20}
circleLoop

/>
<Image
          style={styles.logo}
          source={require('../assets/event.png')}
        />
        <Text style={styles.paragraph}>
         Explore  
         </Text>
         <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onRegisterPage} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>

        );
    }
} 

export default DefaultHomeView;
