import React from 'react';

import about from '../data/about.ts';

function ExperienceComponent() {
    return (
        <div className="flex flex-col items-center gap-4 mt-6">
            { about.experiences.map((formation, index) => (
                <div className='special-div' key={index}>
                    <div className='px-4 py-2 flex justify-between'>
                        <p className='text-left'>{formation.name}</p>
                        <p className='text-right'>{formation.year}</p>
                    </div>
                    <details className='m-4 text-sm'>
                        <summary className=''>Les tâches effectuées</summary>
                        <ol className='list-decimal pl-8'>
                            { formation.tasks.map((task, index) => (<li key={index}>{task}</li>)) }
                        </ol>
                    </details>
                </div>
                )) }
        </div>
    );
};

export default ExperienceComponent;