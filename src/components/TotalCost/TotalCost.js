import { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import classnames from 'classnames';

import withStorage from '../../helpers/withStorage';
import { getTaxAmount, getTotalWithTax, getItemsTotalQuantity } from '../../views/cart/cartActions';

import styles from './TotalCost.module.scss';

class TotalCost extends Component {
    render() {
        const { productsInCart, currentCurrency } = this.props.storageVar;
        const { taxRate, overlay } = this.props;

        return (
            <>
                <div className={styles['total']}>
                    {!overlay && (
                        <>
                            <div className={styles['total-info-wrapper']}>
                                <div className={styles['total-info']}>Tax {taxRate}%: </div>
                                {currentCurrency.symbol}
                                {getTaxAmount(productsInCart, currentCurrency, taxRate)}
                            </div>
                            <div className={styles['total-info-wrapper']}>
                                <div className={styles['total-info']}>Quantity: </div>
                                {getItemsTotalQuantity(productsInCart)}
                            </div>
                        </>
                    )}

                    <div
                        className={classnames(styles['total-info-wrapper'], {
                            [styles['total-info-wrapper--overlay']]: overlay,
                        })}
                    >
                        <div
                            className={classnames(styles['total-info'], {
                                [styles['total-info--overlay']]: overlay,
                            })}
                        >
                            Total:
                        </div>
                        {currentCurrency.symbol}
                        {getTotalWithTax(productsInCart, currentCurrency, taxRate)}
                    </div>
                </div>
            </>
        );
    }
}

TotalCost.propTypes = {
    taxRate: PropTypes.number,
    productsInCart: PropTypes.arrayOf(
        PropTypes.shape({
            amount: PropTypes.number,

            attributes: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    items: PropTypes.arrayOf(
                        PropTypes.shape({
                            displayValue: PropTypes.string,
                            value: PropTypes.string,
                            id: PropTypes.string,
                        })
                    ),
                    name: PropTypes.string,
                    type: PropTypes.string,
                })
            ),
            brand: PropTypes.string,
            gallery: PropTypes.arrayOf(PropTypes.string),
            id: PropTypes.string,
            inStock: PropTypes.bool,
            name: PropTypes.string,
            prices: PropTypes.arrayOf(
                PropTypes.shape({
                    currency: PropTypes.shape({
                        label: PropTypes.string,
                        symbol: PropTypes.string,
                    }),
                    amount: PropTypes.number,
                })
            ),
            productId: PropTypes.string,
            productUrl: PropTypes.string,
            selectedAttribute: instanceOf(Map),
        })
    ),
    currentCurrency: PropTypes.shape({
        label: PropTypes.string,
        symbol: PropTypes.string,
    }),
};

export default withStorage(TotalCost);
