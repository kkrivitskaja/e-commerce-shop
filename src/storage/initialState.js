import { makeVar } from '@apollo/client';

import { getLocalStorageCurrency } from './storageActions';
import { getLocalStorageCart } from './storageActions';

const initialState = {
    currentCurrency: getLocalStorageCurrency || {
        label: 'USD',
        symbol: '$',
    },
    productsInCart: getLocalStorageCart || [],
};

const storage = makeVar(initialState);
export default storage;
