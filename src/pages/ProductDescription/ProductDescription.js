import { Component } from 'react';
import { withApollo } from 'react-apollo';

import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { GET_PRODUCT_BY_ID } from '../../graphql/Queries';
import withRouter from '../../helpers/withRouter';

import styles from './ProductDescription.module.scss';

class ProductDescription extends Component {
    state = {
        product: null,
        loading: true,
        error: null,
    };
    getProductById = async (productId) => {
        const { loading, error, data } = await this.props.client.query({
            query: GET_PRODUCT_BY_ID,
            variables: {
                id: productId,
            },
        });
        this.setState({
            product: data?.product,
            loading,
            error,
        });
    };

    async componentDidMount() {
        const { productId } = this.props.params;
        await this.getProductById(productId);
    }

    async componentDidUpdate(prevProps) {
        const prevProduct = prevProps.params.productId;
        const currentProduct = this.props.params.productId;
        if (prevProduct === currentProduct) {
            return;
        }
        await this.getProductById(currentProduct);
    }

    render() {
        const { product, loading } = this.state;

        return (
            <>
                {loading && <div>LOADING DATA</div>}
                {product && loading === false && (
                    <div className={styles['description']}>
                        <ImageSlider
                            productImages={product.gallery}
                            className={styles['description-slider']}
                        />
                        <ProductDetails
                            product={product}
                            className={styles['description-details']}
                        />
                    </div>
                )}
            </>
        );
    }
}

export default withApollo(withRouter(ProductDescription));
