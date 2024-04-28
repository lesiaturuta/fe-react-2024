import React from 'react';

import FooterIcon from '@/components/footerIcon/FooterIcon.component.tsx';

import styles from './footerIcons.module.css';

interface IconLinkProps {
    media: Media[];
    className?: string;
}

interface Media {
    icon: string;
    url: string;
}

const FooterIcons = ({ media, className }: IconLinkProps) => (
    <div className={className}>
        {media.map((item, index) => (
            <FooterIcon icon={item.icon} url={item.url} key={index} className={index === media.length - 1 ? '' : styles.mr_30} />
        ))}
    </div>
);
export default FooterIcons;
