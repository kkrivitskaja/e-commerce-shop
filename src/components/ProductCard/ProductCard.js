import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ReactComponent as BuyButton } from '../../assets/buy-icon.svg';

import styles from './ProductCard.module.scss';

/** ProductInfo is a component on the PLP showing product details such as photo, brand and product name, price*/
class ProductCard extends Component {
    render() {
        const { name, inStock, brand, prices, gallery } = this.props.product;
        return (
            <>
                <div
                    className={classnames(styles['card'], {
                        [styles['card--disabled']]: !inStock,
                    })}
                    onClick={this.props.onClick}
                >
                    <div className={styles['card-image-wrapper']}>
                        <img src={gallery[0]} alt={name} className={styles['card-image']} />
                        {!inStock && (
                            <div className={styles['card-image__stock']}>out of stock</div>
                        )}
                    </div>
                    <div className={styles['card-info']}>
                        <BuyButton
                            className={classnames(styles['card-info__buy'], {
                                [styles['card-info__buy--active']]: inStock,
                            })}
                        />
                        <div className={styles['card-info__name']}>
                            {brand} {name}
                        </div>
                        <div className={styles['card-info__price']}>
                            {prices[0].currency.symbol}
                            {prices[0].amount}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

ProductCard.propTypes = {
    name: PropTypes.string,
    inStock: PropTypes.bool,
    brand: PropTypes.string,
    prices: PropTypes.arrayOf(PropTypes.object),
    gallery: PropTypes.arrayOf(PropTypes.string),
};

export default ProductCard;
