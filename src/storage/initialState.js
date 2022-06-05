import { makeVar } from '@apollo/client';

import { getLocalStorageCurrency } from './storageActions';
import { getLocalStorageCart } from './storageActions';

const initialState = {
    currentCurrency: getLocalStorageCurrency || {
        label: 'USD',
        symbol: '$',
    },
    productsInCart: getLocalStorageCart || [],
    //!initial state false!!
    showModalWindow: true,
};

const storage = makeVar(initialState);
export default storage;
