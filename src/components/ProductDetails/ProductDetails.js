import React, { Component } from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import BaseButton from '../BaseButton/BaseButton';
import ProductAttributes from '../ProductAttributes/ProductAttributes';

import styles from './ProductDetails.module.scss';

/**ProductDetails is a component showing product details such as brand and product name, available attributes, price, description
 */

class ProductDetails extends Component {
    render() {
        const { name, inStock, description, brand, prices, attributes } = this.props;
        return (
            <div className="product-info">
                <div className="product-info__name-wrapper">
                    <span className="product-info__name single-card__name--semibold">{brand}</span>
                    <span className="product-info__name">{name}</span>
                </div>
                <ProductAttributes attributes={attributes} />
                <div className="product-info__purchase">
                    <span className="product-info__price">PRICE:</span>
                    <span className="product-info__price single-card__price--value">
                        {prices[0].currency.symbol}
                        {prices[0].amount}
                    </span>
                </div>
                <BaseButton disabled={!inStock}>
                    {inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                </BaseButton>
                <div
                    className="product-info__description"
                    /**used a sanitizer DOMPurify.sanitize() to prevent XSS*/
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
                />
            </div>
        );
    }
}

ProductDetails.propTypes = {
    name: PropTypes.string,
    inStock: PropTypes.bool,
    description: PropTypes.string,
    brand: PropTypes.string,
    prices: PropTypes.array,
    attributes: PropTypes.array,
};

export default ProductDetails;
