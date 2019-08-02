import React, { Component } from 'react';
import TermsView from './TermsView';
import { connect } from 'react-redux';

class TermsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <TermsView {...this.props} />;
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
)(TermsContainer);
