import ContentWrapper from 'SourceComponent/ContentWrapper';
import {
    Footer as SourceFooter
} from 'SourceComponent/Footer/Footer.component';

/** @namespace FrontendApp/Component/Footer/Component */
export class FooterComponent extends SourceFooter {
    renderCopyrightContent() {
        const { copyright } = this.props;

        return (
            <ContentWrapper
              mix={ { block: 'Footer', elem: 'CopyrightContentWrapper' } }
              wrapperMix={ { block: 'Footer', elem: 'CopyrightContent' } }
              label=""
            >
                <span block="Footer" elem="Copyright">
                    { copyright }
                    { ' Developed By ' }
                    <a href="https://vishensiddharth.github.io/Portfolio/">
                        Siddharth
                    </a>
                </span>
            </ContentWrapper>
        );
    }
}

export default FooterComponent;
