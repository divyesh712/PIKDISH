import React, { Component } from 'react';
import OffersView from './OffersView';
import { connect } from 'react-redux';

class OffersContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <OffersView {...this.props} />;
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
)(OffersContainer);
