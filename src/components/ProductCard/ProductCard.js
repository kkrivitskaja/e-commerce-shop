import React, { Component } from 'react';
import PropTypes from 'prop-types';


/** ProductInfo is a component on the PLP showing product details such as photo, brand and product name, price*/
class ProductCard extends Component {
    render() {
       const { name, inStock, brand, prices, id, gallery } = this.props;
        return (
            <>
                <div className="card">
                    <div className="card-image-wrapper">
                        <img src={gallery[0]} alt="" className="card-image" />
                        {!inStock && <div>OUT OF STOCK</div>}
                    </div>
                    <div className="card-info">
                        <div className="card-info__name">
                            {name}
                            {brand}
                        </div>
                        <div className="card-info__price">
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
    id: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.string),
};

export default ProductCard;
