import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationLink } from '../../../utils/routes';

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
        <nav className={className}>
            {links.map(({ route, label }, index) => (
                <Link
                    to={route}
                    className="navigation__link"
                    key={`${label}_${index}`}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export { Navigation };
