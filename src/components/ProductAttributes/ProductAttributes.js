import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './ProductAttributes.module.scss';

class ProductAttributes extends Component {
    addedAttribute = (attribute) => {
        const chosenAttribute = {
            id: this.props.attribute.id,
            item: attribute,
            name: this.props.attribute.name,
            type: this.props.attribute.type,
        };
        this.props.setSelectedAttribute(chosenAttribute);
    };
    render() {
        const { attribute, overlay, cart } = this.props;

        return (
            <div className={styles['attribute']}>
                <div className={styles['attribute-text']}>{attribute.name}</div>
                <div className={styles['attribute-btn-wrapper']}>
                    {attribute.items.map((item) =>
                        cart ? (
                            <button
                                key={item.id}
                                style={
                                    attribute.type === 'swatch'
                                        ? {
                                              backgroundColor: `${item.value}`,
                                              width: '45px',
                                          }
                                        : null
                                }
                                className={classnames(styles['attribute-btn'], {
                                    [styles['attribute-btn--chosen']]:
                                        this.props.selectedAttribute?.item.id === item.id &&
                                        attribute.type !== 'swatch',
                                    [styles['attribute-btn--chosen-swatch']]:
                                        this.props.selectedAttribute?.item.id === item.id &&
                                        attribute.type === 'swatch',
                                    [styles['attribute-btn--overlay']]: overlay,
                                    [styles['attribute-btn--cart']]: cart,
                                })}
                            >
                                {attribute.type !== 'swatch' ? item.value : null}
                            </button>
                        ) : (
                            <button
                                key={item.id}
                                style={
                                    attribute.type === 'swatch'
                                        ? {
                                              backgroundColor: `${item.value}`,
                                              width: '45px',
                                          }
                                        : null
                                }
                                onClick={() => {
                                    this.addedAttribute(item);
                                }}
                                className={classnames(styles['attribute-btn'], {
                                    [styles['attribute-btn--chosen']]:
                                        this.props.selectedAttribute?.item.id === item.id &&
                                        attribute.type !== 'swatch',
                                    [styles['attribute-btn--chosen-swatch']]:
                                        this.props.selectedAttribute?.item.id === item.id &&
                                        attribute.type === 'swatch',
                                    [styles['attribute-btn--overlay']]: overlay,
                                })}
                            >
                                {attribute.type !== 'swatch' ? item.value : null}
                            </button>
                        )
                    )}
                </div>
            </div>
        );
    }
}

ProductAttributes.propTypes = {
    attribute: PropTypes.shape({
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
    }),
};

export default ProductAttributes;
