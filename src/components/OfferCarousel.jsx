import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';

import tos from '../assets/tos.jpg'
import facitodo from '../assets/facitodo.jpg'
import delivery from '../assets/delivery.jpg'
import protector from '../assets/protector_solar.jpg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function OfferCarousel() {
  return (
    <>
      <Slider>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><Img src={tos} /></SwiperSlide>
          <SwiperSlide><Img src={protector} /></SwiperSlide>
          <SwiperSlide><Img src={delivery} /></SwiperSlide>
          <SwiperSlide><Img src={facitodo} /></SwiperSlide>
        </Swiper>
      </Slider>
    </>
  )
}

export const Slider = styled.div` 
  aspect-ratio: 1/1;
  min-width: 900px;
  height: 400px;
  position: relative;
  display: flex;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadow.box};

  @media(max-width: ${({ theme }) => theme.media.TABLET}){
    min-width: 95%;
  }
  `
export const Img = styled.img`
  width:100%;
  object-fit: cover;
  border-radius: 5px;
  user-select:none;
  `