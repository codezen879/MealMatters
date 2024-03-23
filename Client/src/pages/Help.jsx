import React, { useState } from 'react';
import axios from 'axios';

const Help = () => {
    const [data, setData] = useState([]);
    const [distance, setDistance] = useState('');
    const [toggle, setToggle] = useState(false);

    const getTasks = async () => {
        setToggle(true);
        try {
            const response = await axios.post('http://localhost:8000/api/v1/food/nearBy', {
                lat1: '19.237188',
                lon1: '72.844139',
                distance,
            });
            setData(response.data.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleChange = (e) => {
        setDistance(e.target.value);
    };

    const handleLiveLocationClick = () => {
        getTasks();
    };

    const click = (applyLink) => {
        // Handle click action
    };

    return (
        <div className='flex flex-col justify-center items-center w-full '>
            <div className=' flex flex-col border-black border-2 w-[350px] mx-5 rounded-lg bg-gray-200'>
                <input
                    className='px-3  py-3 mx-5 my-5 border-black border-2 rounded-md '
                    placeholder='Enter The KMS from Live location'
                    onChange={(e) => handleChange(e)}
                />
                <button
                    type='button'
                    onClick={handleLiveLocationClick}
                    className='mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-1 rounded overflow-hidden'
                >
                    Select Live Location
                </button>
            </div>
            <br />
            {toggle && (
                <>
                    <div className='min-h-screen'>
                        <main className='container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 shadow-sm shadow-black pb-4 bg-gray-100'>
                            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 gap-2'>
                                {data?.map((dat, index) => (
                                    <div
                                        key={index}
                                        className='p-4 bg-white rounded-lg shadow-md mt-8 transform transition-transform duration-300 hover:scale-110'
                                    >
                                        <h2 className='text-xl font-semibold mb-4'>{dat.foodDetails}</h2>
                                        <p className='text-gray-700 mb-4'>Expire in : {dat.expirationDate} hours</p>
                                        <p className='text-gray-700 mb-4'>Food quantity : {dat.quantity} kg</p>
                                        <button className='text-blue-500 hover:underline' onClick={() => click(dat.applyLink)}>
                                            Request
                                        </button>
                                    </div>
                                ))}
                            </section>
                        </main>
                    </div>
                </>
            )}
        </div>
    );
};

export default Help;
