import { Component } from 'react';

import BaseButton from '../../components/BaseButton/BaseButton';
import { closeModalWindow } from '../../views/modals/modalActions';
import { ReactComponent as Error } from '../../assets/404-error.svg';
import withRouter from '../../helpers/withRouter';

import styles from './PageNotFound.module.scss';

class PageNotFound extends Component {
    render() {
        return (
            <>
                <div className={styles['message']}>
                    <Error />
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
