import './Banner.css';

import Image from 'next/image';

interface BannerProps {
    width: number;
    height:number;
    image: string;
    label: string;
}

export default function Banner({ image, label, width, height }: BannerProps) {
    return (
        <a href="#" className="banner-content">
            <Image
                width={width}
                height={height}
                alt={label}
                src={image}
                className="banner-image"
            />
        </a>
    );
}
