import { Component } from 'react';

import withStorage from '../../helpers/withStorage';
import { costCalculation } from '../../views/cart/cartActions';

class TotalCost extends Component {
    render() {
        const { productsInCart, currentCurrency } = this.props.storageVar;

        return (
            <>
                {currentCurrency.symbol}{' '}
                {costCalculation(productsInCart, currentCurrency).toFixed(2)}
            </>
        );
    }
}

export default withStorage(TotalCost);
