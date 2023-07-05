'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper";

// Import Swiper styles
import 'swiper/css';
import {useEffect, useState} from "react";
import getClient from "@/utils/connection";
import SanityImage from "@/components/helper/SanityImage";

export default function Slider() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const client = getClient();
                const query = '*[_type == "post"] {\n' +
                    '  _id,\n' +
                    '  title,\n' +
                    '  thumbnail {\n' +
                    '    asset-> {\n' +
                    '      url\n' +
                    '    }\n' +
                    '  }\n' +
                    '}\n'
                const result = await client.fetch(query);
                console.log(result);
                setData(result);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData().then(r => console.log(r));
    }, []);


    if(data) {
        console.log(data);
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div  style={{ backgroundImage: `url(${item.thumbnail.asset.url})` }} className="bg-cover bg-center h-[500px]"
                    >
                        <h1>{item.title}</h1>
                    </div>
                    {/*<SanityImage image={item.thumbnail.asset} alt={item.title}/>*/}
                </SwiperSlide>
            ))}
        </Swiper>
                // <div className="swiper-container">
                //     <div className="swiper-wrapper">
                //         {data.map((item, index) => (
                //             <div className="swiper-slide" key={index}>
                //                 <Image src={item.thumbnail.asset.url} alt={item.title} width={750} height={375} />
                //                 <h1>{item.thumbnail.asset.url}</h1>
                //                 {/*<ImageWithNextSanity*/}
                //                 {/*    image={item.thumbnail.asset.url}*/}
                //                 {/*    alt={item.title}*/}
                //                 {/*    sizes={[300, 600, 900, 1200]} // Ukuran yang diinginkan untuk optimasi gambar*/}
                //                 {/*/>*/}
                //             </div>
                //         ))}
                //     </div>
                // </div>

    );
        }
};

