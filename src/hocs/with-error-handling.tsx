import React, { useCallback, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback, Popup } from '../components';
import { PopupType } from '../enums';
import { getDisplayedName } from '../utils/helpers/get-displayed-name.function';

const withErrorHandler = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
): ((props: P) => JSX.Element) => {
    const ComponentWithErrorHandling = (props: P): JSX.Element => {
        const [open, setOpen] = useState(false);

        const handleError = (error: Error) => {
            try {
                // setIsPopupShown(true);
            } catch {
                // unable to log, ignored
            }
        };

        const handleClose = useCallback(() => {
            setOpen(false);
        }, []);

        return (
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={handleError}
            >
                <Popup
                    isOpened={open}
                    type={PopupType.Success}
                    onClose={handleClose}
                >
                    "Errror"
                </Popup>
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
