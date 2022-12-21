import classNames from 'classnames';
import { useCallback } from 'react';
import { CategoryType } from '../../enums';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';
import { IconType } from '../icon/icon.types';
import './category.scss';

const Category: React.FC<{
    amount: number;
    title: string;
    iconType: IconType;
    category?: CategoryType;
}> = ({ title, iconType, amount, category }): JSX.Element => {
    const handleClick = useCallback(() => {
        // do depending on category type
    }, []);

    return (
        <div className="category">
            <p className="category__title">{title}</p>
            <Button onClick={handleClick}>
                <Icon
                    type={iconType}
                    className={classNames(
                        'category__icon',
                        `category__icon--${category}`,
                    )}
                />
            </Button>
            <p
                className={classNames(
                    'category__amount',
                    `category__amount--${category}`,
                )}
            >
                {amount}
            </p>
        </div>
    );
};

export { Category };
