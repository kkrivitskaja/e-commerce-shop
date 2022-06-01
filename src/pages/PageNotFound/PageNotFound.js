import { Component } from 'react';

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
                </div>
            </>
        );
    }
}

export default PageNotFound;
