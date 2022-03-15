import ContentWrapper from 'SourceComponent/ContentWrapper';
import {
    CartOverlay,
    Header as SourceHeader,
    MyAccountOverlay
} from 'SourceComponent/Header/Header.component';

import './Header.override.style';

export {
    CartOverlay,
    MyAccountOverlay
};

/** @namespace FrontendApp/Component/Header/Component */
export class HeaderComponent extends SourceHeader {
    // static propTypes = {
    //     welcome: PropTypes.string
    // };

    // static defaultProps = {
    //     welcome: ''
    // };

    renderTopMenu() {
        const { welcome } = this.props;
        return (
            <ContentWrapper
              mix={ { block: 'Header', elem: 'TopMenuContentWrapper' } }
              wrapperMix={ { block: 'Header', elem: 'TopMenuContent' } }
              label=""
            >
                <span block="Header" elem="TopMenu">
                    { welcome }
                </span>
            </ContentWrapper>
        );
    }
}

export default HeaderComponent;
