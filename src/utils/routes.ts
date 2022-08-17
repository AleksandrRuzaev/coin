import { routesStrings } from './strings';

export type NavigationLink = {
    route: string;
    label: string;
    links?: NavigationLink[];
    disabled?: boolean;
};

const pages = {
    home: {
        value: '/',
    },
    statistics: {
        value: '/statistics',
    },
    currency: {
        value: '/currency',
    },
    settings: {
        value: '/settings',
    },
};

const routes: NavigationLink[] = [
    {
        route: pages.home.value,
        label: routesStrings.home,
    },
    {
        route: pages.statistics.value,
        label: routesStrings.statistics,
    },
    {
        route: pages.currency.value,
        label: routesStrings.currency,
    },
    {
        route: pages.settings.value,
        label: routesStrings.settings,
    },
];

export { routes, pages };
