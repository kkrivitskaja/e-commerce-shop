import { Component } from 'react';
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
        const { attribute, overlay, cart, inStock } = this.props;

        return (
            <div className={styles['attribute']}>
                <div
                    className={classnames(styles['attribute-text'], {
                        [styles['attribute-text--overlay']]: overlay,
                    })}
                >
                    {attribute.name}:
                </div>
                <div
                    className={classnames(styles['attribute-btn-wrapper'], {
                        [styles['attribute-btn-wrapper--overlay']]: overlay,
                    })}
                >
                    {attribute?.items.map((item) =>
                        cart || overlay || !inStock ? (
                            <button
                                key={item.id}
                                style={
                                    attribute.type === 'swatch' && !overlay
                                        ? {
                                              backgroundColor: `${item.value}`,
                                              width: '32px',
                                              height: '32px',
                                          }
                                        : attribute.type === 'swatch' && overlay
                                        ? {
                                              backgroundColor: `${item.value}`,
                                              width: '24px',
                                              height: '24px',
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
                                    [styles['attribute-btn--overlay-capacity']]:
                                        overlay && attribute.name === 'Capacity',
                                    [styles['attribute-btn--cart']]: cart || !inStock,
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
                                              width: '32px',
                                              height: '32px',
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
    inStock: PropTypes.bool,
    selectedAttribute: PropTypes.shape({
        id: PropTypes.string,
        item: PropTypes.shape({
            displayValue: PropTypes.string,
            value: PropTypes.string,
            id: PropTypes.string,
        }),
        name: PropTypes.string,
        type: PropTypes.string,
    }),
    overlay: PropTypes.bool,
    cart: PropTypes.bool,
    setSelectedAttribute: PropTypes.func,
};

export default ProductAttributes;
