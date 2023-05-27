import React from 'react';

const MenuItem = ({ item }) => {
    const { _id, name, recipe, image, category, price } = item;
    return (
        <div className='flex gap-4 items-center'>
            <img src={image} alt="" width={118} height={104} style={{ borderRadius: "0 200px 200px 200px" }} />
            <div>
                <h3 className='text-2xl uppercase'>{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;