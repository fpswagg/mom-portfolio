import React from 'react';

import about from '../data/about.ts';

function FormationComponent() {
    return (
        <div className="flex flex-col gap-4 mt-6 items-center">
            { about.formations.map((formation, index) => (
                <div className='special-div px-4 py-2 flex justify-between' key={index}>
                    <p className='text-left'>{formation.details}</p>
                    <p className='text-right'>{formation.year}</p>
                </div>
                )) }
        </div>
    );
};

export default FormationComponent;