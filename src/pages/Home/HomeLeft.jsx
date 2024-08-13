
import { useEffect, useState } from 'react';
const HomeLeft = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div className=" ">
            <h4 className=" p-3 text-md font-bold">All Categories</h4>
            <div className=' text-center'>
                {
                    categories.map((category, id) => (
                        <p className=' py-3 cursor-pointer text-gray-400 hover:bg-slate-400 hover:text-gray-800 hover:font-bold' key={id}>{category.name}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default HomeLeft;