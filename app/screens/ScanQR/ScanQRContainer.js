import React, { Component } from 'react';
import ScanQRView from './ScanQRView';
import { connect } from 'react-redux';

class ScanQRContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ScanQRView {...this.props} />;
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
)(ScanQRContainer);
