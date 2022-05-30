import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../BaseModal/Modal';
import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';

import styles from './CurrencySelector.module.scss';

class CurrencySelector extends Component {
    state = {
        showModal: false,
        currentCurrency: {
            label: 'USD',
            symbol: '$',
        },
    };

    toggle = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
    };

    getCurrentCurrency = async () => {
        const currentCurrency = await JSON.parse(localStorage.getItem('currentCurrency'));
        this.setState({ currentCurrency });
    };

    currencyHandler = (newCurrency) => {
        this.setState({ currentCurrency: newCurrency });
        localStorage.setItem('currentCurrency', JSON.stringify(newCurrency));
    };

    async componentDidMount() {
        await this.getCurrentCurrency();
    }

    render() {
        const { currencies } = this.props;
        const { showModal, currentCurrency } = this.state;

        return (
            <>
                <div onClick={this.toggle} id="portal" className={styles['currencies-symbol']}>
                    {currentCurrency.symbol}
                    {showModal ? <ArrowUp /> : <ArrowDown />}
                </div>

                {showModal && (
                    <Modal onClose={this.toggle}>
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

export default CurrencySelector;
