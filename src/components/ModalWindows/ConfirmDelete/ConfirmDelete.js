import { Component } from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../../BaseButton/BaseButton';
import { closeModalWindow } from '../../../views/modals/modalActions';

import styles from './ConfirmDelete.module.scss';

class ConfirmDelete extends Component {
    render() {
        const { data, method, message } = this.props;

        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            Do you really wanna to delete {message} {data.brand} {data.name} from
                            cart?
                        </p>
                        <div className={styles['modal-btn-wrapper']}>
                            <BaseButton
                                onClick={method}
                                secondary
                                outlined
                                className={styles['modal-btn']}
                            >
                                delete
                            </BaseButton>
                            <BaseButton
                                onClick={closeModalWindow}
                                secondary
                                outlined
                                className={styles['modal-btn']}
                            >
                                cancel
                            </BaseButton>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

ConfirmDelete.propTypes = {
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
    method: PropTypes.func,
    message: PropTypes.string,
};

export default ConfirmDelete;
