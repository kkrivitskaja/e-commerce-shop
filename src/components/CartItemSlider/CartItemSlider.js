import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';
import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';

import styles from './CartItemSlider.module.scss';

class CartItemSlider extends Component {
    state = {
        imgIndex: 0,
    };
    render() {
        const { gallery, name } = this.props;
        const galleryLength = gallery.length;
        return (
            <>
                <div className={styles['slider']}>
                    {galleryLength > 1 && (
                        <button
                            className={styles['slider-btn']}
                            onClick={() => {
                                this.setState((prevState) => {
                                    let newImgIndex = prevState.imgIndex - 1;
                                    if (newImgIndex < 0) {
                                        newImgIndex = galleryLength - 1;
                                    }
                                    return {
                                        imgIndex: newImgIndex,
                                    };
                                });
                            }}
                        >
                            <LeftArrow />
                        </button>
                    )}
                    <img
                        src={gallery[this.state.imgIndex]}
                        alt={name}
                        className={styles['slider-img']}
                    />
                    {galleryLength > 1 && (
                        <button
                            className={styles['slider-btn']}
                            onClick={() => {
                                this.setState((prevState) => {
                                    let newImgIndex = prevState.imgIndex + 1;
                                    if (newImgIndex > galleryLength - 1) {
                                        newImgIndex = 0;
                                    }
                                    return {
                                        imgIndex: newImgIndex,
                                    };
                                });
                            }}
                        >
                            <RightArrow />
                        </button>
                    )}
                </div>
            </>
        );
    }
}
CartItemSlider.propTypes = {
    gallery: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
};

export default CartItemSlider;
