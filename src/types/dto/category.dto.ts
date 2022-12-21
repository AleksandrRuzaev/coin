import { IconType } from '../../components/icon/icon.types';
import { CategoryType } from '../../enums';

export type CategoryDto = {
    id: number;
    amount: number;
    title: string;
    iconType: IconType;
    category?: CategoryType;
};
