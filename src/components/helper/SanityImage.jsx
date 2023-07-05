import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import getClient from "@/utils/connection";

export default function SanityImage({ image, alt }) {
    const imageProps = useNextSanityImage(getClient(), image);
    console.log(imageProps);
    return <Image {...imageProps} alt={alt} className={
        "w-full p-4"
    }/>;
}