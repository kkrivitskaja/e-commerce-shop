import { Component } from 'react';
import classNames from 'classnames';

import { setProductAmount } from '../../views/cart/cartActions';
import { ReactComponent as Minus } from '../../assets/minus-icon.svg';
import { ReactComponent as Plus } from '../../assets/plus-icon.svg';

import styles from './ShowProductAmount.module.scss';

class ShowProductAmount extends Component {
    render() {
        const { product, amount, overlay } = this.props;
        return (
            <>
                <div className={styles['quantity']}>
                    <button
                        className={classNames(styles['quantity-btn'], {
                            [styles['quantity-btn--overlay']]: overlay,
                        })}
                        onClick={() => {
                            setProductAmount(product, amount + 1);
                        }}
                    >
                        <Plus />
                    </button>
                    <div
                        className={classNames(styles['quantity-number'], {
                            [styles['quantity-number--overlay']]: overlay,
                        })}
                    >
                        {amount}
                    </div>
                    <button
                        className={classNames(styles['quantity-btn'], {
                            [styles['quantity-btn--overlay']]: overlay,
                        })}
                        onClick={() => {
                            setProductAmount(product, amount - 1);
                        }}
                    >
                        <Minus />
                    </button>
                </div>
            </>
        );
    }
}

export default ShowProductAmount;
