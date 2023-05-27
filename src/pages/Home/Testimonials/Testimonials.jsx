import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviewes, setReviewes] = useState([]);

    useEffect(() => {
        fetch("reviewes.json")
            .then(res => res.json())
            .then(data => setReviewes(data));
    }, [])

    return (
        <div className='mb-24'>
            <section>
                <SectionTitle
                    title={"Testimonials"}
                    subTitle={"What Our Clients Say"}
                ></SectionTitle>
            </section>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div>
                    {
                        reviewes.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='text-center'>
                                <div className='flex justify-center items-center'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <p>{review.details}</p>
                                <h2 className='text-2xl font-bold text-[#CD9003] text-center'>{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonials;