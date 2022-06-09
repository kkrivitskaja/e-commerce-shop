import { Component } from 'react';

import BaseButton from '../../BaseButton/BaseButton';
import { closeModalWindow } from '../../../views/modals/modalActions';
import CartItem from '../../CartItem/CartItem';

import styles from './SpecifyAttribute.module.scss';

class SpecifyAttribute extends Component {
    render() {
        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            Before ordering,
                            <br /> you must specify all the attributes of the{' '}
                            <span className={styles['modal__text-name']}>
                                {this.props.data.name}
                            </span>
                        </p>
                        <div>
                            <CartItem product={this.props.data} />
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

export default SpecifyAttribute;
