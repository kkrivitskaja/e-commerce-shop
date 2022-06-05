import storage from '../../storage/initialState';

export const closeModalWindow = () => {
    const prevState = storage();
    return storage({
        ...prevState,
        showModalWindow: false,
    });
};
