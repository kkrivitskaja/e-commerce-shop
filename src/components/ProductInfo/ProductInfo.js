import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import BaseButton from '../BaseButton/BaseButton';
import './ProductInfo.css';

/** ProductInfo is a component showing product details such as brand and product name, available sizes, price, description
props example
name="Nike Air Huarache Le",
inStock=true,
description= "<p>Great sneakers for everyday use!</p>",
category= "clothes",
"attributes": [
        {
        "name": "Size",
        "id": "Size",
        "type": "text",
        "items": [
            {
            "displayValue": "40",
            "value": "40",
            "id": "40"
            },
            {
            "displayValue": "41",
            "value": "41",
            "id": "41"
            },
            {
            "displayValue": "42",
            "value": "42",
            "id": "42"
            },
            {
            "displayValue": "43",
            "value": "43",
            "id": "43"
            }
        ]
        }
    ],
    brand= 'Nike x Stuss',
    
    "prices": [
        {
        "currency": {
            "label": "USD",
            "symbol": "$"
        },
        "amount": 144.69
        },
        {
        "currency": {
            "label": "GBP",
            "symbol": "£"
        },
        "amount": 104
        },
        {
        "currency": {
            "label": "AUD",
            "symbol": "A$"
        },
        "amount": 186.65
        },
        {
        "currency": {
            "label": "JPY",
            "symbol": "¥"
        },
        "amount": 15625.24
        },
        {
        "currency": {
            "label": "RUB",
            "symbol": "₽"
        },
        "amount": 10941.76
        }
    ]
    */

class ProductInfo extends Component {
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

ProductInfo.propTypes = {
    name: PropTypes.string,
    inStock: PropTypes.bool,
    description: PropTypes.string,
    category: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
};

export default ProductInfo;
