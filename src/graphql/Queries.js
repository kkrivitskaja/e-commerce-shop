import { gql } from '@apollo/client';

export const GET_CATEGORY = gql`
    query {
        categories {
            name
        }
    }
`;

export const GET_CATEGORY_AND_CURRENCY = gql`
    query {
        categories {
            name
        }
        currencies {
            label
            symbol
        }
    }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query getProducts($title: String!) {
        category(input: { title: $title }) {
            name
            products {
                name
                id
                inStock
                gallery
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
