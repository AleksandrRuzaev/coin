import React from 'react';
import { Link } from 'react-router-dom';

type NavigationProps = {
    links: any[];
    type?: unknown;
    className?: string;
};

const Navigation: React.FC<NavigationProps> = ({
    links,
    className,
}): JSX.Element => {
    return (
        <nav className={className}>
            {links.map((link) => (
                <Link to={link.route}>{link.label}</Link>
            ))}
        </nav>
    );
};

export { Navigation };
