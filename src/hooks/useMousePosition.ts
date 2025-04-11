import React from 'react';
import Position from '../interfaces /Position';

const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = React.useState<Position>({ x: null, y: null });

    React.useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

export default useMousePosition;