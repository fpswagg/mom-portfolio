import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl mt-4">Oups ! La page que vous recherchez n'existe pas.</p>
            <Link to="/" className="mt-6 px-4 py-2 text-white rounded btn-behaviour">
                Retour à l'accueil
            </Link>
        </div>
    );
};

export default NotFound;
