import { Component } from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../../BaseButton/BaseButton';
import { closeModalWindow } from '../../../views/modals/modalActions';

import styles from './ErrorModal.module.scss';

class ErrorModal extends Component {
    render() {
        const { message } = this.props;

        return (
            <>
                <div className={styles['modal__text']}>
                    <p className={styles['modal__text-title']}>
                        Something went wrong. Please try again later. <br />
                        <span className={styles['modal__text-name']}>{message}</span>
                    </p>

                    <BaseButton
                        onClick={closeModalWindow}
                        secondary
                        outlined
                        className={styles['modal-btn']}
                    >
                        close
                    </BaseButton>
                </div>
            </>
        );
    }
}

ErrorModal.propTypes = {
    message: PropTypes.string,
};

export default ErrorModal;
