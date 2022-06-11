import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import ProductAttributes from '../ProductAttributes/ProductAttributes';
import PriceView from '../PriceView/PriceView';
import CartItemSlider from '../CartItemSlider/CartItemSlider';
import ShowProductAmount from '../ShowProductAmount/ShowProductAmount';
import { ReactComponent as Close } from '../../assets/close-icon.svg';
import { removeProduct } from '../../views/cart/cartActions';

import styles from './CartItem.module.scss';

class CartItem extends Component {
    state = {
        isMobile: false,
    };

    handleMatchMediaOnResize = () => {
        const mediaWidth = '(max-width: 576px)';

        this.setState({ isMobile: window.matchMedia(mediaWidth).matches });
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleMatchMediaOnResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleMatchMediaOnResize);
    }

    render() {
        const { amount, brand, name, prices, attributes, gallery, productUrl, selectedAttribute } =
            this.props.product;
        const { modal, overlay } = this.props;

        return (
            <>
                <div className={styles['item-wrapper']}>
                    <div className={styles['item-info']}>
                        <NavLink to={productUrl}>
                            <div
                                className={classNames(styles['item-brand'], {
                                    [styles['item-brand--overlay']]: overlay,
                                })}
                            >
                                {brand}
                            </div>
                            <div
                                className={classNames(styles['item-name'], {
                                    [styles['item-name--overlay']]: overlay,
                                })}
                            >
                                {name}
                            </div>
                        </NavLink>

                        <div>
                            {overlay ? (
                                <PriceView prices={prices} amount={amount} overlay />
                            ) : (
                                <PriceView prices={prices} amount={amount} />
                            )}
                        </div>
                        <div className={styles['item-attributes']}>
                            {overlay
                                ? attributes?.map((attribute) => (
                                      <ProductAttributes
                                          key={attribute.id}
                                          attribute={attribute}
                                          selectedAttribute={selectedAttribute.get(attribute.id)}
                                          overlay
                                      />
                                  ))
                                : attributes?.map((attribute) => (
                                      <ProductAttributes
                                          key={attribute.id}
                                          attribute={attribute}
                                          selectedAttribute={selectedAttribute.get(attribute.id)}
                                      />
                                  ))}
                        </div>
                    </div>

                    <div className={styles['item-details']}>
                        {!modal && !overlay && (
                            <ShowProductAmount product={this.props.product} amount={amount} />
                        )}
                        {overlay && (
                            <ShowProductAmount
                                product={this.props.product}
                                amount={amount}
                                overlay
                            />
                        )}
                        {!this.state.isMobile && (
                            <div
                                className={classNames(styles['item-details-slider-wrapper'], {
                                    [styles['item-details-slider-wrapper--overlay']]: overlay,
                                })}
                            >
                                <CartItemSlider gallery={gallery} name={name} />
                            </div>
                        )}
                        {!modal&&<button
                            onClick={() => removeProduct(this.props.product)}
                            className={styles['item-details-btn']}
                        >
                            <Close width={15} height={15} />
                        </button>}
                    </div>
                </div>
            </>
        );
    }
}
export default CartItem;
