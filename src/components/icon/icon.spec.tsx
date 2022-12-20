import { render, screen } from '@testing-library/react';
import { Icon } from './icon';
import { IconType } from './icon.types';

jest.mock('../../assets/icons/wallet.svg', () => ({
    __esModule: true,
    default: () => <span>Wallet</span>,
}));
jest.mock('../../assets/icons/bank.svg', () => ({
    __esModule: true,
    default: () => <span>Bank</span>,
}));

describe('Icon', () => {
    it('render null', () => {
        render(<Icon />);
    });

    it('render bank', () => {
        render(<Icon type={IconType.Bank} />);

        expect(screen.getByText(/Bank/)).not.toBeNull();
    });

    it('render wallet', () => {
        render(<Icon type={IconType.Wallet} />);

        expect(screen.getByText(/Wallet/)).not.toBeNull();
    });
});
