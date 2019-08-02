import React, { Component } from 'react';
import VerificationView from './VerificationView';
import { connect } from 'react-redux';

class VerificationContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <VerificationView {...this.props} />;
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
)(VerificationContainer);
