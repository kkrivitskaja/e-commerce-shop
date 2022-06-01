import { Component } from 'react';
import PropTypes from 'prop-types';

import withStorage from '../../helpers/withStorage';

import styles from './PriceView.module.scss';

class PriceView extends Component {
    getProductCost = (prices, currency) => {
        const productCost = prices.find((price) => price.currency.label === currency.label);
        if (productCost === undefined) {
            throw Error(
                `Sorry, no price available for ${currency.label} currency. Please select other.`
            );
        }
        return `${productCost.currency.symbol} ${productCost.amount}`;
    };

    render() {
        const { prices } = this.props;
        const { currentCurrency } = this.props.storageVar;

        return (
            <>
                <div className={`${styles['product-price']} ${styles['product-price--value']}`}>
                    {this.getProductCost(prices, currentCurrency)}
                </div>
            </>
        );
    }
}

PriceView.propTypes = {
    prices: PropTypes.arrayOf(
        PropTypes.shape({
            currency: PropTypes.shape({
                label: PropTypes.string,
                symbol: PropTypes.string,
            }),
            amount: PropTypes.number,
        })
    ),
    currency: PropTypes.shape({
        label: PropTypes.string,
        symbol: PropTypes.string,
    }),
};

export default withStorage(PriceView);
