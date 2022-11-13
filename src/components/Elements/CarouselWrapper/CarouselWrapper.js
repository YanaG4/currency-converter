import React, { useEffect, useState, Children } from 'react'
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function CarouselWrapper({ children }) {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window
        return { innerWidth, innerHeight }
    }

    let renderWithOrWithoutCarousel = ''
    renderWithOrWithoutCarousel = windowSize.innerWidth < 800 ?
        (
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoHeight={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {Children.map(children, (child, index) =>
                    <SwiperSlide>{child}</SwiperSlide>
                )
                }
            </Swiper>
        )
        :
        (<div style={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
            {Children.map(children, (child, index) =>
                <>{child}</>
            )
            }
        </div>
        )

    return (
        <>
            {renderWithOrWithoutCarousel}
        </>
    )
}