import React, { Component } from 'react';
import WelcomeRestaurantView from './WelcomeRestaurantView';
import { connect } from 'react-redux';

class WelcomeRestaurantContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <WelcomeRestaurantView {...this.props} />;
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
)(WelcomeRestaurantContainer);
