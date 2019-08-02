import React, { Component } from 'react';
import DefaultHome2View from './DefaultHome2View';
import { connect } from 'react-redux';

class DefaultHome2Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <DefaultHome2View {...this.props} />;
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
)(DefaultHome2Container);
