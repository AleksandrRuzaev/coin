import { FallbackProps } from 'react-error-boundary';
import { errorFallbackStrings } from '../../utils/strings';
import { Button } from '../button/button';

const ErrorFallback: React.FC<FallbackProps> = ({
    error,
    resetErrorBoundary,
}) => {
    return (
        <div role="alert">
            <p>{errorFallbackStrings.title}</p>
            <pre>{error.message}</pre>
            <Button
                onClick={resetErrorBoundary}
                label={errorFallbackStrings.buttonLabel}
            />
        </div>
    );
};

export { ErrorFallback };
