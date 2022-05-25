import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductAttributes.module.scss';

class ProductAttributes extends Component {
    render() {
        const { attribute } = this.props;

        return (
            <div className={styles['attribute']}>
                {console.log(attribute)}
                <div className={styles['attribute-text']}>{attribute.name}</div>
                <div className={styles['attribute-btn-wrapper']}>
                    {attribute.items.map((item) => (
                        <button
                            key={item.id}
                            style={
                                attribute.type === 'swatch'
                                    ? {
                                        backgroundColor: `${item.value}`,
                                        borderColor:
                                            `${item.value}` !== '#FFFFFF'
                                                ? 'transparent'
                                                : '#000',
                                    }
                                    : {
                                        backgroundColor: '#FFFFFF',
                                        }
                            }
                            className={styles['attribute-btn']}
                        >
                            {attribute.type !== 'swatch' ? item.displayValue : null}
                        </button>
                    ))}
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
