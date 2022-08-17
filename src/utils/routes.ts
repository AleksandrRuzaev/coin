import { routesStrings } from './strings';

type NavigationLink = {
    route: string;
    label: string;
    links?: NavigationLink[];
    disabled?: boolean;
};

const routes: NavigationLink[] = [
    {
        route: '/',
        label: routesStrings.main,
    },
    {
        route: '/statistics',
        label: routesStrings.statistics,
    },
    {
        route: '/currency',
        label: routesStrings.currency,
    },
    {
        route: '/settings',
        label: routesStrings.settings,
    },
];

export { routes };
