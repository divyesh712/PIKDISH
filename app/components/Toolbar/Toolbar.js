import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Appbar } from 'react-native-paper';
import PropTypes from 'prop-types';
import CustomStatusBar from '../CustomStatusBar';
import AppStyles from 'app/config/styles';
import styles from './styles';
import { createStackNavigator, createAppContainer,TabNavigator } from 'react-navigation';
import Home from 'app/screens/Home';
import DefaultHome from 'app/screens/DefaultHome';
const MORE_ICON = Platform.OS === 'ios' ? 'more-horiz' : 'more-vert';




export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
onRegisterPage = () => {
        this.props.navigation.navigate('Offers')
        // this.props.navigation.navigate('Bank')
    };
    render() {
        const { title } = this.props;
        return (
            <View>
                <CustomStatusBar
                    backgroundColor={AppStyles.color.COLOR_WHITE}
                />
                <Appbar.Header>
                    <Appbar.Action
                        color={AppStyles.color.COLOR_BLACK}
                        icon="menu"
                        onPress={() => {this.props.navigation.navigate('Offers')}}
                    />
                    <Appbar.Content title={title} titleStyle={styles.title} />
                     
                        <Appbar.Action 
                            icon={require('../assets/images/icons/discount.png')}
                            onPress={this.onRegisterPage}   
                        /> 
                </Appbar.Header>
            </View>
        );
    }
}

Toolbar.propTypes = {
    title: PropTypes.string
};
