/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { ConfigQuery as SourceConfigQuery } from 'SourceQuery/Config.query';

/** @namespace FrontendApp/Query/Config/Query */
export class ConfigQuery extends SourceConfigQuery {
    _getStoreConfigFields() {
        return [
            'welcome',
            ...super._getStoreConfigFields()
        ];
    }
}

export default new ConfigQuery();
