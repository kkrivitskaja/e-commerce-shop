import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ProductAttributes from '../ProductAttributes/ProductAttributes';
import PriceView from '../PriceView/PriceView';
import CartItemSlider from '../CartItemSlider/CartItemSlider';
import ShowProductAmount from '../ShowProductAmount/ShowProductAmount';
import { ReactComponent as Close } from '../../assets/close-icon.svg';
import { removeProduct } from '../../views/cart/cartActions';

import styles from './CartItem.module.scss';

class CartItem extends Component {
    render() {
        const { amount, brand, name, prices, attributes, gallery, productUrl, selectedAttribute } =
            this.props.product;
        return (
            <>
                <div className={styles['item-wrapper']}>
                    <div className={styles['item-info']}>
                        <NavLink to={productUrl}>
                            <div className={styles['item-brand']}>{brand}</div>
                            <div className={styles['item-name']}>{name}</div>
                        </NavLink>

                        <div>
                            <PriceView prices={prices} amount={amount} />
                        </div>
                        <div>
                            {attributes?.map((attribute) => (
                                <ProductAttributes
                                    key={attribute.id}
                                    attribute={attribute}
                                    selectedAttribute={selectedAttribute.get(attribute.id)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles['item-details']}>
                        <ShowProductAmount product={this.props.product} amount={amount} />
                        <div className={styles['item-details-slider-wrapper']}>
                            <CartItemSlider gallery={gallery} name={name} />
                        </div>
                        <button
                            onClick={() => removeProduct(this.props.product)}
                            className={styles['item-details-btn']}
                        >
                            <Close width={20} height={20} />
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
export default CartItem;
