import storage from '../../storage/initialState';

import SuccessOrder from '../../components/SuccessOrder/SuccessOrder';

export const closeModalWindow = () => {
    const prevState = storage();
    return storage({
        ...prevState,
        showModalWindow: false,
    });
};

export const showModalWindow = (children) => {
    const prevState = storage();
    return storage({
        ...prevState,
        showModalWindow: true,
        modalMessage: children,
    });
};

// showing modals/
//success order
export const showSuccessOrder = () => {
    console.log('contentToModalWindow');
    showModalWindow(<SuccessOrder />);
};
