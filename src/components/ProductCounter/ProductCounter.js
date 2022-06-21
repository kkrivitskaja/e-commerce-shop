import { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import classNames from 'classnames';

import { ReactComponent as Minus } from '../../assets/minus-icon.svg';
import { ReactComponent as Plus } from '../../assets/plus-icon.svg';
import { setProductAmount } from '../../views/cart/cartActions';

import styles from './ProductCounter.module.scss';

class ProductCounter extends Component {
    render() {
        const { product, overlay } = this.props;

        return (
            <>
                <div className={styles['quantity']}>
                    <button
                        className={classNames(styles['quantity-btn'], {
                            [styles['quantity-btn--overlay']]: overlay,
                        })}
                        onClick={() => {
                            setProductAmount(product, product.amount + 1);
                        }}
                    >
                        <Plus width={15} height={15} />
                    </button>
                    <div
                        className={classNames(styles['quantity-number'], {
                            [styles['quantity-number--overlay']]: overlay,
                        })}
                    >
                        {product.amount}
                    </div>
                    <button
                        className={classNames(styles['quantity-btn'], {
                            [styles['quantity-btn--overlay']]: overlay,
                        })}
                        onClick={() => {
                            setProductAmount(product, product.amount - 1);
                        }}
                    >
                        <Minus width={15} height={15} />
                    </button>
                </div>
            </>
        );
    }
}

ProductCounter.propTypes = {
    product: PropTypes.shape({
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
    }),
    overlay: PropTypes.bool,
};

export default ProductCounter;
