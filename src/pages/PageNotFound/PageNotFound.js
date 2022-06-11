import { Component } from 'react';

import BaseButton from '../../components/BaseButton/BaseButton';
import withRouter from '../../helpers/withRouter';
import { closeModalWindow } from '../../views/modals/modalActions';

import styles from './PageNotFound.module.scss';

class PageNotFound extends Component {
    render() {
        return (
            <>
                <div className={styles['message']}>
                    <h3>404</h3>
                    <h3>OOPS! PAGE NOT BE FOUND </h3>
                    Sorry but the page you are looking for does not exist, have been removed. name
                    changed or is temporarily unavailable
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

export default withRouter(PageNotFound);
