import Example from './components/Example';
import Home from './components/Home';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/example',
        component: Example,
        name: 'example'
    },
];

export default routes;