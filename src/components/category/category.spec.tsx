import { render, screen } from '@testing-library/react';
import { CategoryType } from '../../enums';
import { IconType } from '../icon/icon.types';
import { Category } from './category';

jest.mock('../icon/icon', () => ({
    __esModule: true,
    Icon: ({ type }: { type: IconType }) => <span>{type}</span>,
}));

describe('Category', () => {
    const props = {
        amount: 200,
        title: 'Food',
        iconType: IconType.Wallet,
        category: CategoryType.Costs,
    };

    it('render cost category', () => {
        render(<Category {...props} />);

        expect(screen.getByText(/Food/)).not.toBeNull();
        expect(screen.getByText(/wallet/)).not.toBeNull();
    });

    it('render source category', () => {
        const sourceProps = { ...props, category: CategoryType.Source };

        render(<Category {...sourceProps} />);

        expect(screen.getByText(/Food/)).not.toBeNull();
        expect(screen.getByText(/wallet/)).not.toBeNull();
    });
});
