import { render, screen } from '@testing-library/react';
import { CategoryType } from '../../enums';
import { IconType } from '../icon/icon.types';
import { CategoryList } from './category-list';

describe('FinancialSources', () => {
    const categories = [
        {
            id: 4,
            title: 'Wallet',
            iconType: IconType.Bank,
            amount: 150,
            category: CategoryType.Source,
        },
        {
            id: 1,
            title: 'Food',
            iconType: IconType.Bank,
            amount: 150,
            category: CategoryType.Costs,
        },
    ];

    it('should render spendings', () => {
        render(<CategoryList title="title" categories={categories} />);

        expect(screen.getByText('Food')).not.toBeNull();
        expect(screen.getByText('Wallet')).not.toBeNull();
    });
});
