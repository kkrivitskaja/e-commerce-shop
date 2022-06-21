import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import PriceView from '../PriceView/PriceView';
import { ReactComponent as BuyButton } from '../../assets/buy-icon.svg';
import { addProductWithoutAttToCart } from '../../views/cart/cartActions';

import styles from './ProductCard.module.scss';

class ProductCard extends Component {
    render() {
        const { navigate, product, url } = this.props;

        return (
            <>
                <div
                    className={classnames(styles['card'], {
                        [styles['card--disabled']]: !product.inStock,
                    })}
                    onClick={navigate}
                >
                    <div className={styles['card-image-wrapper']}>
                        <img
                            src={product.gallery[0]}
                            alt={product.name}
                            className={styles['card-image']}
                        />
                        {!product.inStock && (
                            <div className={styles['card-image__stock']}>out of stock</div>
                        )}
                    </div>
                    <div className={styles['card-info']}>
                        <BuyButton
                            onClick={(event) => {
                                event.stopPropagation();
                                addProductWithoutAttToCart(product, url);
                            }}
                            className={classnames(styles['card-info__buy'], {
                                [styles['card-info__buy--active']]: product.inStock,
                            })}
                        />
                        <div className={styles['card-info__name']}>
                            {product.brand} {product.name}
                        </div>
                        <div>
                            <PriceView prices={product.prices} plp />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

ProductCard.propTypes = {
    navigate: PropTypes.func,
    url: PropTypes.string,
    product: PropTypes.shape({
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
    }),
};

export default ProductCard;
