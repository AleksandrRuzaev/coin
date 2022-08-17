import React from 'react';
import { routes } from '../../../utils/routes';
import { Navigation } from '../navigation/navigation';
import './header.scss';

const Header: React.FC = (): JSX.Element => (
    <header className="header">
        <Navigation links={routes} />
    </header>
);

export { Header };
