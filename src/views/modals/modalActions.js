import storage from '../../storage/initialState';

import SuccessOrder from '../../components/ModalWindows/SuccessOrder/SuccessOrder';

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
//success order modal
export const showSuccessOrder = () => {
    showModalWindow(<SuccessOrder />);
};

//passing data to modal
export const dataToModal =
    (Component) =>
    (data) => {
        showModalWindow(<Component data={data} />);
    };
