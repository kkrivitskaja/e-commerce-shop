import { Component } from 'react';

import BaseButton from '../../BaseButton/BaseButton';
import { closeModalWindow } from '../../../views/modals/modalActions';

import styles from './WarningChoseAttribute.module.scss';

class WarningChoseAttribute extends Component {
    render() {
        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            Before ordering {this.props.data.name}, you must specify all their
                            attributes!
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

export default WarningChoseAttribute;
