import { makeVar } from '@apollo/client';

import { getLocalStorageCurrency } from './Storage';

const initialState = {
    currentCurrency: getLocalStorageCurrency||
        {
            label: 'USD',
            symbol: '$',
        },
};

const storage = makeVar(initialState);
export default storage;
