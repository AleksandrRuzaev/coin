import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { CategoryType } from '../../enums';
import { categories } from '../../pages/home/home.store';
import { IconType } from '../icon/icon.types';
import { SpendingList } from './spending-list';

describe('FinancialSources', () => {
    const mockCategories = [
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
        render(
            <RecoilRoot
                initializeState={({ set }) => {
                    set(categories, mockCategories);
                }}
            >
                <SpendingList />
            </RecoilRoot>,
        );

        expect(screen.getByText('Food')).not.toBeNull();
    });
});
