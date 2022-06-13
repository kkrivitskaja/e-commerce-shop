import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { instanceOf } from 'prop-types';

import Modal from '../BaseModal/Modal';
import BaseButton from '../BaseButton/BaseButton';
import CartItem from '../CartItem/CartItem';
import TotalCost from '../../components/TotalCost/TotalCost';
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';
import withStorage from '../../helpers/withStorage';
import withRouter from '../../helpers/withRouter';

import styles from './ShopCart.module.scss';

class ShopCart extends Component {
    cartRef = React.createRef();
    state = {
        showCart: false,
    };

    toggle = () => {
        this.setState(({ showCart }) => ({ showCart: !showCart }));
    };

    render() {
        const { showCart } = this.state;
        const { productsInCart } = this.props.storageVar;
        const length = productsInCart.length;
        const noCartItem = length === 0;

        return (
            <>
                <div onClick={this.toggle} id="cart" className={styles['symbol-wrapper']}>
                    <Cart />
                    {!noCartItem && <div className={styles['symbol']}>{length}</div>}
                </div>

                {showCart && (
                    <Modal id="cart" overlay onClose={this.toggle} cart>
                        <div className={styles['cart']}>
                            <div>
                                <div>
                                    {noCartItem && (
                                        <div className={styles['cart__empty']}>
                                            <p>cart is empty</p>
                                            <BaseButton secondary full onClick={this.toggle}>
                                                Close
                                            </BaseButton>
                                        </div>
                                    )}

                                    {!noCartItem && (
                                        <div className={styles['cart__info']}>
                                            <b>My Bag,</b> {''}
                                            {length} items
                                        </div>
                                    )}
                                </div>
                                {!noCartItem && (
                                    <div className={styles['cart__list']}>
                                        {productsInCart?.map((product) => (
                                            <CartItem product={product} key={product.id} overlay />
                                        ))}
                                    </div>
                                )}
                                {!noCartItem && (
                                    <div>
                                        <div className={styles['cart__total-wrapper']}>
                                            <div className={styles['cart__total']}>
                                                <span>Total</span>
                                                <TotalCost />
                                            </div>
                                            <div className={styles['cart__btn-wrapper']}>
                                                <BaseButton
                                                    className={styles['cart__btn']}
                                                    outlined
                                                    secondary
                                                    onClick={() => {
                                                        this.props.navigate(`/cart`);
                                                        this.toggle();
                                                    }}
                                                >
                                                    View Bag
                                                </BaseButton>

                                                <BaseButton
                                                    className={styles['cart__btn']}
                                                    onClick={() => {
                                                        this.props.navigate(`/cart`);
                                                        this.toggle();
                                                    }}
                                                >
                                                    Check Out
                                                </BaseButton>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Modal>
                )}
            </>
        );
    }
}

ShopCart.propTypes = {
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
            prices: PropTypes.array,
            selectedAttribute: instanceOf(Map),
            amount: 1,
            productUrl: PropTypes.string,
            color: PropTypes.string,
            fontSize: PropTypes.number,
        })
    ),
};

export default withRouter(withStorage(ShopCart));
