import React, {  } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components';
import { getDisplayedName } from '../utils/helpers/get-displayed-name.function';

const withErrorHandler = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
): ((props: P) => JSX.Element) => {
    const ComponentWithErrorHandling = (props: P): JSX.Element => {
        const handleError = (error: Error) => {
            try {
                // setIsPopupShown(true);
            } catch {
                // unable to log, ignored
            }
        };

        return (
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={handleError}
            >
                <WrappedComponent {...props} />
            </ErrorBoundary>
        );
    };

    ComponentWithErrorHandling.displayName = `WithErrorHandling(${getDisplayedName(
        WrappedComponent,
    )})`;

    return ComponentWithErrorHandling;
};

export { withErrorHandler };
