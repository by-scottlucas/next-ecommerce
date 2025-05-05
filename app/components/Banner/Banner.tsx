import './Banner.css';

import { BannerProps } from '@/app/models/Banner';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner(props: BannerProps) {
    return (
        <Link href={"/"}>
            <Image
                width={1280}
                height={720}
                alt={props.label!}
                src={props.image}
                className="banner-image"
                priority
            />
        </Link>
    );
}
