import "./BannersSection.css";

import { BannerProps } from '@/app/models/Banner';

import Banner from '../Banner/Banner';

interface BannersSectionProps {
    bannersData: BannerProps[];
}

export default function BannersSection({ bannersData }: BannersSectionProps) {
    return (
        <>
            {bannersData.map((banner, index) => (
                <div key={index} className='banners-section-content'>
                    <Banner
                        width={550}
                        height={365}
                        image={banner.image}
                        label={banner.label!}
                    />
                </div>
            ))}
        </>
    )
}