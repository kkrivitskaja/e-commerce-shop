import { gql } from 'apollo-boost';

export const GET_CATEGORY = gql`
    {
        categories {
            name
        }
    }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query getProducts($title: String!) {
        category(input: { title: $title }) {
            products {
                name
                id
                inStock
                gallery
                brand
                prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                }
            }
        }
    }
`;

export const GET_PRODUCT_BY_ID = gql`
    query getProduct($id: String!) {
        product(id: $id) {
            name
            id
            inStock
            gallery
            description
            category
            attributes {
                name
                id
                type
                items {
                    displayValue
                    value
                    id
                }
            }
            brand
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }
        }
    }
`;
