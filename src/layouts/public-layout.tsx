import React, { PropsWithChildren } from 'react';
import { Header } from './components';

const PublicLayout: React.FC<PropsWithChildren<{}>> = ({
    children,
}): JSX.Element => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export { PublicLayout };
