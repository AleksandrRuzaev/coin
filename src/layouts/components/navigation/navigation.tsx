import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationLink } from '../../../utils/routes';
import './navigation.scss';

type NavigationProps = {
    links: NavigationLink[];
    type?: unknown;
    className?: string;
};

const Navigation: React.FC<NavigationProps> = ({
    links,
    className,
}): JSX.Element => {
    return (
        <nav className={classNames(className, 'navigation')}>
            {links.map(({ route, label }, index) => (
                <NavLink
                    to={route}
                    className="navigation__link"
                    key={`${label}_${index}`}
                >
                    {label}
                </NavLink>
            ))}
        </nav>
    );
};

export { Navigation };
