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
