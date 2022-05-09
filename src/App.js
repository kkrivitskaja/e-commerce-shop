import { Component } from 'react';

import ProductInfo from './components/ProductInfo/ProductInfo';

const brand = 'Apollo';
const name = 'Running Short';
const price = 50.0;
const description =
    "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.";

class App extends Component {
    render() {
        return (
            <>
                <h1>Store APP</h1>
                <ProductInfo brand={brand} name={name} price={price} description={description} />
            </>
        );
    }
}

export default App;
