import React, { useRef, useState } from "react";
import TitleBar from '../TitleBar/TitleBar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import { Autoplay, Pagination, Navigation } from "swiper";
import './MyTestimonial.css'

const MyTestimonial = () => {
    const data = [
        {
            id: 1,
            name: "Doe John",
            title: "Designer",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: "https://i.ibb.co/87yHLmb/3.jpg"
        },
        {
            id: 2,
            name: "John Doe",
            title: "Owner",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: "https://i.ibb.co/y5ppgbX/4.jpg"
        },
        {
            id: 3,
            name: "Doe Boe",
            title: "Director",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: "https://i.ibb.co/nrxy049/6.jpg"
        },
        {
            id: 4,
            name: "Doe Boe",
            title: "Developer",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image: "https://i.ibb.co/fDz2c3Q/21.jpg"
        }
    ];



    return (
        <div>
            <div className='text-center my-10' >
                <p className='text-lg'>What Our Clients Say</p>
                <h1 className="text-4xl font-bold text-gray-200 my-3">My <span className='text-primary'>Testimonial</span>
                </h1>
                <TitleBar />
            </div>

            <section>
                <div className="testimonials-carousel-wrap w-11/12 mx-auto bg-neutral">


                    <div className="testimonials-carousel max-w-sm lg:max-w-full mx-auto">

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                }
                              }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {
                                data.map((testimonial) => (
                                    <SwiperSlide className="swiper-slide" key={testimonial.id}>
                                        {" "}
                                        <div className="testi-item">
                                            <div className="testi-avatar">
                                                <img src={testimonial.image} />
                                            </div>
                                            <div className="testimonials-text-before">
                                                <FaQuoteLeft className='w-8 h-8 hover:text-accent' />
                                            </div>
                                            <div className="testimonials-text">
                                                <div className="flex flex-row justify-center">
                                                    <FaStar className='text-primary' />
                                                    <FaStar className='text-primary' />
                                                    <FaStar className='text-primary' />
                                                    <FaStar className='text-primary' />
                                                    <FaStar className='text-primary' />
                                                </div>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a
                                                    type specimen book.
                                                </p>
                                                <div className="testimonials-avatar">
                                                    <h3>John Doe</h3>
                                                    <h4>Owner</h4>
                                                </div>
                                            </div>
                                            <div className="testimonials-text-after">
                                                <FaQuoteRight className='w-8 h-8 hover:text-accent' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </div>

                    {/* <div className="tc-pagination"></div> */}
                </div>
            </section>
        </div>
    );
};

export default MyTestimonial;