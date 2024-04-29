import React from 'react';

import type { Icon } from '@/interface/icon.ts';

const FooterIcon = ({ icon, url, key, className }: Icon) => (
    <a key={key} href={url} target="_blank" rel="noopener noreferrer" className={className}>
        <img src={icon} alt="Icon" />
    </a>
);

export default FooterIcon;
