import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import SplashScreen from 'react-native-splash-screen';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        const { navigation, isLoggedIn } = props;
        if (isLoggedIn) {
            navigation.navigate('Home');
        } 
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);  
