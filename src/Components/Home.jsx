import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {

    const initialCoffees = useLoaderData()

    const [coffees , setCoffes] = useState(initialCoffees)
    console.log(coffees);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard
                         coffees={coffees}
                         setCoffes={setCoffes}
                         coffee={coffee}  key={coffee._id} ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;