import './Banner.css';

import Image from 'next/image';

interface BannerProps {
    width: number;
    height: number;
    image: string;
    label: string;
}

export default function Banner({width, height, image, label}: BannerProps) {
    return (
        <a href="#" className="banner-container">
            <Image
                width={width}
                height={height}
                alt={label}
                src={image}
                className="banner-image"
                priority
            />
        </a>
    );
}
