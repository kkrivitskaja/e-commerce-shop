import { Component } from 'react';

import BaseButton from '../../BaseButton/BaseButton';
import { closeModalWindow } from '../../../views/modals/modalActions';

import styles from './SuccessOrder.module.scss';

class SuccessOrder extends Component {
    render() {
        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            Your order has been successfully accepted!
                        </p>
                        <p>An email with order details has been sent to your email address. </p>
                    </div>

                    <BaseButton
                        onClick={closeModalWindow}
                        secondary
                        outlined
                        className={styles['modal-btn']}
                    >
                        Close
                    </BaseButton>
                </div>
            </>
        );
    }
}

export default SuccessOrder;
