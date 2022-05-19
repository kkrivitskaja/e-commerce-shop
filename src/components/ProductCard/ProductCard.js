import React, { Component } from 'react';
import PropTypes from 'prop-types';


/** ProductInfo is a component on the PLP showing product details such as photo, brand and product name, price*/
class ProductCard extends Component {
    render() {
       const { name, inStock, brand, price, gallery } = this.props;
        return (
            <>
                <div className="card">
                    <div className="card-image-wrapper">
                        <img src="" alt="" className="card-image" />
                        {!inStock && <div>OUT OF STOCK</div>}
                    </div>
                    <div className="card-info">
                        <div className="card-info__name"></div>
                        <div className="card-info__price">{price}</div>
                    </div>
                </div>
            </>
        );
    }
}

ProductCard.propTypes = {
   
};

export default ProductCard;
