import { Component } from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../../BaseButton/BaseButton';
import CartItem from '../../CartItem/CartItem';
import withRouter from '../../../helpers/withRouter';
import { closeModalWindow } from '../../../views/modals/modalActions';

import styles from './SuccessAddedCart.module.scss';

class SuccessAddedCart extends Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            <span className={styles['modal__text-name']}>{data.name}</span> was
                            successfully added to the cart!
                        </p>
                    </div>
                    <div>
                        <CartItem product={data} modal />
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
SuccessAddedCart.propTypes = {
    data: PropTypes.shape({
        amount: PropTypes.number,
        attributes: PropTypes.arrayOf(PropTypes.object),
        brand: PropTypes.string,
        gallery: PropTypes.arrayOf(PropTypes.string),
        id: PropTypes.string,
        inStock: PropTypes.bool,
        name: PropTypes.string,
        productId: PropTypes.string,
        productUrl: PropTypes.string,
        selectedAttribute: PropTypes.object,
    }),
};

export default withRouter(SuccessAddedCart);
