import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import BaseButton from '../BaseButton/BaseButton';
import ProductAttributes from '../ProductAttributes/ProductAttributes';
import './ProductInfo.css';

/** ProductInfo is a component showing product details such as brand and product name, available sizes, price, description
 */

class ProductInfo extends Component {
    state = {
        selectedAttribute: new Map(),
    };

    setSelectedAttribute = (selectedAttribute) => {
        this.setState((prevState) => {
            const newSelectedAttribute = new Map(prevState.selectedAttribute);
            newSelectedAttribute.set(selectedAttribute.id, selectedAttribute);
            return { ...prevState, selectedAttribute: newSelectedAttribute };
        });
    };
    render() {
        const {
            name,
            inStock = true,
            description,
            brand,
            prices,
            attributes,
        } = this.props.data.data.product;
        return (
            <div className="product-info">
                <div className="product-info__name-wrapper">
                    <span className="product-info__name single-card__name--semibold">{brand}</span>
                    <span className="product-info__name">{name}</span>
                </div>
                {attributes?.map((attribute) => (
                    <ProductAttributes
                        key={attribute.id}
                        attribute={attribute}
                        selectedAttribute={this.state.selectedAttribute?.get(attribute.id)}
                        setSelectedAttribute={this.setSelectedAttribute}
                    />
                ))}
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

ProductInfo.propTypes = {
    name: PropTypes.string,
    inStock: PropTypes.bool,
    description: PropTypes.string,
    category: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
};

export default ProductInfo;
