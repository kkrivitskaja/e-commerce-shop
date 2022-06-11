import { Component } from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../../BaseButton/BaseButton';
import { closeModalWindow } from '../../../views/modals/modalActions';

import styles from './WarningChoseAttribute.module.scss';

class WarningChoseAttribute extends Component {
    render() {
        const { name, brand} = this.props.data;
        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            Before ordering {brand} {name}, you must specify all their attributes!
                        </p>
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

WarningChoseAttribute.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
};

export default WarningChoseAttribute;
