import React, { Component } from 'react';

import ProductAttributes from '../ProductAttributes/ProductAttributes';
import PriceView from '../PriceView/PriceView';
import { ReactComponent as Minus } from '../../assets/minus-icon.svg';
import { ReactComponent as Plus } from '../../assets/plus-icon.svg';

import styles from './CartItem.module.scss';

const data = {
    name: 'Jacket',
    inStock: true,
    gallery: [
        'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
        'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
        'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg',
        'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg',
        'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg',
        'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png',
        'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png',
    ],
    description: '<p>Awesome winter jacket</p>',
    category: 'clothes',
    attributes: [
        {
            name: 'Size',
            id: 'Size',
            type: 'text',
            items: [
                {
                    displayValue: 'Small',
                    value: 'S',
                    id: 'Small',
                },
                {
                    displayValue: 'Medium',
                    value: 'M',
                    id: 'Medium',
                },
                {
                    displayValue: 'Large',
                    value: 'L',
                    id: 'Large',
                },
                {
                    displayValue: 'Extra Large',
                    value: 'XL',
                    id: 'Extra Large',
                },
            ],
        },
    ],
    brand: 'Canada Goose',
    prices: [
        {
            currency: {
                label: 'USD',
                symbol: '$',
            },
            amount: 518.47,
        },
        {
            currency: {
                label: 'GBP',
                symbol: '£',
            },
            amount: 372.67,
        },
        {
            currency: {
                label: 'AUD',
                symbol: 'A$',
            },
            amount: 668.83,
        },
        {
            currency: {
                label: 'JPY',
                symbol: '¥',
            },
            amount: 55990.46,
        },
        {
            currency: {
                label: 'RUB',
                symbol: '₽',
            },
            amount: 39207.96,
        },
    ],
};

class CartItem extends Component {
    render() {
        const { brand, name, prices, attributes, gallery } = data;
        
        return (
            <>
                <div className={styles['item-wrapper']}>
                    <div className={styles['item-info']}>
                        <div className={styles['item-brand']}>{brand}</div>
                        <div className={styles['item-name']}>{name}</div>
                        <div>
                            <PriceView prices={prices} />
                        </div>
                        <div>
                            {attributes?.map((attribute) => (
                                <ProductAttributes
                                    key={attribute.id}
                                    attribute={attribute}
                                    // selectedAttribute={this.state.selectedAttribute?.get(
                                    //     attribute.id
                                    // )}
                                    // setSelectedAttribute={this.setSelectedAttribute}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles['item-details']}>
                        <div className={styles['item-details-quantity']}>
                            <button className={styles['quantity-btn']}>
                                <Plus />
                            </button>
                            <div className={styles['quantity-number']}>2</div>
                            <button className={styles['quantity-btn']}>
                                <Minus />
                            </button>
                        </div>
                        <div className={styles['item-details-slider-wrapper']}>
                            <img
                                src={gallery[0]}
                                alt={name}
                                className={styles['item-details-slider']}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default CartItem;
