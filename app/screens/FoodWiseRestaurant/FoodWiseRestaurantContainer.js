import React, { Component } from 'react';
import FoodWiseRestaurantView from './FoodWiseRestaurantView';
import { connect } from 'react-redux';

class FoodWiseRestaurantContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <FoodWiseRestaurantView {...this.props} />;
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
)(FoodWiseRestaurantContainer);
