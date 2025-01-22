import { About } from '../types';

const about: About = {
    social: {
        facebook: {
            link: "https://www.facebook.com/ernestine.eleke",
            name: "Ernestine Eleke"
        },
        linkedin: {
            link: "https://www.linkedin.com/in/ernestine-eleke-55021a342",
            name: "Ernestine Eleke"
        },
        phone: "+237 6 77 66 47 76",
        email: "ernestineeleke@gmail.com"
    },
    formations: [
        {
            details: "Licence en Droit Privé Francophone",
            year: "1991"
        },
        {
            details: "Baccalauréat de l’Enseignement Général",
            year: "1988"
        },
        {
            details: "Stage d’Avocat au Cabinet de Me N'THEPE Francis",
            year: "Mars 1993 - Sept. 1994"
        },
        {
            details: "Stage d’agent commercial à Prima Conseil",
            year: "Nov. 1992 - Déc. 1992"
        }
    ],
    experiences: [
        {
            name: "Cabinet CAZENAVE SARL",
            year: "2000 - 2020",
            tasks: [
                "Préparation administrative et suivi des dépôts OAPI",
                "Préparation administrative et suivi des dépôts hors OAPI (ARIPO, Madagascar, Nigéria, Ethiopie, Ghana, Sierra Leone, Burundi, Rwanda, Tanzanie, République Démocratique du Congo)",
                "Représentation du Cabinet aux commissions de restaurations et d'oppositions",
                "Représentation du Cabinet aux séminaires (imprégnation, formation, recyclage) organisés par l'OAPI",
                "Représentation du Cabinet à diverses cérémonies et réunions avec l'OAPI",
                "Correspondance avec les clients",
                "Recherche de brevets, marques, modèles et dessins industriels et de noms commerciaux",
                "Tous travaux administratifs et juridiques relatifs à la Propriété Industrielle",
                "Remplacement du Directeur ou de son collaborateur direct en leur absence"
            ]
        },
        {
            name: "Société VETOPHARM",
            year: "1994 - 1998",
            tasks: [
                "Travaux de saisie",
                "Réception des clients",
                "Correspondances et autres tâches administratives",
                "Responsable des divers achats pour le fonctionnement",
                "Responsable de la petite caisse et de la tenue du journal comptable",
                "Responsable des salaires",
                "Négociations avec les fournisseurs et les clients",
                "Initiatrice des procédures judiciaires"
            ]
        }
    ]
};

export default about;