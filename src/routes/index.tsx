import { Navigate, RouteObject } from 'react-router-dom';
import Component1 from '../components/Component1';
import NotFound from '../components/NotFound';
import AvroSchemaReader from '../components/AvroSchemaReader';
import data from '../data';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <AvroSchemaReader data={data} />,
    },
    {
        path: '/route1/:route',
        element: <Component1 prop1='hello2' />,
    },
    { path: 'not-found', element: <NotFound /> },
    { path: '*', element: <Navigate to='/not-found' /> },
];
