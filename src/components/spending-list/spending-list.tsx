import React from 'react';
import { useRecoilValue } from 'recoil';
import { spendings } from '../../pages/home/home.selector';
import { financialSourcesStrings } from '../../utils/strings';
import { CategoryList } from '../category-list/category-list';

const SpendingList: React.FC = (): JSX.Element => {
    const sources = useRecoilValue(spendings);

    return (
        <CategoryList
            title={financialSourcesStrings.title}
            categories={sources}
        />
    );
};

export { SpendingList };
