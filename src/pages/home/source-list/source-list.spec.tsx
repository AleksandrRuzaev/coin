import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { CategoryType } from '../../../enums';
import { categories } from '../home.store';
import { IconType } from '../../../components/icon/icon.types';
import { SourceList } from './source-list';

describe('SourceList', () => {
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

    it('should render sources', () => {
        render(
            <RecoilRoot
                initializeState={({ set }) => {
                    set(categories, mockCategories);
                }}
            >
                <SourceList />
            </RecoilRoot>,
        );

        expect(screen.getByText('Wallet')).not.toBeNull();
    });
});
