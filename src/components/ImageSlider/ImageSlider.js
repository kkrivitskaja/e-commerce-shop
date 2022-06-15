import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './ImageSlider.module.scss';

class ImageSlider extends Component {
    state = {
        img: 0,
    };

    render() {
        const { productImages, productName } = this.props;

        return (
            <div className={styles['slider']}>
                <div className={styles['slider-gallery']}>
                    {productImages?.map((image, i) => (
                        <div
                            className={classnames(
                                styles['slider-gallery__img-wrap'],
                                this.state.img === i && styles['slider-gallery__img-wrap--active']
                            )}
                            key={image}
                            onMouseOver={() => this.setState({ img: i })}
                            ref={this.addRefs}
                        >
                            <img
                                className={styles['slider-gallery__img']}
                                src={image}
                                alt={productName}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles['slider-dynamic']}>
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                isFluidWidth: true,
                                src:
                                    this.props.productImages[this.state.img] ||
                                    this.props.productImages[0],
                                width: 300,
                                height: 300,
                            },
                            largeImage: {
                                src:
                                    this.props.productImages[this.state.img] ||
                                    this.props.productImages[0],
                                width: 1000,
                                height: 1000,
                            },

                            enlargedImageContainerDimensions: {
                                width: '100%',
                                height: '100%',
                            },
                            enlargedImagePosition: 'over',
                            isHintEnabled: true,
                            hintTextMouse: 'Hover to Zoom',
                            shouldHideHintAfterFirstActivation: false,
                        }}
                    />
                </div>
            </div>
        );
    }
}

ImageSlider.propTypes = {
    productImages: PropTypes.arrayOf(PropTypes.string),
    productName: PropTypes.string,
};
export default ImageSlider;
