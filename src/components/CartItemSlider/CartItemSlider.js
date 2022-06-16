import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';
import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';

import styles from './CartItemSlider.module.scss';

class CartItemSlider extends Component {
    state = {
        imgIndex: 0,
    };
    render() {
        const { gallery, name, overlay } = this.props;
        const galleryLength = gallery.length;
        const showButton = galleryLength > 1;

        return (
            <>
                <div
                    className={classNames(styles['slider'], {
                        [styles['slider--overlay']]: overlay,
                    })}
                >
                    {showButton && (
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
                    {showButton && (
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
    overlay: PropTypes.bool,
};

export default CartItemSlider;
