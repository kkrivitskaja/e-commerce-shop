import React, { Component } from 'react';

import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';

class CurrencySelector extends Component{
    render() {
        const { currencies } = this.props;
        const isOpen = false;
       
        return (
            <>
                <div>
                    <button>
                        {currencies[0].symbol}
                        {isOpen ? <ArrowUp /> : <ArrowDown />}
                    </button>
                </div>
                <div>
                    {currencies.map((currency) => (
                        <li key={currency.label}>
                            <button key={currency.label}>
                                {currency.label} {currency.symbol}
                            </button>
                        </li>
                    ))}
                </div>
            </>
        );
    }
}

export default CurrencySelector;
