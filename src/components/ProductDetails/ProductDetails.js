import React, { Component } from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import BaseButton from '../BaseButton/BaseButton';
import ProductAttributes from '../ProductAttributes/ProductAttributes';
import PriceView from '../PriceView/PriceView';
import withStorage from '../../helpers/withStorage';
import { addProductToCart } from '../../storage/storageActions';

import styles from './ProductDetails.module.scss';

class ProductDetails extends Component {
    state = {
        selectedAttribute: new Map(),
    };

    setSelectedAttribute = (selectedAttribute) => {
        this.setState((prevState) => {
            const newSelectedAttribute = new Map(prevState.selectedAttribute);
            newSelectedAttribute.set(selectedAttribute.id, selectedAttribute);
            return {
                ...prevState,
                selectedAttribute: newSelectedAttribute,
            };
        });
    };

    render() {
        const { name, inStock, description, brand, prices, attributes } = this.props.product;

        return (
            <>
                <div className={styles['product-info']}>
                    <div className={styles['product-info__name-wrapper']}>
                        <span
                            className={[
                                `${styles['product-info__name']},
                            ${styles['product-info__name--semibold']}`,
                            ]}
                        >
                            {brand}
                        </span>
                        <span className={styles['product-info__name']}> {name} </span>
                    </div>
                    {attributes?.map((attribute) => (
                        <ProductAttributes
                            key={attribute.id}
                            attribute={attribute}
                            selectedAttribute={this.state.selectedAttribute?.get(attribute.id)}
                            setSelectedAttribute={this.setSelectedAttribute}
                        />
                    ))}
                    <div className={styles['product-info__price-wrapper']}>
                        <span className={styles['product-info__price']}> PRICE: </span>
                        <PriceView prices={prices} />
                    </div>
                    <BaseButton
                        disabled={!inStock}
                        onClick={() =>
                            addProductToCart(
                                this.props.product,
                                new Map(this.state.selectedAttribute)
                            )
                        }
                        className={styles['product-info__btn']}
                    >
                        {inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                    </BaseButton>
                    <div
                        className={styles['product-info__description']}
                        /**used a sanitizer DOMPurify.sanitize() to prevent XSS*/
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(description),
                        }}
                    />
                </div>
            </>
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
