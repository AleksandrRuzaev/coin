import React from 'react';
import { useRecoilValue } from 'recoil';
import { spendings } from '../home.selector';
import { spendingsStrings } from '../../../utils/strings';
import { CategoryList } from '../../../components/category-list/category-list';

const SpendingList: React.FC = (): JSX.Element => {
    const sources = useRecoilValue(spendings);

    return <CategoryList title={spendingsStrings.title} categories={sources} />;
};

export { SpendingList };
