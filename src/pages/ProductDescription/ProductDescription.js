import { Component } from 'react';
import { withApollo } from 'react-apollo';

import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { GET_PRODUCT_BY_ID } from '../../graphql/Queries';
import withRouter from '../../helpers/withRouter';

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

    render() {
        const { productId } = this.props.params;
        const { product, loading } = this.state;
        console.log(product);
        return (
            <>
                {loading && <div>LOADING DATA</div>}
                {product && loading === false && (
                    <div className="container">
                        <ImageSlider productImages={product.gallery} />
                        <ProductDetails product={product} />
                    </div>
                )}
            </>
        );
    }
}

export default withApollo(withRouter(ProductDescription));
