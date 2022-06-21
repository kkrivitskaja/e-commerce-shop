import { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';

import CartItem from '../../components/CartItem/CartItem';
import BaseButton from '../../components/BaseButton/BaseButton';
import TotalCost from '../../components/TotalCost/TotalCost';
import { showSuccessOrder, closeModalWindow } from '../../views/modals/modalActions';
import withStorage from '../../helpers/withStorage';
import withRouter from '../../helpers/withRouter';

import styles from './Cart.module.scss';

class Cart extends Component {
    render() {
        const { productsInCart } = this.props.storageVar;
        const isCartEmpty = productsInCart.length === 0;

        return (
            <>
                <div className={styles['cart']}>
                    <div className={styles['cart__title-wrapper']}>
                        <p className={styles['cart__title']}>CART {isCartEmpty && 'IS EMPTY'}</p>
                        {isCartEmpty && (
                            <BaseButton
                                onClick={() => {
                                    this.props.navigate(`/catalog/all`);
                                    closeModalWindow();
                                }}
                                secondary
                            >
                                back to catalog
                            </BaseButton>
                        )}
                    </div>

                    <div className={styles['cart__content']}>
                        <div>
                            {productsInCart?.map((product) => (
                                <CartItem product={product} key={product.id} cart />
                            ))}
                        </div>

                        {!isCartEmpty && (
                            <div className={styles['cart__total-wrapper']}>
                                <TotalCost taxRate={21} />

                                <div className={styles['cart__btn-wrapper']}>
                                    <BaseButton
                                        className={styles['cart__btn']}
                                        onClick={showSuccessOrder}
                                        full
                                    >
                                        order
                                    </BaseButton>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    }
}

TotalCost.propTypes = {
    productsInCart: PropTypes.arrayOf(
        PropTypes.shape({
            amount: PropTypes.number,
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
            gallery: PropTypes.arrayOf(PropTypes.string),
            id: PropTypes.string,
            inStock: PropTypes.bool,
            name: PropTypes.string,
            prices: PropTypes.arrayOf(
                PropTypes.shape({
                    currency: PropTypes.shape({
                        label: PropTypes.string,
                        symbol: PropTypes.string,
                    }),
                    amount: PropTypes.number,
                })
            ),
            productId: PropTypes.string,
            productUrl: PropTypes.string,
            selectedAttribute: instanceOf(Map),
        })
    ),
};

export default withRouter(withStorage(Cart));
