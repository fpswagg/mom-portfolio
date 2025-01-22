import React from 'react';
import { Link } from 'react-router-dom';

import about from '../data/about.ts';

import DisplaySocial from '../components/DisplaySocial.tsx';

function Home() {
    const [modal, setModal] = React.useState(false);
    let flag = false;

    return (
        <div>
            { modal && <div onClick={()=>{setModal(flag);}} className='container-modal flex flex-col'>
                <div className='flex flex-col gap-3 text-xl justify-evenly my-0' onMouseOut={()=>flag=false} onMouseOver={()=>flag=true}>
                        {
                            [
                                (about.social.phone && <DisplaySocial text={about.social.phone} icon='phone' />),
                                (about.social.facebook && <DisplaySocial text={about.social.facebook.name} link={about.social.facebook.link} icon='facebook' />),
                                (about.social.email && <DisplaySocial text={about.social.email} icon='email' />),
                                (about.social.linkedin && <DisplaySocial text={about.social.linkedin.name} link={about.social.linkedin.link} icon='linkedin' />),
                            ].filter(Boolean)
                        }
                    </div>
            </div> }
            <div className="container-home">
                <div className="hero">
                    <h1 className='font-bold text-7xl select-none text-center'>Protégez et Valorisez Vos Idées</h1>
                    <p className='text-3xl select-none text-center'>Je vous accompagne dans la gestion de vos marques, brevets et droits d'auteur pour sécuriser vos créations.</p>
                    <div className='flex gap-4'>
                        <Link to="/a-propos" className='ml-2 px-4 py-2 text-xl text-white rounded-lg btn-behaviour secondary'>À propos</Link>
                        <button onClick={()=>setModal(true)} className='ml-2 px-4 py-2 text-xl text-white rounded-lg btn-behaviour primary'>Contactez-moi</button>
                    </div>
                </div>

                <div className="image-01 mb-8">
                </div>
            </div>
        </div>
    );
};

export default Home;