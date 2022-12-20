import React from 'react';
import Bank from '../../assets/icons/bank.svg';
import Wallet from '../../assets/icons/wallet.svg';
import classNames from 'classnames';
import './icon.scss';
import { IconType } from './icon.types';

export class Icon extends React.Component<{
    type?: IconType;
    className?: string;
}> {
    getIcon = (): JSX.Element | null => {
        switch (this.props.type) {
            case IconType.Bank:
                return <Bank />;
            case IconType.Wallet:
                return <Wallet />;
            default:
                return null;
        }
    };

    render() {
        return (
            <div className={classNames('icon', this.props.className)}>
                {this.getIcon()}
            </div>
        );
    }
}
