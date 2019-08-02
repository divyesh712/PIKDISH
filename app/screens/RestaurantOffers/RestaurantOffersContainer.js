import React, { Component } from 'react';
import RestaurantOffersView from './RestaurantOffersView';
import { connect } from 'react-redux';

class RestaurantOffersContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <RestaurantOffersView {...this.props} />;
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
)(RestaurantOffersContainer);
