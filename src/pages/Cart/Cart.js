import { Component } from 'react';
import { Link } from 'react-router-dom';

import withStorage from '../../helpers/withStorage';
import CartItem from '../../components/CartItem/CartItem';
import BaseButton from '../../components/BaseButton/BaseButton';

import styles from './Cart.module.scss';

class Cart extends Component {
    render() {
        const { productsInCart } = this.props.storageVar;

        return (
            <>
                <div className={styles['cart']}>
                    <div>
                        <p className={styles['cart__title']}>
                            CART {productsInCart.length === 0 && 'IS EMPTY'}
                        </p>
                    </div>

                    <div className={styles['cart__list']}>
                        {productsInCart?.map((product) => (
                            <CartItem product={product} key={product.id} />
                        ))}
                    </div>
                    <div>
                        {productsInCart.length !== 0 && (
                            <div>
                                <div className={styles['cart__total']}>
                                    <span className={styles['cart__total-title']}>Total</span>
                                    <span className={styles['cart__total-amount']}>$100</span>
                                </div>
                                <div className={styles['cart__btn-wrapper']}>
                                    <BaseButton
                                        className={styles['cart__btn']}
                                        onClick={() => console.log('Successfully ordered!!!')}
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
