import storage from '../../storage/initialState';

import SuccessOrder from '../../components/ModalWindows/SuccessOrder/SuccessOrder';

export const closeModalWindow = () => {
    const prevState = storage();
    return storage({
        ...prevState,
        isModalWindow: false,
    });
};

export const showModalWindow = (children) => {
    const prevState = storage();
    return storage({
        ...prevState,
        isModalWindow: true,
        modalMessage: children,
    });
};

// showing dropdown cart, currency
export const showCartOverlay = () => {
    const prevState = storage();
    return storage({
        ...prevState,
        isCartOverlay: true,
    });
};

export const showCurrencyDropdown = () => {
    const prevState = storage();
    return storage({
        ...prevState,
        isCurrencyDropdown: true,
    });
};

export const closeDropdownList = () => {
    const prevState = storage();
    return storage({
        ...prevState,
        isCurrencyDropdown: false,
        isCartOverlay: false,
    });
};

// showing modals/
//success order modal
export const showSuccessOrder = () => {
    showModalWindow(<SuccessOrder />);
};

//passing data to modal
export const dataToModal = (Component) => (data, method, message, url) => {
    showModalWindow(<Component data={data} method={method} message={message} url={url} />);
};
