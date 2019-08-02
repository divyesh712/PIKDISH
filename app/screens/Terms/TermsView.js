import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, Image ,ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
 import { BackHandler, FlatList } from 'react-native';
import { Button ,Alert,TouchableHighlight} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toolbar from 'app/components/Toolbar'; 
import { Icon } from 'react-native-elements' ;

class TermsView extends Component {
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
            <View style={styles.container}>  
              <View style={styles.buttonContainer}>
              <Icon
      reverse
      name='ios-list'
      type='ionicon'
      size={16}
      color='rgb(224,60,52)'
    />
    <Text style={styles.paragraph}>
    Terms & Condition
    </Text>
    </View>
    <ScrollView
        ref={c => {
          this.scrollView = c;
        }}
        style={{ flex: 1, backgroundColor: 'rgb(245,245,247)' }}
      >
    <View style={styles.textBlock1}>
    <View style={ styles.textBlock }>
    <View style={ styles.bullet }>
            <Text style={{ color:'black',}}>{'\u2B24' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
    <Text> 
      <Text style={ styles.boldText }>Introduction</Text> 
    </Text>
     <View style={ styles.textblockcontainer }>
      <Text style={ styles.normalText }>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Website Name accessible at Website.com.</Text>
<Text style={ styles.normalText }>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</Text>
<Text style={ styles.normalText }>Minors or people below 18 years old are not allowed to use this Website.</Text> 
    </View>
    </View>
</View> 
      <View style={ styles.textBlock2 }>
              <View style={ styles.bullet }>
            <Text style={{ color:'black',}}>{'\u2B24' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
    <Text> 
      <Text style={ styles.boldText }>Intellectual Property Rights</Text> 
    </Text>
     <View style={ styles.textblockcontainer }>
      <Text style={ styles.normalText }>Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.</Text>
<Text style={ styles.normalText }>You are granted limited license only for purposes of viewing the material contained on this Website.</Text>
  
    </View>
    </View>
</View> 
 <View style={ styles.textBlock3 }>
              <View style={ styles.bullet }>
            <Text style={{ color:'black',}}>{'\u2B24' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
    <Text> 
      <Text style={ styles.boldText }>Your Content</Text> 
    </Text>
     <View style={ styles.textblockcontainer }>
      <Text style={ styles.normalText }>Your Content must be your own and must not be invading any third-party's rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.</Text>
<Text style={ styles.normalText }>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</Text>
  
    </View>
    </View>
</View>
      </View>
      </ScrollView>
</View>
        );
    }
} 

export default TermsView;
