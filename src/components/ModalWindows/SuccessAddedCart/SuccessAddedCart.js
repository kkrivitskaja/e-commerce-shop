import { Component } from 'react';

import BaseButton from '../../BaseButton/BaseButton';
import CartItem from '../../CartItem/CartItem';
import withRouter from '../../../helpers/withRouter';
import { closeModalWindow } from '../../../views/modals/modalActions';

import styles from './SuccessAddedCart.module.scss';

class SuccessAddedCart extends Component {
    render() {
        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            <span className={styles['modal__text-name']}>
                                {this.props.data.name}
                            </span>{' '}
                            was successfully added to the cart!
                        </p>
                    </div>
                    <div>
                        <CartItem product={this.props.data} />
                    </div>
                    <div className={styles['modal-btn-wrapper']}>
                        <BaseButton
                            onClick={() => {
                                this.props.navigate(`/cart`);
                                closeModalWindow();
                            }}
                            secondary
                            outlined
                            className={styles['modal-btn']}
                        >
                            view bag
                        </BaseButton>
                        <BaseButton
                            onClick={() => {
                                this.props.navigate(`/catalog/all`);
                                closeModalWindow();
                            }}
                            secondary
                            className={styles['modal-btn']}
                        >
                            back to catalog
                        </BaseButton>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(SuccessAddedCart);
