interface Icon {
    icon: string;
    key: number;
    url: string;
    className?: string;
}

interface IconLinkProps {
    media: Media[];
    className?: string;
}

interface Media {
    icon: string;
    url: string;
}

export type { Icon, IconLinkProps };
