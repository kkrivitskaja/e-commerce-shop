import React, { Component } from 'react';

import './ProductInfo.css';

/**ProductInfo is a component showing product details such as brand and product name, available sizes, price, description
props example
    brand = 'Apollo';
    name = 'Running Short';
    price = 50.00;
    description = "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.";
  */

class ProductInfo extends Component {
    render() {
        return (
            <div className="product-info">
                <div className="product-info__name-wrapper">
                    <span className="product-info__name single-card__name--semibold">
                        {this.props.brand}
                    </span>
                    <span className="product-info__name">{this.props.name}</span>
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
                        {this.props.price.toFixed(2)}
                    </span>
                    
                </div>
                <div className="product-info__description-wrapper">
                    <p className="product-info__description">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default ProductInfo;
