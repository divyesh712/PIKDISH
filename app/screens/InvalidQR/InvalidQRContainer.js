import React, { Component } from 'react';
import InvalidQRView from './InvalidQRView';
import { connect } from 'react-redux';

class InvalidQRContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <InvalidQRView {...this.props} />;
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
)(InvalidQRContainer);
