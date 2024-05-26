const ChevronLeft = ({ color = '#fff' }: { color?: string }) => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.25016 7.91659L3.3335 4.99992L6.25016 2.08325"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ChevronLeft;
