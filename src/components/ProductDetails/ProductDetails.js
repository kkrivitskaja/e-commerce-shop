import { Component } from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../BaseButton/BaseButton';
import ProductAttributes from '../ProductAttributes/ProductAttributes';
import PriceView from '../PriceView/PriceView';
import { addProductToCart } from '../../views/cart/cartActions';
import parseHTML from '../../helpers/parseHTML';

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

                    <div className={styles['product-info__attributes']}>
                        {attributes?.map((attribute) => (
                            <ProductAttributes
                                key={attribute.id}
                                attribute={attribute}
                                selectedAttribute={this.state.selectedAttribute?.get(attribute.id)}
                                setSelectedAttribute={this.setSelectedAttribute}
                                inStock={inStock}
                            />
                        ))}
                    </div>

                    <div className={styles['product-info__price-wrapper']}>
                        <span className={styles['product-info__price']}> PRICE: </span>
                        <PriceView prices={prices} />
                    </div>
                    <BaseButton
                        disabled={!inStock}
                        onClick={() => {
                            addProductToCart(
                                this.props.product,
                                new Map(this.state.selectedAttribute)
                            );
                        }}
                    >
                        {inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                    </BaseButton>

                    {parseHTML(description, styles['product-info__description'])}
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
    prices: PropTypes.arrayOf(
        PropTypes.shape({
            currency: PropTypes.shape({
                label: PropTypes.string,
                symbol: PropTypes.string,
            }),
            amount: PropTypes.number,
        })
    ),
    attributes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    displayValue: PropTypes.string,
                    value: PropTypes.string,
                    id: PropTypes.string,
                })
            ),
            name: PropTypes.string,
            type: PropTypes.string,
        })
    ),
};

export default ProductDetails;
