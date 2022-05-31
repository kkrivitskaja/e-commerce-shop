import { useReactiveVar } from '@apollo/client';

import storage from '../storage/initialState';

const withStorage = (WrappedComponent) => {
    return (props) => {
        const storageVar = useReactiveVar(storage);
        return <WrappedComponent storageVar={storageVar} {...props} />;
    };
};

export default withStorage;
