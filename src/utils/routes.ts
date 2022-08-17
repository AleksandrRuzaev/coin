import { routesStrings } from './strings';

export type NavigationLink = {
    route: string;
    label: string;
    links?: NavigationLink[];
    disabled?: boolean;
};

const routes: NavigationLink[] = [
    {
        route: '/',
        label: routesStrings.home,
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
