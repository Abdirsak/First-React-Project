import { Swiper, SwiperSlide } from 'swiper/react';
import FirstSwipper from './FirstSwipper'
import SecondSwipper from './SecondSwipper'
import ThirdSwipper from './ThirdSwipper'
import FourthSwipper from './FourthSwipper'
import FivethSwipper from './FiveSwipper'
import SixthSwipper from './SixSwipper'
import SeventhSwipper from './SevenSwipper'
import EighthSwipper from './EightSwipper'
import NinethSwipper from './NineSwipper';
import LastSwipper from './LastSwipper';
// Import Swiper styles
import 'swiper/css';

function Swipper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><FirstSwipper /> </SwiperSlide>
      <SwiperSlide><SecondSwipper/> </SwiperSlide>
      <SwiperSlide><ThirdSwipper/> </SwiperSlide>
      <SwiperSlide><FourthSwipper /> </SwiperSlide>
      <SwiperSlide><FivethSwipper /> </SwiperSlide>
      <SwiperSlide><SixthSwipper /> </SwiperSlide>
      <SwiperSlide><SeventhSwipper /> </SwiperSlide>
      <SwiperSlide><EighthSwipper /> </SwiperSlide>
      <SwiperSlide><NinethSwipper /> </SwiperSlide>
      <SwiperSlide><LastSwipper /> </SwiperSlide>
      ...
    </Swiper>
  );
}
export default Swipper