import React from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <section className='featured pt-10 bg-fixed mt-24'>
            <SectionTitle
                title={"FROM OUR MENU"}
                subTitle={"Check it out"}
            ></SectionTitle>
            <div className='flex gap-6 items-center px-60 pb-28 text-white'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='space-y-4'>
                    <p>March 20, 2023</p>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;