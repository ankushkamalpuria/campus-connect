import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Force immediate scroll to top
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant', // Critical to avoid smooth scroll conflicts
        });

        // Fallback for some browsers/situations
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
