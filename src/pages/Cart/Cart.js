import { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import CartItem from '../../components/CartItem/CartItem';
import BaseButton from '../../components/BaseButton/BaseButton';
import TotalCost from '../../components/TotalCost/TotalCost';
import { showSuccessOrder } from '../../views/modals/modalActions';
import withStorage from '../../helpers/withStorage';

import styles from './Cart.module.scss';

class Cart extends Component {
    render() {
        const { productsInCart, showModalWindow } = this.props.storageVar;
        const isCartItems = productsInCart.length !== 0;
        const isCartEmpty = productsInCart.length === 0;

        return (
            <>
                <div
                    className={classNames(styles['cart'], {
                        [styles['cart--modal']]: showModalWindow,
                    })}
                >
                    <div>
                        <p className={styles['cart__title']}>CART {isCartEmpty && 'IS EMPTY'}</p>
                    </div>

                    <div className={styles['cart__list']}>
                        {productsInCart?.map((product) => (
                            <CartItem product={product} key={product.id} />
                        ))}
                    </div>
                    <div className={styles['cart__total-wrapper']}>
                        {isCartItems && (
                            <div>
                                <div className={styles['cart__total']}>
                                    <span className={styles['cart__total-title']}>Total</span>
                                    <TotalCost />
                                </div>
                                <div className={styles['cart__btn-wrapper']}>
                                    <BaseButton
                                        className={styles['cart__btn']}
                                        onClick={() => showSuccessOrder()}
                                    >
                                        order
                                    </BaseButton>
                                    <Link to="/catalog/all" className={styles['cart__btn-link']}>
                                        <BaseButton secondary className={styles['cart__btn']}>
                                            back to catalog
                                        </BaseButton>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default withStorage(Cart);
