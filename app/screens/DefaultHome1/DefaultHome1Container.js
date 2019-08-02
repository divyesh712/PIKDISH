import React, { Component } from 'react';
import DefaultHome1View from './DefaultHome1View';
import { connect } from 'react-redux';

class DefaultHome1Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <DefaultHome1View {...this.props} />;
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
)(DefaultHome1Container);
