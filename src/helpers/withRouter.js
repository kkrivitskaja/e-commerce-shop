import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    return <WrappedComponent {...props} params={params} location={location} navigate={navigate} />;
};

export default withRouter;
