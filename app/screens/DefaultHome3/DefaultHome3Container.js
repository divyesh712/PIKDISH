import React, { Component } from 'react';
import DefaultHome3View from './DefaultHome3View';
import { connect } from 'react-redux';

class DefaultHome3Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <DefaultHome3View {...this.props} />;
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
)(DefaultHome3Container);
