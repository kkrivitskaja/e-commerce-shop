import React, { Component } from 'react';

import styles from './CommonHeaderLoading.module.scss';

class CommonHeaderLoading extends Component {
    render() {
        return (
            <div className={styles['chl']}>
                <div className={styles['chl-links']}>
                    <div className={`${styles['chl-links-a']} ${styles['animation']}`}></div>
                    <div className={`${styles['chl-links-a']} ${styles['animation']}`}></div>
                    <div className={`${styles['chl-links-a']} ${styles['animation']}`}></div>
                </div>
                <div className={`${styles['chl__logo']} ${styles['animation']}`}></div>
                <div className={styles['chl-actions']}>
                    <div className={`${styles['chl-actions__btn']} ${styles['animation']}`}></div>
                    <div className={`${styles['chl-actions__btn']} ${styles['animation']}`}></div>
                </div>
            </div>
        );
    }
}

export default CommonHeaderLoading;
