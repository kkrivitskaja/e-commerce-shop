import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes, { instanceOf } from 'prop-types';

import ProductAttributes from '../ProductAttributes/ProductAttributes';
import PriceView from '../PriceView/PriceView';
import CartItemSlider from '../CartItemSlider/CartItemSlider';
import ProductCounter from '../ProductCounter/ProductCounter';
import { ReactComponent as Close } from '../../assets/close-icon.svg';
import { removeProduct } from '../../views/cart/cartActions';
import { closeDropdownList } from '../../views/modals/modalActions';
import withRouter from '../../helpers/withRouter';

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
        const { product, modal, overlay } = this.props;

        return (
            <>
                <div
                    className={classNames(styles['item'], {
                        [styles['item--overlay']]: overlay,
                    })}
                >
                    <div
                        className={classNames(styles['item-info'], {
                            [styles['item-info--overlay']]: overlay,
                        })}
                        onClick={() => {
                            this.props.navigate(product.productUrl);
                            closeDropdownList();
                        }}
                    >
                        <div
                            className={classNames(styles['item-brand'], {
                                [styles['item-brand--overlay']]: overlay,
                            })}
                        >
                            {product.brand}
                        </div>
                        <div
                            className={classNames(styles['item-name'], {
                                [styles['item-name--overlay']]: overlay,
                            })}
                        >
                            {product.name}
                        </div>

                        <div>
                            {overlay ? (
                                <PriceView
                                    prices={product.prices}
                                    amount={product.amount}
                                    overlay
                                />
                            ) : (
                                <PriceView prices={product.prices} amount={product.amount} />
                            )}
                        </div>
                        <div className={styles['item-attributes']}>
                            {overlay
                                ? product.attributes?.map((attribute) => (
                                      <ProductAttributes
                                          key={attribute.id}
                                          attribute={attribute}
                                          selectedAttribute={product.selectedAttribute.get(
                                              attribute.id
                                          )}
                                          overlay
                                          cart
                                      />
                                  ))
                                : product.attributes?.map((attribute) => (
                                      <ProductAttributes
                                          key={attribute.id}
                                          attribute={attribute}
                                          selectedAttribute={product.selectedAttribute.get(
                                              attribute.id
                                          )}
                                          cart
                                      />
                                  ))}
                        </div>
                    </div>

                    <div
                        className={classNames(styles['item-details'], {
                            [styles['item-details--overlay']]: overlay,
                        })}
                    >
                        {!modal && !overlay && <ProductCounter product={product} />}
                        {overlay && <ProductCounter product={product} overlay />}
                        {!this.state.isMobile && (
                            <div
                                className={classNames(styles['item-details-slider-wrapper'], {
                                    [styles['item-details-slider-wrapper--overlay']]: overlay,
                                })}
                            >
                                {overlay ? (
                                    <CartItemSlider
                                        gallery={product.gallery}
                                        name={product.name}
                                        overlay
                                    />
                                ) : (
                                    <CartItemSlider gallery={product.gallery} name={product.name} />
                                )}
                            </div>
                        )}
                        {!modal && (
                            <button
                                onClick={() => removeProduct(product)}
                                className={classNames(styles['item-details-btn'], {
                                    [styles['item-details-btn--overlay']]: overlay,
                                })}
                            >
                                <Close width={15} height={15} />
                            </button>
                        )}
                    </div>
                </div>
            </>
        );
    }
}

CartItem.propTypes = {
    product: PropTypes.shape({
        amount: PropTypes.number,
        attributes: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                items: PropTypes.arrayOf(
                    PropTypes.shape({
                        displayValue: PropTypes.string,
                        value: PropTypes.string,
                        id: PropTypes.string,
                    })
                ),
                name: PropTypes.string,
                type: PropTypes.string,
            })
        ),
        brand: PropTypes.string,
        gallery: PropTypes.arrayOf(PropTypes.string),
        id: PropTypes.string,
        inStock: PropTypes.bool,
        name: PropTypes.string,
        prices: PropTypes.arrayOf(
            PropTypes.shape({
                currency: PropTypes.shape({
                    label: PropTypes.string,
                    symbol: PropTypes.string,
                }),
                amount: PropTypes.number,
            })
        ),
        productId: PropTypes.string,
        productUrl: PropTypes.string,
        selectedAttribute: instanceOf(Map),
    }),

    modal: PropTypes.bool,
    overlay: PropTypes.bool,
};

export default withRouter(CartItem);
