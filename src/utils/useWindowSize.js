import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window
        return { innerWidth, innerHeight }
    }
    return { innerWidth: windowSize.innerWidth, innerHeight: windowSize.innerHeight }
}
export default useWindowSize;