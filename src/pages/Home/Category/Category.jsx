import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../assets/components/Sectiontitle/SectionTitle";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <section>
            <SectionTitle
                title={"ORDER ONLINE"}
                subTitle={"From 11:00am to 10:00pm"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className="uppercase text-3xl text-black text-center -mt-10">Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className="uppercase text-3xl text-white text-center -mt-10">Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" />
                    <h2 className="uppercase text-3xl text-white text-center -mt-10">Soups</h2></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                    <h2 className="uppercase text-3xl text-white text-center -mt-10">Dessarts</h2></SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className="uppercase text-3xl text-white text-center -mt-10">Salad</h2>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;