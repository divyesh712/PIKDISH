import React, { Component } from 'react';
import Restaurant_OffersView from './Restaurant_OffersView';
import { connect } from 'react-redux';

class Restaurant_OffersContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Restaurant_OffersView {...this.props} />;
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
)(Restaurant_OffersContainer);
