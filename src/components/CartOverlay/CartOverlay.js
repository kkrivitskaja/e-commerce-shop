import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';

import BaseDropdown from '../BaseDropdown/BaseDropdown';
import BaseButton from '../BaseButton/BaseButton';
import CartItem from '../CartItem/CartItem';
import TotalCost from '../TotalCost/TotalCost';
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';
import { showCartOverlay, closeDropdownList } from '../../views/modals/modalActions';
import { getItemsTotalQuantity } from '../../views/cart/cartActions';

import withStorage from '../../helpers/withStorage';
import withRouter from '../../helpers/withRouter';

import styles from './CartOverlay.module.scss';

class CartOverlay extends Component {
    render() {
        const { productsInCart, isCartOverlay } = this.props.storageVar;
        const noCartItem = productsInCart.length === 0;

        return (
            <>
                <div
                    onClick={() => {
                        showCartOverlay();
                    }}
                    id="cart"
                    className={styles['symbol-wrapper']}
                >
                    <Cart />
                    {!noCartItem && (
                        <div className={styles['symbol']}>
                            {getItemsTotalQuantity(productsInCart)}
                        </div>
                    )}
                </div>

                {isCartOverlay && (
                    <BaseDropdown id="cart" overlay cart>
                        <div className={styles['cart']}>
                            {noCartItem && (
                                <div className={styles['cart__empty']}>
                                    <p>cart is empty</p>
                                    <BaseButton secondary full onClick={closeDropdownList}>
                                        Close
                                    </BaseButton>
                                </div>
                            )}

                            {!noCartItem && (
                                <>
                                    <div className={styles['cart__info']}>
                                        <b>My Bag,</b> {''}
                                        {getItemsTotalQuantity(productsInCart)} items
                                    </div>
                                    <div className={styles['cart__list']}>
                                        {productsInCart?.map((product) => (
                                            <CartItem product={product} key={product.id} overlay />
                                        ))}
                                    </div>
                                    <div className={styles['cart__total']}>
                                        <TotalCost taxRate={21} overlay />

                                        <div className={styles['cart__btn-wrapper']}>
                                            <BaseButton
                                                className={styles['cart__btn']}
                                                outlined
                                                secondary
                                                small
                                                onClick={() => {
                                                    this.props.navigate(`/cart`);
                                                    closeDropdownList();
                                                }}
                                            >
                                                View Bag
                                            </BaseButton>

                                            <BaseButton
                                                small
                                                className={styles['cart__btn']}
                                                onClick={() => {
                                                    this.props.navigate(`/cart`);
                                                    closeDropdownList();
                                                }}
                                            >
                                                Check Out
                                            </BaseButton>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </BaseDropdown>
                )}
            </>
        );
    }
}

CartOverlay.propTypes = {
    productsInCart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            productId: PropTypes.string,
            name: PropTypes.string,
            inStock: PropTypes.bool,
            gallery: PropTypes.arrayOf(PropTypes.string),
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
            selectedAttribute: instanceOf(Map),
            amount: PropTypes.number,
            productUrl: PropTypes.string,
        })
    ),
    isCartOverlay: PropTypes.bool,
};

export default withRouter(withStorage(CartOverlay));
