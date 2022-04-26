import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';

// import './ImageBlock.module.css';

const images = [
    'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
    'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087',
    'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087',
    'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087',
    'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087',
];

/**ImageSlider is an image slider with zoom effect on PDP
 * props:
 * productImages
 * productName
 */
class ImageBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: images[0],
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
        this.imageRef.current[i].classList.add('slider-gallery__img-wrap-active');
        for (let j = 0; j < images.length; j++) {
            if (i !== j) {
                this.imageRef.current[j].classList.remove('slider-gallery__img-wrap-active');
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
            <div className="slider">
                <div className="slider-gallery">
                    {images.map((image, i) => (
                        <div
                            className={
                                i === 0
                                    ? 'slider-gallery__img-wrap-active'
                                    : 'slider-gallery__img-wrap'
                            }
                            key={i}
                            onMouseOver={() => this.hoverHandler(image, i)}
                            ref={this.addRefs}
                        >
                            {/* add product name to props for img alt attribute*/}
                            <img className="slider-gallery__img" src={image} alt="" />
                        </div>
                    ))}
                </div>
                <div className="slider-dynamic">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                isFluidWidth: true,
                                src: this.state.img,
                            },
                            largeImage: {
                                src: this.state.img,
                                width: 1200,
                                height: 1800,
                            },
                            enlargedImageContainerDimensions: {
                                width: '150%',
                                height: '150%',
                            },
                        }}
                    />
                </div>
            </div>
        );
    }
}
export default ImageBlock;
