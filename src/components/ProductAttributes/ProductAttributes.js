import React, { Component } from 'react';

import './ProductAttributes.css';

class ProductAttributes extends Component {
    render() {
        const { attributes } = this.props;

        return (
            <div className="attributes">
                {attributes.map((attribute) => {
                    if (attribute.type === 'text') {
                        return (
                            <div key={attribute.id} className="attribute">
                                <div className="text">{attribute.name}</div>
                                <div className="container">
                                    {attribute.items.map((item) => (
                                        <button className="color-btn" key={item.id}>
                                            {item.displayValue}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                    if (attribute.type === 'swatch') {
                        return (
                            <div key={attribute.id} className="attribute">
                                <div className="text">{attribute.name}</div>
                                <div className="container">
                                    {attribute.items.map((item) => (
                                        <button
                                            className="color-btn"
                                            key={item.id}
                                            style={{ backgroundColor: `${item.value}` }}
                                            title={item.displayValue}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}

export default ProductAttributes;
