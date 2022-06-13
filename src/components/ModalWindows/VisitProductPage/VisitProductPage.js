import { Component } from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../../BaseButton/BaseButton';
import withRouter from '../../../helpers/withRouter';
import { closeModalWindow } from '../../../views/modals/modalActions';

import styles from './VisitProductPage.module.scss';

class VisitProductPage extends Component {
    render() {
        const { data, url } = this.props;

        return (
            <>
                <div className={styles['modal']}>
                    <div className={styles['modal__text']}>
                        <p className={styles['modal__text-title']}>
                            You can't add{' '}
                            <span className={styles['modal__text-name']}>
                                {data.brand} {data.name}
                            </span>{' '}
                            to the cart because you need to choose the attributes. In order to do
                            this please go to the product page.
                        </p>
                    </div>
                    <div className={styles['modal-btn-wrapper']}>
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
                        <BaseButton
                            onClick={() => {
                                this.props.navigate(url);
                                closeModalWindow();
                            }}
                            className={styles['modal-btn']}
                        >
                            go to page
                        </BaseButton>
                    </div>
                </div>
            </>
        );
    }
}

VisitProductPage.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
};

export default withRouter(VisitProductPage);
