import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BaseDropdown from '../BaseDropdown/BaseDropdown';
import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';

import { setLocalStorageCurrency } from '../../storage/storageActions';
import { showCurrencyDropdown } from '../../views/modals/modalActions';
import storage from '../../storage/initialState';
import withStorage from '../../helpers/withStorage';

import styles from './CurrencySwitcher.module.scss';

class CurrencySwitcher extends Component {
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
        const { currentCurrency, isCurrencyDropdown } = this.props.storageVar;

        return (
            <>
                <div
                    onClick={showCurrencyDropdown}
                    id="currency"
                    className={styles['currencies-symbol']}
                >
                    {currentCurrency.symbol}
                    {isCurrencyDropdown ? <ArrowUp /> : <ArrowDown />}
                </div>

                {isCurrencyDropdown && (
                    <BaseDropdown onClick={showCurrencyDropdown} id="currency">
                        <div className={styles['currencies-list']}>
                            {currencies?.map((currency) => (
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
                    </BaseDropdown>
                )}
            </>
        );
    }
}

CurrencySwitcher.propTypes = {
    currencies: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            symbol: PropTypes.string,
        })
    ),
    currentCurrency: PropTypes.shape({
            label: PropTypes.string,
            symbol: PropTypes.string,
        }),
    isCurrencyDropdown: PropTypes.bool,
};

export default withStorage(CurrencySwitcher);
