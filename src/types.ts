export type Social = {
    facebook: {
        link: string;
        name: string;
    };
    linkedin: {
        link: string;
        name: string;
    };
    phone: string;
    email: string;
};

export type Formation = {
    details: string;
    year: string;
};

export type Experience = {
    name: string;
    year: string;
    tasks: string[];
};

export type About = {
    social: Social;
    formations: Formation[];
    experiences: Experience[];
};
