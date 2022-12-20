import { PropsWithChildren } from 'react';

type ButtonType = 'button' | 'submit';
type ButtonProps = {
    onClick?: () => void;
    buttonType?: ButtonType;
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    onClick,
    children,
    buttonType = 'button',
}): JSX.Element => {
    const handleClick = (): void => {
        onClick && onClick();
    };

    return (
        <button onClick={handleClick} type={buttonType}>
            {children}
        </button>
    );
};

export { Button };
