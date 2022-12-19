import React, { PropsWithChildren, useCallback, useEffect } from 'react';
import { PopupType } from '../../enums';
import { DEFAULT_POPUP_AUTOCLOSE } from '../../utils/constants';
import { Button } from '../button/button';
import './pop-up.scss';

type PopupProps = {
    type?: PopupType;
    isOpened?: boolean;
    onClose: () => void;
    autoClose?: number;
};

const Popup: React.FC<PropsWithChildren<PopupProps>> = ({
    type = PopupType.Info,
    isOpened = false,
    onClose,
    children,
    autoClose = DEFAULT_POPUP_AUTOCLOSE,
}): JSX.Element => {
    const handleClose = useCallback(() => {
        onClose && onClose();
    }, [onClose]);

    useEffect(() => {
        let id: number;

        if (isOpened) {
            id = window.setTimeout(() => {
                handleClose();
            }, autoClose);
        }

        return () => {
            window.clearTimeout(id);
        };
    }, [handleClose, autoClose, isOpened]);

    return (
        <>
            {isOpened && (
                <div className="popup" data-type={type}>
                    <Button icon={'close'} onClick={handleClose} />
                    <div>{children}</div>
                </div>
            )}
        </>
    );
};

export { Popup };
