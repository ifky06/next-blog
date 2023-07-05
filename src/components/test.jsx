import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import getClient from "@/utils/connection";
export default function Test() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = '*[_type == "post"]';
                const result = await getClient().fetch(query);
                setData(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    if (data) {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {data.map((item, index) => (
                        <div className="swiper-slide" key={index}>
                            <ImageWithNextSanity image={item.thumbnail.asset} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
}

function ImageWithNextSanity({ image, alt }) {
    const imageProps = useNextSanityImage(getClient(), image);
    console.log(imageProps);
    return <Image {...imageProps} alt={alt} />;
}
