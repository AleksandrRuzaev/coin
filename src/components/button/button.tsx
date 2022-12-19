type ButtonType = 'button' | 'submit';
type ButtonProps = {
    onClick?: () => void;
    label?: string;
    buttonType?: ButtonType;
    icon?: unknown;
};

const Button: React.FC<ButtonProps> = ({
    onClick,
    label,
    buttonType = 'button',
    icon,
}): JSX.Element => {
    const handleClick = (): void => {
        onClick && onClick();
    };

    return (
        <button onClick={handleClick} type={buttonType}>
            <>
                {label && <label>{label}</label>}
                {icon && <div>{icon as any}</div>}
            </>
        </button>
    );
};

export { Button };
