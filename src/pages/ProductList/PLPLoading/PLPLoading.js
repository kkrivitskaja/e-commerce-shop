import { Component } from 'react';

import styles from './PLPLoading.module.scss';

class PLPLoading extends Component {
    render() {
        const cards = [1, 2, 3, 4, 5, 6, 7, 8];
        return (
            <div className={styles['plp']}>
                <div className={`${styles['plp-title']} ${styles['animation']}`}></div>
                <div className={styles['plp-grid']}>
                    {cards.map((card) => (
                        <div className={styles['plp-card']} key={card}>
                            <div
                                className={`${styles['plp-card__img']} ${styles['animation']}`}
                            ></div>
                            <div
                                className={`${styles['plp-card__context']} ${styles['animation']}`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PLPLoading;
