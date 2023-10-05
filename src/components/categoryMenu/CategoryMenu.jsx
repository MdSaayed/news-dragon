import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            {
                categories.map(ctg => <NavLink
                    to="/messages"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "block ml-8 text-[#9F9F9F] text-[1rem] font-medium my-4"
                    } key={ctg.id}>{ctg.name}</NavLink>)

            }
        </div >
    );
};

export default CategoryMenu;