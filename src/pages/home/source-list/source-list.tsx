import React from 'react';
import { useRecoilValue } from 'recoil';
import { financialSources } from '../home.selector';
import { financialSourcesStrings } from '../../../utils/strings';
import { CategoryList } from '../../../components/category-list/category-list';

const SourceList: React.FC = (): JSX.Element => {
    const sources = useRecoilValue(financialSources);

    return (
        <CategoryList
            title={financialSourcesStrings.title}
            categories={sources}
        />
    );
};

export { SourceList };
