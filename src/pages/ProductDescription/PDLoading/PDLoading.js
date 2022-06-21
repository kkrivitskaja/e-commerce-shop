import { Component } from 'react';

import styles from './PDLoading.module.scss';

class PDLoading extends Component {
    render() {
        return (
            <div className={styles['skeleton']}>
                <div className={`${styles['skeleton-img']} ${styles['skeleton-animation']}`}></div>
                <div className={styles['skeleton-details']}>
                    <div
                        className={`${styles['skeleton-title']} ${styles['skeleton-animation']}`}
                    ></div>
                    <div
                        className={`${styles['skeleton-subtitle']} ${styles['skeleton-animation']}`}
                    ></div>
                    <div
                        className={`${styles['skeleton-attribute']} ${styles['skeleton-animation']}`}
                    ></div>

                    <div
                        className={`${styles['skeleton-price']} ${styles['skeleton-animation']}`}
                    ></div>
                    <div
                        className={`${styles['skeleton-button']} ${styles['skeleton-animation']}`}
                    ></div>
                    <div
                        className={`${styles['skeleton-description']} ${styles['skeleton-animation']}`}
                    ></div>
                </div>
            </div>
        );
    }
}

export default PDLoading;
