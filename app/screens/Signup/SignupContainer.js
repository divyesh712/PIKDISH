import React, { Component } from 'react';
import SignupView from './SignupView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';

class SignupContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SignupView {...this.props} />;
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
)(SignupContainer);  
