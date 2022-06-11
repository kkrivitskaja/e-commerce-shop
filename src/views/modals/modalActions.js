import storage from '../../storage/initialState';

import SuccessOrder from '../../components/ModalWindows/SuccessOrder/SuccessOrder';
import ConfirmDelete from '../../components/ModalWindows/ConfirmDelete/ConfirmDelete';

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
export const dataToModal = (Component) => (data, method, message) => {
    showModalWindow(<Component data={data} method={method} message={message} />);
};
