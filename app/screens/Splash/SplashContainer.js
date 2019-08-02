import React, { Component } from 'react';
import SplashView from './SplashView';
import { connect } from 'react-redux';

class SplashContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SplashView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashContainer);
