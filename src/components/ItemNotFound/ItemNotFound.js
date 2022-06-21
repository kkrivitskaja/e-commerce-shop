import { Component } from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../BaseButton/BaseButton';
import withRouter from '../../helpers/withRouter';

import styles from './ItemNotFound.module.scss';

class ItemNotFound extends Component {
    render() {
        const { item, params } = this.props;

        return (
            <div className={styles['message']}>
                <p className={styles['message-text']}>
                    Sorry, we didn't find any {item} your search "
                    <span className={styles['message-text--result']}>
                        {params.productId || params.categoryId}
                    </span>
                    ".
                    <br />
                    Please try searching again.
                </p>
                <BaseButton
                    onClick={() => {
                        this.props.navigate(`/catalog/all`);
                    }}
                    secondary
                    className={styles['message-btn']}
                >
                    back to catalog
                </BaseButton>
            </div>
        );
    }
}

ItemNotFound.propTypes = {
    item: PropTypes.string,
    params: PropTypes.shape({
        categoryId: PropTypes.string,
        productId: PropTypes.string,
    }),
};

export default withRouter(ItemNotFound);
