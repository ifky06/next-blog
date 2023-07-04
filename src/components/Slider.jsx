'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {useEffect, useState} from "react";
import getClient from "@/utils/connection";
export default function Slider() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const client = getClient();
                const query = '*[_type == "post"]';
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
    return (

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {data.map((item, index) => (
                            <div className="swiper-slide" key={index}>
                                <img src={item.mainImage} alt={item.title} />
                            </div>
                        ))}
                    </div>
                </div>

    );
        }
};
