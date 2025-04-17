import './Banner.css';

import Image from 'next/image';

interface BannerProps {
    image: string;
    label: string;
}

export default function Banner({ image, label }: BannerProps) {
    return (
        <div className='banner-container'>
            <a href="#" className="banner-content">
                <Image
                    width={1280}
                    height={500}
                    alt={label}
                    src={image}
                    className="banner-image"
                />
            </a>
        </div>
    );
}
