/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
    DEFAULT_HEADER_STATE,
    HeaderContainer as SourceHeaderContainer,
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps
} from 'SourceComponent/Header/Header.container';

import Header from './Header.component';

export {
    DEFAULT_HEADER_STATE
};

/** @namespace FrontendApp/Component/Header/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state),
    welcome: state.ConfigReducer.welcome
});

/** @namespace FrontendApp/Component/Header/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    ...sourceMapDispatchToProps(dispatch)
    // TODO extend mapDispatchToProps
});

/** @namespace FrontendApp/Component/Header/Container */
export class HeaderContainer extends SourceHeaderContainer {
    // TODO implement logic
    render() {
        return (
            <Header
              { ...this.props }
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
