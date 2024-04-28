import React from 'react';

interface Icon {
    icon: string;
    key: number;
    url: string;
    className?: string;
}

const FooterIcon = ({ icon, url, key, className }: Icon) => (
    <a key={key} href={url} target="_blank" rel="noopener noreferrer" className={className}>
        <img src={icon} alt="Icon" />
    </a>
);

export default FooterIcon;
