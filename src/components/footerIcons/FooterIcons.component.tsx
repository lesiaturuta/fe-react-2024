import React from 'react';

import FooterIcon from '@/components/footerIcon/FooterIcon.component.tsx';
import type { IconLinkProps } from '@/interface/icon.ts';

import styles from './footerIcons.module.css';

const FooterIcons = ({ media, className }: IconLinkProps) => (
    <div className={className}>
        {media.map((item, index) => (
            <FooterIcon icon={item.icon} url={item.url} key={index} className={index === media.length - 1 ? '' : styles.mr_30} />
        ))}
    </div>
);
export default FooterIcons;
