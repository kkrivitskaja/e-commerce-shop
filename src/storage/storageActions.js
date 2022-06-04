import storage from './initialState';
import generatorUId from '../helpers/generatorUId';

//currency
export const getLocalStorageCurrency = JSON.parse(localStorage.getItem('currentCurrency'));

export const setLocalStorageCurrency = (currency) => {
    localStorage.setItem('currentCurrency', JSON.stringify(currency));
};

//cart
export const getLocalStorageCart = JSON.parse(localStorage.getItem('cart'))?.map(
    (productInCart) => ({
        ...productInCart,
        selectedAttribute: new Map(Object.entries(productInCart.selectedAttribute)),
    })
);

export const setLocalStorageCart = (productsInCart) => {
    const cartProducts = productsInCart.map((cartProduct) => ({
        ...cartProduct,
        selectedAttribute: Object.fromEntries(cartProduct.selectedAttribute),
    }));
    localStorage.setItem('cart', JSON.stringify(cartProducts));
};

//product data stored in the local store
export const productPushToCart = (product, attribute) => ({
    id: generatorUId(),
    productId: product.id,
    name: product.name,
    inStock: product.inStock,
    gallery: product.gallery,
    attributes: product.attributes,
    brand: product.brand,
    prices: product.prices,
    selectedAttribute: attribute,
    amount: 1,
    productUrl: `/catalog/${product.category}/${product.id}`,
});

export const addProductToCart = (product, attribute) => {
    try {
        const prevState = storage();
        const productAddedToCart = findSameProductsAtCart(
            product,
            attribute,
            prevState.productsInCart
        );

        if (productAddedToCart) {
            setProductAmount(productAddedToCart, productAddedToCart.amount + 1);
            //dont forget add method to btn to set amount in CartItem
        } else {
            let currentProductToCart = productPushToCart(product, attribute);

            const newState = {
                ...prevState,
                productsInCart: [...prevState.productsInCart, currentProductToCart],
            };
            storage(newState);
            setLocalStorageCart(newState.productsInCart);
        }
    } catch (error) {
        console.log(error.message);
    }
};

export const findSameProductsAtCart = (product, attribute, productsInCart) => {
    const equalProducts = productsInCart.filter(
        (cartProduct) => cartProduct.productId === product.id
    );

    const equalProductsSameAttribute = equalProducts.find((cartProduct) => {
        let sameAttribute;
        for (const [key, value] of attribute) {
            const cartAttribute = cartProduct.selectedAttribute.get(key);
            if (
                !cartAttribute ||
                (cartAttribute.id === value.id && cartAttribute.item.id !== value.item.id)
            ) {
                sameAttribute = false;
            } else {
                sameAttribute = true;
            }
        }
        return sameAttribute;
    });
    return equalProductsSameAttribute;
};

export const setProductAmount = (cartProduct, newAmount) => {
    const prevState = storage();
    const tempCartProduct = [...prevState.productsInCart];
    const index = tempCartProduct.findIndex((item) => item.id === cartProduct.id);
    if (index === -1) {
        throw new Error('No item in cart');
    }
    if (newAmount === 0) {
        const deleteProduct = () => {
            tempCartProduct.splice(index, 1);
            storage({ ...prevState, productsInCart: tempCartProduct });
            setLocalStorageCart(tempCartProduct);
            return;
        };
        return;
    }
    tempCartProduct[index].amount = newAmount;
    const newState = { ...prevState, productsInCart: tempCartProduct };
    storage(newState);
    setLocalStorageCart(newState.productsInCart);
};
