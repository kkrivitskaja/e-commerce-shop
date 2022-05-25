import { Component } from 'react';
import { graphql } from 'react-apollo';

import ProductCard from '../../components/ProductCard/ProductCard';
import { GET_PRODUCTS_BY_CATEGORY } from '../../graphql/Queries';

import './ProductList.css';

class ProductList extends Component {
    // async componentDidMount() {
    //     const { category } = this.props.match.params;
    //     await this.getProducts(category);
    // }

    
    render() {
        const { loading, error, category } = this.props.data;
        // const { products } = category;
        console.log(category);

        return (
            <>
                {category.name.toUpperCase()} category
                {loading && !error && <div>LOADING!!!!</div>}
                {!loading && error && <div>{error}</div>}
                {!loading && !error && (
                    <div className="grid">
                        {category.products.map((product) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                brand={product.brand}
                                inStock={product.inStock}
                                id={product.id}
                                gallery={product.gallery}
                                prices={product.prices}
                                disabled={!product.inStock}
                            />
                        ))}
                    </div>
                   
                )}
            </>
        );
    }
}

// export default ProductList;
export default graphql(GET_PRODUCTS_BY_CATEGORY, {
    options: {
        variables: {
            title: 'all',
        },
    },
})(ProductList);
