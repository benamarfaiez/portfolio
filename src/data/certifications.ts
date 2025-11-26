export interface Certification {
    id: number;
    title: string;
    issuer: string;
    date: string;
    credentialUrl: string;
    column: 'left' | 'right';
}

export const certifications: Certification[] = [
    {
        id: 1,
        title: "React JS",
        issuer: "Cursa",
        date: "Novembre 2025",
        credentialUrl: "https://cursa.app/fr/mon-certificat/cert4a927c59cfdf8be3109a23855c9e1896",
        column: 'left',
    },
    {
        id: 2,
        title: "Angular 12 .Net core web API & Microsoft SQL",
        issuer: "Udemy",
        date: "Juillet 2021",
        credentialUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-a681e4dd-6815-479e-beb3-ba97ba7e9cab.jpg",
        column: 'right',
    },
    {
        id: 3,
        title: "Business Analysis & Process Management",
        issuer: "Coursera",
        date: "Mai 2024",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/9HDYARW3FGMV",
        column: 'left',
    },
    {
        id: 4,
        title: "Web Security",
        issuer: "IBM",
        date: "April 2022",
        credentialUrl: "https://www.credly.com/badges/d19ee835-15fa-4ff4-8f8e-8a6bcaeaa8fc",
        column: 'right',
    },
    {
        id: 5,
        title: "API",
        issuer: "IBM",
        date: "April 2022",
        credentialUrl: "https://www.credly.com/badges/ade52373-6610-4525-9160-66e4c5334647",
        column: 'left',
    },
    {
        id: 6,
        title: "Git",
        issuer: "IBM",
        date: "April 2022",
        credentialUrl: "https://www.credly.com/badges/181fcbcb-d270-4bbb-bd08-907cf7c06f67",
        column: 'right',
    },
    {
        id: 7,
        title: "Cloud Intro",
        issuer: "IBM",
        date: "April 2022",
        credentialUrl: "https://www.credly.com/badges/badfb93e-6402-4ca0-9e33-b7e0e39046f2",
        column: 'right',
    },
    {
        id: 8,
        title: "Pentesting and security web application",
        issuer: "Udemy",
        date: "Aout 2021",
        credentialUrl: "https://www.udemy.com/certificate/UC-28a41f64-5dd2-41e2-8e0d-1aaf0db4b36c/",
        column: 'left',
    },
    {
        id: 9,
        title: "ASP .Net MVC & entity Framework",
        issuer: "Udemy",
        date: "Aout 2021",
        credentialUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-c709bdb1-0503-4c45-b69b-3164a3b35051.jpg",
        column: 'right',
    },
    {
        id: 10,
        title: "Responsive Web Design",
        issuer: "Coursera",
        date: "Novembre 2020",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/XKFZA7UUFCYH",
        column: 'left',
    },
    {
        id: 11,
        title: "Bootstrap 4",
        issuer: "Coursera",
        date: "Septembre 2020",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/R4GMJYYE3VMG",
        column: 'right',
    },
    {
        id: 12,
        title: "Agile Software Development",
        issuer: "Coursera",
        date: "Aout 2020",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/TNDQYUPSV5VT",
        column: 'left',
    },
    {
        id: 13,
        title: "JS Frameworks: Angular",
        issuer: "Coursera",
        date: "Aout 2020",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VA24E6BUJ6ZG",
        column: 'right',
    },
    {
        id: 14,
        title: "JavaScript",
        issuer: "Udemy",
        date: "Mai 2022",
        credentialUrl: "https://www.udemy.com/certificate/UC-9f703df2-1b65-402d-993f-bb8f262987c8/",
        column: 'left',
    }
];
