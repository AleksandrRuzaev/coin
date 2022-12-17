import React, { Suspense } from 'react';

const withSuspence =
    <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
    ({ ...props }) => {
        return (
            <Suspense fallback={<div>Loading</div>}>
                <Component {...props} />
            </Suspense>
        );
    };

export { withSuspence };
