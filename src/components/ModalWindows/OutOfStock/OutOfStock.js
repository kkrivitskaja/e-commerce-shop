import { Component } from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../../BaseButton/BaseButton';
import withRouter from '../../../helpers/withRouter';
import { closeModalWindow } from '../../../views/modals/modalActions';

import styles from './OutOfStock.module.scss';

class OutOfStock extends Component {
    render() {
        const { name, brand } = this.props.data;
        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            You can't order{' '}
                            <span className={styles['modal__text-name']}>
                                {brand} {name}
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
                        className={styles['modal-btn']}
                    >
                        back to catalog
                    </BaseButton>
                </div>
            </>
        );
    }
}

OutOfStock.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
};

export default withRouter(OutOfStock);
