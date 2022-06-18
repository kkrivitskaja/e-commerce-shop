import { ApolloClient, ApolloConsumer } from '@apollo/client';

const withApolloClient = (WrappedComponent) => {
    return (props) => (
        <ApolloConsumer>
            {(ApolloClient) => {
                return <WrappedComponent client={ApolloClient} {...props} />;
            }}
        </ApolloConsumer>
    );
};

export default withApolloClient;
