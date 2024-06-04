const ChevronRight = ({ color = '#fff' }: { color?: string }) => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.75 2.08325L6.66667 4.99992L3.75 7.91659"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ChevronRight;
