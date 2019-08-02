import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, Image ,TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';
import { Button ,Alert,TouchableHighlight} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { Content, Item, Input } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

class VerificationView extends Component {
    constructor(props) {
        super(props);
    } 
    onHomePage = () => {
        this.props.navigation.navigate('Home') 
    };
        otpTextInput = [];

    componentDidMount() {
        this.otpTextInput[0]._root.focus();
    }

    renderInputs() {
        const inputs = Array(6).fill(0);
        const txt = inputs.map(
            (i, j) => <Col key={j} style={styles.txtMargin}><Item regular>
                <Input
                    style={[styles.inputRadius, { borderRadius: 10 ,borderColor:'rgb(221,221,221)',}]}
                    keyboardType="numeric"
                    onChangeText={v => this.focusNext(j, v)}
                    onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
                    ref={ref => this.otpTextInput[j] = ref}
                />
            </Item></Col>
        );
        return txt;
    }

    focusPrevious(key, index) {
        if (key === 'Backspace' && index !== 0)
            this.otpTextInput[index - 1]._root.focus();
    }

    focusNext(index, value) {
        if (index < this.otpTextInput.length - 1 && value)
            this.otpTextInput[index + 1]._root.focus();
    }

    render() {
        return (
            <Content padder>
            <Text style={styles.paragraph}>
         Verification,
         </Text>
         <Text style={styles.paragraph1}>
         Enter the 6 Digit code sent to you at mobile no 
[Mobile no]
         </Text>
                <Grid style={styles.gridPad}>
                    {this.renderInputs()}
                </Grid>
                <Text style={styles.paragraph2}>
         Re-send OTP
         </Text>
                <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onHomePage} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </View>
        </TouchableOpacity>
        </View>
            </Content>
        );
    }
}
 
export default VerificationView;
