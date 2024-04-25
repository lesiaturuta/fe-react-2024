import React from 'react';

import styles from './footerIcon.module.css';

interface IconLinkProps {
    media: Media[];
    className?: string;
}

interface Media {
    icon: string;
    url: string;
}

const FooterIcon = ({ media, className }: IconLinkProps) => (
    <div className={className}>
        {media.map((item, index) => (
            <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={index === media.length - 1 ? '' : styles.mr_30}
            >
                <img src={item.icon} alt="Icon" />
            </a>
        ))}
    </div>
);
export default FooterIcon;
