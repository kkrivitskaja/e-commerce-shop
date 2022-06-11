import { Component } from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../../BaseButton/BaseButton';
import { closeModalWindow } from '../../../views/modals/modalActions';
import CartItem from '../../CartItem/CartItem';

import styles from './SpecifyAttribute.module.scss';

class SpecifyAttribute extends Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            Before ordering,
                            <br /> you must specify all the attributes of the{' '}
                            <span className={styles['modal__text-name']}>
                                {data.brand} {data.name}
                            </span>
                        </p>
                        <div>
                            <CartItem product={data} />
                        </div>
                        <div className={styles['modal-btn-wrapper']}>
                            <BaseButton
                                onClick={closeModalWindow}
                                secondary
                                outlined
                                className={styles['modal-btn']}
                            >
                                close
                            </BaseButton>
                            <BaseButton onClick={closeModalWindow} className={styles['modal-btn']}>
                                add to cart
                            </BaseButton>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

SpecifyAttribute.propTypes = {
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

export default SpecifyAttribute;
