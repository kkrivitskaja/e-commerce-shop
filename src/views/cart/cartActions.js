export const costCalculation = (productsInCart, currentCurrency) => {
    return productsInCart.reduce((total, product) => {
        return (
            (total + (product.prices.find((price) => price.currency.label === currentCurrency.label))
                ?.amount||0 * product.amount)
        );
    }, 0);
};
