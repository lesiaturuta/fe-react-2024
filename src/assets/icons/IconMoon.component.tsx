const IconMoon = ({ color }: { color: string }) => (
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.5 12C12.5 16.1421 15.8579 19.5 20 19.5C20.7577 19.5 21.4892 19.3879 22.1787 19.1789C21.2453 22.2585 18.3844 24.4998 15 24.4998C10.8579 24.4998 7.5 21.1422 7.5 17.0001C7.5 13.6157 9.74173 10.7548 12.8213 9.82141C12.6124 10.5109 12.5 11.2422 12.5 12Z"
            stroke={color}
            fill={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default IconMoon;
