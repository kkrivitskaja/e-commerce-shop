import { Component } from 'react';

import BaseButton from '../../BaseButton/BaseButton';
import withRouter from '../../../helpers/withRouter';
import { closeModalWindow } from '../../../views/modals/modalActions';

import styles from './OutOfStock.module.scss';

class OutOfStock extends Component {
    render() {
        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            You can't order{' '}
                            <span className={styles['modal__text-name']}>
                                {this.props.data.name}
                            </span>{' '}
                            because it's out of stock!
                        </p>
                    </div>

                    <BaseButton
                        onClick={() => {
                            this.props.navigate(`/catalog/all`);
                            closeModalWindow();
                        }}
                        secondary
                        outlined
                        className={styles['modal-btn']}
                    >
                        back to catalog
                    </BaseButton>
                </div>
            </>
        );
    }
}

export default withRouter(OutOfStock);
