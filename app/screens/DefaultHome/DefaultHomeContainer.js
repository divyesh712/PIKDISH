import React, { Component } from 'react';
import DefaultHomeView from './DefaultHomeView';
import { connect } from 'react-redux';

class DefaultHomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <DefaultHomeView {...this.props} />;
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
)(DefaultHomeContainer);
