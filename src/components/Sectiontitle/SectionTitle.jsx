import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className='text-center w-4/12 mx-auto mb-10 mt-16'>
            <p className='text-[#D99904] mb-4 text-base'>--- {subTitle} ---</p>
            <h2 className='text-3xl font-bold text-black border-y-4 py-4'>{title}</h2>
        </div>
    );
};

export default SectionTitle;