import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

function ScrollToTop(props) {
    let  location  = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
}

export default ScrollToTop;
