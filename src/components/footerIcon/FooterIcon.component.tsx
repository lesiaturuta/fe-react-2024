import React from 'react';

import type { Icon } from '@/interface/icon.ts';

const FooterIcon = ({ icon, url, className }: Icon) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        <img src={icon} alt="Icon" />
    </a>
);

export default FooterIcon;
