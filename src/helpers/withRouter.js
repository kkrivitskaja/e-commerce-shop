import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const history = {
        goBack: () => navigate(-1),
        location,
        push: (url, state) => navigate(url, { state }),
        replace: (url, state) => navigate(url, { replace: true }, state),
    };

    return (
        <WrappedComponent
            {...props}
            params={params}
            location={location}
            navigate={navigate}
            history={history}
        />
    );
};

export default withRouter;
