import useMousePosition from "../hooks/useMousePosition"

const LightSource = () => {
    const mousePosition = useMousePosition();

    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="blurMe">
                    <feBlend in="SourceGraphic" mode="color-dodge" />
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
            </defs>

            <circle
                cx={`${mousePosition.x}`}
                cy={`${mousePosition.y}`}
                r="40"
                fill="#FEEFD5"
                filter="url(#blurMe)"
            />
        </svg>
    );
};


export default LightSource