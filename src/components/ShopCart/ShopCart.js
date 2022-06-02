import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../BaseModal/Modal';
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';
import BaseButton from '../BaseButton/BaseButton';
import storage from '../../storage/initialState';
import withStorage from '../../helpers/withStorage';

import styles from './ShopCart.module.scss';

class ShopCart extends Component {
    state = {
        showCart: false,
    };

    toggle = () => {
        this.setState(({ showCart }) => ({ showCart: !showCart }));
    };

    render() {
        const { showCart } = this.state;
        const { currentCurrency, cartList } = this.props.storageVar;
        return (
            <>
                <div onClick={this.toggle} id="cart" className={styles['currencies-symbol']}>
                    <Cart />
                </div>

                {showCart && (
                    <Modal onClose={this.toggle} id="cart">
                        <div className={styles['currencies-list']}>
                            <div className={styles['cart-wrapper']}>
                                <div className={styles['cart-info']}>
                                    <b>My Bag,</b> 2 items
                                </div>
                                <div className={styles['cart-list']}>
                                   {!cartList&& <div className={styles['currencies-list__btn']}>EMPTY CART</div>}
                                                                   </div>
                                <div className={styles['cart-total-wrapper']}>
                                    <div className={styles['cart-total']}>
                                        <span>Total</span>
                                        <span>$100</span>
                                    </div>
                                    <div className={styles['cart-btn']}>
                                        <Link to="/cart" className="cart-btn-link">
                                            <BaseButton outlined secondary>
                                                View Bag
                                            </BaseButton>
                                        </Link>
                                        <Link to="/cart">
                                            <BaseButton>Check Out</BaseButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </>
        );
    }
}

export default withStorage(ShopCart);
