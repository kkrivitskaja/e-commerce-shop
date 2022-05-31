import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './ImageSlider.module.scss';

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: this.props.productImages[0],
        };
        this.imageRef = React.createRef();
        this.imageRef.current = [];
        this.hoverHandler = this.hoverHandler.bind(this);
        this.addRefs = this.addRefs.bind(this);
    }

    hoverHandler(image, i) {
        this.setState({
            img: image,
        });
        this.imageRef.current[i].classList.add(styles['slider-gallery__img-wrap--active']);
        for (let j = 0; j < this.props.productImages.length; j++) {
            if (i !== j) {
                this.imageRef.current[j].classList.remove(
                    styles['slider-gallery__img-wrap--active']
                );
            }
        }
    }

    addRefs(element) {
        if (element && !this.imageRef.current.includes(element)) {
            this.imageRef.current.push(element);
        }
    }

    render() {
        return (
            <div className={styles['slider']}>
                <div className={styles['slider-gallery']}>
                    {this.props.productImages.map((image, i) => (
                        <div
                            className={classnames(styles['slider-gallery__img-wrap'], {
                                [styles['slider-gallery__img-wrap--active']]: i === 0,
                            })}
                            key={i}
                            onMouseOver={() => this.hoverHandler(image, i)}
                            ref={this.addRefs}
                        >
                            <img
                                className={styles['slider-gallery__img']}
                                src={image}
                                alt={this.props.productName}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles['slider-dynamic']}>
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                isFluidWidth: true,
                                src: this.state.img,
                            },
                            largeImage: {
                                src: this.state.img,
                                width: 1800,
                                height: 1800,
                            },
                            enlargedImageContainerDimensions: {
                                width: '100%',
                                height: '100%',
                            },
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
