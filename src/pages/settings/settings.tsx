import React from 'react';
import { useRecoilValue } from 'recoil';
import { currencyOptions } from './settings.store';

const Settings: React.FC = (): JSX.Element => {
    const options = useRecoilValue(currencyOptions);
    console.log(options);

    return (
        <>Settings</>
    );
};

export { Settings };
