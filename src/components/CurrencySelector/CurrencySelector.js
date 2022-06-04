import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../BaseModal/Modal';
import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';

import {setLocalStorageCurrency} from '../../storage/storageActions'
import storage from '../../storage/initialState';
import withStorage from '../../helpers/withStorage';

import styles from './CurrencySelector.module.scss';

class CurrencySelector extends Component {
    state = {
        showModal: false,
    };

    toggle = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
    };

    currencyHandler = (newCurrency) => {
        const newState = {
            ...storage(),
            currentCurrency: newCurrency,
        };
        storage(newState);
        setLocalStorageCurrency(newCurrency);
    };

    render() {
        const { currencies } = this.props;
        const { showModal } = this.state;
        const { currentCurrency } = this.props.storageVar;

        return (
            <>
                <div onClick={this.toggle} id="currency" className={styles['currencies-symbol']}>
                    {currentCurrency.symbol}
                    {showModal ? <ArrowUp /> : <ArrowDown />}
                </div>

                {showModal && (
                    <Modal onClose={this.toggle} id="currency">
                        <div className={styles['currencies-list']}>
                            {currencies.map((currency) => (
                                <button
                                    onClick={() => {
                                        this.currencyHandler(currency);
                                    }}
                                    key={currency.label}
                                    className={styles['currencies-list__btn']}
                                >
                                    {currency.label} {currency.symbol}
                                </button>
                            ))}
                        </div>
                    </Modal>
                )}
            </>
        );
    }
}

CurrencySelector.propTypes = {
    currencies: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            symbol: PropTypes.string,
        })
    ),
};

export default withStorage(CurrencySelector);
