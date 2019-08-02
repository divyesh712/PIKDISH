import React, { Component } from 'react';
import ForgotView from './ForgotView';
import { connect } from 'react-redux';

class ForgotContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ForgotView {...this.props} />;
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
)(ForgotContainer);
