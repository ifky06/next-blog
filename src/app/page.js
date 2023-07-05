'use client';
import Image from 'next/image'
import Slider from "@/components/Slider";
import Test from "@/components/test";

export default function Home() {
    return (
        <div className={'container mx-auto px-[100px] py-4'}>
            <div className={`flex`}>
                {/*<Test/>*/}
                <Slider/>
                <div className={`flex flex-col items-center justify-center w-1/2`}>
                    pp
                </div>
            </div>
        </div>
    )
}
