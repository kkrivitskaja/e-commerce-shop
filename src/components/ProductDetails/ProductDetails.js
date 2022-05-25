import React, { Component } from 'react';

/**ProductDetails is a component showing product details such as brand and product name, available attributes, price, description
  */

class ProductDetails extends Component {
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
                </div>
                <div className="product-info__purchase">
                    <span className="product-info__price">PRICE:</span>
                    <span className="product-info__price single-card__price--value">
                        {this.props.price}
                    </span>
                </div>
                <div className="product-info__description-wrapper">
                    <p className="product-info__description">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
