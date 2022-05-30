import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './PriceView.module.scss';

class PriceView extends Component {
    state = {
        currentCurrency: null,
    };
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
        const { prices, currency } = this.props;
        console.log(this.state.currentCurrency);
        return (
            <>
                <div
                    className={`${styles['product-info__price']} ${styles['product-info__price--value']}`}
                >
                    {this.getProductCost(prices, currency)}
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

export default PriceView;
