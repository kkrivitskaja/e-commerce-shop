import React, { Component } from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import styles from "./ProductDetails.module.scss";

import BaseButton from '../BaseButton/BaseButton';

/**ProductDetails is a component showing product details such as brand and product name, available attributes, price, description
 */

class ProductDetails extends Component {
    render() {
        const { name, inStock = true, description, category, brand, price } = this.props;
        return (
            <div className="product-info">
                <div className="product-info__name-wrapper">
                    <span className="product-info__name single-card__name--semibold">{brand}</span>
                    <span className="product-info__name">{name}</span>
                </div>
                <div className="product-info__size-wrapper">
                    <span className="product-info__size">SIZE:</span>
                    <div className="product-info__btn-wrapper">
                        <button className="product-info__btn">XS</button>
                        <button className="product-info__btn">S</button>
                        <button className="product-info__btn">M</button>
                        <button className="product-info__btn">L</button>
                    </div>
                </div>
                <div className="product-info__purchase">
                    <span className="product-info__price">PRICE:</span>
                    <span className="product-info__price single-card__price--value">
                        {price.toFixed(2)}
                    </span>
                </div>
                <BaseButton full disabled={!inStock}>
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
    category: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
};

export default ProductDetails;
