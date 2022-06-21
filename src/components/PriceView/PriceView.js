import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getProductCost } from '../../views/cart/cartActions';
import withStorage from '../../helpers/withStorage';

import styles from './PriceView.module.scss';

class PriceView extends Component {
    render() {
        const { currentCurrency } = this.props.storageVar;
        const { prices, amount, overlay, plp } = this.props;

        return (
            <>
                <div
                    className={classNames(styles['product-price'], {
                        [styles['product-price--overlay']]: overlay,
                        [styles['product-price--plp']]: plp,
                    })}
                >
                    {getProductCost(prices, currentCurrency, amount)}
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
    currentCurrency: PropTypes.shape({
        label: PropTypes.string,
        symbol: PropTypes.string,
    }),
    amount: PropTypes.number,
    overlay: PropTypes.bool,
    plp: PropTypes.bool,
};

export default withStorage(PriceView);
