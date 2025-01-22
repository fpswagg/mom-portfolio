import React from 'react';
import { Link } from 'react-router-dom';

import about from '../data/about.ts';

import FormationComponent from '../components/FormationComponent.tsx';
import ExperienceComponent from '../components/ExperienceComponent.tsx';
import DisplaySocial from '../components/DisplaySocial.tsx';

function About() {
    return (
        <div className='container'>
            <Link to="/" className='absolute left-4 top-4 text-xl btn-behaviour_'>Retour</Link>
            <div className='about flex gap-4 justify-evenly flex-wrap w-full mt-12'>
                <div className='image-container'>
                    <div className='image-02'></div>
                </div>
                <div className='text-container mx-0 items-center'>
                    <h1 className='font-medium text-7xl select-none my-4 text-center'>Mon nom est, <span className='primary-text'>Eleke Ernestine</span></h1>
                    <p className='font-normal text-2xl select-none text-center'>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.</p>
                    <div className='horizontal-line my-2'></div>
                    <div className='flex flex-wrap gap-3 text-xl justify-evenly my-0'>
                        {
                            [
                                (about.social.phone && <DisplaySocial text={about.social.phone} icon='phone' />),
                                (about.social.facebook && <DisplaySocial text={about.social.facebook.name} link={about.social.facebook.link} icon='facebook' />),
                                (about.social.email && <DisplaySocial text={about.social.email} icon='email' />),
                                (about.social.linkedin && <DisplaySocial text={about.social.linkedin.name} link={about.social.linkedin.link} icon='linkedin' />),
                            ].filter(Boolean)
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-evenly w-full'>
                <div className='about-down-component'>
                    <div className='horizontal-line mt-8'></div>
                    <div className='flex py-4 px-10 w-full'>
                        <h2 className='text-5xl font-bold select-none'>Mes Formations</h2>
                    </div>
                    <FormationComponent />
                    <div className='horizontal-line mt-8'></div>
                </div>
                <div className='about-down-component'>
                    <div className='horizontal-line mt-8'></div>
                    <div className='flex py-4 px-10 w-full'>
                        <h2 className='text-5xl font-bold select-none'>Mes Expériences Professionnelles</h2>
                    </div>
                    <ExperienceComponent />
                    <div className='horizontal-line mt-8'></div>
                </div>
            </div>
            <div className='footer'></div>
        </div>
    );
};

export default About;