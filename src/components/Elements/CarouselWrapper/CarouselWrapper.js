import React, { Children } from 'react'
import useWindowSize from '../../../utils/useWindowSize';
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './CarouselWrapper.css'

export default function CarouselWrapper({ children }) {
    const { innerWidth } = useWindowSize()
    let renderWithOrWithoutCarousel = ''

    renderWithOrWithoutCarousel = innerWidth < 800 ?
        (
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                observeParents={true}
                observer={true}
                autoHeight={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {Children.map(children, (child, index) =>
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                )
                }
            </Swiper>
        )
        :
        (<div style={{ display: 'flex', justifyContent: 'space-between', gap: '30px', width: '100%' }}>
            {Children.map(children, (child, index) =>
                <div style={{ height: '100%' }} key={index}>{child}</div>
            )
            }
        </div>
        )

    return (
        <div style={{ width: '100%', height: '100%', flexGrow: 2 }}>
            {renderWithOrWithoutCarousel}
        </div>
    )
}