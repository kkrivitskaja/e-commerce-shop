import SuccessAddedCart from '../../components/ModalWindows/SuccessAddedCart/SuccessAddedCart';
import OutOfStock from '../../components/ModalWindows/OutOfStock/OutOfStock';
import WarningChoseAttribute from '../../components/ModalWindows/WarningChoseAttribute/WarningChoseAttribute';
import ConfirmDelete from '../../components/ModalWindows/ConfirmDelete/ConfirmDelete';

import storage from '../../storage/initialState';
import { dataToModal } from '../modals/modalActions';
import { closeModalWindow } from '../modals/modalActions';
import { setLocalStorageCart } from '../../storage/storageActions';
import generatorUId from '../../helpers/generatorUId';

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

        //check if already added
        if (productAddedToCart) {
            setProductAmount(productAddedToCart, productAddedToCart.amount + 1);
            dataToModal(SuccessAddedCart)(productAddedToCart);
        } else {
            let currentProductToCart = productPushToCart(product, attribute);

            //check if product inStock
            if (!currentProductToCart.inStock) {
                dataToModal(OutOfStock)(currentProductToCart);
                throw new Error(
                    `You can't order ${currentProductToCart.name} because it's out of stock!`
                );
            }

            //check if all attribute specify
            for (const { id } of currentProductToCart.attributes) {
                if (!attribute.get(id)) {
                    dataToModal(WarningChoseAttribute)(currentProductToCart);
                    throw new Error(
                        `Before ordering ${currentProductToCart.name}, you must specify all their attributes!`
                    );
                }
            }

            const newState = {
                ...prevState,
                productsInCart: [...prevState.productsInCart, currentProductToCart],
            };
            storage(newState);
            setLocalStorageCart(newState.productsInCart);
            dataToModal(SuccessAddedCart)(currentProductToCart);
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
        throw new Error('There is no product in the cart');
    }
    if (newAmount === 0) {
        const deleteProduct = () => {
            tempCartProduct.splice(index, 1);
            const newState = {
                ...prevState,
                productsInCart: tempCartProduct,
            };

            storage(newState);
            setLocalStorageCart(newState.productsInCart);
            return;
        };
        dataToModal(ConfirmDelete)(tempCartProduct[index], deleteProduct);
        return;
    }

    tempCartProduct[index].amount = newAmount;
    const newState = { ...prevState, productsInCart: tempCartProduct };
    storage(newState);
    setLocalStorageCart(newState.productsInCart);
};

export const removeProduct = (cartProduct) => {
    const prevState = storage();
    const tempCartProduct = [...prevState.productsInCart];
    const index = tempCartProduct.findIndex((item) => item.id === cartProduct.id);
    const message = 'all';

    if (index !== -1) {
        let deleteProduct = () => {
            tempCartProduct.splice(index, 1);
            closeModalWindow();

            const newState = { ...prevState, productsInCart: tempCartProduct };
            storage(newState);
            setLocalStorageCart(newState.productsInCart);
        };
        dataToModal(ConfirmDelete)(tempCartProduct[index], deleteProduct, message);
    } else {
        throw new Error('There is no product in the cart');
    }
};

export const costCalculation = (productsInCart, currentCurrency) => {
    return productsInCart.reduce((total, product) => {
        return (
            total +
            product.prices.find((price) => price.currency.label === currentCurrency.label)?.amount *
                product.amount
        );
    }, 0);
};
