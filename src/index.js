import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import './index.css';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
            {
                categories {
                    name
                    products {
                        name
                        id
                    }
                }
            }
        `,
    })
    .then((res) => console.log(res));

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
