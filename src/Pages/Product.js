import { Component } from 'react';

import ImageSlider from '../components/ImageBlock/ImageSlider';

import './Product.css';


const images = [
    'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
    'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087',
    'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087',
    'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087',
    'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087',
];

class Product extends Component {
    render() {
        return (
            <>
                <div className="image-block">
                    <ImageSlider productName={'nike'} productImages={images} />
                </div>
            </>
        );
    }
}

export default Product;
