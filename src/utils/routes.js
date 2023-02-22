import React from 'react';
import { Home, Contact, About, Services, Styleguide,Awshome } from "../pages";
import { CONSTANTS } from "./constants";

export const routes = [{
    component: <Home />,
    path: CONSTANTS.ROUTES.HOME_PAGE,
    isExact: true
}, {
    component: <Contact />,
    path: CONSTANTS.ROUTES.CONTACT_PAGE,
    isExact: true
}, {
    component: <About />,
    path: CONSTANTS.ROUTES.ABOUT_PAGE,
    isExact: true
}, {
    component: <Services />,
    path: CONSTANTS.ROUTES.SERVICES_PAGE,
    isExact: true
}, {
    component: <Styleguide />,
    path: CONSTANTS.ROUTES.STYLEGUIDE,
    isExact: true
}, {
    component: <Awshome />,
    path: CONSTANTS.ROUTES.AWSHOME,
    isExact: true
},
];